/** @type {import('tailwindcss').Config} */
// const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, and TSX files inside `src`
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'text': 'font-size, line-height',
        'default': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
      transitionDuration: {
        'default': '300ms',
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
      colors: {
        coral: '#FF6F61',
        darkGray: '#3A3A3A',
        lightGray: '#A9A9A9',
        coral: '#FF6F61',
        mistyRose: '#FFE4E1',
        gold: '#FFD700', 
        floralWhite: '#FFFAF0' // Background color
      },
      fontSize: {
        '10xl': '13rem',
      },
      fontFamily: {
        Inter: ['Inter', 'serif'],
        Lora: ['Lora'],
        JetBrains: ['JetBrains Mono'],
        techy: ['Sixtyfour Convergence'],
        // 'h3': ['ui-monospace'],
        // 'p': ['Oswald'],
      },
    },
  },
};
