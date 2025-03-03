module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-background": "var(--app-background)",
        "dark-background": "var(--dark-background)",
        "dark-text": "var(--dark-text)",
        main: "var(--main)",
        overlay: "var(--overlay)",
        "secondary-black": "var(--secondary-black)",
        text: "var(--text)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        base: "var(--base-font-family)",
        "heading-2xl": "var(--heading-2xl-font-family)",
        "heading-3xl": "var(--heading-3xl-font-family)",
        "heading-4xl": "var(--heading-4xl-font-family)",
        "heading-base": "var(--heading-base-font-family)",
        "heading-base-16": "var(--heading-base-16-font-family)",
        "heading-lg": "var(--heading-lg-font-family)",
        "heading-lg-18": "var(--heading-lg-18-font-family)",
        "heading-sm": "var(--heading-sm-font-family)",
        "heading-sm-14": "var(--heading-sm-14-font-family)",
        "heading-xl": "var(--heading-xl-font-family)",
        "heading-xl-20": "var(--heading-xl-20-font-family)",
        "heading-xs": "var(--heading-xs-font-family)",
        lg: "var(--lg-font-family)",
        sm: "var(--sm-font-family)",
        xs: "var(--xs-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "box-shadow": "var(--box-shadow)",
        "dark-box-shadow": "var(--dark-box-shadow)",
        "dark-reverse-box-shadow": "var(--dark-reverse-box-shadow)",
        "reverse-box-shadow": "var(--reverse-box-shadow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
