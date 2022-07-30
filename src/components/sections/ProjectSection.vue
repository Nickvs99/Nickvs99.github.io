<template>

<GenericSection id="project-section">
    <h1>Projects</h1>

    <div id="filter-project-cards-containter">
        <input id="filter-project-cards-input" class="filter-project-cards-item" type="text" placeholder="Search for project..." @input="updateListedProjects" v-model="filterString">
        
        <div class="filter-project-box filter-project-cards-item">
            <details id="keyword-filter" >
                <summary>
                    Keywords
                </summary>

                <div id="keyword-container">
                    <div v-for="keyword in keywords" :key="keyword">
                        <label>
                            <input type="checkbox" :value=keyword v-model="checkedKeywords" :checked='checkedKeywords.includes(keyword)' @change="updateListedProjects">
                            {{ keyword }}
                        </label>
                    </div>
                </div>
            </details>
        </div>

        <div id="sort-projects-alphabetical" class="filter-project-box filter-project-cards-item">
            <label>
                A-Z
                <input class="checkbox-sort" type="checkbox" v-model="sortAZ" @change="sortProjectsByString('title', sortAZ)">
            </label>
        </div>
        
        <div id="sort-projects-alphabetical" class="filter-project-box filter-project-cards-item">
            <label>
                Year
                <input class="checkbox-sort" type="checkbox" v-model="sortYear" @change="sortProjectsByInt('year', sortYear)"/>
            </label>
        </div>
    </div>  

    <div id="project-card-container">
        <ProjectCard v-for="project in displayedProjects" :key="project" 
            :title="project.title" 
            :description="project.description" 
            :keywords="project.keywords" 
            :contentSrc="project.contentSrc"
            :year="project.year">
        </ProjectCard>
    </div>

</GenericSection>

</template>

<script>

import GenericSection from "./GenericSection.vue"
import ProjectCard from "@/components/projects/ProjectCard.vue"

