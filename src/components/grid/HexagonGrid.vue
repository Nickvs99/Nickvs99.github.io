<!-- Current implementation only works for hexagons with corner pointing straight up. -->

<template>

    <div class="hexagon-grid">
        <slot/>
    </div>

</template>

<script>

export default {

    /**
     * Gets the available width and then tries to place as many hexagons inside that width.
     * If there is insufficient width for all hexagons then place another row underneath.
     */ 
    props: ["hexRadius", "hexGridAlign"],

    mounted() {
        window.addEventListener("resize", this.initializeGrid);
        this.initializeGrid();
    },

    unmounted() {
        window.addEventListener("resize", this.initializeGrid);
    },

    methods: {

        initializeGrid() {
            this.hexSideRadius = this.hexRadius * Math.cos(30 * (Math.PI / 180));

            this.determineGridSize();
            
            this.marginX = this.calcMarginX();

            this.positionOffsetY = 2 * this.hexSideRadius * Math.cos(30 * (Math.PI / 180));

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
            
            // Since the second row sticks out this might actually overshoot the width
            let tempColumns = Math.floor(containerWidth / (this.hexSideRadius * 2)); 
            
            // Calculate the number of rows needed to fill in all children
            let tempRows = Math.ceil(childrenCount / tempColumns)

            // If at least two rows are used, check if the second row overshoots the container width
            // Update the number of columns accordingly
            if(tempRows >= 2) {
                
                let contentWidth = this.calcContentWidth(tempColumns);

                if (contentWidth > containerWidth) {
                    tempColumns -= 1;
                }
            }

            this.ncolumns = tempColumns; 
            this.nrows = Math.ceil(childrenCount / tempColumns)
        },

        /**
         * Calculates the position of element i. Returns the x-coordinate and y-coordinate.
         */
        calcPosition(i) {
            let row = Math.floor(i / this.ncolumns);
            let column = i - row*this.ncolumns;

            let rowOffset = row % 2 == 0 ? 0 : this.hexSideRadius;
            let positionOffsetX = this.marginX + rowOffset

            return [positionOffsetX + column * this.hexSideRadius * 2, row * this.positionOffsetY];
        },

        /**
         * Calculates the width needed to display the child elements.
         */
        calcContentWidth(ncolumns) {

            let mostRightValue;
            
            // The outer most right position would be the last element of the 2nd, 4th, ... row
            // Check if that element exists
            let lastElementSecondRowIndex = ncolumns * 2 - 1
            if (this.$el.children.length >= lastElementSecondRowIndex){
                mostRightValue = this.hexSideRadius * 2 * ncolumns + this.hexSideRadius
            }
            else {
                let mostRightFirstRowIndex = Math.min(this.$el.children.length - 1, ncolumns - 1);
                mostRightValue = this.hexSideRadius * 2 * (mostRightFirstRowIndex + 1);
            }

            return mostRightValue;
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

            let firstChild = this.$el.children[0];
            let topFirstChild = firstChild.getBoundingClientRect().top;

            let lastChild = this.$el.children[this.$el.children.length - 1];
            let bottomLast = lastChild.getBoundingClientRect().bottom;

            this.$el.style.height = (bottomLast - topFirstChild) + "px";
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