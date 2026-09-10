import { computed } from 'vue'

/**
 * Monta o link wa.me a partir do número e da mensagem padrão.
 * Número no formato internacional, só dígitos (ex.: 5569993921638).
 */
export function useWhatsApp(phone, message = '') {
  const href = computed(() => {
    const base = `https://wa.me/${phone}`
    if (!message) return base
    return `${base}?text=${encodeURIComponent(message)}`
  })
  return { href }
}
