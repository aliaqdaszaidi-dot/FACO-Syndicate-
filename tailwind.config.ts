import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        primary: 'hsl(var(--color-primary))',
        'primary-dark': 'hsl(var(--color-primary-dark))',
        'primary-light': 'hsl(var(--color-primary-light))',
        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',
        muted: 'hsl(var(--color-muted))',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
}
export default config
