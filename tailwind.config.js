/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Fira Sans Extra Condensed', sans-serif;"],
        play: ['Play, sans-serif;']
      },
      colors: {
        primary: {
          light: '#FBF5C2',
          regular: '#F7E99D',
          dark: '#F3E075'
        },
        secondary: {
          light: '#EDF7FF',
          regular: '#C7E2FF',
          dark: '#A2C9FF'
        },
        tertiary: {
          light: '#E9D8FE',
          regular: '#D4BFFC',
          dark: '#C0A6FA'
        }
      },
      height: {
        'screen-3/4': '90vh'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
