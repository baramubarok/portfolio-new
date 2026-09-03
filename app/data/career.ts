export type CareerEntry = {
  period: string
  title: string
  organization: string
  type: string
  description: string
  details: string[]
  tone: 'amber' | 'teal' | 'dim'
}

export const careerEntries: CareerEntry[] = [
  {
    period: 'Juni 2021 — Sekarang',
    title: 'Frontend Developer',
    organization: 'PT Heksa Adhitek Wayatama',
    type: 'Full Time',
    description: 'Membangun dan memelihara aplikasi web production lintas platform menggunakan Vue.js dan Nuxt.js.',
    details: [
      'Mengembangkan internal business application secara full-stack menggunakan frontend dan Laravel.',
      'Membangun aplikasi Laravel dari awal, termasuk RBAC, management module, REST API, dan fitur bisnis.',
      'Mengembangkan frontend modular serta berkolaborasi dengan tim product, backend, dan infrastructure.',
    ],
    tone: 'amber',
  },
  {
    period: 'Mei 2023 — Oktober 2024',
    title: 'Frontend Developer',
    organization: 'PT Radya Gita Bahagi',
    type: 'Freelance',
    description: 'Mengembangkan fitur frontend dan reusable components untuk project web dinamis menggunakan Next.js dan Nuxt.js.',
    details: [
      'Meningkatkan code quality, responsive behavior, cross-browser compatibility, dan frontend performance.',
      'Menerapkan clean-code practices untuk mendukung maintainability dan pengembangan jangka panjang.',
    ],
    tone: 'teal',
  },
  {
    period: 'November 2020 — April 2021',
    title: 'Full Stack Developer',
    organization: 'Peduly',
    type: 'Internship',
    description: 'Mengembangkan fitur full-stack untuk platform donasi berbasis web menggunakan Laravel.',
    details: [
      'Mengerjakan pengembangan frontend dan backend sesuai kebutuhan platform donasi.',
    ],
    tone: 'dim',
  },
  {
    period: '2025',
    title: 'S1 Teknik Informatika',
    organization: 'Universitas Negeri Surabaya',
    type: 'Education',
    description: 'Menyelesaikan pendidikan sarjana di bidang Teknik Informatika.',
    details: [],
    tone: 'dim',
  },
  {
    period: '2019',
    title: 'Teknik Komputer dan Jaringan',
    organization: 'SMKN 1 Kota Blitar',
    type: 'Education',
    description: 'Menyelesaikan pendidikan kejuruan di bidang Teknik Komputer dan Jaringan.',
    details: [],
    tone: 'dim',
  },
]