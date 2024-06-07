/** @type {import('tailwindcss').Config} */
import daisy from 'daisyui'
import typography from '@tailwindcss/typography'
module.exports = {
  content: ['**/*.html', '**/*.tsx'],
  theme: {
    extend: {}
  },
  plugins: [
    typography,
    daisy,
  ],
  daisyui: {
    themes: ['emerald']
  }
}
