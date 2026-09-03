<template>
  <section id="skill" class="relative">
    <div id="skillSticky" class="h-[100svh] sticky top-0 overflow-hidden bg-ink flex items-center">
      <div class="skill-mobile-intro">
        <p class="path-label mb-4">skill --list</p>
        <h2 class="font-display font-semibold text-4xl text-cream leading-tight">
          Satu stack untuk web,<br /> satu naluri untuk semua platform.
        </h2>
        <p class="mt-5 text-dim">Geser ke kanan untuk lihat tools yang saya pakai sehari-hari →</p>
      </div>

      <div id="skillTrack" class="skill-track flex h-full">

        <div class="skill-intro-slide w-[80vw] h-full flex flex-col justify-center px-6 md:px-16 shrink-0">
          <p class="path-label mb-4">skill --list</p>
          <h2 class="font-display font-semibold text-4xl md:text-6xl text-cream max-w-2xl leading-tight">
            Satu stack untuk web,<br/> satu naluri untuk semua platform.
          </h2>
          <p class="mt-6 text-dim max-w-md">Geser ke kanan untuk lihat tools yang saya pakai sehari-hari →</p>
        </div>

        <div
          v-for="group in skillGroups"
          :key="group.slug"
          class="skill-group-slide w-[80vw] h-full flex flex-col justify-center px-6 md:px-16 shrink-0"
        >
          <span class="path-label mb-4">skill/{{ group.slug }}</span>
          <h3 class="font-display font-semibold text-3xl md:text-5xl text-cream mb-10">{{ group.title }}</h3>
          <div class="skill-card-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="skill-card border border-line rounded-2xl px-5 py-4 bg-inkAlt"
            >
              <div
                class="skill-progress"
                role="progressbar"
                :aria-label="`${skill.name} proficiency`"
                :aria-valuenow="skill.level"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ '--skill-level': `${skill.level}%` }"
              >
                <span class="font-mono text-xs text-cream">{{ skill.level }}%</span>
              </div>
              <p class="font-medium leading-snug text-center text-cream">{{ skill.name }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skillGroups = [
  {
    slug: 'front-end',
    title: 'Front-End',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'Nuxt.js', level: 90 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 90 },
    ],
  },
  {
    slug: 'mobile-desktop',
    title: 'Mobile & Desktop',
    skills: [
      { name: 'Ionic', level: 90 },
      { name: 'Flutter', level: 90 },
      { name: 'Android Native', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'Kotlin', level: 90 },
    ],
  },
  {
    slug: 'backend-apis',
    title: 'Backend & APIs',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'PHP', level: 90 },
      { name: 'REST API Integration', level: 90 },
      { name: 'ASP.NET', level: 90 },
    ],
  },
  {
    slug: 'styling-ui',
    title: 'Styling & UI',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Vuetify', level: 90 },
      { name: 'Mantine', level: 90 },
      { name: 'Responsive Web', level: 90 },
      { name: 'GSAP', level: 90 },
    ],
  },
  {
    slug: 'engineering',
    title: 'Engineering',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Object-Oriented Programming', level: 90 },
      { name: 'E2E Testing', level: 90 },
      { name: 'AI-Assisted Development', level: 90 },
    ],
  },
]

let ctx: gsap.Context | null = null

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  if (isMobile || prefersReduced) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const skillTrack = document.getElementById('skillTrack')
    if (!skillTrack) return

    gsap.to(skillTrack, {
      x: () => -(skillTrack.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '#skillSticky',
        start: 'top top',
        end: () => '+=' + (skillTrack.scrollWidth - window.innerWidth),
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      }
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
