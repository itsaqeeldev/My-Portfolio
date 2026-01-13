/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cyber-black': '#000000',
                'neon-cyan': '#00D1FF',
                'electric-violet': '#7B2CBF',
                'deep-void': '#050510',
                'deep-navy': '#001A33',
                'glass': 'rgba(255, 255, 255, 0.05)',
            },
            boxShadow: {
                'neon': '0 0 10px rgba(0, 209, 255, 0.5), 0 0 20px rgba(0, 209, 255, 0.3)',
                'neon-hover': '0 0 20px rgba(0, 209, 255, 0.8), 0 0 40px rgba(0, 209, 255, 0.4)',
                'neon-violet': '0 0 10px rgba(123, 44, 191, 0.5), 0 0 20px rgba(123, 44, 191, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00D1FF 0deg, #7B2CBF 180deg, #00D1FF 360deg)',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-reverse-slow': 'spin-reverse 10s linear infinite',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                'spin-reverse': {
                    'from': { transform: 'rotate(360deg)' },
                    'to': { transform: 'rotate(0deg)' },
                },
                'glitch': {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Ensure Inter is imported or use system default
                mono: ['monospace'], // Fallback for terminal style
            }
        },
    },
    plugins: [],
}
