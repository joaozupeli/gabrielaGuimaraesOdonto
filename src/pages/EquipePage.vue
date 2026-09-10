<template>
  <div class="page" ref="pageRef">
    <PageHero
      eyebrow="Equipe"
      title="Quem cuida"
      accent="de você."
      lead="Um time clínico e administrativo no mesmo endereço — cada um com papel claro no seu atendimento."
    >
      <CtaButton :href="whatsappHref" variant="wa" arrow>Falar no WhatsApp</CtaButton>
    </PageHero>

    <TeamSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { clinic } from '../data/clinic'
import { useWhatsApp } from '../composables/useWhatsApp'
import PageHero from '../components/ui/PageHero.vue'
import CtaButton from '../components/ui/CtaButton.vue'
import TeamSection from '../components/sections/TeamSection.vue'

const { href: whatsappHref } = useWhatsApp(
  clinic.whatsapp,
  clinic.whatsappDefaultMessage,
)

const pageRef = ref(null)
</script>
