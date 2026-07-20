/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#071426',
          800: '#0a1c33',
          700: '#0e2440',
          600: '#122c4d',
        },
        gold: {
          400: '#e6b84d',
          500: '#D4A437',
          600: '#b88c2e',
        },
        electric: {
          400: '#4dc3ff',
          500: '#19B5FF',
          600: '#0099e6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'orb': 'orb-float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(1deg)' },
          '50%': { transform: 'translateY(-25px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 164, 55, 0.3), 0 0 40px rgba(212, 164, 55, 0.1)',
            opacity: '0.8',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(212, 164, 55, 0.5), 0 0 80px rgba(212, 164, 55, 0.2)',
            opacity: '1',
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        'orb-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, -30px) scale(0.95)' },
          '75%': { transform: 'translate(20px, 30px) scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
