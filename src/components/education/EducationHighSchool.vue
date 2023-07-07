<template>

<div>

    <h1>High school <ShareButton :resolve="{name: 'education'}"/></h1>

    <div class="education-quote">
        &ldquo;&nbsp;All stories start from small beginnings.&nbsp;&rdquo;
    </div>
    
    <EducationImage :src="require(`@/assets/images/kaj_munk_college.jpg`)" title="University of Amsterdam"/>

    <p>
        In high school, I developed my interest in STEM-related fields. 
        I achieved my atheneum diploma in 2017.
    </p>

    <details>
        <summary>View courses</summary>
        <ul class="course-container">
            <HexLi v-for="course in courses" :key="course">{{ course }}</HexLi>
        </ul>
    </details>

    <div class="icon-content-container">
        <div class="content">
            <SchoolIcon />
            <div>Kaj Munk College</div>
        </div>
        <div class="content">
            <LocationIcon />
            <div>Hoofddorp, The Netherlands</div>
        </div>
        <div class="content">
            <CalendarIcon />
            <div>2011-2017</div>
        </div>
    </div>
</div>

</template>

<script>

import { sortByString } from "@/js/sort.js";
import HexLi from "@/components/HexLi.vue";

import ShareButton from "@/components/ShareButton.vue";

import EducationImage from "./EducationImage.vue";

import CalendarIcon from "@/assets/icons/CalendarIcon.vue";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import SchoolIcon from "@/assets/icons/SchoolIcon.vue";

export default {
    components: { CalendarIcon, EducationImage, HexLi, LocationIcon, ShareButton, SchoolIcon},
    data() {
        return {
            courses: [
                "Engels",
                "Nederlands",
                "Rekenen",
                "Culturele en Kunstzinnige Vorming",
                "Biologie",
                "Natuurkunde",
                "Scheikunde",
                "Wiskunde B",
                "Wiskunde D",
                "Economie",
                "Algemene Natuurwetenschappen",
                "Maatschappijleer",
            ],
        };
    },

    mounted() {
        this.courses.sort(sortByString);
    },
};


</script>

<style lang="scss" scoped>
@import "@/components/education/education-styles.scss";


</style>
