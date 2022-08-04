<template>

<a :href="`${href}`" class="anchor hexagon-icon"  target=”_blank” :style="cssProps"> 

    <EquilateralShape n="6" :radius=radius offset="30"/>
    <img :src="require(`@/${src_icon}`)" :alt="`${src_alt}`" class="icon-img">

</a>

</template>


<script>

import EquilateralShape from "@/components/shapes/EquilateralShape.vue"

export default {
    props: ["href", "src_icon", "src_alt"],
    components: {EquilateralShape},

    data () {
        return {
            radius: 50,
            maxRadius: 50,
        }
    },

    computed: {
        cssProps() {
            return {
                '--icon-width': this.radius + "px",
                '--icon-offset': (this.radius / 2) + "px", // Places icon at the center
            }
        }
    },
}

</script>

<style lang="scss" scoped>

.anchor {
    position: absolute;
}

.hexagon-icon {
    @include clickable($primary-color, $is-svg: true);

    stroke: $primary-color-dark;
    stroke-width: 2px;
}

.icon-img {
    position: absolute;
    transform-origin: center;

    bottom: var(--icon-offset);
    left: var(--icon-offset);

    width: var(--icon-width);
    height: var(--icon-width);
}

</style>