<template>

<GenericSection id="education-section">
    
    <h1>Education</h1>
    <div id="school-navbar">
        <div class="school-navbar-item" id="school-navbar-item-msc" @click="showEducationSection('msc')">MSc Computational science</div>
        <div class="school-navbar-item" id="school-navbar-item-bsc" @click="showEducationSection('bsc')">BSc Physics and Astronomy</div>
        <div class="school-navbar-item" id="school-navbar-item-high-school" @click="showEducationSection('high-school')">High school</div>
    </div>

    <div id="school-content-container">
        <EducationMSc class="school-content" id="school-content-msc"></EducationMSc>
        <EducationBSc class="school-content" id="school-content-bsc"></EducationBSc>
        <EducationHighSchool class="school-content" id="school-content-high-school"></EducationHighSchool>
    </div>

</GenericSection>

</template>

<script>

import EducationHighSchool from "@/components/education/EducationHighSchool.vue"
import EducationBSc from "@/components/education/EducationBSc.vue"
import EducationMSc from "@/components/education/EducationMSc.vue"
import GenericSection from "./GenericSection.vue"

export default {
    components: { EducationHighSchool, EducationBSc, EducationMSc, GenericSection },

    mounted() {
        this.showEducationSection("msc");
    },

    methods: {

        hideAllSections() {
            let navbarItems = document.getElementsByClassName("school-navbar-item");
            let schoolContents = document.getElementsByClassName("school-content");

            for(let navbarItem of navbarItems) {
                navbarItem.classList.remove("active");
            }

            for(let schoolContent of schoolContents) {
                schoolContent.classList.add("hidden");
            }
        },

        showEducationSection(section) {

            this.hideAllSections();

            let navbarItem = document.getElementById("school-navbar-item-" + section);
            let schoolContent = document.getElementById("school-content-" + section);   

            navbarItem.classList.add("active");
            schoolContent.classList.remove("hidden");
        },
    },
}

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

    // For easy prototyping
    --padding: 10px;
    --bottom-border: 5px;

    background-color: $secondary-color;
    padding: 10px;
    padding-bottom: calc(var(--padding) - var(--bottom-border));

    &.active {
        font-weight: bold;
        border-bottom: var(--bottom-border) solid $secondary-color-dark;
    }
}

#school-content-container {
    background-color: $primary-color-dark;

    margin: 10px 0;
    padding: 10px;
}

</style>
