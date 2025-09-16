/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-300
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // navy-900
        background: "var(--color-background)", // gray-50
        foreground: "var(--color-foreground)", // gray-900
        surface: "var(--color-surface)", // white
        primary: {
          DEFAULT: "var(--color-primary)", // navy-900
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // blue-800
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-100
          foreground: "var(--color-muted-foreground)", // gray-600
        },
        accent: {
          DEFAULT: "var(--color-accent)", // yellow-600
          foreground: "var(--color-accent-foreground)", // gray-900
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-900
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-900
        },
        success: {
          DEFAULT: "var(--color-success)", // green-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // yellow-600
          foreground: "var(--color-warning-foreground)", // gray-900
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
        // Brand-specific colors
        trust: {
          DEFAULT: "var(--color-trust)", // slate-700
          foreground: "var(--color-trust-foreground)", // white
        },
        prosperity: {
          DEFAULT: "var(--color-prosperity)", // gold
          foreground: "var(--color-prosperity-foreground)", // gray-900
        },
        institutional: {
          DEFAULT: "var(--color-institutional)", // slate-800
          foreground: "var(--color-institutional-foreground)", // white
        },
        cta: {
          DEFAULT: "var(--color-cta)", // orange-600
          foreground: "var(--color-cta-foreground)", // white
        },
        // Text hierarchy
        text: {
          primary: "var(--color-text-primary)", // gray-900
          secondary: "var(--color-text-secondary)", // gray-600
          tertiary: "var(--color-text-tertiary)", // gray-500
        },
      },
      borderRadius: {
        lg: "var(--radius)", // 0.5rem
        md: "var(--radius-md)", // 0.375rem
        sm: "var(--radius-sm)", // 0.25rem
        xl: "var(--radius-xl)", // 1rem
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: '1.4' }], // 0.75rem
        sm: ['var(--font-size-sm)', { lineHeight: '1.5' }], // 0.875rem
        base: ['var(--font-size-base)', { lineHeight: '1.6' }], // 1rem
        lg: ['var(--font-size-lg)', { lineHeight: '1.6' }], // 1.125rem
        xl: ['var(--font-size-xl)', { lineHeight: '1.5' }], // 1.25rem
        '2xl': ['var(--font-size-2xl)', { lineHeight: '1.4' }], // 1.5rem
        '3xl': ['var(--font-size-3xl)', { lineHeight: '1.3' }], // 1.875rem
        '4xl': ['var(--font-size-4xl)', { lineHeight: '1.2' }], // 2.25rem
        '5xl': ['var(--font-size-5xl)', { lineHeight: '1.1' }], // 3rem
        '6xl': ['var(--font-size-6xl)', { lineHeight: '1' }], // 3.75rem
      },
      spacing: {
        'brand-1': 'var(--spacing-1)', // 0.5rem (8px)
        'brand-2': 'var(--spacing-2)', // 0.8125rem (13px)
        'brand-3': 'var(--spacing-3)', // 1.3125rem (21px)
        'brand-4': 'var(--spacing-4)', // 2.125rem (34px)
        'brand-5': 'var(--spacing-5)', // 3.4375rem (55px)
        'brand-6': 'var(--spacing-6)', // 5.5625rem (89px)
      },
      boxShadow: {
        'brand-sm': 'var(--shadow-sm)',
        'brand': 'var(--shadow-default)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
        'brand-xl': 'var(--shadow-xl)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-scale": "fadeInScale 0.4s ease-out",
        "shimmer": "shimmer 2s infinite linear",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-gentle": "bounce 2s infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "calc(200px + 100%) 0",
          },
        },
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'brand-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        'brand-fast': '200ms',
        'brand': '300ms',
        'brand-slow': '400ms',
      },
      backdropBlur: {
        'brand': '8px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        'gradient-prosperity': 'linear-gradient(135deg, var(--color-prosperity), var(--color-accent))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}