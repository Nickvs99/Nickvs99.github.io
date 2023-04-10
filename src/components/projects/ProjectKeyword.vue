<template>

    <div class="project-keyword">
        {{ keyword }}
    </div>

</template>

<script>

export default {
    props: {
        keyword: String,
    }
};

</script>

<style lang="scss">

.project-keyword {
    background-color: var(--clr-secondary);
    color: var(--clr-light);
    border-radius: 10px;
    display: inline-block;
    margin: 0 10px 5px 0;
    padding: 5px 10px;
}

</style>