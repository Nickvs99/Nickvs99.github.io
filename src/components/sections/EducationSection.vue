<template>

<GenericSection id="education-section">
    
    <h1>Education</h1>
    <div id="school-navbar">
        <div v-for="educationObj in educationObjs" :key="educationObj.title" 
            @click="goTo(educationObj.title)" 
            :class="['school-navbar-item', {active: isActive(educationObj.title)}]"
        > 
            {{ educationObj.title }} 
        </div>
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

#school-navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.school-navbar-item {
    @extend %clickable-secondary;

    padding: 10px;
}

#school-content-container {
    background-color: $primary-color-dark;

    margin: 10px 0;
    padding: 10px;
}

</style>
