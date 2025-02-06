module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', // Adicione os caminhos para suas páginas
    './components/**/*.{js,jsx,ts,tsx}', // Adicione os caminhos para seus componentes
  ],
  theme: {
    fontFamily: {
      "display": ["Noto Sans", "sans-serif"],
      "body": ["Noto Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
