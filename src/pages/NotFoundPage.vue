<template>
  <div class="page not-found">
    <div class="shell">
      <p class="mono mono--accent">404</p>
      <h1 class="display">Página não encontrada.</h1>
      <p class="lead">O endereço mudou ou nunca existiu. Volte para o início ou fale conosco no WhatsApp.</p>
      <div class="stack" style="margin-top: 2rem">
        <CtaButton to="/" variant="primary">Ir para o início</CtaButton>
        <CtaButton :href="whatsappHref" variant="wa">WhatsApp</CtaButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { clinic } from '../data/clinic'
import { useWhatsApp } from '../composables/useWhatsApp'
import CtaButton from '../components/ui/CtaButton.vue'

const { href: whatsappHref } = useWhatsApp(
  clinic.whatsapp,
  clinic.whatsappDefaultMessage,
)
</script>

<style scoped>
.not-found {
  padding-top: calc(var(--header-h) + 4rem);
  padding-bottom: 6rem;
}
.not-found .display {
  margin: 1rem 0;
  max-width: 12ch;
}
</style>
