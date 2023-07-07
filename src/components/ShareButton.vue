<template>

<div class="share-button-container">
    <LinkIcon v-press @click=copyToClipboard role="button" tabindex="0"/>
    <PopUp text="URL copied" ref="popup"/>
</div>

</template>

<script>

import LinkIcon from "@/assets/icons/LinkIcon.vue";
import PopUp from "./PopUp.vue";

export default {
    name: "ShareButton",
    components: { LinkIcon, PopUp },
    props: {
        resolve: {
            type: Object,
            required: true,
        }
    },
    computed: {
        url() {
            return window.location.origin + this.$router.resolve(this.resolve).path;   
        }
    },
    methods: {
        async copyToClipboard() {
            try {
                await navigator.clipboard.writeText(this.url);
                this.$refs.popup.show();
                console.log("Text or Page URL copied");
            }
            catch (err) {
                console.error("Failed to copy: ", err);
            }
        }
    }
};

</script>

<style lang="scss" scoped>
.share-button-container {
    position: relative;
    display: inline-block;
}

svg {    
    width: 1em;
    rotate: -45deg;

    vertical-align: sub;
}

.light-theme svg{
    @extend %clickable-primary-svg;
}

.dark-theme svg { 
    fill: var(--font-clr-light);
    cursor: pointer;
}

</style>