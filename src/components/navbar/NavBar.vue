<template>

<div id="navbar" :class="{collapsed: isCollapsed}">

    <button id="menu-button" class="navbar-item" 
            :class="{hidden: !isCollapsed, active: menuActive}"
            @click="toggleMenu()"
            >
            Menu
    </button>

    <div id="navbar-collapsable-content" :class="{'menu-active': isCollapsed && menuActive, collapsed: isCollapsed}">
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

<style lang="scss">

#navbar {
    background-color: $primary-color; 
    position: sticky;
    top: 0px;
    width: 100%;
}

#navbar-collapsable-content {
    background-color: $primary-color; 
    display: flex;
    justify-content: flex-end;
}

#navbar-collapsable-content.collapsed {
    display: block;
    position: absolute;
    overflow: hidden;
}

#navbar-collapsable-content.collapsed.menu-active {
    max-height: 240px; /* TODO Ideally set through js, works for now */
    transition: max-height 0.5s ease-out;
}

#navbar-collapsable-content.collapsed:not(.menu-active) { 
    max-height: 0px;
    transition: max-height 0.25s ease-out;
}

#menu-button {
    display: inline-block;
}

#menu-button.active {
    display: inline-block;
}

</style>
