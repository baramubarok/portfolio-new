<template>
  <div class="min-h-screen bg-ink text-cream">
    <AppHeader active-section="project" />
    <main class="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10">
      <header class="max-w-3xl"><p class="path-label mb-4">projects --all</p><h1 class="font-display text-5xl font-semibold leading-tight md:text-7xl">Selected work &amp; collaborations.</h1><p class="mt-6 max-w-2xl leading-relaxed text-dim">Kumpulan project yang saya bangun dan pelihara bersama tim product, backend, dan infrastructure.</p></header>
      <div class="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="project in projects" :key="project.slug" class="flex flex-col rounded-3xl border border-line bg-inkAlt p-6 transition-transform hover:-translate-y-1">
          <button type="button" class="project-visual project-thumb group mb-8 flex min-h-48 w-full flex-col justify-end rounded-2xl p-5 text-left" :class="`project-visual-${project.slug}`" :aria-label="`Open ${project.name} image fullscreen`" @click="openLightbox(project)"><img :src="project.image" :alt="`${project.name} project preview`" class="absolute inset-0 h-full w-full object-cover" /><span class="path-label">{{ project.category }}</span><h2 class="relative z-10 mt-2 font-display text-2xl font-semibold text-cream">{{ project.name }}</h2><span class="project-expand" aria-hidden="true"><span>⤢</span></span></button>
          <p class="flex-1 leading-relaxed text-dim">{{ project.shortDescription }}</p>
          <div class="mt-6 flex flex-wrap gap-2"><span v-for="tech in project.techStack" :key="tech" class="rounded-full border border-line px-3 py-1 font-mono text-xs text-teal">{{ tech }}</span></div>
          <NuxtLink :to="`/projects/${project.slug}`" class="mt-8 w-fit border-b border-amber pb-1 font-medium text-cream transition-colors hover:text-amber">Lihat detail →</NuxtLink>
        </article>
      </div>
    </main>
    <ProjectLightbox v-model:open="lightboxOpen" :project="lightboxProject" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

const lightboxOpen = ref(false)
const lightboxProject = ref<Project | null>(null)
const openLightbox = (project: Project) => {
  lightboxProject.value = project
  lightboxOpen.value = true
}
</script>