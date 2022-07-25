<template>

    <div class="project-doc" :class="{hidden: this.disabled}">
        <h2 class="project-doc-title"> {{ title }} </h2>
        <p class="project-description"> {{ description }} </p>

        <div class="project-doc-keyword-container">
            <ProjectKeyword v-for="keyword in keywords" :key="keyword" :keyword="keyword"></ProjectKeyword>
        </div>

        <component :is="contentComponent"></component>
    </div>

</template>

<script>

import { defineAsyncComponent } from 'vue'
import ProjectKeyword from "@/components/projects/ProjectKeyword.vue"

export default {
    components: {ProjectKeyword},
    props: {
        title: String,
        keywords: Array,
        description: String,
        contentSrc: String, 
    },

    data() {
        return {
            disabled: true,
        }
    },

    mounted() {
        window.addEventListener("click", this.onClick);
    },

    unmounted() {
        window.addEventListener("click", this.onClick);
    },

    computed: {
        // Load dynamic component https://stackoverflow.com/a/64570209 
        contentComponent () {
            return defineAsyncComponent(() => import(`@/${this.contentSrc}`))
        }
    },

    methods: {

        onClick(event) {

            if(this.disabled) {
                return;
            }   

            // Disable component if the user clicked outside of the component and not on its associated project card
            if(!(this.$el === event.target || this.$el.contains(event.target) || this.$el.previousElementSibling === event.target || this.$el.previousElementSibling.contains(event.target))) {
                this.disabled = true;
            }
        }
    }
}

</script>

<style>

.project-doc {
    position: fixed;
    left:10px;
    top: 10px;

    background-color: white;
}

</style>
