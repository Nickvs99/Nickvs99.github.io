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
     */ 
    props: ["hexRadius", "hexGridAlign", "hexGridStyle"],

    /**
     * 4 hex grid styles:
     *  - even-large            Even rows have one entry more
     *  - even-left             Even rows are offset to the left
     *  - even-right            Even rows are offset to the right
     *  - even-small            Even rows have one entry less
     * 
     * Even refers to the 2nd, 4th, 6th row and thus row index 1, 3, 5, ...
     * 
     * TODO would be cleaner if each of the four styles inherit from some base class, 
     * current implementation uses a bunch of if statements.
     */

    mounted() {
        window.addEventListener("resize", this.initializeGrid);
        this.initializeGrid();
    },

    unmounted() {
        window.addEventListener("resize", this.initializeGrid);
    },

    methods: {

        initializeGrid() {

            let shape = new EquilateralShape(6, this.hexRadius, 30); //TODO variable offset

            this.hexWidth = shape.width;

            this.determineGridSize();
            
            this.marginX = this.calcMarginX();

            // TODO hexwidth / 2 only works for a 30 degree offset
            this.positionOffsetY = 2 * (this.hexWidth / 2) * Math.cos(30 * (Math.PI / 180));

            for (let i = 0; i < this.$el.children.length; i++)
            {
                let [x, y] = this.calcPosition(i);
                this.setElementPosition(this.$el.children[i], x, y);
            }

            this.setContainerHeight();
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
            let [row, column] = this.determineRowAndColumn(i)

            let rowOffset = this.calcRowOffset(row);
            let positionOffsetX = this.marginX + rowOffset;

            return [positionOffsetX + column * this.hexWidth, row * this.positionOffsetY];
        },

        determineRowAndColumn(i) {
            
            if(["even-left", "even-right"].includes(this.hexGridStyle)) {
                
                let rowIndex= Math.floor(i / this.ncolumns);
                let columnIndex = i - rowIndex * this.ncolumns;

                return [rowIndex, columnIndex];
            }
            else if (["even-small", "even-large"].includes(this.hexGridStyle)) {

                let rowIndex = 0;
                let rowLength = this.determineRowLength(rowIndex);

                // Keep removing the length of the row until that is no longer possible
                // i is then at its column value
                while ( i > rowLength - 1) {
                    
                    i -= rowLength;
                    
                    rowIndex += 1;
                    rowLength = this.determineRowLength(rowIndex);
                }

                let columnIndex = i;
                return [rowIndex, columnIndex];
            }
        },

        determineRowLength(rowIndex) {
            
            if(["even-left", "even-right"].includes(this.hexGridStyle)) {
                return this.ncolumns;
            }

            else if (["even-small", "even-large"].includes(this.hexGridStyle)) {
                
                let isEven = this.isRowEven(rowIndex);
                
                if(this.hexGridStyle === "even-small") {
                    return isEven ? this.ncolumns - 1 : this.ncolumns;
                }
                else if (this.hexGridStyle === "even-large") {
                    return isEven ? this.ncolumns : this.ncolumns - 1;
                }
            }
        },

        calcRowOffset(row) {

            let isEven = this.isRowEven(row)

            if(["even-small", "even-right"].includes(this.hexGridStyle)) {
                return isEven ?  this.hexWidth / 2 : 0;
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
                let lastElementSecondRowIndex = ncolumns * 2 - 1
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
                console.error("Invalid value for hexGridAlign.")
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
}

</script>

<style>

.hexagon-grid {
    position: relative;
    width: 100%;
}

</style>