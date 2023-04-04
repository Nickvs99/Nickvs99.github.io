<template>

<div class="project-doc-content-container">
    <p>
        My programming experience started due to the very enthusiastic YouTuber <a href="https://www.youtube.com/c/TheCodingTrain" target="_blank">The coding train</a>.
        He learned me the fundamentals to start working on my very own small visual projects. 
    </p>

    <div>
        <h3>Random painting</h3>

        <video class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Random_painting.mp4" type="video/mp4">
            Video shows a canvas which is slowly painted with randomly coloured circles.
        </video>

        <p>
            The first project I still have on my hard drive. 
            A simple program which draws randomly coloured circles on the screen every frame. 
            It was simple, but it was mine! The program allowed for tweaking of the colours, circle radii, and the number of circles placed per frame. 
            At the time, it was very fun to see your creation come to life. 
        </p>
    </div>
    
    <div>
        <h3>Bubbles</h3>

        <video class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Bubbles.mp4" type="video/mp4">
            Video shows bubbles moving around.
        </video>

        <p>
            Bubbles was the first program with some sort of interactivity. 
            The user could place their own bubbles on the screen. 
            This project also made me learn what classes are and how they can be applied to your code.
        </p>
    </div>

    <div>
    <h3>Firework</h3>

        <video class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Firework.mp4" type="video/mp4">
            Video shows interactive firework.
        </video>

        <p>
            Firework was another interactive program. 
            The user could manually fire of fireworks and let them explode with their mouse. 
            It helped me learn with interactions between classes.
        </p>
    </div>

    <div>
    <h3>Pong</h3>

        <video class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Pong.mp4" type="video/mp4">
            Video shows the classic game pong.
        </video>

        <p>
            The next step was to create my first game: The classic game Pong.
            It's a little rough around the edges, but is able to capture the essence of the game.
            It was the first time I had to design different program states, such as the title screen, a pause screen and the actual game scene. 
        </p>
    </div>

    <div>
        <h3>Solar system</h3>

        <video class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Solarsystem.mp4" type="video/mp4">
            Video shows a N-body simulation.
        </video>

        <p>
            This program performs a N-body simulation. 
            The planets are affected by Newtonian gravity. 
            This gravity updates the acceleration of the body, which in turn modify the velocity and position. 
            The velocity and position are computed with Euler integration. 
            As can be seen no collision detection was performed. 
        </p>
    </div>

    <div>
        <h3>Tree tent puzzle</h3>

        <video id="tree-tent-puzzle-video" class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Tree_tent_puzzle.mp4" type="video/mp4">
            Video shows the solving of a tree tent puzzle.
        </video>

        <p>
            The tree tent puzzle was the first program which actually had any purpose. 
            It was designed to solve tree tent puzzles. 
            The rules of the puzzle are simple. 
        </p>

        <ul>
            <HexLi>Each tree needs a tent adjacent to it. This is a one to one relation.</HexLi>
            <HexLi>Tents can not touch each other horizontally, vertically, or diagonally.</HexLi>
            <HexLi>Each row and column can only have a fixed number of tents as displayed by the number next to the grid.</HexLi>
        </ul>

        <p>
            The program solved the problems through an extensive number of if statements. 
            No special techniques were applied such as depth based search, or deep learning. 
        </p>
    </div>

    <div>
        <h3>Shortest distance</h3>

        <video class="project-img" autoplay muted loop>
            <source src="@/assets/projects/Shortest_distance.mp4" type="video/mp4">
            Video shows a brute force method to compute the shortest distnace between a set of random points.
        </video>

        <p>
            The shortest distance program tries to compute the shortest distance between a set of random points. 
            It does this by naively brute forcing all possible permutations. 
            No techniques such as simulated annealing were applied.  
        </p>
    </div>

</div>

</template>

<script>

import HexLi from "@/components/HexLi.vue";

export default {
    components: { HexLi },
    mounted() {
        document.getElementById("tree-tent-puzzle-video").playbackRate = 0.1;
    }
};

</script>

<style lang="scss" scoped>

@import "@/components/projects/project-styles.scss";

.project-doc-content-container {
    display: flex;
    flex-direction: column;
}

</style>