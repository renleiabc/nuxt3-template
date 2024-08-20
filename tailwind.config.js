/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  lightMode: 'class',
  important: '#app',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      width: {
        p20: '20%',
        p18: '18%',
        p12: '12%'
      },
      colors: {
        custom: {
          'header': '#0D9FC3',
          'search': '#0883A6',
          'pink': '#ff49db',
          'tabs': '#A2E4E7',
          'white': '#ffffff',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6'
        }
      },
      textColor: {
        white: '#ffffff',
        activeTabs: '#4AC2D6'
      },
      backgroundColor: {
        primary: '#0D9FC3',
        secondary: '#0D9FC3',
        header: '#0D9FC3',
        search: '#0883A6',
        tabs: '#A2E4E7',
        activeTabs: '#4AC2D6',
        page: '#53C5D8'
      }
    }
  },
  plugins: []
};
