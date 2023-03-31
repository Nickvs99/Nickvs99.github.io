<template>

<GenericSection id="home-section">

    <div id="home-content">
        
        <div id="home-content-left" ref="contentContainer">
            <h1 id="title-greeting">Hi, I'm Nick</h1>
            <p id="summary-paragraph">A <b>Computational Science</b> master student with a bachelor level background in <b>Physics and Astronomy</b>. Loves a challenge and has a great interest in a wide range of fields, ranging from game development to finance, and from physics to web development. </p>
            
            <HexagonGrid class="grid" ref="hexGrid" hexRadius="55" hexGridAlign="center" hexGridStyle="even-right">
                <HyperlinkIcon href="mailto:vansantennick@gmail.com" src_icon="assets/hyperlink-logos/email-icon.jpg" src_alt="Email icon"/>
                <HyperlinkIcon href="https://github.com/Nickvs99" src_icon="assets/hyperlink-logos/github-logo.png" src_alt="Github logo"/>
                <HyperlinkIcon href="https://www.linkedin.com/in/nick-van-santen-51a2a8173/" src_icon="assets/hyperlink-logos/linkedin-logo.png" src_alt="LinkedIn logo"/>
                <HyperlinkIcon href="./docs/Resume - Nick van Santen.pdf" src_icon="assets/hyperlink-logos/cv-icon.jpg" src_alt="CV icon" download/>
            </HexagonGrid>

        </div>
        
        <img src="@/assets/me.jpg" alt="Picture of me" id="profile-img" width="275" height="275">
    </div>    

</GenericSection>

</template>

<script>

import GenericSection from "@/components/sections/GenericSection.vue";
import HexagonGrid from "@/components/grid/HexagonGrid.vue";
import HyperlinkIcon from "@/components/HyperlinkIcon.vue";

export default {
    components: { GenericSection, HexagonGrid, HyperlinkIcon },

    mounted() {
        window.addEventListener("resize", this.onResize);
        this.resizeHexGrid();
    },
    unmounted() {
        window.removeEventListener("resize", this.onResize);
    },

    methods: {

        resizeHexGrid() {
            let container = this.$refs.contentContainer;    
            let availableWidth = container.getBoundingClientRect().width;
            
            // Resize the grid for values between 286 and 382 pixels. For these values the hex grid takes
            // a 3, 1 shape, which looks horrendous. Therefore manually resize, such that the grid makes
            // a 2, 2 shape.
            if(availableWidth <= 285 || availableWidth >= 382) {
                this.$refs.hexGrid.$el.style.width = 100 + "%";
            }
            else {
                this.$refs.hexGrid.$el.style.width = 285 + "px";
            }

            // Recalculate grid positions based on new width
            this.$refs.hexGrid.initializeGrid();        
        },

        onResize() {
            this.resizeHexGrid();
        },
    }
};

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
        width: 100%;
    }
}

#profile-img {
    border-radius: 30px;
    margin: auto;

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

.grid {
    margin: auto;
}

</style>
