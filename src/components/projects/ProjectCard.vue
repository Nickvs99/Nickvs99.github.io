<template>

    
<div v-press :id=containerID class="project-card dark-theme" @click=showProjectDoc role="button" tabindex="0">

    <div class="project-title-container">
        <h2 class="project-title"> {{ title }}</h2>
        <div class="project-year">, {{ year }} </div>
    </div>

    <p class="project-description"> {{ description }} </p>

    <div class="project-card-keyword-container">
        <ProjectKeyword v-for="keyword in keywords" :key="keyword" :keyword="keyword"></ProjectKeyword>
    </div>
</div>

</template>

<script>

import ProjectKeyword from "@/components/projects/ProjectKeyword.vue";

export default {
    components: { ProjectKeyword },
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
        };
    },

    methods: {
        showProjectDoc() {

            let name;  
            let params = {project: this.title};
            if(this.$route.params.education) {
                name = "project-education",
                params["education"] = this.$route.params.education;
            }
            else {
                name = "project";
            }

            this.$router.push({name: name, params: params});
        }
    },
};

</script>

<style lang="scss" scoped>

@import "@/components/projects/project-styles.scss";

.project-card {
    @extend %clickable-primary;
    @include border(10px); // Same value as the project card gap

    padding: 5px 10px;

    display: flex;
    flex-direction: column;
}

.project-description {
    margin: 10px 0 15px 0;
}

.project-card-keyword-container {
    margin-top: auto;
}

</style>