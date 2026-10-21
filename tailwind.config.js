/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#070C14',
          surface: '#0E1624',
          elevated: '#162235',
        },
        kinetic: {
          cyan: '#00E5C8',
          'cyan-hover': '#00C4AA',
          blue: '#2563EB',
          sky: '#38BDF8',
        },
        brand: {
          gold: '#F59E0B',
          whatsapp: '#25D366',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
        border: {
          subtle: '#1E293B',
          active: '#334155',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 200, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
};

