<template>

<ParagraphImageLayout>
    <template #paragraph-start>
        <p>A portfolio website of me created with the Vue javascript framework.</p>

        <p>View the website at <a href="https://nickvs99.github.io" target="_blank">https://nickvs99.github.io</a>. </p>
    </template>
</ParagraphImageLayout>

</template>

<script>

import ParagraphImageLayout from "@/components/ParagraphImageLayout.vue";

export default {
    components: { ParagraphImageLayout },
};

</script>
