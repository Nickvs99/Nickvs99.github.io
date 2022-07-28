<template>

<p>A portfolio website of me created with the Vue javascript framework.</p>

<p>View the website at <a href="https://nickvs99.github.io" target="_blank">https://nickvs99.github.io</a>. </p>

<ProjectGithubLink href="https://github.com/Nickvs99/Nickvs99.github.io" ></ProjectGithubLink>

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