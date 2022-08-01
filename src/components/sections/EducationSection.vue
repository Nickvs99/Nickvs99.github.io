<template>

<GenericSection id="education-section">
    
    <h1>Education</h1>
    <div id="school-navbar">
        <div class="school-navbar-item active">Msc Computational science</div>
        <div class="school-navbar-item">BSc Physics and Astronomy</div>
        <div class="school-navbar-item">High school</div>
    </div>

    <div id="school-content-container">
        <EducationMSc class="school-content"></EducationMSc>
        <EducationBSc class="school-content hidden"></EducationBSc>
        <EducationHighSchool class="school-content hidden"></EducationHighSchool>
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
}

</script>

<style lang="scss" scoped>

#education-section {
    background-color: $primary-color;
    color: $bg-color;
}

</style>
