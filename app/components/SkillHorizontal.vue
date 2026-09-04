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
              <div class="skill-card-heading">
                <Icon :icon="skill.icon" class="skill-icon" :style="{ color: skill.color }" aria-hidden="true" />
                <p class="font-medium leading-snug text-cream">{{ skill.name }}</p>
              </div>
              <div
                class="skill-progress"
                role="progressbar"
                :aria-label="`${skill.name} proficiency`"
                :aria-valuenow="skill.level"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ '--skill-color': skill.color }"
              >
                <div class="skill-progress-track" aria-hidden="true">
                  <div class="skill-progress-fill" :style="{ width: `${skill.level}%` }"></div>
                </div>
                <span class="font-mono text-xs text-cream">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skillGroups = [
  {
    slug: 'front-end',
    title: 'Front-End',
    skills: [
      { name: 'Vue.js', level: 80, icon: 'logos:vue', color: '#42B883' },
      { name: 'Nuxt.js', level: 90, icon: 'simple-icons:nuxt', color: '#00DC82' },
      { name: 'React.js', level: 80, icon: 'simple-icons:react', color: '#61DAFB' },
      { name: 'Next.js', level: 85, icon: 'simple-icons:nextdotjs', color: '#ECEDF1' },
      { name: 'JavaScript', level: 90, icon: 'simple-icons:javascript', color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'HTML', level: 90, icon: 'simple-icons:html5', color: '#E34F26' },
      { name: 'CSS', level: 90, icon: 'simple-icons:css3', color: '#1572B6' },
    ],
  },
  {
    slug: 'mobile-desktop',
    title: 'Mobile & Desktop',
    skills: [
      { name: 'Ionic', level: 80, icon: 'simple-icons:ionic', color: '#3880FF' },
      { name: 'Flutter', level: 70, icon: 'simple-icons:flutter', color: '#54C5F8' },
      { name: 'Android Native', level: 60, icon: 'simple-icons:android', color: '#3DDC84' },
      { name: 'Java', level: 60, icon: 'simple-icons:openjdk', color: '#F89820' },
      { name: 'Kotlin', level: 60, icon: 'simple-icons:kotlin', color: '#7F52FF' },
    ],
  },
  {
    slug: 'backend-apis',
    title: 'Backend & APIs',
    skills: [
      { name: 'Laravel', level: 90, icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'PHP', level: 80, icon: 'simple-icons:php', color: '#777BB4' },
      { name: 'REST API Integration', level: 95, icon: 'mdi:api', color: '#14B8A6' },
      { name: 'ASP.NET', level: 70, icon: 'simple-icons:dotnet', color: '#512BD4' },
    ],
  },
  {
    slug: 'styling-ui',
    title: 'Styling & UI',
    skills: [
      { name: 'Tailwind CSS', level: 80, icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      { name: 'Bootstrap', level: 90, icon: 'simple-icons:bootstrap', color: '#7952B3' },
      { name: 'Vuetify', level: 95, icon: 'simple-icons:vuetify', color: '#1867C0' },
      { name: 'Mantine', level: 80, icon: 'simple-icons:mantine', color: '#339AF0' },
      { name: 'Responsive Web', level: 90, icon: 'mdi:responsive', color: '#F59E0B' },
      { name: 'GSAP', level: 70, icon: 'simple-icons:greensock', color: '#88CE02' },
    ],
  },
  {
    slug: 'engineering',
    title: 'Engineering',
    skills: [
      { name: 'Git', level: 90, icon: 'simple-icons:git', color: '#F05032' },
      { name: 'Object-Oriented Programming', level: 85, icon: 'mdi:source-branch', color: '#A855F7' },
      { name: 'E2E Testing', level: 75, icon: 'mdi:clipboard-check-outline', color: '#22C55E' },
      { name: 'AI-Assisted Development', level: 80, icon: 'mdi:robot-outline', color: '#EC4899' },
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
