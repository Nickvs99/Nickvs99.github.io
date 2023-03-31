<template>

<video class="project-img" autoplay muted loop>
    <source src="@/assets/projects/Living_world.mp4" type="video/mp4">
    Image shows the creation and inhabitons of the world.
</video>

<p> Living World is a procedural generated tile-based world inhabited by boats and cars.</p>

<h3>World generation</h3>

<p>The world is generated through a few simple steps: </p>

<ol>
    <li>Initialize a grass world with size \( n_x \) by \( n_y \)</li>
    <li>Generate a non-crossing bezier curve with a width representing the river.</li>
    <li>Populate the world with \( n \) cities.</li>
    <li>Connect all cities with highways through a minimum spanning tree computed with Prim's algorithm.</li>
    <li>Place houses alongside the road.</li>
    <li>Trees are placed if they have sufficient distance to the nearest neighbourhood.</li>
</ol>


<h3>Agents</h3>
<p>
    The world consists of two types of agents: boats and cars.
    These agents traverse the world through a set of very simple rules, which combined can already create some interesting dynamics. 
</p>

<h4>Cars</h4>
<ol>
    <li>Pick a random starting house and destination.</li>
    <li>Compute route with a specialized Dijkstra algorithm, which favours highways.</li>
    <li>Drive over the route as long as no object is blocking you. Blocking can occur due to other cars or bridges which are open.</li>
</ol>

<h4>Boats</h4>
<ol>
    <li>Pick a random direction along the river.</li>
    <li>Sail along the river as long as no object is blocking you. Blocking can occur due to other boats or bridges which are closed.</li>
</ol>

See for yourself at <a href="https://github.com/Nickvs99/Living_World" target="_blank">https://github.com/Nickvs99/Living_World</a>!

<ProjectGithubLink href="https://github.com/Nickvs99/Living_World"></ProjectGithubLink>

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