<template>
<GenericSection id="project-section">
    
    <div class="project-title-row">
        <h1>Projects <ShareButton :resolve="{name: 'projects'}"/></h1>
        <ArrowBackIcon v-press v-if="showGoBackIcon" @click=goToOverview role="button" tabindex="0"/>
    </div>

    <router-view v-slot="{Component}">
        <FadeTransition>
            <div :key="$route.params.project">
                <component :is="Component"></component>
            </div>
        </FadeTransition>
    </router-view>
    
</GenericSection>

</template>

<script>

import ArrowBackIcon from "@/assets/icons/ArrowBackIcon.vue";
import FadeTransition from "../transitions/FadeTransition.vue";
import router from "@/router";

import GenericSection from "./GenericSection.vue";
import ShareButton from "@/components/ShareButton.vue";

export default {
    name: "ProjectSection",
    components: { FadeTransition, GenericSection, ArrowBackIcon, ShareButton },
    data() {
        return {
            showGoBackIcon: true,
        };
    },
    mounted() {
        this.setShowGoBackIcon();
    },
    watch: {
        $route() {
            this.setShowGoBackIcon();
        }
    },
    methods: {

        setShowGoBackIcon() {
            this.showGoBackIcon = this.$route.params.project;
        },
        goToOverview() {

            if(this.$route.params.education) {
                router.push({name: "education", params: {education: this.$route.params.education}});
            }
            else {
                router.push({name: "index"});
            }
        }
    }
};

</script>

<style lang="scss" scoped>

.project-title-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg {
        @extend %clickable-primary-svg;

        width: 2em;
    }
}

</style>