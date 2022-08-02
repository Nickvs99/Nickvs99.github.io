<template>

<div>
    <div class="education-quote">
        " Observing the world through a computational and mathematical lens. "
    </div>

    <p>
        Computational science focuses on developing computational models to explain, understand and improve on real-world problems.
        These problems are found in all domains of science: Biology, Chemistry, Ecology, Finance, Physics, and even Psychology. 
    </p>
    
    <p>
        I am currently in my second year of the joint degree at the University of Amsterdam and the Vrije Universiteit Amsterdam. 
    </p>

    <details>
        <summary>View all courses</summary>
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
            courses: ["Computational Finance", "Computational Biology"]
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
