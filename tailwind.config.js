module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary : '#889988',
      },
      screens: {
        '2xl': {'max': '2035px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
};
