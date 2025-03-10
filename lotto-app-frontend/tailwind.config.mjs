/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "var(--color-gold)", 
            darker: "var(--color-gold-darker)"
          },
          dark: {
            DEFAULT: "var(--color-dark)",
          },
          background: {
            DEFAULT: "var(--color-background)",
           
           
          },
          gray: {
            DEFAULT: "var(--color-gray)",
           
           
          },
          secondary: {
            DEFAULT: "var(--color-secondary)"
          }
        }
      },
    },
    plugins: [],
  };