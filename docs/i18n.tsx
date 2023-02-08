import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEnglish = {
  language: 'English',
  headerHome: 'Home',
  headerDoc: 'Document',
  headerdev: 'Dev',
};

const translationChinese = {
  language: '中文',
  headerHome: '首页',
  headerDoc: '文档',
  headerdev: '开发',
};

//---Using different namespaces
const resources = {
  en: {
    home: translationEnglish,
  },
  zh: {
    home: translationChinese,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', //default language
});

export default i18next;
