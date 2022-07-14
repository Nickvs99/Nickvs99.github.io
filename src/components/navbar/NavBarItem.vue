<template>
    <button @click="scrollToTargetOffset()"> {{ content }} </button>
</template>

<script>

export default {
    props: ["content", "section_id"],
    methods: {
        
        /**
         * Scrolls towards the associated region. A offset is applied such
         * that the navigation bar does not overlap with the section. 
         */
        scrollToTargetOffset(){
            let target = document.getElementById(this.section_id);
            let targetPosition = target.getBoundingClientRect().top;

            let offset = document.getElementById("navbar").offsetHeight;
            let offsetPosition = targetPosition + window.pageYOffset - offset;

            window.scrollTo({top: offsetPosition, behavior: "smooth"});
        }
    }
}

</script>

<style>

</style>