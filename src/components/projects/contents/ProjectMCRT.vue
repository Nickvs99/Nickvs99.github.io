<template>

<p>
    This project tries to understand and implement Monte Carlo Radiative Transfer (MCRT) simulations. 
    It does this by simulating photon packages in a semi-infinite plane-parallel atmosphere. 
    These photon packages are isotropically scattered in the atmosphere. 
    The outgoing photon intensity is captured and compared with analytical solutions to the problem. 
</p>

<img src="@/assets/projects/MCRT.png" alt="Image shows the mandelbrot set in gray scale." class="project-img" id="mandelbrot-img"/>

<p>
    The knowledge about MCRT was used for my BSc thesis about the vertical structure of protoplanetary disks
    , which was able to overcome the difference in observed grain radii and simulated radii.
    A top view of a protoplanetary disk can be seen in the image. 
</p> 


<ProjectGithubLink href="https://github.com/Nickvs99/MCRT"></ProjectGithubLink>

</template>

<script>

import ProjectGithubLink from "@/components/projects/ProjectGithubLink.vue";

export default {
    components: {ProjectGithubLink},
};

</script>

<style lang="scss" scoped>

@import "@/components/projects/project-styles.scss";

</style>