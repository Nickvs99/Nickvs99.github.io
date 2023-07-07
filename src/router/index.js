import {nextTick} from "vue";

import { createRouter, createWebHistory } from "vue-router";

import { isValidEducation, isValidProject } from "./validation.js";
import ProjectDoc from "@/components/projects/ProjectDoc.vue";
import ProjectOverview from "@/components/projects/ProjectOverview.vue";

import { sleep } from "@/js/util.js";

const routes = [
    {
        path: "/",
        name: "index",
        component: ProjectOverview
    },
    {
        path: "/home",
        name: "home",
        component: ProjectOverview,
        meta: {
            title: "Home - Nick van Santen",
            description: "Landing page of the portfolio of Nick van Santen",
        },
    },
    {
        path: "/about-me",
        name: "about-me",
        component: ProjectOverview,
        meta: {
            title: "About me - Nick van Santen",
            description: "A summary of me"
        },
    },
    {
        path: "/projects",
        name: "projects",
        component: ProjectOverview,
        meta: {
            title: "Projects - Nick van Santen",
            description: "An overview of a diverse set of programming projects"},
    },
    {
        path: "/education",
        name: "edu",
        component: ProjectOverview,
        meta: {
            title: "Education - Nick van Santen",
            description: "Description of my academic degrees",
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: ProjectOverview,
        meta: {
            title: "Contact - Nick van Santen",
            description: "Contact form",
        },

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


router.beforeEach(to => {
    
    /**
     * Since this is a SPA and is published on github pages, directly going to any (besides the index) would not work.
     * Instead github pages would throw a 404 error. This then displays the 404.html in the public directory. 
     * This file redirects to the index page with a string query. This string query is catched here and the user is redirected
     * to its desire page.
     */
    if (to.query.redirect) {
        router.replace(to.query.redirect.replace(" ", "%20"));
    }
});

// Maps router name to a section id
const SECTION_MAP = {
    "home": "home-section",
    "about-me": "aboutme-section",
    "projects": "project-section",
    "edu": "education-section",
    "contact": "contact-section",
};
const DEFAULT_TITLE = "Portfolio - Nick van Santen";
const DEFAULT_DESCRIPTION = "A Computational Science master student at the University of Amsterdam. Has a background in physics and loves a challenge.";

router.afterEach(async (to, from) => {

    updateMetaTags(to);

    if(to.name in SECTION_MAP) {
        if(from.name == null) {
            // Scroll into view does not work on initial load, since, I suspect, that elements
            // still need to be loaded. Therefore, sleeping for a short time is required. 
            // Not sure why vue.nexttick does not work or why sleep(0) is also sufficient...
            await sleep(0);
        }

        scrollIntoView(SECTION_MAP[to.name]);
    }
});

function updateMetaTags(to) {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
        const descEl = document.querySelector("head meta[name=\"description\"]");
        descEl.setAttribute("content", to.meta.description || DEFAULT_DESCRIPTION);

    });
}

/**
 * Scrolls towards the associated region. A offset is applied such
 * that the navigation bar does not overlap with the section. 
 */
function scrollIntoView(id) {

    let target = document.getElementById(id);
    let targetPosition = target.getBoundingClientRect().top;

    let offset = document.getElementById("navbar").offsetHeight;
    let offsetPosition = targetPosition + window.pageYOffset - offset;

    window.scrollTo({top: offsetPosition, behavior: "smooth"});
}

export default router;
