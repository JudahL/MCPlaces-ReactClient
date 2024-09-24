/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['"Zilla Slab"', ...defaultTheme.fontFamily.sans],
        'navbar': ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        'footer': ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        'button': ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}

