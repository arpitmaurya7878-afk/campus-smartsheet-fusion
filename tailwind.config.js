/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg: '#005f73',
          active: '#0a9396',
          text: '#ffffff',
        },
        main: {
          bg: '#f4f9fc',
        },
        header: {
          text: '#1d4e89',
        },
        description: {
          text: '#607d8b',
        },
        btn: {
          primary: {
            bg: '#1d4e89',
            text: '#ffffff',
          },
          secondary: {
            bg: '#ffffff',
            text: '#1d4e89',
          }
        },
        card: {
          bg: '#ffffff',
          border: '#e0e0e0',
        },
        icon: {
          default: '#000000',
          success: '#4caf50',
          warning: '#ff9800',
          error: '#f44336',
        },
        tab: {
          selected: {
            bg: '#1d4e89',
            text: '#ffffff',
          },
          unselected: {
            bg: '#d0e4f7',
            text: '#1d4e89',
          }
        },
        search: {
          border: '#cfd8e1',
          placeholder: '#90a4ae',
        },
        fab: {
          bg: '#1d4e89',
          icon: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}