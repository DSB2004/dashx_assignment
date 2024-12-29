module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust to your file locations
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: { 'xxs': "0.6rem" },
      colors: { "customGray": "#D8D8D8", "selectbox": "#F5F5F5" }
    },
  },
  plugins: [],
};
