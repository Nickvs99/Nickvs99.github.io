<template>

<div ref="background" class="project-doc-background" :class="{hidden: this.disabled}">
    <div class="project-doc" >
        <h2 class="project-doc-title"> {{ title }} </h2>

        <div class="project-doc-keyword-container">
            <ProjectKeyword v-for="keyword in keywords" :key="keyword" :keyword="keyword"></ProjectKeyword>
        </div>

        <component :is="contentComponent"></component>
    </div>
</div>

</template>

<script>

import { defineAsyncComponent } from 'vue'
import ProjectKeyword from "@/components/projects/ProjectKeyword.vue"

export default {
    components: {ProjectKeyword},
    props: {
        title: String,
        keywords: Array,
        description: String,
        contentSrc: String, 
    },

    data() {
        return {
            disabled: true,
        }
    },

    mounted() {
        window.addEventListener("click", this.onClick);
    },

    unmounted() {
        window.addEventListener("click", this.onClick);
    },

    computed: {
        // Load dynamic component https://stackoverflow.com/a/64570209 
        contentComponent () {
            return defineAsyncComponent(() => import(`@/${this.contentSrc}`))
        }
    },

    methods: {

        onClick(event) {

            if(this.disabled) {
                return;
            }   

            // Disable component if the user clicked outside of the component and not on its associated project card
            if(this.$refs.background === event.target) {
                this.disabled = true;
            }
        }
    }
}

</script>

<style lang="scss">

.project-doc-background {

    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;    
    width: 100vw;

    backdrop-filter: blur(4px);

    /* The project doc is displayed over all other content. */
    z-index: $foreground-index;

    /* center project-doc on viewport */
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    padding: 5% 20%;
    
    @media(max-width: $lg-screen-width) {
        padding: 5% 15%;
    }
    @media(max-width: $md-screen-width) {
        padding: 5% 10%;
    }
    @media(max-width: $sm-screen-width){
        padding: 5% 20px;
    }
}

.project-doc {

    /* Styling is identical to .project-card for now */
    background-color: $primary-color;
    color: $bg-color;

    border: 2px solid $primary-color-darkest;
    border-radius: 20px;

    padding: 10px 10px;

    overflow-y: auto;

    width: 100%;
    max-height: 100%;
}

.project-doc-title {
    margin: 15px 0;
}

.project-doc-keyword-container {
    margin: 15px 0;
}

</style>
