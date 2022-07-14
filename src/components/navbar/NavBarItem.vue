<template>
    <button @click="scrollTowardsSection()"> {{ content }} </button>
</template>

<script>

export default {
    props: ["content", "section_id"],
    methods: {
        scrollTowardsSection(){
            document.getElementById(this.section_id).scrollIntoView();
        }
    }
}

</script>

<style>

</style>