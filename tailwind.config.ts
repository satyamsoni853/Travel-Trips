import type { Config } from 'tailwindcss'

const config: Config = {
  // Enables dark mode based on the 'class' present in the HTML root
  darkMode: "class", 
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Keep for Flowbite compatibility
    'node_modules/flowbite-react/lib/esm/**/*.js', 
  ],
  theme: {
    // 💡 ADDED: Custom container configuration for responsive layout 💡
    container: {
      center: true, // Center the container horizontally
      padding: '1rem', // Default padding on all screens
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      // 💡 ADDED: Custom color pallet for branding consistency 💡
      colors: {
        sunspots: {
          blue: '#1e40af', // Darker Blue (for primary background/accents)
          amber: '#f59e0b', // Amber/Orange (for accent headings/highlights)
        },
      },
      keyframes: {
        // Existing large-scale animation
        'plane-fly': {
          '0%': { transform: 'translateX(-100vw) translateY(50px) rotate(45deg)', opacity: '0.1' },
          '50%': { transform: 'translateX(50vw) translateY(0px) rotate(45deg)', opacity: '0.4' },
          '100%': { transform: 'translateX(100vw) translateY(-50px) rotate(45deg)', opacity: '0.1' },
        },
        // Sublte floating animation (used in the Offerings card)
        'plane-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
          '50%': { transform: 'translateY(-10px) rotate(45deg)' },
        },
      },
      animation: {
        'plane-fly': 'plane-fly 45s linear infinite', 
        'plane-float': 'plane-float 5s ease-in-out infinite',
      },
      screens: {
        // Custom screens are good, kept them here
        'xs': '300px',
        'sm': '640px',
        'md': '790px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

export default config