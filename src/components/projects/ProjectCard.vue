<template>

    <div class="project-card" @click=showProjectDoc>
        <h2 class="project-title"> {{ title }} </h2>
        <p class="project-description"> {{ description }} </p>

        <div class="project-keyword-container">
            <div v-for="keyword in keywords" :key="keyword" class="project-keyword">
                {{ keyword }}
            </div>
        </div>
    </div>

    <ProjectDoc ref="doc" :id=projectDocId :title="title" :keywords="keywords" :description="description" :contentSrc="contentSrc"></ProjectDoc>

</template>

<script>
import ProjectDoc from "@/components/projects/ProjectDoc.vue"

export default {
    components: {ProjectDoc},
    props: {
        title: String,
        keywords: Array,
        description: String,
        contentSrc: String,
    },

    data() {
        return {
            projectDocId: "project-doc-" + this.title,
        }
    },

    methods: {
        showProjectDoc() {
            this.$refs.doc.disabled = false;
        }
    },
}

</script>

<style>

.project-card {
    background-color: tomato;
}

</style>