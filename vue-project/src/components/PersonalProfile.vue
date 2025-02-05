<template>
  <div id="app">
    <Navbar />
    <div id="logo">
      <img src="https://codecy2160.github.io/codecy/source/Logo.png" alt="logo" />
    </div>
    <button @click="scrollToAbout" class="main-button">About Me</button>
    <AboutSection ref="aboutSection" />
    <Carousel />
    <FooterComponent />
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from './Navbar.vue';
import AboutSection from './AboutSection.vue';
import Carousel from './Carousel.vue';
import FooterComponent from './Footer.vue';

export default {
  namer: 'PersonalProfile',
  components: {
    Navbar,
    AboutSection,
    Carousel,
    FooterComponent,
  },
  setup() {
    const aboutSection = ref(null);

    const scrollToAbout = () => {
      aboutSection.value?.scrollIntoView({ behavior: 'smooth' });
    };

    return {
      aboutSection,
      scrollToAbout,
    };
  },
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
@import 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap';
</style>