<!-- Will display an equilateral shape (all sides are equal) -->

<template>

    <svg class="polygon-container" :style="cssProps">
        <polygon :points="SetPoints()" />
    </svg>

</template>

<script>

let { EquilateralShape } = require("@/js/EquilateralShape.js");

export default {
    props: ["n", "radius", "offset"],

    computed: {
        cssProps() {
            return {
                '--width': (2 * this.radius) + "px",
            }
        }
    },

    methods: {

        SetPoints() {

            let shape = new EquilateralShape(this.n, this.radius, this.offset);
            return shape.points.join(" ");
        }
    },
}

</script>

<style>

.polygon-container {
    width: var(--width);
    height: var(--width);
}

</style>