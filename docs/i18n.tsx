import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationEnglish, translationChinese } from './layout/header/header.config';

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
