<template>
<GenericSection id="project-section">
        
        <h1>Projects</h1>
        <router-view />
    
</GenericSection>
</template>

<script>

import GenericSection from "./GenericSection.vue";
export default {
    name: "ProjectSection",
    components: { GenericSection },
};

</script>