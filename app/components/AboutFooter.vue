<template>
  <section id="about" class="relative bg-inkAlt pt-28 pb-10">
    <div class="max-w-6xl mx-auto px-6 md:px-10">
      <div class="grid gap-16 md:grid-cols-2">
        <div>
          <p class="path-label mb-4">about --profile</p>
          <h2 class="font-display font-semibold text-4xl md:text-5xl text-cream mb-6">Tentang saya</h2>
          <p class="text-dim max-w-xl leading-relaxed">Frontend Engineer dengan pengalaman profesional lebih dari 5 tahun dalam membangun dan memelihara aplikasi web production. Berpengalaman menggunakan Vue/Nuxt, React/Next.js, integrasi REST API, pengembangan UI responsive, serta berkolaborasi dengan tim product dan backend. Juga memiliki pengalaman dalam pengembangan web dan mobile menggunakan Ionic, Flutter, dan Laravel, serta aktif mengeksplorasi AI-assisted software engineering.</p>
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <p class="path-label mb-4">contact --open</p>
            <h3 class="font-display font-semibold text-3xl md:text-4xl text-cream mb-6 leading-tight">Ada project menarik?<br/>Mari ngobrol.</h3>
            <a href="mailto:bara.mubarok9110@gmail.com" class="inline-block btn-amber font-semibold text-sm px-6 py-3 rounded-full mb-10">bara.mubarok9110@gmail.com</a>
            <div class="flex gap-4">
              <a href="https://github.com/baramubarok" target="_blank" rel="noreferrer" class="w-11 h-11 flex items-center justify-center rounded-full border border-line text-dim hover:text-amber hover:border-amber transition-colors" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8.11 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.68.42.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg></a>
              <a href="https://www.linkedin.com/in/bara-mubarok-35a7971a4" target="_blank" rel="noreferrer" class="w-11 h-11 flex items-center justify-center rounded-full border border-line text-dim hover:text-amber hover:border-amber transition-colors" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      <footer class="border-t border-line mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dim"><p>© {{ currentYear }} Bara Laily Mubarok.</p><a href="#profile" class="hover:text-amber transition-colors">Kembali ke atas ↑</a></footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>