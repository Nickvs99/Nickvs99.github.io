<template>
    <div  class="img-container">
        <img :src="src" class="img-education" />
        <div class="img-education-title">{{ title }}</div>
    </div> 
    
</template>

<script>

export default {
    props: {
        "src": {
            required: true,
            type: String,
        },
        "title": {
            required: false,
            type: String,
        }
    },
};

</script>

<style lang="scss">

.img-container {
    position: relative;
    float: right;
    
    width: 50%;

    margin: 0 10px 10px 0;

    &::after{
        content: "";
        position: absolute;
        inset: 0;

        background: linear-gradient(
            0deg, 
            rgba(0,0,0,0.5),
            rgba(0,0,0,0) 50%
        );
    }

    @media(max-width: $screen-width-lg) {
        display: none;
    }

}

.img-education {
    max-width: 100%;
}

.img-education-title {
    position: absolute;
    bottom: 1em;
    left: 1em;

    z-index: 1;
}

</style>