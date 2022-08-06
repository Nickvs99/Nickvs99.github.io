<template>

<div>
    <div class="education-quote">
        &ldquo;&nbsp;Observing the world through a computational and mathematical lens.&nbsp;&rdquo;
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
