<template>

<GenericSection id="project-section">
    <h1>Projects</h1>

    <div id="project-card-container">
        <ProjectCard v-for="project in projects" :key="project" :title="project.title" :description="project.description" :keywords="project.keywords" :contentSrc="project.contentSrc"></ProjectCard>
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
          contentSrc: "components/projects/contents/ProjectMusicMatch.vue",
        },
        {
          title: "Living World",
          description: "A procedurally generated tile-based world inhabited by cars and boats.",
          keywords: ["Unity", "C#"],
          contentSrc: "components/projects/contents/ProjectLivingWorld.vue",
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
