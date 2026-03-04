import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: '#050505',
                'bg-card': '#0d0d0d',
                'bg-glass': 'rgba(5,5,5,0.7)',
                accent: '#c9a96e',
                'accent-light': '#e8d5a3',
                'accent-dark': '#8a6b3a',
                border: 'rgba(255,255,255,0.08)',
                'text-primary': '#f5f5f5',
                'text-secondary': 'rgba(245,245,245,0.6)',
                'text-muted': 'rgba(245,245,245,0.35)',
            },
            fontFamily: {
                serif: ['"Noto Serif Thai"', 'serif'],
                sans: ['"Bai Jamjuree"', 'sans-serif'],
            },
            letterSpacing: {
                widest: '0.25em',
                ultrawide: '0.4em',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease forwards',
                'fade-up': 'fadeUp 0.8s ease forwards',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gold-shimmer': 'linear-gradient(90deg, #c9a96e 0%, #e8d5a3 50%, #c9a96e 100%)',
            },
        },
    },
    plugins: [],
}

export default config
