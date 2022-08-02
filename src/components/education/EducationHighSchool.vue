<template>

<div>

    <h2>Not sure whether to include high school. </h2>

    <div class="education-quote">
        “ All stories start from small beginnings. “
    </div>

    <p>
        In high school, I developed my interest in STEM-related fields. 
        I achieved my atheneum diploma in 20XX.
    </p>

    <details>
        <summary>View courses</summary>
        <div class="course-container">
            <div v-for="course in courses" :key="course" class="course-item">{{ course }}</div>
        </div>
    </details>
</div>

</template>

<script>

export default {
    data() {
        return {
            courses: ["Physics", "Chemistry", "English"]
        }
    },

    mounted() {
        this.courses.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
        });
    },
}


</script>

<style lang="scss" scoped>
@import "@/components/education/education-styles.scss";


</style>
