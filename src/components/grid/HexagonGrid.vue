<!-- Current implementation only works for hexagons with corner pointing straight up. -->

<template>

<div class="hexagon-grid">
    <slot/>
</div>

</template>

<script>

let { EquilateralShape } = require("@/js/EquilateralShape.js");

export default {

    /**
     * Gets the available width and then tries to place as many hexagons inside that width.
     * If there is insufficient width for all hexagons then place another row underneath.
     * TODO unspaghetti this code. Too many if statements
     */ 

    props: {
        /**
         * Where should the grid be placed within the container. Options are
         *  - left
         *  - center
         *  - right
         */
        hexGridAlign: {
            type: String,
            required: false,
            default: "center",
        },
        /**
         * The placement of the hexagon celss:
         *  - even-large    Even rows have one entry more
         *  - even-left     Even rows are offset to the left
         *  - even-right    Even rows are offset to the right
         *  - even-small    Even rows have one entry less
         * 
         * Even refers to the 2nd, 4th, 6th row and thus row index 1, 3, 5, ...
         */
        hexGridStyle: {
            type: String,
            required: false,
            default: "even-right",
        },
        /**
         * With row-balance enabled the cells are placed such that each row has approximately the
         * same number of elements. This does only works for even-left and even-right.
         */
        rowBalance: {
            type: Boolean,
            required: false,
            default: true,
        },
    },

    mounted() {        
        this.cellWidth = this.getCellWidth();
        this.mutationObserver = this.initMutationObserver();
        this.resizeObserver = this.initResizeObserver();
        this.initializeGrid();
    },

    unmounted() {
        this.mutationObserver.disconnect();
        this.resizeObserver.unobserve(this.$el);
    },

    methods: {

        initializeGrid() {

            this.nCells = this.$el.children.length;

            let shape = new EquilateralShape(6, this.cellWidth / 2, 30); //TODO variable offset

            this.hexWidth = shape.width;

            this.determineGridSize();
            
            this.nElementsForEachRow = this.calcElementForEachRow();
            
            this.marginX = this.calcMarginX();

            // TODO hexwidth / 2 only works for a 30 degree offset
            this.positionOffsetY = 2 * (this.hexWidth / 2) * Math.cos(30 * (Math.PI / 180));

            for (let i = 0; i < this.nCells; i++)
            {
                let [x, y] = this.calcPosition(i);
                this.setElementPosition(this.$el.children[i], x, y);
            }

            this.setContainerHeight();
        },

        initMutationObserver() {
            
            let observer = new MutationObserver(() => {

                let tempCellWidth = this.getCellWidth();
                if (tempCellWidth == this.cellWidth) return;
                
                this.cellWidth = tempCellWidth;
                this.initializeGrid();        
            });

            let observerConfig = { 
                attributes: true,
            };

            let targetNode = this.$el;
            observer.observe(targetNode, observerConfig);

            return observer;
        },

        getCellWidth() {
            return parseFloat(window.getComputedStyle(this.$el).getPropertyValue("--cell-width"));
        },

        initResizeObserver() {
            
            let resizeObserver = new ResizeObserver(this.initializeGrid);
            resizeObserver.observe(this.$el);

            return resizeObserver;
        },

        /**
         * Sets the number of rows and columns which will be used for this grid.
         */
        determineGridSize() {

            // Calculate how many columns can fit the given width
            let containerWidth = this.$el.getBoundingClientRect().width;
            let childrenCount = this.$el.children.length;
            
            // Calculate the number of columns solely based on the hexWidth
            let tempColumns = Math.floor(containerWidth / this.hexWidth); 

            // The even-left and even-right options could cause the content to actually 
            // overflow the container, therefore adjustments might be needed
            if(["even-left", "even-right"].includes(this.hexGridStyle)) {
                let contentWidth = this.calcContentWidth(tempColumns);
                if (contentWidth > containerWidth) {
                    tempColumns -= 1;
                }
            }

            this.ncolumns = tempColumns; 
            this.nrows = Math.ceil(childrenCount / this.ncolumns);
        },

        /**
         * Calculates the position of element i. Returns the x-coordinate and y-coordinate.
         */
        calcPosition(i) {
            let [row, column] = this.determineRowAndColumn(i);
            let rowOffset = this.calcRowOffset(row);
            let positionOffsetX = this.marginX + rowOffset;

            return [positionOffsetX + column * this.hexWidth, row * this.positionOffsetY];
        },

        determineRowAndColumn(i) {
            
            let rowIndex = 0;
            let rowLength = this.nElementsForEachRow[rowIndex];

            // Keep removing the length of the row until that is no longer possible
            // i is then at its column value
            while ( i > rowLength - 1) {
                
                i -= rowLength;
                
                rowIndex += 1;
                rowLength = this.nElementsForEachRow[rowIndex];
            }

            let columnIndex = i;
            return [rowIndex, columnIndex];
            
        },

        /**
         * Computes the number of elements for each row. This can be different than the number of columns
         * in case 'row-balance' is used, or when 'even-large' or 'even-small' is used.
         */
        calcElementForEachRow() {

            let nElementsForEachRow = Array(this.nrows).fill(null);
            let nCellsLeft = this.nCells;

            for(let i=0; i<this.nrows; i++){

                let columnWidth = null;
                if(["even-left", "even-right"].includes(this.hexGridStyle)) {
                    columnWidth = this.ncolumns;
                }

                else if (["even-small", "even-large"].includes(this.hexGridStyle)) {
                
                    let isEven = this.isRowEven(i);
                
                    if(this.hexGridStyle === "even-small") {
                        columnWidth = isEven ? this.ncolumns - 1 : this.ncolumns;
                    }
                    else if (this.hexGridStyle === "even-large") {
                        columnWidth = isEven ? this.ncolumns : this.ncolumns - 1;
                    }
                }

                columnWidth = Math.min(columnWidth, nCellsLeft);

                nElementsForEachRow[i] = columnWidth;
                nCellsLeft -= columnWidth;
            }

            // Not all columns might be used after this method, e.g. due to row-balance.
            // Therefore the number of columns is reset.
            this.ncolumns = Math.max(...nElementsForEachRow);

            return nElementsForEachRow;
        },

        calcRowOffset(row) {

            let isEven = this.isRowEven(row);

            if(["even-small", "even-right"].includes(this.hexGridStyle)) {
                return isEven ? this.hexWidth / 2 : 0;
            }
            else if (["even-large", "even-left"].includes(this.hexGridStyle)) {
                return isEven ? 0 : this.hexWidth / 2;
            }
        },

        isRowEven(rowIndex) {
            return (rowIndex + 1) % 2 == 0;
        },

        /**
         * Calculates the width needed to display the child elements.
         */
        calcContentWidth(ncolumns) {

            if (["even-small", "even-large"].includes(this.hexGridStyle)) {
                return ncolumns * this.hexWidth;
            }
            else if (this.hexGridStyle === "even-right") {
                
                let mostRightValue;

                // The outer most right position would be the last element of the 2nd, 4th, ... row
                // Check if that element exists
                let lastElementSecondRowIndex = ncolumns * 2 - 1;
                if (this.$el.children.length >= lastElementSecondRowIndex){
                    mostRightValue = this.hexWidth * ncolumns + this.hexWidth / 2;
                }
                else {
                    let mostRightFirstRowIndex = Math.min(this.$el.children.length - 1, ncolumns - 1);
                    mostRightValue = this.hexWidth * (mostRightFirstRowIndex + 1);
                }

                return mostRightValue;
            }
            else if (this.hexGridStyle === "even-left") {

                let mostRightChildColumn = Math.min(ncolumns - 1, this.$el.children.length - 1);

                // Plus one since you have to take into account the width of the hex at the last column
                return (mostRightChildColumn + 1) * this.hexWidth + this.hexWidth / 2;
            }

        },

        /**
         * Calculates the x margin of the grid depending on the align option.
         */
        calcMarginX() {
            let containerWidth = this.$el.getBoundingClientRect().width;

            let contentWidth = this.calcContentWidth(this.ncolumns);

            let diff = containerWidth - contentWidth;

            if (this.hexGridAlign === "left") {
                return 0;
            }
            else if (this.hexGridAlign === "center") {
                return diff / 2;
            }
            else if (this.hexGridAlign === "right") {
                return diff;
            }
            else {
                console.error("Invalid value for hexGridAlign.");
            }
        },

        setContainerHeight() {

            let top = this.$el.getBoundingClientRect().top;

            let lastChild = this.$el.children[this.$el.children.length - 1];
            let bottomLast = lastChild.getBoundingClientRect().bottom;

            this.$el.style.height = (bottomLast - top) + "px";
        },

        setElementPosition(el, x, y) {
            el.style.left = x + "px";
            el.style.top = y + "px";
        },
    }
};

</script>

<style lang="scss">

.hexagon-grid {
    position: relative;
    width: 100%;

    // Default cell width
    --cell-width: 50px;
}

</style>