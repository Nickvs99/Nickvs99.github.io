<template>

<GenericSection id="aboutme-section">
    <h1>About me</h1>

    <div class="content-container">
        <div class="content">
            <PersonIcon />
            <div>Nick van Santen</div>
        </div>
        <div class="content">
            <CakeIcon />
            <div>24 July 1999</div>
        </div>
        <div class="content">
            <HomePinIcon />
            <div>Hoofddorp, The Netherlands</div>
        </div>
        <div class="content">
            <TranslateIcon />
            <div>Dutch, English</div>
        </div>
        <div class="content">
            <SchoolIcon />
            <div>MSc Computational Science, BSc Physics and Astronomy</div>
        </div>
        <div class="content">
            <TerminalIcon />
            <div>Python, C#, JavaScript</div>
        </div>
        <div class="content">
            <MailIcon />
            <a href="mailto:vansantennick@gmail.com">vansantennick@gmail.com</a>
        </div>
    </div>

</GenericSection>

</template>

<script>

import GenericSection from "./GenericSection.vue";

import CakeIcon from "@/assets/icons/CakeIcon.vue";
import HomePinIcon from "@/assets/icons/HomePinIcon.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
import PersonIcon from "@/assets/icons/PersonIcon.vue";
import SchoolIcon from "@/assets/icons/SchoolIcon.vue";
import TerminalIcon from "@/assets/icons/TerminalIcon.vue";
import TranslateIcon from "@/assets/icons/TranslateIcon.vue";

export default {
    components: { GenericSection, CakeIcon, HomePinIcon, MailIcon, PersonIcon, SchoolIcon, TerminalIcon, TranslateIcon }
};

</script>

<style lang="scss" scoped>

.content-container {
    display: flex;
    flex-direction: column;
    row-gap: 1em;

    margin-left: 1em;
}

.content {

    display: flex;
    flex-direction: row;
    column-gap: 1em;
    align-items: center;
    
    svg {
        width: 2em;
        fill: black;
    }

    > :not(svg) {
        flex: 1;
    }
}

</style>
