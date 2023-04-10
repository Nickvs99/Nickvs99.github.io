<template>

<GenericSection id="navbar" :class="{collapsed: isCollapsed}">

    <button id="menu-button" class="navbar-item" 
            :class="{hidden: !isCollapsed, active: menuActive}"
            @click="toggleMenu()"
            >
            Menu
    </button>

    <div id="navbar-collapsable-content" :class="{'menu-active': isCollapsed && menuActive, collapsed: isCollapsed}">

        <NavBarItem v-for="item in  navbarItems" :key="item.content"
            :class="{collapsed: isCollapsed, active: item.section_id === currentActiveSection && !isCollapsed}"
            @click="deactivateMenu"
            :content="item.content"
            :section_id="item.section_id"
        />

    </div>
</GenericSection>

</template>

<script>
import NavBarItem from "@/components/navbar/NavBarItem.vue";
import GenericSection from "@/components/sections/GenericSection.vue";

export default {
    components: {NavBarItem, GenericSection},

    data() {
        return {
            isCollapsed: false,
            menuActive: false,
            navbarItemsWidth: 0,
            navbarItems: [
                {"content": "Home", "section_id": "home-section"},
                {"content": "About me", "section_id": "aboutme-section"},
                {"content": "Projects", "section_id": "project-section"},
                {"content": "Education", "section_id": "education-section"},
                {"content": "Contact", "section_id": "contact-section"},
            ],
            currentActiveSection: "",
        };
    },

    mounted() {
        window.addEventListener("resize", this.onResize);
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("click", this.onClick);

        this.setCurrentActiveSection();

        // Compute width of all navbar items before the items might be collapsed, but after the active item is styled
        this.navbarItemsWidth = this.computeNavbarItemsWidth();

        this.isCollapsed = this.checkCollapse();
    },

    unmounted() {
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("click", this.onClick);
    },

    methods: {

        /**
         * Checks if the navbar should be collapsed. It does this by comparing the available width
         * of the app div to the total width of the navbar items.
         */
        checkCollapse() {
    
            let app = document.getElementById("app");
            
            let navbar = document.getElementById("navbar");
            let paddingLeft = Math.ceil(parseFloat(getComputedStyle(navbar).paddingLeft));

            // minus 1 for some reason, otherwise there is a 1px range at which the items are not correctly collapsed
            return this.navbarItemsWidth >= (app.offsetWidth - paddingLeft - 1);
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

        setCurrentActiveSection() {
            
            let els = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 4);

            for (let el of els){
                if (el.classList.contains("section")) {
                    this.currentActiveSection = el.id;
                    return;
                }
            }

            console.error("No element with class 'section' found.");
        },

        onResize() {
            this.isCollapsed = this.checkCollapse();
        },

        onScroll() {
            this.setCurrentActiveSection();
        },

        onClick() {

            if (!this.menuActive) return;

            // Collapse menu when clicked outside of menu
            let target = event.target;
            if (!(target === this.$el || this.$el.contains(target))) {
                this.menuActive = false;
            }
        },
    }
};

</script>

<style lang="scss">

#navbar {
    background-color: var(--clr-primary);
    position: sticky;
    top: 0px;
    z-index: var(--index-foreground);

    padding-bottom: 0;
    padding-right: 0;
}

#navbar-collapsable-content {
    display: flex;

    &.collapsed {
        display: block;

        &.menu-active {
            max-height: 240px; /* TODO Ideally set through js, works for now */
            transition: max-height 0.5s ease-out;
        }
        &:not(.menu-active) {
            max-height: 0px;
            transition: max-height 0.25s ease-out;            
        }
    }
}

#menu-button {
    display: inline-block;
}

</style>
