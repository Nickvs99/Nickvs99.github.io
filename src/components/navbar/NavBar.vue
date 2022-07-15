<template>

<div id="navbar" :class="{collapsed: isCollapsed}">
    <NavBarItem content="Home" section_id="home-section"/>
    <NavBarItem content="About me" section_id="aboutme-section"/>
    <NavBarItem content="Projects" section_id="project-section"/>
    <NavBarItem content="Education" section_id="education-section"/>
    <NavBarItem content="Contact" section_id="contact-section"/>
</div>

</template>

<script>

import NavBarItem from "@/components/navbar/NavBarItem.vue"
export default {
    components: {NavBarItem},

    data() {
        return {
            isCollapsed: false,
        }
    },

    mounted() {

        window.addEventListener("resize", () => {
            this.isCollapsed = this.checkCollapse();
        });

        this.isCollapsed = this.checkCollapse();
    },

    methods: {

        /**
         * Checks if the navbar should be collapsed. It does this by looking at the top
         * values of all the navbar-items. If they do not all have the same value, then 
         * the items got shown in multiple rows and thus the navbar should be collapsed.
         */
        checkCollapse() {
            let navbar = document.getElementById("navbar");
            let navbarItems = navbar.getElementsByClassName("navbar-item");

            if (navbarItems.length == 0) {
                console.log("ERROR: no navbar items found.")
            }

            let navbarItemHeight = navbarItems[0].getBoundingClientRect().top;
            for (let i = 1; i < navbarItems.length; i++) {

                let tempHeight = navbarItems[i].getBoundingClientRect().top;

                if (tempHeight !== navbarItemHeight)
                {
                    return true;
                }
            }

            return false;
        }
    }
}

</script>

<style>

#navbar {
    position: sticky;
    top: 0px;
}

#navbar.collapsed {
    background-color: red;
}

</style>
