<template>
  <NavBar/>
  <HomeSection/>
  <AboutMeSection/>
  <ProjectSection/>
  <EducationSection/>
  <ContactSection/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
