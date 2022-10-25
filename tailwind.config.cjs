/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('./src/assets/Background.svg')",
      },
      fontFamily: {
        'sans': ["'Roboto'", "sans-serif"],
        'baloo': ["'Baloo 2'", 'mono']
      },
      colors: {
        yellow: {
          dark: "#C47F17",
          normal: "#DBAC2C",
          light: "#F1E9C9"
        },
        
        purple: {
          dark: "#4B2995",
          normal: "#8047F8",
          light: "#EBE5F9"
        },

        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          card: "#F3F2F2",
        },

        background: "#FAFAFA",
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
      }
    },
  },
  plugins: [],
}
