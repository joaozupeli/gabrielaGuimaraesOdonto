<template>
  <div class="page" ref="pageRef">
    <HeroSection />
    <MarqueeStrip :items="ticker" />
    <AboutSection />
    <ServicesSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ticker } from '../data/clinic'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import MarqueeStrip from '../components/ui/MarqueeStrip.vue'

const pageRef = ref(null)
</script>
