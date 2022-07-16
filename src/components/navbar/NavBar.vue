<template>

<div id="navbar" :class="{collapsed: isCollapsed}">

    <button id="menu-button" 
            :class="{hidden: !isCollapsed, active: menuActive}"
            @click="toggleMenu()"
            >
            Menu
    </button>

    <div id="navbar-collapsable-content" :class="{hidden: isCollapsed && !menuActive}">
        <NavBarItem content="Home" section_id="home-section" :class="{collapsed: isCollapsed}" @click="deactivateMenu"/>
        <NavBarItem content="About me" section_id="aboutme-section" :class="{collapsed: isCollapsed}" @click="deactivateMenu"/>
        <NavBarItem content="Projects" section_id="project-section" :class="{collapsed: isCollapsed}" @click="deactivateMenu"/>
        <NavBarItem content="Education" section_id="education-section" :class="{collapsed: isCollapsed}" @click="deactivateMenu"/>
        <NavBarItem content="Contact" section_id="contact-section" :class="{collapsed: isCollapsed}" @click="deactivateMenu"/>
    </div>
</div>

</template>

<script>

import NavBarItem from "@/components/navbar/NavBarItem.vue"
export default {
    components: {NavBarItem},

    data() {
        return {
            isCollapsed: false,
            menuActive: false,
            navbarItemsWidth: 0,
        }
    },

    mounted() {

        // Compute width of all navbar items before the items might be collapsed
        this.navbarItemsWidth = this.computeNavbarItemsWidth();
        
        window.addEventListener("resize", () => {
            this.isCollapsed = this.checkCollapse();
        });

        this.isCollapsed = this.checkCollapse();
    },

    methods: {

        /**
         * Checks if the navbar should be collapsed. It does this by comparing the width
         * of the app div to the total width of the navbar items.
         */
        checkCollapse() {
    
            return document.getElementById("app").offsetWidth <= this.navbarItemsWidth;
        },

        /**
         * Computes the width of all the navbar items combined. This is done to determine wheter the 
         * navbar should collapse.
         */
        computeNavbarItemsWidth() {

            let totalWidth = 0;

            let navbar = document.getElementById("navbar");
            let navbarItems = navbar.getElementsByClassName("navbar-item");

            for (let navbarItem of navbarItems) {
                totalWidth += navbarItem.offsetWidth;
            }

            return totalWidth;
        },

        toggleMenu() {
            this.menuActive = !this.menuActive;
        },

        deactivateMenu() {
            this.menuActive = false;
        },
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

#menu-button {
    display: inline-block;
    background-color: pink;
}

#menu-button.active {
    display: inline-block;
    background-color: yellow;
}

</style>
