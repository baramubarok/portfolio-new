<template>
  <div>
    <AppHeader :active-section="activeSection" />
    <main>
      <HeroProjectPin />
      <SkillHorizontal />
      <CareerTimeline />
      <AboutFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const activeSection = ref('profile')
let ctx: gsap.Context | null = null

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  if (prefersReduced || isMobile) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const sections = [
      { id: 'profile', navId: 'profile' },
      { id: 'projectAnchor', navId: 'project' },
      { id: 'skill', navId: 'skill' },
      { id: 'career', navId: 'about' },
      { id: 'about', navId: 'about' }
    ]

    sections.forEach(sec => {
      const el = document.getElementById(sec.id)
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => {
          if (self.isActive) {
            activeSection.value = sec.navId
          }
        }
      })
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

