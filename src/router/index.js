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

/**
 * Since this is a SPA and is published on github pages, directly going to any (besides the index) would not work.
 * Instead github pages would throw a 404 error. This then displays the 404.html in the public directory. 
 * This file redirects to the index page with a string query. This string query is catched here and the user is redirected
 * to its desire page.
 */
router.beforeEach(to => {

    if (to.query.redirect) {
        router.replace(to.query.redirect.replace(" ", "%20"));
    }
});

export default router;
