import asprikuImage from '~/assets/images/projects/aspriku.jpg'
import eigerImage from '~/assets/images/projects/eiger.jpg'
import eminaImage from '~/assets/images/projects/emina.jpg'
import headwayImage from '~/assets/images/projects/headway-test.jpg'
import kidsAcademyImage from '~/assets/images/projects/kids-academy.jpg'
import moduitImage from '~/assets/images/projects/moduit.jpg'

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string
  image: string
  role: string
  techStack: string[]
  links: ProjectLink[]
  highlights: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'headway-platform',
    name: 'Headway Platform',
    category: 'Assessment Platform',
    shortDescription: 'Platform asesmen online untuk mengukur kompetensi dengan hasil yang cepat, akurat, dan terpercaya.',
    description: 'Headway Platform menghubungkan test taker, institusi, dan perusahaan melalui layanan asesmen online. Platform ini menyediakan free test, produk tes, hasil cepat, sertifikat, serta ekosistem partner untuk berbagai kebutuhan pengembangan kompetensi.',
    image: headwayImage,
    role: 'Frontend development dan maintenance untuk beberapa platform Headway, termasuk pengembangan aplikasi internal berbasis Laravel.',
    techStack: ['Nuxt.js', 'Laravel'],
    links: [
      { label: 'Headway Test', href: 'https://headwaytest.com' },
      { label: 'Test Center', href: 'https://center.headwaytest.com' },
      { label: 'Fellowship', href: 'https://fellowship.headwaytest.com' },
      { label: 'Partnership', href: 'https://partnership.headwaytest.com' },
    ],
    highlights: [
      'Free test dan produk asesmen online.',
      'Hasil tes cepat dengan sertifikat yang tersimpan di database.',
      'Ekosistem untuk test center, fellowship, dan partnership.',
    ],
    featured: true,
  },
  {
    slug: 'kids-academy',
    name: 'Kids Academy',
    category: 'Education & Community',
    shortDescription: 'Komunitas yang membantu anak mengeksplorasi seni sekaligus menumbuhkan kepedulian terhadap lingkungan.',
    description: 'Kids Academy menyediakan ruang bagi anak-anak untuk belajar seni, menampilkan karya di galeri online, dan merawat pohon melalui program adopsi pohon. Berdiri sejak 2020, platform ini mendukung proses belajar dan tanggung jawab anak melalui pengalaman digital dan nyata.',
    image: kidsAcademyImage,
    role: 'Pengembangan aplikasi web dan implementasi fitur platform menggunakan Laravel.',
    techStack: ['Laravel'],
    links: [
      { label: 'Visit website', href: 'https://kids-academy.web.id' },
    ],
    highlights: [
      'Galeri seni online untuk karya anak.',
      'Program adopsi pohon dengan jurnal perkembangan digital.',
      'Member area dan informasi program komunitas.',
    ],
    featured: true,
  },
  {
    slug: 'aspriku',
    name: 'Aspriku',
    category: 'AI Product Experience',
    shortDescription: 'Asisten eksekutif berbasis AI yang membantu pekerjaan bisnis langsung melalui WhatsApp dan Telegram.',
    description: 'Aspriku menghadirkan Nexus AI sebagai asisten digital untuk membantu pencarian informasi, analisis dokumen, riset pasar, monitoring invoice, dan koordinasi operasional. Pengguna dapat mengirim pesan, voice note, atau dokumen melalui ruang chat yang sudah mereka gunakan sehari-hari.',
    image: asprikuImage,
    role: 'Frontend dan product experience development dengan workflow AI-assisted yang berorientasi pada aplikasi production.',
    techStack: ['Laravel Livewire'],
    links: [
      { label: 'Visit website', href: 'https://aspriku.com' },
    ],
    highlights: [
      'Interaksi asisten AI melalui WhatsApp dan Telegram.',
      'Pencarian dan ringkasan dokumen bisnis.',
      'Simulasi skenario operasional, legal, keuangan, dan riset.',
    ],
    featured: true,
  },
  {
    slug: 'eiger-adventure',
    name: 'Eiger Adventure',
    category: 'Commerce & CMS',
    shortDescription: 'Pengembangan frontend dan maintenance CMS untuk website Eiger Adventure.',
    description: 'Project frontend maintenance dan pengembangan yang berkaitan dengan CMS untuk website Eiger Adventure.',
    image: eigerImage,
    role: 'Frontend development, maintenance, dan dukungan pengembangan CMS.',
    techStack: ['Next.js'],
    links: [{ label: 'Visit website', href: 'https://eigeradventure.com' }],
    highlights: ['Frontend maintenance.', 'CMS-related development.'],
  },
  {
    slug: 'moduit',
    name: 'Moduit',
    category: 'Investment Platform',
    shortDescription: 'Frontend maintenance dan optimasi untuk platform Moduit.',
    description: 'Project frontend maintenance dan optimization untuk website Moduit.',
    image: moduitImage,
    role: 'Frontend maintenance dan performance optimization.',
    techStack: ['React.js'],
    links: [{ label: 'Visit website', href: 'https://moduit.id' }],
    highlights: ['Frontend maintenance.', 'Frontend optimization.'],
  },
  {
    slug: 'emina-colab',
    name: 'Emina Colab',
    category: 'Interactive Experience',
    shortDescription: 'Pengembangan pengalaman pengguna interaktif untuk Emina Colab.',
    description: 'Project interactive user experience development untuk website Emina Colab.',
    image: eminaImage,
    role: 'Frontend development untuk pengalaman interaktif berbasis web.',
    techStack: ['Nuxt.js'],
    links: [{ label: 'Visit website', href: 'https://eminacolab.com' }],
    highlights: ['Interactive user experience development.'],
  },
]

export const featuredProjects = projects.filter(project => project.featured)

export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug)