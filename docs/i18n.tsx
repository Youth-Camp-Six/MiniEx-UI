import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationEnglish, translationChinese } from './layout/header/header.config';

const docUS = {
  showCode: 'Show code',
  hideCode: 'Hide code',
  Param: 'Param',
  Description: 'Description',
  Type: 'Type',
  Default: 'Default value',
  Copy: 'Copy',
  Copied: 'Copied',
};

const docCN = {
  showCode: '展示源码',
  hideCode: '隐藏源码',
  Param: '参数名',
  Description: '描述',
  Type: '类型',
  Default: '默认值',
  Copy: '复制代码',
  Copied: '代码已复制',
};

//---Using different namespaces
const resources = {
  en: {
    home: translationEnglish,
    doc: docUS,
  },
  zh: {
    home: translationChinese,
    doc: docCN,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: window.location.hash.split('/')[1] || 'zh', //default language
});

export default i18next;
