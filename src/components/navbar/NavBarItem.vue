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
    
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.onScroll);
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

        /**
         * Checks if the associated section is at the top of the viewport
         */
        isAtTopOfViewport() { 
            let navbarBottomPosition = document.getElementById("navbar").getBoundingClientRect().bottom;

            let els = document.elementsFromPoint(window.innerWidth / 2, navbarBottomPosition);

            for (let el of els){
                if (el.id === this.section_id) {
                    return true;
                }
            }
            return false;
        },

        onScroll() {
            this.isActive = this.isAtTopOfViewport();
        },
    }   
}

</script>

<style lang="scss">

/* TEMP styling */
.navbar-item {
    @extend %clickable-primary;

    border: none;
    color: $light-color;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.navbar-item.collapsed {
    width: 100%;
    text-align: left;
}

</style>