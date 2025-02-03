import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "CBA",
  subTitle: "CBA SCEV - Self Charging Electric Vehicle",
  brandTitle: "CBA",

  description: "Blog about the CBA SCEV - Self Charging Electric Vehicle",

  site: "https://yukina-blog.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/mdresch/yukina",
    },
  ],

  username: "Menno Drescher",
  sign: "Ad Astra Per Aspera.",
  avatarUrl: "https://i.ibb.co/4w5f1cY5/SCEV-placeholder.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/mdresch",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home",
    },
  ],

  banners: [
    "https://i.ibb.co/5DjgD77/Firefly-Self-Charging-Electric-Vehicle-whereby-the-wheel-rotation-and-solar-but-also-rergenerative-b.jpg",
    "https://i.ibb.co/ycTzWvsG/Firefly-Self-Charging-Electric-Vehicle-whereby-the-wheel-rotation-and-solar-but-also-rergenerative-b.jpg",
    "https://i.ibb.co/9HH5Y8jV/Firefly-Self-Charging-Electric-Vehicle-whereby-the-wheel-rotation-and-solar-but-also-rergenerative-b.jpg",
    "https://i.ibb.co/JFn2Hvzv/electric-vehicle-charging-battery-pack-from-kinetic-energy-production-movement-of-the-car.png",
    "https://i.ibb.co/zHfbK5Ss/Adobe-Stock-1024994346-Preview.jpg",
    "https://i.ibb.co/PZsvkyyG/Adobe-Stock-979483004-Preview.jpg",
    "https://i.ibb.co/qSj3X0q/Adobe-Stock-962733580-Preview.jpg",
    "https://i.ibb.co/tp8mP0RK/Adobe-Stock-673077217-Preview.jpg",
    "https://i.ibb.co/4w5f1cY5/SCEV-placeholder.jpg",
    "https://i.ibb.co/5DjgD77/Firefly-Self-Charging-Electric-Vehicle-whereby-the-wheel-rotation-and-solar-but-also-rergenerative-b.jpg",
    "https://i.ibb.co/Qjb28Nkj/Firefly-Self-Charging-Electric-Vehicle-whereby-the-wheel-rotation-and-solar-but-also-rergenerative-b.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
