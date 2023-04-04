<template>

<div>

    <div class="education-quote">
        &ldquo;&nbsp;All stories start from small beginnings.&nbsp;&rdquo;
    </div>

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
</div>

</template>

<script>

import { sortByString } from "@/js/sort.js";
import HexLi from "@/components/HexLi.vue";

export default {
    components: {HexLi},
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
