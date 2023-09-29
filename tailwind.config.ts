import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-transparent':
          'linear-gradient(180deg, rgba(27, 27, 27, 0.6) 0%, rgba(27, 27, 27, 0) 100%)',
        'gradient-warp': 'linear-gradient(360deg, #F9F3EB 2.6%, #050624 50.52%, #000000 100%)',
      },
      fontFamily: {
        noto: ['var(--font-noto-sans)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        primary: {
          50: '#e9f6fc',
          100: '#a5dcf3',
          200: '#78caed',
          300: '#4bb8e7',
          400: '#1c96ca',
          500: '#15749d',
          600: '#126487',
          700: '#126487',
          800: '#0c435a',
          900: '#06212d',
        },
        secondary: {
          100: '#78dbed',
          300: '#189cb4',
          500: '#0d5663',
          700: '#0f6270',
          900: '#093b43',
        },
        tertiary: {
          100: '#f0b98f',
          300: '#e38135',
          500: '#8b4713',
          700: '#5a2e0c',
          900: '#2d1706',
        },
      },
    },
  },
  plugins: [],
};
export default config;
