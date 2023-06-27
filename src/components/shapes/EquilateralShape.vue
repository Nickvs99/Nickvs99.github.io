<!-- Will display an equilateral shape (all sides are equal) -->

<template>

    <svg viewBox="0 0 1000 1000" class="polygon-container">
        <path :d="SetPath()" />
    </svg>

</template>

<script>

let { EquilateralShape } = require("@/js/EquilateralShape.js");

export default {
    props: ["n"],

    methods: {

        SetPath() {
            // The radius should be halve the viewBox width
            let shape = new EquilateralShape(this.n, 500, 0);

            return `M ${shape.points.join(" ")} Z`;
        }
    },
};

</script>

<style lang="scss">

.polygon-container { 
    width: 1em;
    aspect-ratio: 1/1;
}

</style>