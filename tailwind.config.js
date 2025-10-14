module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-", // 👈 add this line
  theme: {
    extend: {},
  },
  plugins: [],
};
