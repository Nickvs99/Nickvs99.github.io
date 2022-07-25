<template>

    <div class="project-card">
        <h2 class="project-title"> {{ title }} </h2>
        <p class="project-description"> {{ description }} </p>

        <div class="project-keyword-container">
            <div v-for="keyword in keywords" :key="keyword" class="project-keyword">
                {{ keyword }}
            </div>
        </div>
    </div>

</template>

<script>

export default {
    
    props: {
        title: String,
        keywords: Array,
        description: String,
    },
}

</script>

<style>

.project-card {
    background-color: tomato;
}

</style>