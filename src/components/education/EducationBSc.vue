<template>

<div>
    <div class="education-quote">
        “ Understanding the inner workings of the universe. “
    </div>

    <p>
        Physics and Astronomy not only gave me a better grasp on reality itself, but it also developed my problem-solving and maths skills which are universally applicable. 
    </p>

    <details>
        <summary> View all physics courses </summary>
        <div class="course-container">
            <div v-for="course in physicsCourses" :key="course" class="course-item">{{ course }}</div>
        </div>
    </details>

    <h2>Minor programming &amp; extracurricular courses</h2>

    <p>
        Although physics was interesting, it was not the right fit for me. 
        I needed a more practical challenge. 
        Thankfully, I was able to achieve this through the minor programming and several extracurricular courses. 
        These courses persuaded me to move away from physics and shift my attention to Computational Science. 
    </p>

    <details>
        <summary> View all extracurricular courses </summary>
        <div class="course-container">
            <div v-for="course in extraCourses" :key="course" class="course-item">{{ course }}</div>
        </div>
    </details>

</div>

</template>

<script>

export default {
    
    data() {
        return {
            physicsCourses: ["Klassieke mechanica", "Black holes"],
            extraCourses: ["Web app studio", "Programmeren 1"],
        }
    },

    mounted() {
        this.physicsCourses.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
        });
        this.extraCourses.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
        });
    },
}

</script>

<style lang="scss" scoped>
@import "@/components/education/education-styles.scss";

</style>
