import { createRouter, createWebHistory } from "vue-router";

import ProjectDoc from "@/components/projects/ProjectDoc.vue";
import ProjectSection from "@/components/projects/ProjectOverview.vue";

const routes = [
    {
        path: "/",
        component: ProjectSection
    },
    {
        path: "/projects/:project",
        component: ProjectDoc,
        beforeEnter: (to, from) => {
            console.log(to, from);

            //TODO check if project exists

            // reject the navigation
            // return false;
        },
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;
