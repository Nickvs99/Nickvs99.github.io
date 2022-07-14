<template>

<div id="navbar">
    <NavBarItem content="Home" section_id="home-section"/>
    <NavBarItem content="About me" section_id="aboutme-section"/>
    <NavBarItem content="Projects" section_id="project-section"/>
    <NavBarItem content="Education" section_id="education-section"/>
    <NavBarItem content="Contact" section_id="contact-section"/>
</div>

</template>

<script>

import NavBarItem from "@/components/navbar/NavBarItem.vue"
export default {
    components: {NavBarItem},
}

</script>

<style>

</style>
