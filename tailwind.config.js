/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: "Orbitron",
        manrope: "Manrope",
        maven: "Maven Pro"
      },
      colors: {
        textGray: "#9C9C9C",
        bgPrimary: "#1D103F"
      },
      flex: {
        auto: "0 0 auto",
      },
      screens: {
        lg: "991px",
        // => @media (min-width: 991px) { ... }
      },
      backgroundImage: {
        airdrop: "url('/src/assets/images/background/bg-airdrop.svg')",
        preorder: "url('/public/images/home/bg-preorder.jpg')",
        integration: "url('/public/images/home/bg-integration.png')",
        story: "url('/public/images/home/bg-story.jpg')",
        choose: "url('/public/images/home/bg-choose.jpg')",
      },
    },
  },
  plugins: [],
};
