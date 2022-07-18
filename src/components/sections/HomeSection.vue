<template>

<GenericSection id="home-section">
    <h1>Hi, I'm Nick</h1>
    
    <p>A Computation Science master student with a background in physics and astronomy. Loves the challenge and has an interest wide range of fields, ranging from game development to finance, or from physics to web development. </p>
    
    <img src="@/assets/me.jpg" alt="Picture of me" width="200">

    <HyperlinkIcon href="https://www.github.com" src_icon="assets/email-icon.jpg" src_alt="Email icon"/>
    <HyperlinkIcon href="https://www.github.com" src_icon="assets/github-logo.png" src_alt="Github logo"/>
    <HyperlinkIcon href="https://www.github.com" src_icon="assets/linkedin-logo.png" src_alt="LinkedIn logo"/>
    <HyperlinkIcon href="https://www.github.com" src_icon="assets/cv-icon.jpg" src_alt="CV icon"/>

</GenericSection>

</template>

<script>

import GenericSection from "./GenericSection.vue"
import HyperlinkIcon from "@/components/HyperlinkIcon.vue"

export default {
  components: { GenericSection, HyperlinkIcon }
}

</script>

<style>

#home-section {
    background: red;
}

</style>
