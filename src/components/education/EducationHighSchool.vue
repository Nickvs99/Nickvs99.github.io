<template>

<div>

    <div class="education-quote">
        “ All stories start from small beginnings. “
    </div>

    <p>
        In high school, I developed my interest in STEM-related fields. 
        I achieved my atheneum diploma in 2017.
    </p>

    <details>
        <summary>View courses</summary>
        <ul class="course-container">
            <li v-for="course in courses" :key="course" class="course-item">{{ course }}</li>
        </ul>
    </details>
</div>

</template>

<script>

import { sortByString } from "@/js/sort.js";

export default {
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
        }
    },

    mounted() {
        this.courses.sort(sortByString);
    },
}


</script>

<style lang="scss" scoped>
@import "@/components/education/education-styles.scss";


</style>
