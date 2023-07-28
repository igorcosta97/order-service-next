/** @type {import('tailwindcss').Config} */
import { blackA, violet, mauve } from '@radix-ui/colors'
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    fontFamily: {
      sans: 'var(--font-roboto)',
      alt: 'var(--font-bai-jamjuree)',
    },
    colors: {
      ...blackA,
      ...violet,
      ...mauve,
    },
  },
}
export const plugins = []
