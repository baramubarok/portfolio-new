<template>
  <section id="profile" class="relative">
    <!-- invisible anchor so nav "Project" lands roughly at project-1 -->
    <div id="projectAnchor" class="absolute" style="top:32%; height:1px; width:1px;"></div>

    <div id="pinStage" class="h-[100svh] w-full overflow-hidden grid-texture flex items-center relative">
      <div class="max-w-7xl mx-auto w-full px-6 md:px-10 relative h-[70vh]">

        <div class="blob w-40 h-40 md:w-56 md:h-56" style="left:8%; bottom:6%;"></div>
        <div class="blob w-64 h-64 md:w-80 md:h-80" style="left:26%; bottom:-6%;"></div>
        <div class="blob w-28 h-28 md:w-36 md:h-36" style="right:4%; top:12%;"></div>

        <div id="heroCopy" class="stage-copy" style="left:0%; top:50%; transform:translateY(-50%);">
          <p class="path-label mb-4">portfolio --whoami</p>
          <h1 class="font-display font-semibold leading-[0.95] text-cream text-[13vw] md:text-6xl lg:text-7xl">
            Bara Laily<br/>Mubarok
          </h1>
          <p class="mt-5 font-mono text-amber text-lg md:text-xl h-8">
            <span>{{ typedRoleText }}</span><span class="typed-cursor h-5 align-middle"></span>
          </p>
          <p class="mt-5 max-w-lg text-dim leading-relaxed">
            Membangun produk digital lintas platform — dari web dashboard sampai
            asisten AI native di WhatsApp &amp; Telegram — dengan fokus pada detail
            interaksi dan performa.
          </p>
          <div class="mt-8 flex items-center gap-4">
            <a href="#projectAnchor" class="btn-amber font-semibold text-sm px-6 py-3 rounded-full">See Work</a>
            <a href="/Bara_Laily_Mubarok_CV_and_Cover_Letter(1).pdf" target="_blank" class="font-mono text-sm text-cream/80 border-b border-line pb-1 hover:text-amber hover:border-amber transition-colors">./resume.pdf</a>
          </div>
        </div>

        <div
          v-for="(project, index) in featuredProjects"
          :id="`p${index + 1}Copy`"
          :key="project.slug"
          class="stage-copy opacity-0 pointer-events-none"
          :style="{ left: index % 2 === 0 ? '54%' : '0%', top: '50%', transform: 'translateY(-50%)' }"
        >
          <span class="path-label mb-4 block">projects/{{ project.slug }}</span>
          <h3 class="font-display font-semibold text-3xl md:text-4xl text-cream mb-4">{{ project.name }}</h3>
          <p class="text-dim leading-relaxed mb-6 max-w-md">{{ project.shortDescription }}</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="tech in project.techStack" :key="tech" class="text-xs font-mono px-3 py-1 rounded-full border border-line text-teal">{{ tech }}</span>
          </div>
          <div class="flex flex-wrap items-center gap-5">
            <NuxtLink :to="`/projects/${project.slug}`" class="inline-flex items-center gap-2 text-cream font-medium border-b border-amber pb-1 w-fit hover:text-amber transition-colors">Lihat detail →</NuxtLink>
            <a v-if="project.links[0]" :href="project.links[0].href" target="_blank" rel="noreferrer" class="font-mono text-xs text-dim hover:text-amber transition-colors">visit live ↗</a>
          </div>
        </div>

        <div id="heroImage" class="hero-card absolute rounded-[28px] overflow-hidden z-30"
             style="right:2%; left:auto; top:8%; width:min(34vw,340px); height:56vh; transform:rotate(6deg);">
          <img id="stageImg" :src="featuredProjects[0]?.image" :alt="featuredProjects[0] ? `${featuredProjects[0].name} project preview` : 'Project preview'" class="w-full h-full object-cover" />
          <div class="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(11,14,20,0.55)_0%,transparent_100%)] pointer-events-none"></div>
          <div id="stagePath" class="path-label absolute bottom-5 left-6 bg-ink/60 backdrop-blur px-3 py-1.5 rounded-full opacity-0">projects/{{ featuredProjects[0]?.slug }}</div>
        </div>

        <div class="hidden md:flex flex-col gap-4 absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-20 text-dim">
          <a href="https://github.com/baramubarok" target="_blank" class="hover:text-amber transition-colors" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/bara-mubarok-35a7971a4" target="_blank" class="hover:text-amber transition-colors" aria-label="LinkedIn">IN</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featuredProjects } from '~/data/projects'

const typedRoleText = ref('')
const activeDot = ref(0)

// Typing animation
const roles = ['Fullstack Developer', 'Front-End Developer', 'Multiplatform Developer']
let typingTimeout: any = null

