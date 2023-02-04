import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglish from './Translation/English/translation.json';
import translationChinese from './Translation/Chinese/translation.json';
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
