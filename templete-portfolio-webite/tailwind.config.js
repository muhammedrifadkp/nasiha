/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F121D',      // Deep Sapphire Midnight background (richer than plain black)
          card: '#1A1F30',      // Slate Sapphire card background
          border: '#2B3349',    // Higher-contrast sapphire gray border
          gold: '#E5C595',      // Polished Champagne Gold (vibrant architectural accent)
          'gold-hover': '#F0DAB7', // Light gold glow hover accent
          light: '#F8FAFC',     // Bright Ivory/White for high-contrast headlines
          muted: '#BAC1CC',     // Highly-readable cool-sand gray for paragraph body text
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      zIndex: {
        'max': '999',
        'nav': '100',
        'overlay': '90',
        'header': '80'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
};