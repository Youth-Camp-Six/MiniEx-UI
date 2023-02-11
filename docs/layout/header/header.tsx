import React, { memo, useState } from 'react';
import { Link, To, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, Tabs } from '../../../src';
import myImg from '../../assets/logo.png';
import githubSVG from '@/assets/github.svg';

import cls from './header.module.less';

const isDev = process.env.NODE_ENV === 'development';

const Header: React.FC = () => {
  // const [themeMode, setThemeMode] = useState('light');
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

  const handleModule = (e) => {
    if (e !== 'Light') {
      // setThemeMode('mi-dark');
      document.body.classList.add('mi-dark');
    } else {
      // setThemeMode('light');
      document.body.classList.remove('mi-dark');
    }
  };

  return (
    <div className={cls.header}>
      <div className={cls.left}>
        <div className={cls.logo}>
          <img
            src={myImg}
            alt=''
            style={{ width: '30px', height: '30px' }}
            onClick={() => {
              nav('/' + languageMode + '/home');
            }}
          />
          <span
            style={{ marginLeft: '10px' }}
            onClick={() => {
              nav('/' + languageMode + '/home');
            }}
          >
            {' '}
            MiniEx UI
          </span>
        </div>
      </div>
      <div className={cls.right}>
        <Link to={'/' + languageMode + '/home'}>
          <Button btnType='link'>{t('headerHome', { ns: ['home'] })}</Button>
        </Link>
        <Link to='/changelogs/md'>
          <Button btnType='link'>{t('changelog', { ns: ['home'] })}</Button>
        </Link>
        {isDev && (
          <Link to={'/' + languageMode + '/dev'}>
            <Button btnType='link'>{t('headerdev', { ns: ['home'] })}</Button>
          </Link>
        )}
        <Link to={'/' + languageMode + '/doc/button'}>
          <Button btnType='link'>{t('headerDoc', { ns: ['home'] })}</Button>
        </Link>
        <Button onClick={onClickLanguageChange}>{t('language', { ns: ['home'] })}</Button>{' '}
        &nbsp;&nbsp;
        <Link to={'https://github.com/Youth-Camp-Six/MiniEx-UI'} target='_blank'>
          <img className={cls.image} src={githubSVG} />
        </Link>
        <Tabs
          round='round'
          itemWidth='40px'
          change={(e) => {
            handleModule(e.label);
          }}
          options={[
            { label: 'Light', value: '1' },
            { label: 'Dark', value: '2' },
          ]}
        ></Tabs>
      </div>
    </div>
  );
};

export default memo(Header);
