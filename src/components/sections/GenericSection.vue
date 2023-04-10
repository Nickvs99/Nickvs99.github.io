<template>

<div class="section">

<slot/>

</div>

</template>

<script>

</script>

<style lang="scss">

.section {
    overflow: hidden;
    padding: 0 10% 1em 10%;
    position: relative;

    @media(max-width: --screen-width-sm){
        padding: 0 10px 1em 10px;
    }
}

</style>