export default {
  components: { GenericSection, ProjectCard },
  
  data() {
    return {
      displayedProjects: [],
      projects: [
        {
            title: "MusicMatch",
            description: "A web app that provides the ability to easily compare music tastes between people.",
            keywords: ["Python", "Django", "js", "css", "html"],
            contentSrc: "components/projects/contents/ProjectMusicMatch.vue",
            year: 2012,
        },
        {
            title: "Living World",
            description: "A procedurally generated tile-based world inhabited by cars and boats.",
            keywords: ["Unity", "C#"],
            contentSrc: "components/projects/contents/ProjectLivingWorld.vue",
            year: 0,
        },
        {
            title: "Boids",
            description: "Simulate flocking behaviour of bird like objects.",
            keywords: ["C++"],
            contentSrc: "components/projects/contents/ProjectBoids.vue",
            year: 83,
        },
        {
            title: "Mandelbrot set",
            description: "An interactive version of the Mandelbrot set",
            keywords: ["C++"],
            contentSrc: "components/projects/contents/ProjectMandelbrot.vue",
            year: 2929,
        },
        {
            title: "Amstelhaege",
            description: "Solving the unsolvable. Applying several optimalization techniques to find an optimal neighbourhood.",
            keywords: ["Python"],
            contentSrc: "components/projects/contents/ProjectTemp.vue",
            year: 183838,
        },
        {
            title: "MCRT",
            description: "Simulating photons through an atmosphere with Monte Carlo Radiative Transfer simulation.",
            keywords: ["C#"],
            contentSrc: "components/projects/contents/ProjectMCRT.vue",
            year: 2929,
        },
        {
            title: "Portfolio website",
            description: "A portfolio website of me :)",
            keywords: ["Vue", "js", "css", "html"],
            contentSrc: "components/projects/contents/ProjectPortfolio.vue",
            year: 91928384,
        },
        {
            title: "Processing projects",
            description: "A selection of my earliest projects created with Processing.",
            keywords: ["Processing"],
            contentSrc: "components/projects/contents/ProjectProcessing.vue",
            year: 12345678,
        },
      ],
      filterString: "",
      keywords: [],
      checkedKeywords: [],
      sortAZ: false,
      sortYear: false,
    }
  },

  mounted() {
    this.displayedProjects = this.projects;
    this.keywords = this.getKeywords();
  },
 
  methods: {

    getKeywords() {
        
        let keywords = []
        for(let project of this.projects) {
            for(let keyword of project.keywords) {

                if( keywords.includes(keyword) ) {
                    continue;
                }

                keywords.push(keyword);
            }
        }

        return keywords;
    },

    updateListedProjects() {
        this.displayedProjects = this.projects.filter(project => this.isProjectValid(project))
    },

    isProjectValid(project) {

        // Check if project satisfies all checked keywords
        for (let keyword of this.checkedKeywords) {
            if (!project.keywords.includes(keyword)) {
                return false;
            }
        }

        // Check if the project title includes the search field text
        return project.title.toLowerCase().includes(this.filterString)
    },

    /**
     * Sort the projects based on an attribute. This value should be a string.
     * Default is ascending order. Update the displayed projects with the changes.
     */
    sortProjectsByString(attr, ascending=true) {
        if (ascending) {
            this.projects.sort((a, b) => this.sortFunctionString(a, b, attr))
        }
        else {
            this.projects.sort((a, b) => this.sortFunctionString(b, a, attr))
        }

        this.updateListedProjects();
    },

    sortFunctionString(a, b, attr) {
        return a[attr].toLowerCase() > b[attr].toLowerCase() ? 1 : -1;
    },

    /**
     * Sort the projects based on an attribute. This value should be an number.
     * Default is ascending order. Update the displayed projects with the changes.
     */
    sortProjectsByInt(attr, ascending=true) {
        if (ascending) {
            this.projects.sort((a, b) => this.sortFunctionInt(a, b, attr))
        }
        else {
            this.projects.sort((a, b) => this.sortFunctionInt(b, a, attr))
        }

        this.updateListedProjects();
    },

    sortFunctionInt(a, b, attr) {
        return a[attr] - b[attr];
    },
  }
}

</script>

<style scoped lang="scss">

#project-section {
    background-color: $bg-color;
}

h1 {
    color: $primary-color;
}

#project-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

    margin: 20px 0;
}

#filter-project-cards-containter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

.filter-project-cards-item {
    height: 40px;

    border: 2px solid $primary-color-dark;
    border-radius: 5px;
}

#filter-project-cards-input {
    flex-grow: 1;

    color: $primary-color;
    font-size: $md-font-size;

    padding: 5px 10px;

    &::placeholder{
        color: $primary-color;
    }

    @media(max-width: $md-screen-width) {
        width: 100%;
    }
}

.filter-project-box {
    background-color: $primary-color;
    color: $bg-color;

    display: flex;
    align-items: center;

    position: relative;

    padding: 5px 10px;

    width: auto;

    &:hover {
        background-color: $primary-color-dark;
    }
}

.checkbox-sort {
    visibility: hidden; // Hide default checkbox

    &:not(:checked) {
        --content: "\1F81B"; // Down-arrow
    }    

    &:checked {
        --content: "\1F819"; //Up-arrow
    }
    
    &:after {
        content: var(--content);

        position: relative;
        bottom: 10px;

        font-size: 24px;
        font-weight: 200;
        
        color: $bg-color;
        visibility: visible;
    }
}

#keyword-container {
    background-color: $primary-color;
    
    width: max-content;
    
    position: absolute;
    top: 63px;
    left: 0px;
    
    padding: 10px;
  
    border: 2px solid $primary-color-dark;
    border-radius: 5px;
    
    display: flex;
    flex-direction: column;
    gap: 5px;

    z-index: 1;
}

</style>
