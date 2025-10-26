// module.exports = {
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },


  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        portfolio: {
          // Custom colors
          "primary": "#14b8a6",        // Teal accent (buttons, links, highlights)
          "secondary": "#06b6d4",      // Cyan (secondary actions)
          "accent": "#10b981",         // Green (success states)
          "neutral": "#2a323c",        // Neutral gray
          
          // Base colors (backgrounds)
          "base-100": "#1d232a",       // Main background (your dark color)
          "base-200": "#252c35",       // Slightly lighter (cards, sections)
          "base-300": "#2d3541",       // Even lighter (borders, dividers)
          
          // Semantic colors
          "info": "#3abff8",           
          "success": "#36d399",        
          "warning": "#fbbd23",        
          "error": "#f87272",
          
          // Text colors (DaisyUI auto-generates based on background)
          "base-content": "#e8eaed",   // Primary text color
          "primary-content": "#ffffff", // Text on primary color
        },
      },
    ],
  },
}
