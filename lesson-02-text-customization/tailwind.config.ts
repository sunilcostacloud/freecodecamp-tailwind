import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    screens: {
      myCustomScreen: '900px',
      },
      spacing: {
      'customSpacing': '10px'
    }
    },
  },
  plugins: [],
}
export default config
