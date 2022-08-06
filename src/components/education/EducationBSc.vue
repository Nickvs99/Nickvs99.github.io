<template>

<div>
    <div class="education-quote">
        &ldquo;&nbsp;Understanding the inner workings of the universe.&nbsp;&rdquo;
    </div>

    <p>
        Physics and Astronomy not only gave me a better grasp on reality itself, but it also developed my problem-solving and maths skills which are universally applicable. 
    </p>

    <p>
        My bachelor thesis was about the vertical structure of protoplanetary disks and especially on reconciling the mismatch between observed and simulated grain radii within the disk.
        You can read more about the project on my <a href="./docs/Thesis - Nick van Santen.pdf" download>thesis</a>.
    </p>

    <details>
        <summary> View all physics courses </summary>
        <ul id="physics-container" class="course-container">
            <li v-for="course in physicsCourses" :key="course" class="course-item">{{ course }}</li>
        </ul>
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
        <ul class="course-container">
            <li v-for="course in extraCourses" :key="course" class="course-item">{{ course }}</li>
        </ul>
    </details>

</div>

</template>

<script>

import { sortByString } from "@/js/sort.js";

export default {
    
    data() {
        return {
            physicsCourses: [
                "Academische Vaardigheden en Tutoraat",
                "Speciale Relativiteitstheorie / Klassieke Mechanica 1",
                "Wiskunde 1A",
                "Practicum 1A",
                "Sterrenkunde 1",
                "Wiskunde 1B",
                "Inleiding Programmeren voor Natuurkunde / Sterrenkunde 1",
                "Trillingen, Golven en Optica",
                "Practicum 1B",
                "Wiskunde 1D",
                "Elektriciteit en Magnetisme",
                "Quantumfysica 1",
                "Project Natuurkunde / Sterrenkunde 1",
                "Gecondenseerde Materie 1",
                "Thermische Fysica", 
                "Project Natuurkunde / Sterrenkunde 2",
                "Wiskunde 1C",
                "Planetary Systems",
                "Statistische fysica",
                "Research practicum",
                "Inleiding Programmeren voor Natuurkunde / Sterrenkunde 2",
                "Wiskunde N2",
                "Klassieke Mechanica / Quantummechanica 2",
                "Speciale Relativiteitstheorie / Elektrodynamica",
                "Black Holes and Compact Stars",
                "Introduction to Cosmology",
                "Quantum Mechanica: Structuur der Materie",
                "Bachelor Thesis",
            ],
            extraCourses: [
                "Fulltime Programmeren 1",
                "Fulltime Programmeren 2",
                "Fulltime Web App Studio",
                "Programmeertheorie",
                "Algoritmen en Complexiteit",
                "Modelling and Simulation",
            ],
        }
    },

    mounted() {
        this.physicsCourses.sort(sortByString);
        this.extraCourses.sort(sortByString);
    },
}

</script>

<style lang="scss" scoped>
@import "@/components/education/education-styles.scss";


#physics-container { 
    // Unique minsize due to the very long course names
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}
</style>
