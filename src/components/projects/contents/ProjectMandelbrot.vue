<template>

<ParagraphImageLayout>
    <template #image>
        <img src="@/assets/projects/Mandelbrotset.png" alt="Image shows the mandelbrot set in gray scale." id="mandelbrot-img"/>

    </template>
    <template #paragraph-end>
        <p>The Mandelbrot set is one of the most well-known fractals. It is generated through a simple formula</p>

        <p>$$ z_{n+1} = z_n + c, $$</p>

        <p>where \( c \) is any complex number and \( z_0 = 0 \). Depending on \( c \), \( z \) will either grow to infinity or stay bounded. </p>

        <p>
            It can be seen that once the modulus of \( z_n \) becomes larger than 2, it will always grow to infinity.
            The number of iterations needed before \( z \) reaches this threshold is used as the colour scale for this image, where white represents a large number of iterations, while black represents a low number of iterations.
            Non-diverging values of \( c \) are coloured black for aesthetics.
        </p>
    </template>
</ParagraphImageLayout>

</template>

<script>

import ParagraphImageLayout from "@/components/ParagraphImageLayout.vue";

export default {
    components: { ParagraphImageLayout },
    mounted() {
        window.MathJax.typeset();
    }
};

</script>
