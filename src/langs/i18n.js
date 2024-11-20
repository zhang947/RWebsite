import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import zh from './zh';

// 安装 VueI18n 插件
Vue.use(VueI18n);

// 检查 localStorage 是否存在 'lang'，默认为 'zh'
const locale = localStorage.getItem('lang') || 'en';

// 配置语言包
const messages = {
  en,
  zh,
};

// 创建 VueI18n 实例
const i18n = new VueI18n({
  locale, // 当前语言
  messages, // 语言包
});

export default i18n;
