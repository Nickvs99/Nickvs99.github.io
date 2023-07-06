<template>
    <router-link :to="{ name: routerName }" class="navbar-item">
        {{ content }}
    </router-link>
</template>

<script>

export default {
    props: ["content", "section_id", "routerName"],
    
    data() {
        return {
            isActive: false,
        };
    }, 
};

</script>

<style lang="scss">

.navbar-item {
    @extend %clickable-primary;

    // Align items due to padding
    position: relative;
    left: -16px;

    border: none;
    color: var(--clr-light);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    &.collapsed {
        width: 100%;
        text-align: left;     
    }
}

</style>