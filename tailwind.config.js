module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-mobile-light": "url(assets/images/bg-mobile-light.jpg)",
        "hero-image-desktop-light": "url(assets/images/bg-desktop-light.jpg)",
        "hero-image-desktop-dark": "url(assets/images/bg-desktop-dark.jpg)",
        "hero-image-mobile-dark": "url(assets/images/bg-mobile-dark.jpg)",
      },
    },
    fontFamily: {
      nunito: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      brightBlue: "hsl(220, 98%, 61%)",
      /* Light Theme */
      veryLightGray: "hsl(0, 0%, 98%)",
      veryLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlue: "hsl(233, 11%, 84%)",
      darkGrayishBlue: "hsl(236, 9%, 61%)",
      vryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      /* Dark Theme */
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlueDark: "hsl(234, 39%, 85%)",
      lightGrayishBlueHover: "hsl(236, 33%, 92%)",
      darkGrayishBlue: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
    },
    screens: {
      xs: "360px",
      // => @media (min-width: 360px) { ... }
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
