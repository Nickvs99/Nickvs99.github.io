<template>

<div class="hex-li-container">
    <EquilateralShape n="6" :radius=radius offset="0" />
    <li class="hex-li">
        <slot/>
    </li>
</div>

</template>

<script>

import EquilateralShape from "@/components/shapes/EquilateralShape.vue";

export default {
    components: {EquilateralShape},
    props: {
        content: String,
    },
    data() {
        return {
            radius: 10
        };
    }
};

</script>

<style lang="scss">

ul:has(> .hex-li-container) {
    padding-inline-start: 1em;

    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
}

</style>

<style lang="scss" scoped>

.hex-li-container {
    display: flex;
    align-items: center;
    gap: 0 0.5em;
}

.hex-li {
    list-style: none;
    display: inline-block;
    flex: 1;
}

</style>