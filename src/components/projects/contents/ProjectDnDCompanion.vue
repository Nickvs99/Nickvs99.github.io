<template>

<ParagraphImageLayout>
    <template #paragraph-start>
        <p>
            A static website built with Vue. The intent was to create a minimalistic website, which lets players
            easily view information about a DnD campaign. The site would show character data, lore, maps, calendar data, session recaps, etc.
        </p>
        <p>
            The site was created such that it is very easy to create new pages/content. Furthermore, the pages
            can be easily styled through themes.
        </p>
        <p>
            You can view the site at <a href="https://nickvs99.github.io/DnD-campaign-companion/" target="_blank">nickvs99.github.io/DnD-campaign-companion</a>
        </p>
    </template>
</ParagraphImageLayout>
</template>

<script>

import ParagraphImageLayout from "@/components/ParagraphImageLayout.vue";

export default {
    components: { ParagraphImageLayout },
};

</script>

<style lang="scss" scoped>

</style>
