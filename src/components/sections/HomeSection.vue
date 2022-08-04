<template>

<GenericSection id="home-section">

    <div id="home-content">
        
        <div id="home-content-left">
            <h1 id="title-greeting">Hi, I'm Nick</h1>
            <p id="summary-paragraph">A <b>Computational Science</b> master student with a bachelor level background in <b>Physics and Astronomy</b>. Loves a challenge and has a great interest in a wide range of fields, ranging from game development to finance, and from physics to web development. </p>
            
            <HexagonGrid hexRadius="55" hexGridAlign="center" hexGridStyle="even-right">
                <HyperlinkIcon href="mailto:vansantennick@gmail.com" src_icon="assets/hyperlink-logos/email-icon.jpg" src_alt="Email icon"/>
                <HyperlinkIcon href="https://github.com/Nickvs99" src_icon="assets/hyperlink-logos/github-logo.png" src_alt="Github logo"/>
                <HyperlinkIcon href="https://www.linkedin.com/in/nick-van-santen-51a2a8173/" src_icon="assets/hyperlink-logos/linkedin-logo.png" src_alt="LinkedIn logo"/>
                <HyperlinkIcon href="./docs/Resume - Nick van Santen.pdf" src_icon="assets/hyperlink-logos/cv-icon.jpg" src_alt="CV icon" download/>
            </HexagonGrid>

        </div>
        
        <img src="@/assets/me.jpg" alt="Picture of me" id="profile-img">
    </div>    

</GenericSection>

</template>

<script>

import GenericSection from "@/components/sections/GenericSection.vue"
import HexagonGrid from "@/components/grid/HexagonGrid.vue"
import HyperlinkIcon from "@/components/HyperlinkIcon.vue"

export default {
    components: { GenericSection, HexagonGrid, HyperlinkIcon },
}

</script>

<style lang="scss">

#home-section {
    padding-top: 150px;
    padding-bottom: 50px;

    @media (max-width: $sm-screen-width) {
        padding-top: 50px;
    }
}

#home-content {
    position: relative;
    display: flex;
}

#home-content-left {
    width: 50%;
    max-width: 500px;

    @media (max-width: $md-screen-width) {
        margin: auto;
        width: 100%;
    }
}

#profile-img {
    border-radius: 30px;
    margin: auto;
    width: 275px;

    @media (max-width: $md-screen-width) {
        display: none !important;
    }
}

#summary-paragraph {
    margin: 20px 0;
}

#title-greeting {
    margin: 0 0 30px 0;
}

</style>
