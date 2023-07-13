<template>

<div class="hex-li-container">
    <EquilateralShape n="6" class="hex-li-shape" />
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
    align-items: flex-start;
    gap: 0 0.5em;
}

.dark-theme  .hex-li-shape {
    fill: var(--font-clr-light);
}

.light-theme .hex-li-shape {
    fill: var(--clr-primary);
}

.hex-li {
    list-style: none;
    display: inline-block;
    flex: 1;
}

</style>