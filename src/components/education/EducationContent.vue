<template>
   
<FadeTransition>
    <div class="education-content" :key="$route.params.education">
        <component :is="component"></component>
    </div>
</FadeTransition>


</template>

<script>

import { defineAsyncComponent } from "vue";

import FadeTransition from "@/components/transitions/FadeTransition.vue";

import { getEducationFromParams } from "./educations.js";

export default {

    components: { FadeTransition },
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
    background-color: var(--clr-primary-dark);

    margin-top: 10px;
    padding: 10px;

    overflow: auto;
}

</style>