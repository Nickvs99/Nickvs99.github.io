import { createRouter, createWebHistory } from "vue-router";

import { educations } from "@/components/education/educations.js";
import ProjectDoc from "@/components/projects/ProjectDoc.vue";
import ProjectOverview from "@/components/projects/ProjectOverview.vue";

const routes = [
    {
        path: "/",
        name: "index",
        component: ProjectOverview
    },
    {
        path: "/projects/:project",
        name: "project",
        component: ProjectDoc,
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
        component: ProjectOverview,
        beforeEnter: (to, from) => {
            console.log(to, from, educations);

            //TODO check if education exists

            // reject the navigation
            // return false;
        },
    },
    {
        path: "/projects/:project/education/:education",
        name: "project-education",
        component: ProjectDoc,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
