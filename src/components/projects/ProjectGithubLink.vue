<template>

<a :href=href target="_blank" class="github-link">
    <img alt=href src="@/assets/icons/github-logo.png" class="github-link-img">
</a>

</template>

<script>

export default {
    props: {
        href: String,
    }
};

</script>

<style lang="scss">

.github-link {
    display: inherit;
}

.github-link-img {
    object-fit: cover;
    aspect-ratio: 1/1;
    width: 45px;
}

</style>