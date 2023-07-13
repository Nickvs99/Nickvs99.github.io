<template>

<ParagraphImageLayout>
    <template #paragraph-start>
        <p>
            Embryonic development is a complex process that involves several phases before a fullygrown life form emerges. During this process, limbs, organs, sensory systems and other
            complex features develop. To better understand the origin of these features, it is important to first understand the initial phases of embryonic development. One of these
            phases is the emergence of bilateral symmetry. The MSc thesis focussed on optimizing the parameters of sixteen proposed networks, describing the asymmetric gene expression of a
            <i>Nematostella vectensis</i> embryo. 
        </p>
    </template>
    <template #image>
        <video autoplay muted loop>
            <source src="@/assets/projects/BMP_timelapse.mp4" type="video/mp4">
            Video shows the creation of an asymmetric gene expression
        </video>       
    </template>
    <template #paragraph-end>
        The models described the gene expressions through a set of partial differential equations on a computational mesh. The parameters of the models were optimized through an evolutionary algorithm in an attempt to replicate the gene expression of microscopy images. The evolutionary algorithm
        was succesfully able to reproduce the observed expression profiles. You can read more about the entire process in my <a href="/docs/MSc Thesis - Nick van Santen.pdf" download>MSc thesis</a>.
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
