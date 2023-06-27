<template>

<GenericSection id="home-section">

    <div id="home-content">
        
        <div id="home-content-left" ref="contentContainer">
            <h1 id="title-greeting">Hi, I'm Nick</h1>
            <p id="summary-paragraph">A <b>Computational Science</b> master student with a bachelor level background in <b>Physics and Astronomy</b>. Loves a challenge and has a great interest in a wide range of fields, ranging from game development to finance, and from physics to web development. </p>
            
            <HexagonGrid id="hexGrid" ref="hexGrid" :hexRadius="hexRadius" hexGridAlign="center" hexGridStyle="even-right">
                <HyperlinkIcon class="hyperlink-icon" href="mailto:vansantennick@gmail.com" src_icon="assets/icons/MailIcon.svg" src_alt="Email icon"/>
                <HyperlinkIcon class="hyperlink-icon" href="https://github.com/Nickvs99" src_icon="assets/icons/github-logo.png" src_alt="Github logo"/>
                <HyperlinkIcon class="hyperlink-icon" href="https://www.linkedin.com/in/nick-van-santen-51a2a8173/" src_icon="assets/icons/LinkedInIcon.png" src_alt="LinkedIn logo"/>
                <HyperlinkIcon class="hyperlink-icon" href="./docs/Resume - Nick van Santen.pdf" src_icon="assets/icons/cv-icon.jpg" src_alt="CV icon" download/>
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
    data() {
        return {
            hexRadius: "55",
        };
    },

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

    @media (max-width: $screen-width-sm) {
        padding-top: 50px;
    }
}

#home-content {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

#home-content-left {
    width: 50%;
    max-width: 500px;

    @media (max-width: $screen-width-md) {
        max-width: none;
        width: 100%;
    }
}

#profile-img {
    border-radius: 30px;
    margin: auto;

    @media (max-width: $screen-width-md) {
        display: none !important;
    }
}

#summary-paragraph {
    margin: 20px 0;
}

#title-greeting {
    margin: 0 0 30px 0;
}

#hexGrid {
    margin: auto;

    --cell-width: 100px;
    --cell-margin: 5px;

    .hyperlink-icon {
        width: var(--cell-width);

        svg {
            rotate: 30deg;
        }
    }
}

</style>
