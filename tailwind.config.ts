import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}', // For Contentlayer
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E91E2E',
        // Add other theme colors here if needed
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
      spacing: {
        'section-py': '4rem', // 16 * 0.25rem = 64px
        'section-px': '1rem', // 4 * 0.25rem = 16px
        'section-px-lg': '2rem', // 8 * 0.25rem = 32px
      },
      borderRadius: {
        '2xl': '1rem', // Example, adjust if Shadcn/ui uses different scale
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // any other plugins like daisyui or shadcn if needed as a plugin
  ],
  darkMode: 'class', // For dark mode toggle
}
export default config 