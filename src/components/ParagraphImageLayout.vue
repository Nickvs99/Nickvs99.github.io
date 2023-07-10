<template>

<div class="paragraph-image-container">

    <div v-if="isCollapsed" class="collapsed paragraph">
        <div>
            <slot name="paragraph-start"/>
        </div>
        <div class="p-image">
            <slot name="image" />
        </div>
        <div>
            <slot name="paragraph-end" />
        </div>            
    </div>
    <div v-else class="notCollapsed">
        <div class="paragraph">
            <slot name="paragraph-start"/>
            <slot name="paragraph-end"/>  
        </div>
        <div class="p-image">
            <slot name="image" />
        </div>
    </div>
</div>
    
</template>
    
<script>
    
export default {
    name: "ParagraphImageLayout",
    data() {
        return {
            isCollapsed: false,
            collapseWidth: 915, // TODO Should be set in the css
        };
    },
    mounted() {
        window.addEventListener("resize", this.checkCollapse);
        this.checkCollapse();
    },
    unmounted() {
        window.removeEventListener("resize", this.checkCollapse);
    },
    methods: {
        checkCollapse() {
            let containerWidth = this.$el.getBoundingClientRect().width;
            this.isCollapsed = containerWidth < this.collapseWidth;
        }
    }
};

</script>
    
<style lang="scss">

.paragraph-image-container {
    .p-image > * {
        display: block;
        width: calc(min(60ch, 100%));
        margin: auto;
    }   
}
    
.collapsed {
    display: flex;
    flex-direction: column;

    .p-image {
        margin: auto;
        max-width: calc(min(50ch, 100%));
    }
}

.notCollapsed {
    display: flex;
    flex-direction: row;
    column-gap: 1em;

    .p-image {
        max-width: 50%;
        margin: 0 auto;
    }
}

.paragraph {
    width: max-content;
    max-width: calc(min(70ch, 100%));
}
    
</style>