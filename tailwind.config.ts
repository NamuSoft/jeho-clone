import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#181818",
        accentGrey: "#ffffffb2",
        accentGrey2: "#999696",
        whitish: "#fefefe",
        accentRed: "#ff4a17",
      },
      backgroundImage: {
        "hero-Image": "url(/images/hero_bg.jpeg)",
        "linear-gradient": "linear-gradient(267.18deg,#161616,#080808)",
        "fun-fact": "url(/svg/funfact_shape_bg.svg)",
        "video-bg": "url(/images/video_bg.jpeg)",
        "hero-other": "url(/images/about_hero_bg.jpeg)",
        "other-bg": "url(/images/service_hero_bg.jpeg)",
        "portfolio-bg": "url(/images/portfolio_hero_bg.jpeg)",
        "blog-bg": "url(/images/blog_hero_bg.jpeg)",
        "contact-bg": "url(/images/contact_hero_bg.jpeg)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
