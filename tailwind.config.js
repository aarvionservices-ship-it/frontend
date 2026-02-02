
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--color-background) / <alpha-value>)',
                surface: 'rgb(var(--color-surface) / <alpha-value>)',
                primary: 'var(--color-blue)',
                secondary: 'var(--color-text-secondary)',
                text: {
                    DEFAULT: 'var(--color-text-primary)',
                    muted: 'var(--color-text-secondary)',
                },
                brand: {
                    green: 'var(--color-green)',
                    blue: 'var(--color-blue)',
                },
                border: 'var(--color-border)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                sm: '6px',
                md: '12px',
                lg: '20px',
                xl: '28px',
            },
            boxShadow: {
                soft: '0 8px 24px rgba(0,0,0,0.18)',
                medium: '0 12px 32px rgba(0,0,0,0.25)',
                strong: '0 20px 60px rgba(0,0,0,0.35)',
            },
            transitionTimingFunction: {
                neon: 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            transitionDuration: {
                fast: '120ms',
                normal: '220ms',
                slow: '420ms',
            },
            backgroundImage: {
                'hero-gradient': 'var(--gradient-hero)',
                'surface-gradient': 'var(--gradient-surface)',
                'cta-gradient': 'var(--gradient-cta)',
                'glow-overlay': 'var(--gradient-glow)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
