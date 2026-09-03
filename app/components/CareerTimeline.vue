<template>
  <section id="career" class="relative bg-ink py-28 md:py-36">
    <div class="max-w-5xl mx-auto px-6 md:px-10">
      <div class="max-w-2xl mb-16">
        <p class="path-label mb-4">career --journey</p>
        <h2 class="font-display font-semibold text-4xl md:text-6xl text-cream leading-tight">Perjalanan karir</h2>
        <p class="mt-6 text-dim leading-relaxed">Pengalaman profesional dan pendidikan yang membentuk cara saya membangun produk digital.</p>
      </div>
      <ol class="relative ml-2 border-l border-line pl-8 md:pl-12">
        <li v-for="entry in careerEntries" :key="`${entry.period}-${entry.organization}`" class="career-item relative pb-12 last:pb-0 opacity-0 translate-y-8">
          <span class="absolute -left-[calc(2rem+7px)] md:-left-[calc(3rem+7px)] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-ink" :class="dotClass(entry.tone)"></span>
          <div class="rounded-2xl border border-line bg-inkAlt p-6 md:p-8">
            <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p class="path-label">{{ entry.period }}</p>
              <span class="w-fit rounded-full border border-line px-3 py-1 font-mono text-xs text-dim">{{ entry.type }}</span>
            </div>
            <h3 class="mt-5 font-display text-2xl font-semibold text-cream">{{ entry.title }}</h3>
            <p class="mt-1 font-medium text-amber">{{ entry.organization }}</p>
            <p class="mt-4 leading-relaxed text-dim">{{ entry.description }}</p>
            <ul v-if="entry.details.length" class="mt-5 space-y-2 border-t border-line pt-5 text-sm leading-relaxed text-dim">
              <li v-for="detail in entry.details" :key="detail" class="flex gap-3"><span class="text-teal">→</span><span>{{ detail }}</span></li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { careerEntries } from '~/data/career'

const dotClass = (tone: 'amber' | 'teal' | 'dim') => ({ amber: 'bg-amber', teal: 'bg-teal', dim: 'bg-dim/60' })[tone]
let ctx: gsap.Context | null = null

onMounted(() => {
  const items = document.querySelectorAll('.career-item')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(item => (item as HTMLElement).style.opacity = '1')
    return
  }
  gsap.registerPlugin(ScrollTrigger)
  ctx = gsap.context(() => {
    gsap.utils.toArray('.career-item').forEach(item => gsap.to(item, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: item as HTMLElement, start: 'top 82%', once: true } }))
  })
})

onUnmounted(() => { if (ctx) ctx.revert() })
</script>