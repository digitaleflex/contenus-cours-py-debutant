/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-primary': '#00ff00',
        'cyber-dark': '#0a0f16',
        'cyber-neon': '#00ff9d',
        'cyber-blue': '#0ff',
        'cyber-red': '#ff003c',
        'matrix-green': '#003b00',
        'terminal-black': '#101116',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(#0a0f16 2px, transparent 2px), linear-gradient(90deg, #0a0f16 2px, transparent 2px)',
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray[300]'),
            '--tw-prose-headings': theme('colors.cyber-neon'),
            '--tw-prose-links': theme('colors.cyber-blue'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-code': theme('colors.cyber-blue'),
            '--tw-prose-quotes': theme('colors.gray[100]'),
            '--tw-prose-pre-bg': theme('colors.terminal-black'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