const typeLoop = () => {
  let roleIndex = 0

  function typeWord(word: string, cb: () => void) {
    let i = 0
    function step() {
      typedRoleText.value = word.slice(0, i)
      i++
      if (i <= word.length) {
        typingTimeout = setTimeout(step, 55)
      } else {
        typingTimeout = setTimeout(cb, 1100)
      }
    }
    step()
  }

  function deleteWord(word: string, cb: () => void) {
    let i = word.length
    function step() {
      typedRoleText.value = word.slice(0, i)
      i--
      if (i >= 0) {
        typingTimeout = setTimeout(step, 32)
      } else {
        typingTimeout = setTimeout(cb, 250)
      }
    }
    step()
  }

  function next() {
    const word = roles[roleIndex % roles.length]
    typeWord(word ?? '', () => {
      deleteWord(word ?? '', () => {
        roleIndex++
        next()
      })
    })
  }

  next()
}

let ctx: gsap.Context | null = null

onMounted(() => {
  typeLoop()

  // Load every featured image before the pinned sequence needs it. Without this,
  // switching the same <img> element can briefly show the previous project while
  // the next image is fetched or decoded, especially when scrolling quickly.
  featuredProjects.forEach(project => {
    const image = new Image()
    image.src = project.image
  })

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const heroImage = document.getElementById('heroImage')
    const stageImg = document.getElementById('stageImg') as HTMLImageElement | null
    const stagePath = document.getElementById('stagePath')

    const LEFT = { left: '0%', right: 'auto', width: '46%' }
    const RIGHT = { left: '54%', right: 'auto', width: '46%' }
    const BOUNCE = 'back.out(1.4)'
    let currentStageProject = -1
    let stagePathVisible = false
    let timeline: gsap.core.Timeline | null = null

    const syncStageProject = (time: number) => {
      // These boundaries are the starts of the image transitions. Deriving the
      // active image from position keeps it correct when the timeline reverses
      // instead of relying on callbacks that only describe forward playback.
      const nextStageProject = time >= 4.3 ? 2 : time >= 2.6 ? 1 : 0
      const shouldShowPath = time >= 0.9

      if (nextStageProject !== currentStageProject) {
        currentStageProject = nextStageProject

        const project = featuredProjects[nextStageProject]
        if (!project) return

        if (stageImg) {
          stageImg.src = project.image
          stageImg.alt = `${project.name} project preview`
        }
        if (stagePath) stagePath.textContent = `projects/${project.slug}`
      }

      if (stagePath && shouldShowPath !== stagePathVisible) {
        stagePathVisible = shouldShowPath
        gsap.to(stagePath, { autoAlpha: shouldShowPath ? 1 : 0, duration: .2, overwrite: true })
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#profile',
        start: 'top top',
        end: () => '+=' + (window.innerHeight * 2.5),
        scrub: 1,
        pin: '#pinStage',
        anticipatePin: 1,
        // Use the immediate scroll position rather than the smoothed animation
        // time so the image never trails behind the user's scroll direction.
        onUpdate: self => {
          if (timeline) syncStageProject(self.progress * timeline.duration())
        },
      }
    })
    timeline = tl

    // phase 0: hero hold
    tl.call(() => { activeDot.value = 0 }, undefined, 0.05)

    // -> phase 1: image travels to LEFT, hero copy fades out, Headway Platform fades in
    tl.to('#heroCopy', { autoAlpha: 0, x: -40, duration: .6, ease: 'power1.in' }, 0.9)
      .to(heroImage, { ...LEFT, top: '4%', height: '62vh', rotate: 0, duration: 1, ease: BOUNCE }, 0.9)
      .to('#p1Copy', { autoAlpha: 1, x: 0, duration: .6, ease: 'power2.out' }, 1.5)
      .set('#p1Copy', { pointerEvents: 'auto' }, 1.6)
      .call(() => { activeDot.value = 1 }, undefined, 1.7)

    // hold project 1
    // -> phase 2: image travels to RIGHT, Headway out, Kids Academy (LEFT) in
    tl.to('#p1Copy', {
      autoAlpha: 0,
      x: -30,
      duration: .5,
      ease: 'power1.in',
      onStart: () => {
        const el = document.getElementById('p1Copy')
        if (el) el.style.pointerEvents = 'none'
      }
    }, 2.6)
      .to(heroImage, { ...RIGHT, duration: 1, ease: BOUNCE }, 2.6)
      .to('#p2Copy', { autoAlpha: 1, x: 0, duration: .6, ease: 'power2.out' }, 3.2)
      .set('#p2Copy', { pointerEvents: 'auto' }, 3.3)
      .call(() => { activeDot.value = 2 }, undefined, 3.4)

    // hold project 2
    // -> phase 3: image travels back to LEFT, Kids Academy out, Aspriku (RIGHT) in
    tl.to('#p2Copy', {
      autoAlpha: 0,
      x: 30,
      duration: .5,
      ease: 'power1.in',
      onStart: () => {
        const el = document.getElementById('p2Copy')
        if (el) el.style.pointerEvents = 'none'
      }
    }, 4.3)
      .to(heroImage, { ...LEFT, duration: 1, ease: BOUNCE }, 4.3)
      .to('#p3Copy', { autoAlpha: 1, x: 0, duration: .6, ease: 'power2.out' }, 4.9)
      .set('#p3Copy', { pointerEvents: 'auto' }, 5.0)
      .call(() => { activeDot.value = 3 }, undefined, 5.1)

    // hold project 3 until pin ends
    tl.to({}, { duration: 0.9 })
  })
})

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
  if (ctx) ctx.revert()
})
</script>
