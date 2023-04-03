<template>

<div class="project-doc-container" >
    <div class="project-title-container">
        <h2 class="project-title"> {{ title }} </h2>
        <div class="project-year">, {{ year }} </div>
    </div>

    <div class="project-doc-keyword-container">
        <ProjectKeyword v-for="keyword in keywords" :key="keyword" :keyword="keyword"></ProjectKeyword>
    </div>

    <component :is="contentComponent"></component>
</div>

</template>

<script>

import { defineAsyncComponent } from "vue";

import ProjectKeyword from "@/components/projects/ProjectKeyword.vue";
import { projects } from "./projects.js";

export default {
    components: {ProjectKeyword},

    data() {
        return {
            title: "",
            keywords: [],
            contentSrc: "",
            year: 0,            
        };
    },

    mounted() {
        window.addEventListener("click", this.onClick);
        this.initProjectDoc();
    },

    unmounted() {
        window.addEventListener("click", this.onClick);
    },

    computed: {
        // Load dynamic component https://stackoverflow.com/a/64570209 
        contentComponent () {
            if(this.contentSrc === "") return;
            return defineAsyncComponent(() => import(`@/${this.contentSrc}`));
        }
    },

    methods: {

        initProjectDoc() {
            let project = projects.find(item => item.title == this.$route.params.project);

            this.title = project.title;
            this.keywords = project.keywords;
            this.contentSrc = project.contentSrc;
            this.year = project.year;
        },

    }
};

</script>

<style lang="scss" scoped>

@import "@/components/projects/project-styles.scss";


.project-doc-container {
    position: relative;

    // Creates new Block formatting context, making sure that all
    // margins are within the content-wrapper
    overflow: auto;
}

.project-doc-keyword-container {
    margin: 0.5em 0;
}

</style>
