<template>
    <a :href="`${href}`" class="anchor"> 

        <EquilateralShape n="6" radius="50" offset="0" class="hexagon-icon"/>
        <img :src="require(`@/${src_icon}`)" :alt="`${src_alt}`" class="icon-img">

    </a>
</template>


<script>

import EquilateralShape from "@/components/shapes/EquilateralShape.vue"

export default {
    props: ["href", "src_icon", "src_alt"],
    components: {EquilateralShape},
}

</script>

<style>

.anchor {
    position: relative;
}

.hexagon-icon {
    fill: yellow;
}

.icon-img {

    position: absolute;
    transform-origin: center;

    bottom: 25px;
    left: 25px;

    width:50px;
    height:50px;
}

</style>