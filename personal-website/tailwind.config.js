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
        // Add default timing function
        'default': 'ease-in-out',
      },
      colors: {
        coral: '#FF6F61', // Coral Background
        darkGray: '#3A3A3A', // Dark Gray
        lightGray: '#A9A9A9', // Light Gray
        lightCoral: '#FFF5F0', // Light Coral
        mistyRose: '#FFE4E1', // Misty Rose
        gold: '#FFD700', // Gold
      },
      fontSize: {
        '10xl': '13rem',  // Change this value to your desired size
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
