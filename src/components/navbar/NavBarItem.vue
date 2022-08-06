<template>
    <button @click="scrollToTargetOffset()" class="navbar-item" :class="{active: isActive}"> {{ content }} </button>
</template>

<script>

export default {
    props: ["content", "section_id"],
    
    data() {
        return {
            isActive: false,
        }
    },

    methods: {
        
        /**
         * Scrolls towards the associated region. A offset is applied such
         * that the navigation bar does not overlap with the section. 
         */
        scrollToTargetOffset() {
            let target = document.getElementById(this.section_id);
            let targetPosition = target.getBoundingClientRect().top;

            let offset = document.getElementById("navbar").offsetHeight;
            let offsetPosition = targetPosition + window.pageYOffset - offset;

            window.scrollTo({top: offsetPosition, behavior: "smooth"});
        },
    }   
}

</script>

<style lang="scss">

.navbar-item {
    @extend %clickable-primary;

    border: none;
    color: $light-color;
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