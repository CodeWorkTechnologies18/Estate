/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        secondary: "#F8FAFC",
        accent: "#D4A249",
        accentDark: "#B47A1D",
        slateDeep: "#12263F",
        mist: "#E9EEF5"
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 60px rgba(11, 31, 58, 0.14)",
        glow: "0 18px 40px rgba(212, 162, 73, 0.2)"
      },
      backgroundImage: {
        "premium-grid":
          "linear-gradient(rgba(11,31,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
