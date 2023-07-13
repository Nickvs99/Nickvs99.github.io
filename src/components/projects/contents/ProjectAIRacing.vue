
<template>

<ParagraphImageLayout>
    <template #paragraph-start>
        <p>
            This project aimed to implement an evolutionary algorithms on a physics-based car controller to produce a self-driving racing car.             
        </p>
    </template>
    <template #image>
        <video autoplay muted loop>
            <source src="@/assets/projects/AI_racing.mp4" type="video/mp4">
            Video shows a car controlled through a neural network
        </video>
    </template>
    <template #paragraph-end>
        <h3>Car controller</h3>
        <p>
            The car is controlled through three inputs:
            <ul>
                <HexLi>Throttle, with reverse</HexLi>
                <HexLi>Brake</HexLi>
                <HexLi>Steering</HexLi>
            </ul>

            These inputs are either controlled through a neural network of by yourself.
        </p>
        <h3>Neural network</h3>
        <p>
            The neural network has an input layer consisting of the speed of the car and \( n \) vision rays, which
            detect the distance to the end of the track. These inputs are propogated through a set of hidden layers,
            which will produce three outputs, corresponding with the three inputs of the car controller.
        </p>
        <h3>Evolutionary algorithm</h3>
        <p>
            Evolution is the inspiration of evolutionary algorithms. In evolution, individuals with favourable properties are able to reproduce and pass on their genes to the next generation. Their genes are a set of instructions, which are expressed to determine the fitness of an individual. Mutations in the DNA can alter an individual's fitness, either positively or negatively. Beneficiary mutations increase the likelihood that an individual is able to reproduce. Thus, over many generations, this will result in an individual which is optimized to the environment.

            These mechanisms are captured through several steps in evolutionary algorithms. 
        </p>
        <ol>
            <li> A population of size \( N \) is created, where each agent is initialized with a random set of "DNA”. </li>
            <li> The fitness of each agent is evaluated. </li>
            <li> A  selection of agents is created. These agents are able to reproduce their genes. This selection process uses the fitness of the agents to determine the next generation. </li>
            <li> Mutations are applied to the DNA. </li>
            <li> Repeat steps 2-4 until a termination condition is met. </li>

        </ol>
        <p>
            The DNA of the agents are the weights and biases of the neural network. Through mutations, the weights and biases are altered. The fitness of the agent is determined by the amount of distance travelled from its starting point in a fixed time interval. 
        </p>
    </template>
</ParagraphImageLayout>

<ParagraphImageLayout>
    <template #paragraph-start>
        <h3>Research</h3>
        <p>
            The program was developed to allows for easy research into several hyperparameters of the program. 
            For example, research was done into the mutation rates and activation functions. Eventhough, the results
            are very crude, it can be seen that a non-zero mutation rate is required as was expected.            
        </p>
    </template>
    <template #image>
        <img src="@/assets/projects/AI_research.png" alt="Research into mutation rates and activation functions" class="align-with-h3" />
    </template>
    <template #paragraph-end>
        <h3>TODO</h3>
        There are still several improvements I want to make to the program.
        <ul>
            <HexLi>Increase the number of sensors. This could remove the wiggle behaviour of the car.</HexLi>
            <HexLi>Agent generalisation. Currently, in each generation, the agents start at the same starting point. This can results in agents only learning the start of the course and would thus not be able to drive any randomly generated track. A quick fix would be to pick a random starting point on the track. Random track generation would be even better but would require far more time.</HexLi>
            <HexLi>The current implementation of the Evolutionary Algorithm is not based on any previous research. I would like to implement the Evolutionary Algorithm from my MSc thesis. This showed very good performance, and should improve the learning rates of the agents.</HexLi>
            <HexLi>Car physics. Currently, the car feels slow and unresponsive. </HexLi>
        </ul>
    </template>
</ParagraphImageLayout>

</template>

<script>

import HexLi from "@/components/HexLi.vue";
import ParagraphImageLayout from "@/components/ParagraphImageLayout.vue";

export default {
    components: { HexLi, ParagraphImageLayout },
    mounted() {
        window.MathJax.typeset();
    },
};

</script>

<style>

@import "@/components/projects/project-styles.scss";

</style>