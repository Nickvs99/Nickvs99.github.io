<template>
   
<div class="education-content">
    <component :is="component"></component>
</div>

</template>

<script>

import { defineAsyncComponent } from "vue";

import { educations } from "./educations.js";

export default {

    props: {
        educationObj: {
            type: Object,
        }
    },
    data() {
        return {
            title: "",
            componentPath: "",
        };
    },
    mounted() {
        this.education = this.educationObj;
        if(!this.education) {
            this.education = this.getEducationFromParam();
        }

        this.initComponent();
    },
    watch: {
        $route() {
            this.education = this.getEducationFromParam();
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
            this.title = this.education.title;
            this.componentPath = this.education.componentPath;
        },

        getEducationFromParam() {
            if(!this.$route.params.education) return educations[0];
            
            return educations.find(item => item.title == this.$route.params.education);
        }
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