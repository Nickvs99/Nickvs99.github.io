<template>

<div :id=containerID>
    
    <div class="project-card" @click=showProjectDoc>
        <h2 class="project-title"> {{ title }} </h2>
        <p class="project-description"> {{ description }} </p>

        <div class="project-card-keyword-container">
            <ProjectKeyword v-for="keyword in keywords" :key="keyword" :keyword="keyword"></ProjectKeyword>
        </div>
    </div>

    <ProjectDoc ref="doc" :title="title" :keywords="keywords" :description="description" :contentSrc="contentSrc"></ProjectDoc>

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

<style lang="scss">

.project-card {
    background-color: $primary-color;
    color: $bg-color;

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

.project-title {
    margin: 5px 0 10px 0;
}

.project-description {
    margin: 10px 0 15px 0;
}

.project-card-keyword-container {
    margin-top: auto;
}

</style>