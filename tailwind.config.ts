import type { Config } from 'tailwindcss';
const config: Config = {
    content: [
        "./src/app**/*.{js, ts, jsx, tsx, mdx}",
        "./src/features/**/*.{js, ts, jsx, tsx, mdx}",
        "./src/shared/**/*.{js, ts, jsx, tsx, mdx}",
    ],
    theme: {
    extend:{
        colors: {
            primary: {
                300: '#FFFBE8',
                500: '#FAE26D', 
                700: '#E7CA48',
            },
            gray: {
                100: '#FFFFFF', // white
                200: '#F3F2F3',
                300: '#E7E7E8',
                400: '#B8B7B9',
                500: '#A1A0A2',
                600: '#6E6D6F',
                700: '#373738',
                800: '#1C1C1D', // black
            }
        },
        spacing: {
            'xs': '0.25rem',    // 4px
            'sm': '0.5rem',     // 8px
            'md': '0.75rem',    // 12px
            'base': '1rem',     // 16px (기본)
            'lg': '1.25rem',    // 20px
            'xl': '1.5rem',     // 24px
            '2xl': '2rem',      // 32px
            '3xl': '2.5rem',    // 40px
            '4xl': '3rem',      // 48px
        },
        borderRadius: {
            'xs': '0.25rem',    // 4px
            'sm': '0.5rem',     // 8px (기본)
            'md': '0.75rem',    // 12px
            'lg': '1rem',       // 16px
            'xl': '1.5rem',     // 24px
            'full': '9999px',   // 뱃지
        },
        fontFamily: {
            sans: ['var(--font-pretendard)', 'system-ui', 'sans-serif'],
        },
        fontSize: {
            'xs': ['0.75rem', '150%'],   // 12px
            'sm': ['0.875rem', '160%'],  // 14px
            'md': ['1rem', '160%'],      // 16px
            'lg': ['1.25rem', '140%'],   // 20px
            'xl': ['1.5rem', '140%'],    // 24px
            '2xl': ['2rem', '140%'],     // 32px
        },
        fontWeight: {
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
    }
}
}

export default config;