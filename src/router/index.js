import { createRouter, createWebHistory } from "vue-router";

import { educations } from "@/components/education/educations.js";
import EducationComponent from "@/components/education/EducationComponent.vue";
import ProjectDoc from "@/components/projects/ProjectDoc.vue";
import ProjectOverview from "@/components/projects/ProjectOverview.vue";

const routes = [
    {
        path: "/",
        name: "index",
        components: {
            projects: ProjectOverview,
            education: EducationComponent,
        },
        props: {
            education: {educationObj: educations[0]},
        }
    },
    {
        path: "/projects/:project",
        name: "project",
        components: {
            projects: ProjectDoc,
            education: EducationComponent
        },
        props: {
            education: {educationObj: educations[0]}
        },
        beforeEnter: (to, from) => {
            console.log(to, from);

            //TODO check if project exists

            // reject the navigation
            // return false;
        },
    },
    {
        path: "/education/:education",
        name: "education",
        components: {
            projects: ProjectOverview,
            education: EducationComponent,
        },
    },
    {
        path: "/projects/:project/education/:education",
        name: "project-education",
        components: {
            projects: ProjectDoc,
            education: EducationComponent,
        },
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
