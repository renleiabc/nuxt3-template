// i18n/config.ts
import en from './lang/en.json';
import zhCn from './lang/zh-cn.json';
export default defineI18nConfig(() => ({
  legacy: false, // 是否兼容之前
  fallbackLocale: 'en', // 区配不到的语言就用en
  locale: 'en',
  messages: {
    en,
    'zh-cn': zhCn
  }
}));
