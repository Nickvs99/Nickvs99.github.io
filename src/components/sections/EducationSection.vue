<template>

<GenericSection id="education-section">
    
    <h1>Education</h1>
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

import GenericSection from "./GenericSection.vue";

import EducationContent from "@/components/education/EducationContent.vue";
import { educations, getEducationFromParams } from "@/components/education/educations.js";

export default {
    components: { EducationContent, GenericSection },
    data() {
        return {
            educationObjs: null,
        };
    },
    mounted() {
        this.educationObjs = educations;
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
