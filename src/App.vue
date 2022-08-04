<template>
  <NavBar/>
  <HomeSection class="light-theme"/>
  <AboutMeSection class="dark-theme"/>
  <ProjectSection class="light-theme"/>
  <EducationSection class="dark-theme"/>
  <ContactSection class="light-theme"/>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue'
import HomeSection from './components/sections/HomeSection.vue'
import AboutMeSection from './components/sections/AboutMeSection.vue'
import ProjectSection from './components/sections/ProjectSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomeSection,
    AboutMeSection,
    ProjectSection,
    EducationSection,
    ContactSection,
  }
}
</script>

<style>

</style>
