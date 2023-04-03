<template>
<GenericSection id="project-section">
    
    <div class="project-title-row">
        <h1>Projects</h1>
        <ArrowBackIcon v-if="showGoBackIcon" @click="goToOverview()"/>
    </div>
    <router-view />
    
</GenericSection>
</template>

<script>

import ArrowBackIcon from "@/assets/icons/ArrowBackIcon.vue";
import GenericSection from "./GenericSection.vue";
import router from "@/router";
export default {
    name: "ProjectSection",
    components: { GenericSection, ArrowBackIcon },
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
        @include clickable($primary-color, $is-svg: true);

        width: 2em;
    }
}

</style>