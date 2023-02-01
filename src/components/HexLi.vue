<template>

<div class="hex-li-container">
    <EquilateralShape class="hex-bullet" n="6" :radius=radius offset="0" />
    <li class="hex-li">{{ content }}</li>
</div>

</template>

<script>

import EquilateralShape from "@/components/shapes/EquilateralShape.vue"

export default {
    components: {EquilateralShape},
    props: {
        content: String,
    },
    data() {
        return {
            radius: 10
        }
    }
}

</script>

<style scoped>

.hex-li-container {
    display: flex;
    align-items: center;
    gap: 0 5px;
}

.hex-bullet {
    fill: white;
}

.hex-li {
    list-style: none;
    display: inline-block;
}

</style>