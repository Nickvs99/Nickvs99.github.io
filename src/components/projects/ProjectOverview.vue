<template>

<div id="filter-project-cards-containter">
    <input id="filter-project-cards-input" class="filter-project-cards-item" type="text" placeholder="Search for project..." @input="updateListedProjects" v-model="filterString">
    
    <div class="filter-boxxes">
        <div class="filter-project-box filter-project-cards-item" @click="toggleDetails" ref="filterBox">

            <!-- Cancel default behaviour of details by toggling the open attribute again -->
            <details id="keyword-filter" ref="details" @click="toggleDetails">
                <summary>
                    Keywords
                </summary>

                <div id="keyword-container">
                    <div v-for="keyword in keywords" :key="keyword">
                        <label class="keyword-label">
                            <input type="checkbox" :value=keyword v-model="checkedKeywords" :checked='checkedKeywords.includes(keyword)' @change="updateListedProjects">
                            {{ keyword }}
                        </label>
                    </div>
                    
                    <div id="no-keywords" :class="{hidden: isKeywordMessageHidden}">
                        No keywords available
                    </div>
                </div>
            </details>
        </div>

        <button class="filter-project-box filter-project-cards-item arrow-sort" 
            :class="{ascending: sortAZ}"
            @click="toggleSortAZ"
        >
            A-Z
        </button>
        
        <button class="filter-project-box filter-project-cards-item arrow-sort" 
            :class="{ascending: sortYear}"
            @click="toggleSortYear"
        >    
            Year
        </button>
    </div>
</div>  

<div id="project-card-container">
    <ProjectCard v-for="project in displayedProjects" :key="project.title" 
        :title="project.title" 
        :description="project.description" 
        :keywords="project.keywords" 
        :contentSrc="project.contentSrc"
        :year="project.year">
    </ProjectCard>

    <div id="no-projects-message" :class="{hidden: isProjectMessageHidden}">
        All projects have been filtered out
    </div>
</div>

</template>

<script>

import ProjectCard from "@/components/projects/ProjectCard.vue";
import { projects } from "@/components/projects/projects.js";
import { sortByInt, sortByString } from "@/js/sort.js";

export default {
    components: { ProjectCard },
  
    data() {
        return {
            displayedProjects: [],
            projects: projects,
            filterString: "",
            keywords: [],
            checkedKeywords: [],
            sortAZ: false,
            sortYear: false,
        };
    },

    computed: {
        isProjectMessageHidden() {
            return this.displayedProjects.length != 0;
        } ,

        isKeywordMessageHidden() {
            return this.keywords != 0;
        }
    },

    mounted() {
        this.displayedProjects = this.projects;
        this.sortProjectKeyWords();
        this.setKeywords();

        window.addEventListener("click", this.onClick);
    },

    unmounted() {
        window.removeEventListener("click", this.onClick);
    },
 
    methods: {

        setKeywords() {
        
            this.keywords = [];
            for(let project of this.displayedProjects) {
                for(let keyword of project.keywords) {

                    if (this.keywords.includes(keyword)) {
                        continue;
                    }

                    this.keywords.push(keyword);
                }
            }
            this.keywords.sort(sortByString);
        },

        updateListedProjects() {
            this.displayedProjects = this.projects.filter(project => this.isProjectValid(project));
            this.setKeywords();
        },

        isProjectValid(project) {

            // Check if project satisfies all checked keywords
            for (let keyword of this.checkedKeywords) {
                if (!project.keywords.includes(keyword)) {
                    return false;
                }
            }

            // Check if the project title includes the search field text
            return project.title.toLowerCase().includes(this.filterString.toLowerCase());
        },

        /**
         * Sort the projects based on an attribute. This value should be a string.
         * Default is ascending order. Update the displayed projects with the changes.
         */
        sortProjectsByString(attr, ascending=true) {
            if (ascending) {
                this.projects.sort((a, b) => sortByString(a[attr], b[attr]));
            }
            else {
                this.projects.sort((a, b) => sortByString(b[attr], a[attr]));
            }

            this.updateListedProjects();
        },

        /**
         * Sort the projects based on an attribute. This value should be an number.
         * Default is ascending order. Update the displayed projects with the changes.
         */
        sortProjectsByInt(attr, ascending=true) {
            if (ascending) {
                this.projects.sort((a, b) => sortByInt(a[attr], b[attr]));
            }
            else {
                this.projects.sort((a, b) => sortByInt(b[attr], a[attr]));
            }

            this.updateListedProjects();
        },

        sortProjectKeyWords() {

            for (let project of this.projects) {
                project.keywords.sort(sortByString);
            }
        },

        toggleSortAZ() {
            this.sortAZ = !this.sortAZ;
            this.sortProjectsByString("title", this.sortAZ);
        },

        toggleSortYear() {
            this.sortYear = !this.sortYear;
            this.sortProjectsByInt("year", this.sortYear);
        },

        toggleDetails() {
            let el = this.$refs.details;

            if(el.hasAttribute("open")) {
                el.removeAttribute("open");
            }
            else {
                el.setAttribute("open", "");
            }
        },

        onClick() {

            let details = this.$refs.details;
            if (!details.hasAttribute("open")) return;

            let filterBox = this.$refs.filterBox;
            // Collapse menu when clicked outside of menu
            let target = event.target;
            if (!(target === filterBox || filterBox.contains(target))) {
                details.removeAttribute("open");
            }
        },
    }
};

</script>

<style scoped lang="scss">

#project-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    margin-top: 20px;
}

#filter-project-cards-containter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    min-height: 40px;
}

.filter-project-cards-item {
    @extend %border-sm;
}

#filter-project-cards-input {
    flex-grow: 9999; //https://stackoverflow.com/a/33174685

    color: var(--clr-primary);
}

.filter-boxxes {
    display: flex;
    flex-grow: 1;

    gap: inherit;
}

.filter-project-box {
    @extend %clickable-primary;

    color: var(--clr-light);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    position: relative;

    padding: 5px 10px;

    width: auto;
}

.arrow-sort {

    &:not(.ascending) {
        --content: "⬇"; // Down-arrow
    }    

    &.ascending {
        --content: "⬆"; // Up-arrow
    }
    
    &:after {
        content: var(--content);

        position: relative;
        bottom: 1px;
        left: 1px;

        font-size: 28px;
        font-weight: 200;
    }
}

#keyword-container {
    @extend %border-sm;

    background-color: var(--clr-primary);
    
    width: max-content;

    cursor: auto;

    position: absolute;
    top: 63px;
    left: 0px;
    
    padding: 10px;
    
    display: flex;
    flex-direction: column;
    gap: 5px;

    z-index: 1;
}

.keyword-label {
    cursor: pointer;
}

#no-projects-message {
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
