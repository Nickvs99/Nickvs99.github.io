<template>


<video class="project-img" autoplay muted loop>
    <source src="@/assets/projects/Boids.mp4" type="video/mp4">
    Video shows flocking behaviour of boids.
</video>

<p>
    Boids simulate the flocking behaviour of birds. 
    This is done through a set of local rules, from which global behaviour emerges.
    The local rules are bounded to individual boids and act as forces upon them. 
    These rules are
</p>


<ul>
    <li>Align with boids within your awareness radii (Alignment force)</li>
    <li>Try to fly to the centre of your flock (Cohesion force)</li>
    <li>Don't crash into each other (Separation force)</li>
</ul>


<p>Depending on the parameters chosen different flocking behaviours can occur.</p>


<ProjectGithubLink href="https://github.com/Nickvs99/Boids"></ProjectGithubLink>

</template>

<script>

import ProjectGithubLink from "@/components/projects/ProjectGithubLink.vue"

export default {
    components: {ProjectGithubLink},
}

</script>

<style lang="scss" scoped>
@import "@/components/projects/project-styles.scss";

</style>
