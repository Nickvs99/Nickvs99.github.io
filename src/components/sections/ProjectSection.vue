<template>

<GenericSection id="project-section">
    <h1>Projects</h1>

    <div id="project-card-container">
        <ProjectCard v-for="project in projects" :key="project" :title="project.title" :description="project.description" :keywords="project.keywords"></ProjectCard>
    </div>

</GenericSection>

</template>

<script>

import GenericSection from "./GenericSection.vue"
import ProjectCard from "@/components/projects/ProjectCard.vue"

export default {
  components: { GenericSection, ProjectCard },
  
  data() {
    return {
      projects: [
        {
          title: "MusicMatch",
          description: "A web app that provides the ability to easily compare music tastes between people.",
          keywords: ["python", "django", "js", "css", "html"],
        },
        {
          title: "Living world",
          description: "A procedurally generated tile-based world inhabited by cars and boats.",
          keywords: ["Unity", "C#"],
        }
      ]
    }
  }
}

</script>

<style>

#project-section {
    background-color: pink;
}

</style>
