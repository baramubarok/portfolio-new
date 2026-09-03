<template>
  <header class="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
    <nav class="nav-pill flex max-w-full items-center gap-1 overflow-x-auto bg-white/[0.04] backdrop-blur-xl border border-line rounded-full pl-3 pr-2 py-2 shadow-2xl">
      <a :href="sectionHref('profile')" class="shrink-0 whitespace-nowrap font-display font-semibold text-sm tracking-tight text-cream mr-1 md:mr-4">B<span class="text-amber">/</span>LM</a>
      <a :href="sectionHref('profile')" class="shrink-0 whitespace-nowrap px-2 py-2 text-sm font-medium md:px-4" :class="{ active: activeSection === 'profile' }">Profile</a>
      <a href="/projects" class="shrink-0 whitespace-nowrap px-2 py-2 text-sm font-medium md:px-4" :class="{ active: activeSection === 'project' }">Project</a>
      <a :href="sectionHref('skill')" class="shrink-0 whitespace-nowrap px-2 py-2 text-sm font-medium md:px-4" :class="{ active: activeSection === 'skill' }">Skill</a>
      <a :href="sectionHref('career')" class="shrink-0 whitespace-nowrap px-2 py-2 text-sm font-medium md:px-4" :class="{ active: activeSection === 'about' }">About</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

defineProps<{
  activeSection: string
}>()

const sectionHref = (section: string) => route.path === '/' ? `#${section}` : `/#${section}`
</script>
