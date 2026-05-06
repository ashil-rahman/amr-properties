import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ── Aeterna design tokens ───────────────────── */
      colors: {
        surface:                    '#fbf9f9',
        'surface-dim':              '#dbdad9',
        'surface-bright':           '#fbf9f9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low':    '#f5f3f3',
        'surface-container':        '#efeded',
        'surface-container-high':   '#e9e8e7',
        'surface-container-highest':'#e3e2e2',
        'on-surface':               '#1b1c1c',
        'on-surface-variant':       '#444748',
        'inverse-surface':          '#303031',
        'inverse-on-surface':       '#f2f0f0',
        'outline':                  '#747878',
        'outline-variant':          '#c4c7c7',
        'primary':                  '#1b1c1c',
        'on-primary':               '#fbf9f9',
        'primary-container':        '#1c1b1b',
        'on-primary-container':     '#858383',
        /* AMR brand accent */
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#D4B96A',
          dark:    '#A88933',
        },
        navy: {
          DEFAULT: '#0A1931',
          light:   '#112548',
          dark:    '#060f1e',
        },
      },

      /* ── Typography ─────────────────────────────── */
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,7vw,5rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline-lg': ['clamp(2rem,4.5vw,3rem)',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'headline-md': ['clamp(1.5rem,3vw,2rem)',  { lineHeight: '1.3',  letterSpacing: '0'       }],
        'body-lg':     ['1.125rem',                { lineHeight: '1.75', letterSpacing: '0.01em'  }],
        'body-md':     ['1rem',                    { lineHeight: '1.65', letterSpacing: '0.005em' }],
        'label-caps':  ['0.6875rem',               { lineHeight: '1.4',  letterSpacing: '0.14em', fontWeight: '600' }],
      },

      /* ── Spacing ─────────────────────────────────── */
      spacing: {
        'page':    '5rem',   /* 80px desktop margin */
        'section': '8rem',   /* 128px section gap   */
        'gutter':  '1.5rem', /* 24px column gutter  */
      },

      /* ── Shape ───────────────────────────────────── */
      borderRadius: {
        DEFAULT: '2px',
        sm:      '2px',
        md:      '4px',
        lg:      '6px',
        full:    '9999px',
      },

      /* ── Backdrop ────────────────────────────────── */
      backdropBlur: { glass: '20px' },

      /* ── Shadows ─────────────────────────────────── */
      boxShadow: {
        'ambient': '0 8px 40px rgba(0,0,0,0.04)',
        'gold-sm': '0 2px 12px rgba(201,168,76,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
