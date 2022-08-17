<template>

<a :href=href target="_blank" class="github-link">
    <img alt=href src="@/assets/hyperlink-logos/github-logo.png" class="github-link-img">
</a>

</template>

<script>

export default {
    props: {
        href: String,
    }
}

</script>

<style lang="scss" scoped>

.github-link {
    @extend %clickable-primary;

    position:absolute;
    top: 10px;
    right: 10px;
}

.github-link-img {
    width: 50px;
}

</style>