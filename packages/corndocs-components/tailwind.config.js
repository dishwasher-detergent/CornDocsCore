const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ["./**/*.tsx"],
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
};
