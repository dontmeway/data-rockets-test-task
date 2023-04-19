/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', 'Helvetica', 'Arial', 'monospace'],
        display: ['"Space Mono"', 'Helvetica', 'Arial', 'monospace'],
        body: ['"Space Mono"', 'Helvetica', 'Arial', 'monospace'],
      },
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        white: 'hsl(0, 0%, 100%)',
        cyan: {
          'very-dark': 'hsl(183, 100%, 15%)',
          'dark-grayish': 'hsl(186, 14%, 43%)',
          grayish: 'hsl(184, 14%, 56%)',
          'light-grayish': 'hsl(185, 41%, 84%)',
          'very-light-grayish': 'hsl(189, 41%, 97%)',
        },
      },
    },
  },
  plugins: [],
}
