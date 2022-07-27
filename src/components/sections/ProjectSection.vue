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
            keywords: ["Python", "Django", "js", "css", "html"],
            contentSrc: "components/projects/contents/ProjectMusicMatch.vue",
        },
        {
            title: "Living World",
            description: "A procedurally generated tile-based world inhabited by cars and boats.",
            keywords: ["Unity", "C#"],
            contentSrc: "components/projects/contents/ProjectLivingWorld.vue",
        },
        {
            title: "Boids",
            description: "Simulate flocking behaviour of bird like objects.",
            keywords: ["C++"],
            contentSrc: "components/projects/contents/ProjectBoids.vue",
        },
        {
            title: "Mandelbrot set",
            description: "An interactive version of the Mandelbrot set",
            keywords: ["C++"],
            contentSrc: "components/projects/contents/ProjectMandelbrot.vue",
        },
        {
            title: "Amstelhaege",
            description: "Solving the unsolvable. Applying several optimalization techniques to find an optimal neighbourhood.",
            keywords: ["Python"],
            contentSrc: "components/projects/contents/ProjectTemp.vue",
        },
        {
            title: "MCRT",
            description: "Simulating photons through an atmosphere with Monte Carlo Radiative Transfer simulation.",
            keywords: ["C#"],
            contentSrc: "components/projects/contents/ProjectTemp.vue",
        },
      ]
    }
  }
}

</script>

<style scoped lang="scss">

#project-section {
    background-color: $bg-color;
}

h1 {
    color: $primary-color;
}

#project-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    margin: 20px 0;
}

</style>
