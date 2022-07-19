<!-- Will display an equilateral shape (all sides are equal) -->

<template>

    <svg class="polygon-container" :style="cssProps">
        <polygon :points="SetPoints()" />
    </svg>

</template>

<script>

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

            let points = [];
            let rotation = 2 * Math.PI / this.n;
            let angle = this.offset * Math.PI / 180;

            for(let i = 0; i < this.n; i++) {
                
                // Make sure all values are positive
                let x = (Math.cos(angle) + 1) * this.radius ;
                let y = (Math.sin(angle) + 1) * this.radius ;

                points.push(`${x},${y}`);

                angle += rotation;
            }
            
            return points.join(" ")
        }
    },
}

</script>

<style>

.polygon-container {
    background-color:purple;
    width: var(--width);
    height: var(--width);
}
</style>