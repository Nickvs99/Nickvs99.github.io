<template>

<GenericSection id="home-section">

    <div id="home-text-container">
        <h1 id="title-greeting">Hi, I'm Nick</h1>
        <p id="summary-paragraph">A Computation Science master student with a background in physics and astronomy. Loves a challenge and has an interest in a wide range of fields, ranging from game development to finance, and from physics to web development. </p>
    </div>

    <img src="@/assets/me.jpg" alt="Picture of me" id="profile-img">

    <div id="hyperlink-container">
        <HyperlinkIcon href="mailto:vansantennick@gmail.com" src_icon="assets/hyperlink-logos/email-icon.jpg" src_alt="Email icon"/>
        <HyperlinkIcon href="https://github.com/Nickvs99" src_icon="assets/hyperlink-logos/github-logo.png" src_alt="Github logo"/>
        <HyperlinkIcon href="https://www.linkedin.com/in/nick-van-santen-51a2a8173/" src_icon="assets/hyperlink-logos/linkedin-logo.png" src_alt="LinkedIn logo"/>
        <HyperlinkIcon href="./docs/Resume - Nick van Santen.pdf" src_icon="assets/hyperlink-logos/cv-icon.jpg" src_alt="CV icon" download/>
    </div>

</GenericSection>

</template>

<script>

import GenericSection from "@/components/sections/GenericSection.vue"
import HyperlinkIcon from "@/components/HyperlinkIcon.vue"

export default {
    components: { GenericSection, HyperlinkIcon },
}

</script>

<style>

#home-section {
    background: #f9f4ea;
}

#home-text-container {
    margin-left: 10%;
    max-width: 500px;
}

@media(max-width: 480px){
    #home-text-container{
        margin-left: 0%;
    }
}
#profile-img {
  border-radius: 30px;
  width: 200px;
}

#summary-paragraph {
    background-color: grey;
}

#title-greeting {
    color: green;
}

</style>
