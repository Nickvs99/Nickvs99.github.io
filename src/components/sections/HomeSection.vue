<template>

<GenericSection id="home-section">
    <h1>Hi, I'm Nick</h1>
    
    <p>A Computation Science master student with a background in physics and astronomy. Loves a challenge and has an interest in a wide range of fields, ranging from game development to finance, or from physics to web development. </p>
    
    <img src="@/assets/me.jpg" alt="Picture of me" width="200">

    <HyperlinkIcon href="mailto:vansantennick@gmail.com" src_icon="assets/email-icon.jpg" src_alt="Email icon"/>
    <HyperlinkIcon href="https://github.com/Nickvs99" src_icon="assets/github-logo.png" src_alt="Github logo"/>
    <HyperlinkIcon href="https://www.linkedin.com/in/nick-van-santen-51a2a8173/" src_icon="assets/linkedin-logo.png" src_alt="LinkedIn logo"/>
    <HyperlinkIcon href="./docs/Resume - Nick van Santen.pdf" src_icon="assets/cv-icon.jpg" src_alt="CV icon" download/>

</GenericSection>

</template>

<script>

import GenericSection from "@/components/sections/GenericSection.vue"
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
