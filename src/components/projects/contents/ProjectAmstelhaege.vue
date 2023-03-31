<template>
<p>
    Amstelhaege was a group project, which tried to optimise a neighbourhood consisting of several types of houses.
    Each house has a particular worth depending on the surrounding free space. 
    The goal was to design the neighbourhood such that the total worth of the neighbourhood is maximised.
</p>

<p>
    Computing all possible configurations was impossible. 
    Therefore, several different algorithms were applied to attempt to find the optimal configuration. 
    A subset of these algorithms is briefly described. 
</p>

<img src="@/assets/projects/Amstelhaege.png" alt="An example image of an optimised neighbourhood." class="project-img" id="mandelbrot-img"/>

<h3>Random</h3>

<p>
    The houses are placed randomly on a grid. 
    This, of course, produces bad solutions. 
    However, the algorithm was very fast and can be used as an initial solution for other algorithms.
</p>

<h3>Greedy</h3>

<p>
    Each house is placed consecutively. 
    During each placement the house tests all possible locations. 
    This ensures that the currently placed house maximises its worth, but might sacrifice the total worth of the neighbourhood. 
</p>

<h3>Simulated annealing</h3>

<p>
    Starts with an initial solution provided by another algorithm. 
    It then applies mutations against the houses, such as swapping, rotating, or moving. 
    The mutation is applied if the total worth is improved. 
    If not, the mutation is applied with a probability \( p \). 
    This repeats \( n \) times. 
    For each step the probability \( p \) is decreased by an amount. 
</p>

<p>
    A negative mutation is sometimes accepted to allow the system to move out of a local maximum and, hopefully, into the global maximum. 
    By reducing \( p \) the system is less likely to make a negative mutation and therefore at low values of \( p \) the system will reach its local maximum. 
    By picking the right cooling scheme for \( p \) the system can reach its global maximum.
</p>

<h3>Evolutionary</h3>

<p>
    The Evolutionary algorithm builds from a set of initial configurations. 
    This set evolves over a number of generations. 
    At each generation, the configurations with a higher total worth have a higher probability to reproduce. 
    When a configuration reproduces it has a probability to mutate, allowing for the possibility of a higher total worth. 
</p>

<p>
    Since there are multiple initial configurations, there is more diversity in the configurations. 
    This allows for a broader search in the parameter space and for a better solution. 
</p>

<ProjectGithubLink href="https://github.com/Nickvs99/MCRT"></ProjectGithubLink>

</template>


<script>

import ProjectGithubLink from "@/components/projects/ProjectGithubLink.vue";

export default {
    components: {ProjectGithubLink},
};

</script>

<style lang="scss" scoped>

@import "@/components/projects/project-styles.scss";

</style>