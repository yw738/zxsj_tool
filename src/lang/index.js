// i18n.js
import { createI18n } from "vue-i18n";
import customEN from "./en.js"; // 自定义英语包
import customZH from "./zh.js"; // 自定义中文包
import { localStorage } from "@/utils/storage";

const messages = {
  // zh: {
  //   ...customZH,
  // },
  en: {
    ...customEN,
  },
};

// 获取语言
export function getLanguage() {
  //   const app = useApp();
  const chooseLanguage = localStorage.get("language");
  if (chooseLanguage) return chooseLanguage;

  // 如果没有选择语言
  //   const language = (
  //     navigator.language || navigator.browserLanguage
  //   ).toLowerCase();
  //   const locales = Object.keys(messages);
  //   for (const locale of locales) {
  //     if (language.indexOf(locale) > -1) {
  //       return locale;
  //     }
  //   }
  localStorage.set("language", "en");
  return "en"; // 默认语言
}
localStorage.set("language", "en");
const i18n = createI18n({
  globalInjection: true, //设置全局 属性
  locale: getLanguage(), // 设置默认语言
  messages, // 语言环境信息
});

export default i18n;
