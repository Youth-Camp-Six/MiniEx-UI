import React, { memo, useState } from 'react';
import cls from './header.module.less';
import { Link, To, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../../src';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [themeMode, setThemeMode] = useState('light');
  const { t, i18n } = useTranslation(['home']);
  const [languageMode, setLanguageMode] = useState('en');
  const nav = useNavigate();
  const location = useLocation();

  const onClickLanguageChange = () => {
    let temp: To;
    if (languageMode === 'zh') {
      setLanguageMode('en');
      temp = location.pathname.replace('/zh', '/en');
      i18n.changeLanguage('en');
      nav(temp);
    } else {
      setLanguageMode('zh');
      temp = location.pathname.replace('/en', '/zh');
      i18n.changeLanguage('zh');
      nav(temp);
    }
  };

  const handleModule = () => {
    if (themeMode === 'light') {
      setThemeMode('mi-dark');
      document.body.classList.add('mi-dark');
    } else {
      setThemeMode('light');
      document.body.classList.remove('mi-dark');
    }
  };

  return (
    <div className={cls.header}>
      <div className='left'>
        <div>MiniEx-UI</div>
      </div>
      <div className='right'>
        <Link to={'/' + languageMode + '/home'}>
          <Button btnType='link'>{t('headerHome', { ns: ['home'] })}</Button>
        </Link>
        <Link to={'/' + languageMode + '/doc/button'}>
          <Button btnType='link'>{t('headerDoc', { ns: ['home'] })}</Button>
        </Link>
        <Button onClick={handleModule}>{themeMode}</Button>
        <Button onClick={onClickLanguageChange}>{languageMode}</Button>
      </div>
    </div>
  );
};

export default memo(Header);
