import { createRouter, createWebHistory } from "vue-router";

import { isValidEducation, isValidProject } from "./validation.js";
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
        beforeEnter: to => {
            if (!isValidProject(to.params.project)) return {name: "index"};
        },
    },
    {
        path: "/education/:education",
        name: "education",
        component: ProjectOverview,
        beforeEnter: to => {
            if (!isValidEducation(to.params.education)) return {name: "index"};
        },
    },
    {
        path: "/projects/:project/education/:education",
        name: "project-education",
        component: ProjectDoc,
        beforeEnter: to => {
            let validEducation = isValidEducation(to.params.education);
            let validProject = isValidProject(to.params.project);

            if(validEducation && validProject) return true;
            if(validEducation && !validProject) return {name: "education", params: {education: to.params.education}};
            if(!validEducation && validProject) return {name: "project", params: {project: to.params.project}};
            if(!(validEducation && validProject)) return {name: "index"};
        },
    },
    {
        path: "/:catchAll(.*)",
        redirect: {name: "index"},
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
