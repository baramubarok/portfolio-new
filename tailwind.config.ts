import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: '#0B0E14',
        inkAlt: '#11151D',
        inkSoft: '#171C26',
        cream: '#ECEDF1',
        dim: '#8A8F9C',
        amber: '#FFB454',
        teal: '#3DDC97',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
}
