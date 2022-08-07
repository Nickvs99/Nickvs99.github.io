<template>

<a :href="`${href}`" class="anchor hexagon-icon"  target=”_blank” :style="cssProps"> 

    <EquilateralShape n="6" :radius=radius offset="30"/>
    <img ref="img" :src="require(`@/${src_icon}`)" :alt="`${src_alt}`" class="icon-img">

</a>

</template>


<script>

import EquilateralShape from "@/components/shapes/EquilateralShape.vue"

export default {
    props: ["href", "src_icon", "src_alt"],
    components: {EquilateralShape},

    data () {
        return {
            radius: 50,
            iconWidth: 50,
            iconHeight: 50,
        }
    },

    mounted() {

        // Rescale img while maintaining original aspect ratio
        let img = this.$refs.img;

        // naturalWidth and naturalHeight have their values set once img has loaded
        img.onload = () => {
            let aspectRatio = img.naturalWidth / img.naturalHeight;

            if(img.naturalWidth > img.naturalHeight) {
                this.iconWidth = this.radius;
                this.iconHeight = this.iconWidth / aspectRatio;
            }
            else {
                this.iconHeight = this.radius;
                this.iconWidth = this.iconHeight / aspectRatio;
            }
        }
    },

    computed: {
        cssProps() {
            return {
                '--icon-width': this.iconWidth + "px",
                '--icon-height': this.iconHeight + "px",

                // Center icon
                '--icon-offset-left': (this.radius - this.iconWidth / 2) + "px",
                '--icon-offset-bottom': (this.radius - this.iconHeight / 2) + "px",
            }
        }
    },
}

</script>

<style lang="scss" scoped>

.anchor {
    position: absolute;
}

.hexagon-icon {
    @include clickable($primary-color, $is-svg: true);

    stroke: $primary-color-dark;
    stroke-width: 2px;
}

.icon-img {
    position: absolute;

    bottom: var(--icon-offset-bottom);
    left: var(--icon-offset-left);

    width: var(--icon-width);
    height: var(--icon-height);
}

</style>