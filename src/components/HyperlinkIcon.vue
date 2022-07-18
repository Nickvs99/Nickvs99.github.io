<template>
    <a :href="`${href}`"> 

        <EquilateralShape n="6" radius="50" offset="0" class="hexagon-icon"/>
        <!-- <img :src="require(`@/${src_icon}`)" :alt="`${src_alt}`" class="icon-img"> -->
        <!-- <EquilateralShape/> -->
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

/* TEMP styling */
.trapezoid {
	border-bottom: 50px solid #555;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 125px;
}

.hexagon-icon {
    fill: yellow;
}

.icon-img {
    max-width:100%;
    max-height:100%;
}

</style>