<template>
   
<div class="education-content">
    <component :is="component"></component>
</div>

</template>

<script>

import { defineAsyncComponent } from "vue";

import { getEducationFromParams } from "./educations.js";

export default {

    data() {
        return {
            title: "",
            componentPath: "",
        };
    },
    mounted() {
        this.initComponent();
    },
    watch: {
        $route() {
            this.initComponent();
        }
    },
    computed: {

        component () {
            if(this.componentPath === "") return;
            return defineAsyncComponent(() => import(`@/${this.componentPath}`));
        }
    },

    methods: {
        initComponent() {
            this.education = getEducationFromParams(this.$route.params.education);
            this.title = this.education.title;
            this.componentPath = this.education.componentPath;
        },
    }
};

</script>

<style lang="scss">


.education-content {
    background-color: $primary-color-dark;

    margin: 10px 0;
    padding: 10px;
}

</style>