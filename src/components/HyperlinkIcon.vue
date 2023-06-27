<template>

<a :href="`${href}`" class="anchor"  target=”_blank” > 

    <EquilateralShape class="hexagon" n="6"/>
    <img ref="img" :src="require(`@/${src_icon}`)" :alt="`${src_alt}`" class="icon-img">

</a>

</template>


<script>

import EquilateralShape from "@/components/shapes/EquilateralShape.vue";

export default {
    props: ["href", "src_icon", "src_alt"],
    components: {EquilateralShape},

    data () {
        return {
            iconWidth: 50,
            iconHeight: 50,
        };
    },

    mounted() {

        // Rescale img while maintaining original aspect ratio
        let img = this.$refs.img;

        // naturalWidth and naturalHeight have their values set once img has loaded
        img.onload = () => {
            let aspectRatio = img.naturalWidth / img.naturalHeight;

            if(img.naturalWidth > img.naturalHeight) {
                this.iconWidth = this.$el.offsetWidth / 2;
                this.iconHeight = this.iconWidth / aspectRatio;
            }
            else {
                this.iconHeight = this.$el.offsetWidth / 2;
                this.iconWidth = this.iconHeight / aspectRatio;
            }
        };
    },

    computed: {

    },
};

</script>

<style lang="scss" scoped>

.anchor {
    position: absolute;
}

.hexagon {
    @extend %clickable-primary-svg;

    width: 100%;

    stroke: var(--clr-primary-dark);
    stroke-width: 2px;
}

.icon-img {
    position: absolute;

    width: 50%;
    top: 25%;
    left: 25%;
}

</style>