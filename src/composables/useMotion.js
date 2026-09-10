import { onMounted, onUnmounted, nextTick } from 'vue'
import { whenReady, ScrollTrigger } from '../animations/motion'

/**
 * Roda a montagem das animações só depois que as fontes carregarem,
 * e limpa os ScrollTriggers da página ao sair.
 */
export function useMotion(setup, rootRef) {
  let ctx

  onMounted(async () => {
    await whenReady()
    await nextTick()
    ctx = ScrollTrigger.create({
      trigger: rootRef?.value || document.body,
      start: 'top bottom',
      end: 'bottom top',
      // só para ter um contexto; os triggers reais vêm do setup
    })
    const local = []
    const track = (t) => {
      if (t) local.push(t)
      return t
    }
    setup(track)
    ctx._local = local
  })

  onUnmounted(() => {
    ctx?._local?.forEach((t) => t?.kill?.() || t?.scrollTrigger?.kill?.())
    ctx?.kill()
  })
}
