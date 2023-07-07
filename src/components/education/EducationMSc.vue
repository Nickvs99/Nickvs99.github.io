<template>

<div>
    <h1>MSc Computational Science <ShareButton :resolve="{name: 'education'}"/></h1>
    
    <div class="education-quote">
        &ldquo;&nbsp;Observing the world through a computational and mathematical lens.&nbsp;&rdquo;
    </div>

    <EducationImage :src="require(`@/assets/images/lab_42.jpg`)" title="University of Amsterdam, Computational Science Lab"/>

    <p>
        Computational science focuses on developing computational models to explain, understand and improve on real-world problems.
        These problems are found in all domains of science: Biology, Chemistry, Ecology, Finance, Physics, and even Psychology. 
    </p>
    
    <p>
        I am currently in my second year of the joint degree at the University of Amsterdam and the Vrije Universiteit Amsterdam. 
    </p>

    <details>
        <summary>View all courses</summary>
        <ul class="course-container">
            <HexLi v-for="course in courses" :key="course">{{ course }}</HexLi>
        </ul>
    </details>

    <div class="icon-content-container">
        <div class="content">
            <SchoolIcon />
            <div>University of Amsterdam &amp; Vrije Universiteit Amsterdam</div>
        </div>
        <div class="content">
            <LocationIcon />
            <div>Amsterdam, The Netherlands</div>
        </div>
        <div class="content">
            <CalendarIcon />
            <div>2021-2023</div>
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
                "Introduction Computational Science",
                "Evolutionary Computing",
                "Seminars Computational Science",
                "Numerical Algorithms",
                "Stochastic Simulation",
                "Agent-Based Modelling",
                "Computational Finance",
                "Scientific Computing",
                "Computational Biology",
                "Complex System Simulation",
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
