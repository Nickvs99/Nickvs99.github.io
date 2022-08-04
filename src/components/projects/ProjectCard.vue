<template>

    
<div :id=containerID class="project-card dark-theme" @click=showProjectDoc>

    <div class="project-title-container">
        <h2 class="project-title"> {{ title }}</h2>
        <div class="project-year">, {{ year }} </div>
    </div>

    <p class="project-description"> {{ description }} </p>

    <div class="project-card-keyword-container">
        <ProjectKeyword v-for="keyword in keywords" :key="keyword" :keyword="keyword"></ProjectKeyword>
    </div>

    <ProjectDoc ref="doc" 
        :title="title" 
        :keywords="keywords" 
        :description="description" 
        :contentSrc="contentSrc"
        :year="year">
    </ProjectDoc>
</div>

</template>

<script>

import ProjectDoc from "@/components/projects/ProjectDoc.vue"
import ProjectKeyword from "@/components/projects/ProjectKeyword.vue"

export default {
    components: {ProjectDoc, ProjectKeyword},
    props: {
        title: String,
        keywords: Array,
        description: String,
        contentSrc: String,
        year: Number,
    },

    data() {
        return {
            containerID: "project-container-" + this.title,
        }
    },

    methods: {
        showProjectDoc() {
            this.$refs.doc.disabled = false;
        }
    },
}

</script>

<style lang="scss" scoped>

@import "@/components/projects/project-styles.scss";

.project-card {

    border: 2px solid $primary-color-darkest;
    border-radius: 20px;

    padding: 5px 10px;

    display: flex;
    flex-direction: column;

    &:hover {
        background-color: $primary-color-dark;
        cursor: pointer;
    }
}

.project-description {
    margin: 10px 0 15px 0;
}

.project-card-keyword-container {
    margin-top: auto;
}

</style>