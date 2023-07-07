<template>

<div class="popup">{{ text }}</div>

</template>

<script>

import { sleep } from "@/js/util.js";

export default {
    name: "PopUp",
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    methods: {
        async show() {
            this.$el.classList.add("show");

            await sleep(2000);

            this.hide();

        },
        hide() {
            this.$el.classList.remove("show");
        },
    }
};

</script>

<style lang="scss">

.light-theme .popup {
    --bg-color: var(--clr-primary);
    --color: var(--font-clr-light)
}

.dark-theme .popup {
    --bg-color: var(--font-clr-light);
    --color: var(--font-clr-dark);
}

.popup {
    opacity: 0;

    position: absolute;
    top: 110%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    
    width: max-content;
    max-width: 200px;

    font-size: 1rem;

    background-color: var(--bg-color);
    color: var(--color);

    text-align: center; 
    border-radius: 0.5em;
    padding: 0.5em;

    transition: opacity 0.5s ease-in;

    &::after {
        --arrow-width: 5px;
    
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: calc(-1 * var(--arrow-width));
        border-width: var(--arrow-width);
        border-style: solid;
        border-color: transparent transparent var(--bg-color) transparent;
    }
}

.show {
    opacity: 1;
    transition: opacity 1s ease-out;
}

</style>