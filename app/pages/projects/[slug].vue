<template>
  <div v-if="project" class="min-h-screen bg-ink text-cream">
    <AppHeader active-section="project" />
    <main class="mx-auto max-w-5xl px-6 pb-24 pt-36 md:px-10">
      <NuxtLink to="/projects" class="font-mono text-sm text-dim transition-colors hover:text-amber">← all projects</NuxtLink>
      <header class="mt-14 max-w-4xl"><p class="path-label mb-4">projects/{{ project.slug }}</p><h1 class="font-display text-5xl font-semibold leading-tight md:text-7xl">{{ project.name }}</h1><p class="mt-6 max-w-2xl text-xl leading-relaxed text-dim">{{ project.shortDescription }}</p><div class="mt-8 flex flex-wrap gap-2"><span v-for="tech in project.techStack" :key="tech" class="rounded-full border border-line px-3 py-1 font-mono text-xs text-teal">{{ tech }}</span></div></header>
      <button type="button" class="project-visual project-detail-visual group relative mt-16 flex min-h-72 w-full flex-col justify-end rounded-3xl p-8 text-left md:min-h-96 md:p-12" :class="`project-visual-${project.slug}`" :aria-label="`Open ${project.name} image fullscreen`" @click="openLightbox(project)"><img :src="project.image" :alt="`${project.name} project preview`" class="absolute inset-0 h-full w-full object-cover" /><span class="relative z-10 path-label">{{ project.category }}</span><strong class="relative z-10 mt-3 max-w-xl font-display text-4xl font-semibold text-cream md:text-6xl">{{ project.name }}</strong><span class="project-expand" aria-hidden="true"><span>⤢</span></span></button>
      <div class="mt-16 grid gap-14 md:grid-cols-[1fr_280px]"><div><section><p class="path-label mb-4">overview --read</p><p class="text-lg leading-relaxed text-dim">{{ project.description }}</p></section><section class="mt-14"><p class="path-label mb-4">highlights --list</p><ul class="space-y-4 text-dim"><li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3 leading-relaxed"><span class="text-teal">→</span><span>{{ highlight }}</span></li></ul></section></div><aside class="h-fit rounded-2xl border border-line bg-inkAlt p-6"><p class="path-label mb-4">role --contribution</p><p class="text-sm leading-relaxed text-dim">{{ project.role }}</p><div class="mt-8 border-t border-line pt-6"><p class="path-label mb-4">links --open</p><div class="flex flex-col items-start gap-3"><a v-for="link in project.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer" class="text-sm text-cream transition-colors hover:text-amber">{{ link.label }} ↗</a></div></div></aside></div>
      <nav class="mt-20 flex items-center justify-between border-t border-line pt-8"><NuxtLink v-if="previousProject" :to="`/projects/${previousProject.slug}`" class="max-w-[45%] text-sm text-dim transition-colors hover:text-amber">← {{ previousProject.name }}</NuxtLink><NuxtLink v-if="nextProject" :to="`/projects/${nextProject.slug}`" class="ml-auto max-w-[45%] text-right text-sm text-dim transition-colors hover:text-amber">{{ nextProject.name }} →</NuxtLink></nav>
    </main>
    <ProjectLightbox v-model:open="lightboxOpen" :project="lightboxProject" />
  </div>
  <div v-else class="min-h-screen bg-ink px-6 pt-36 text-cream"><div class="mx-auto max-w-5xl"><p class="path-label mb-4">404 --project-not-found</p><h1 class="font-display text-5xl font-semibold">Project tidak ditemukan.</h1><NuxtLink to="/projects" class="mt-8 inline-block border-b border-amber pb-1 text-cream">Kembali ke projects →</NuxtLink></div></div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects, getProjectBySlug } from '~/data/projects'
import type { Project } from '~/data/projects'

const route = useRoute()
const project = computed(() => getProjectBySlug(String(route.params.slug)))
const projectIndex = computed(() => projects.findIndex(item => item.slug === project.value?.slug))
const previousProject = computed(() => projectIndex.value > 0 ? projects[projectIndex.value - 1] : undefined)
const nextProject = computed(() => projectIndex.value >= 0 && projectIndex.value < projects.length - 1 ? projects[projectIndex.value + 1] : undefined)
const lightboxOpen = ref(false)
const lightboxProject = ref<Project | null>(null)
const openLightbox = (selectedProject: Project) => {
  lightboxProject.value = selectedProject
  lightboxOpen.value = true
}
useSeoMeta({ title: () => project.value ? `${project.value.name} — Portfolio` : 'Project tidak ditemukan — Portfolio', description: () => project.value?.shortDescription ?? 'Project portfolio Bara Laily Mubarok.' })
</script>