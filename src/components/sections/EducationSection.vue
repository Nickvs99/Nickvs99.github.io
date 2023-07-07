<template>

<GenericSection id="education-section">
    
    <h1>Education <ShareButton :resolve="{name: 'edu'}"/></h1>
    
    <div id="school-navbar">
        <button v-for="educationObj in educationObjs" :key="educationObj.title" 
            @click="goTo(educationObj.title)" 
            :class="['school-navbar-item', {active: isActive(educationObj.title)}]"
        > 
            {{ educationObj.title }} 
        </button>
    </div>

    <EducationContent />

</GenericSection>

</template>

<script>

import { scrollIntoView } from "@/js/util";

import GenericSection from "./GenericSection.vue";

import EducationContent from "@/components/education/EducationContent.vue";
import { educations, getEducationFromParams } from "@/components/education/educations.js";

import ShareButton from "@/components/ShareButton.vue";

export default {
    components: { EducationContent, GenericSection, ShareButton },
    data() {
        return {
            educationObjs: null,
        };
    },
    async mounted() {
        this.educationObjs = educations;

        // Wait for the router to be resolved. This only occurs on an f5 or hard-reload
        await this.$router.isReady();

        // Scroll to education page, unless a project parameter is present since it takes precedence
        if(this.$route.params.education && !this.$route.params.project) {
            scrollIntoView("education-section");
        }
    },
    methods: {
        goTo(educationTitle) {
            
            let name;  
            let params = {education: educationTitle};
            if(this.$route.params.project) {
                name = "project-education",
                params["project"] = this.$route.params.project;
            }
            else {
                name = "education";
            }

            this.$router.push({name: name, params: params});
        },

        isActive(educationTitle) {
            return getEducationFromParams(this.$route.params.education).title == educationTitle;
        }
    }
};

</script>

<style lang="scss" scoped>

$screen-width-treshold: 550px;


#school-navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    @media(max-width: $screen-width-treshold) {
        flex-direction: column;
        gap: 2px;

        background-color: var(--clr-secondary-dark);
    }
}

.school-navbar-item {
    @extend %clickable-secondary;

    color: var(--clr-light);
    padding: 10px;
    border: none;

    @media(max-width: $screen-width-treshold) {
        text-align: start;
    }
}

#school-content-container {
    background-color: var(--clr-primary-dark);

    margin: 10px 0;
    padding: 10px;
}

</style>
