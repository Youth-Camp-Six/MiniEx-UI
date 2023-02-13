import React, { ReactNode } from 'react';
import CodeBlock from './components/code-block';

import Main from '../layout/main/main';
import Docs from '../views/doc/doc';
import HomeCN from '../views/home/homeZH';
import HomeUS from '../views/home/homeUS';
import NotFound from '../views/not-found/not-found';
import Changelogs from '../views/changelogs';

import MenuUS from '../components-docs/menuUS.mdx';
import MenuCN from '../components-docs/menuCN.mdx';
import ButtonUS from '../components-docs/buttonUS.mdx';
import ButtonCN from '../components-docs/buttonCN.mdx';
import TitleUS from '../components-docs/titleUS.mdx';
import TitleCN from '../components-docs/titleCN.mdx';
import AvatarUS from '../components-docs/avatarUS.mdx';
import AvatarCN from '../components-docs/avatarCN.mdx';
import DropdownUS from '../components-docs/dropdownUS.mdx';
import DropdownCN from '../components-docs/dropdownCN.mdx';
import TabsUS from '../components-docs/tabsUS.mdx';
import TabsCN from '../components-docs/tabsCN.mdx';
import BreadcrumbUS from '../components-docs/breadcrumbUS.mdx';
import BreadcrumbCN from '../components-docs/breadcrumbCN.mdx';
import RadioUS from '../components-docs/radioUS.mdx';
import RadioCN from '../components-docs/radioCN.mdx';

import '../i18n';
import { createHashRouter, Navigate } from 'react-router-dom';

/**
 * 定义html标签替换组件
 */
const components = {
  code: CodeBlock,
};

// 判断是否存在/views/dev/dev组件, 若存在则引入
const requireCustomFile = require.context('../views/dev/', false, /dev.tsx$/);
let Dev = React.lazy(() => import('../views/not-found/not-found'));
if (requireCustomFile.keys()?.length) {
  const keys: string[] = requireCustomFile.keys();
  if (keys.includes('./dev.tsx')) {
    const str = '/dev';
    Dev = React.lazy(() => import(`../views/dev${str}`));
  }
}

export const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to='/en' />,
    children: [],
  },
  {
    path: '/en',
    element: <Main />,
    children: [
      {
        path: 'home',
        element: <HomeUS />,
        children: [],
      },
      {
        path: '/en/dev',
        element: (
          <React.Suspense fallback='loading..'>
            <Dev />
          </React.Suspense>
        ),
        errorElement: <NotFound />,
      },
      {
        path: '/en/doc',
        element: <Docs />,
        children: [
          {
            path: '/en/doc/button',
            element: <ButtonUS components={components} />,
          },
          {
            path: '/en/doc/menu',
            element: <MenuUS components={components} />,
          },
          {
            path: '/en/doc/title',
            element: <TitleUS components={components} />,
          },
          {
            path: '/en/doc/avatar',
            element: <AvatarUS components={components} />,
          },
          {
            path: '/en/doc/dropdown',
            element: <DropdownUS components={components} />,
          },
          {
            path: '/en/doc/tabs',
            element: <TabsUS components={components} />,
          },
          {
            path: '/en/doc/breadcrumb',
            element: <BreadcrumbUS components={components} />,
          },
          {
            path: '/en/doc/radio',
            element: <RadioUS components={components} />,
          },
        ],
      },
    ],
  },
  {
    path: '/zh',
    element: <Main />,
    children: [
      {
        path: 'home',
        element: <HomeCN />,
        children: [],
      },
      {
        path: '/zh/dev',
        element: (
          <React.Suspense fallback='loading..'>
            <Dev />
          </React.Suspense>
        ),
        errorElement: <NotFound />,
      },
      {
        path: '/zh/doc',
        element: <Docs />,
        children: [
          {
            path: '/zh/doc/button',
            element: <ButtonCN components={components} />,
          },
          {
            path: '/zh/doc/menu',
            element: <MenuCN components={components} />,
          },
          {
            path: '/zh/doc/title',
            element: <TitleCN components={components} />,
          },
          {
            path: '/zh/doc/avatar',
            element: <AvatarCN components={components} />,
          },
          {
            path: '/zh/doc/dropdown',
            element: <DropdownCN components={components} />,
          },
          {
            path: '/zh/doc/tabs',
            element: <TabsCN components={components} />,
          },
          {
            path: '/zh/doc/breadcrumb',
            element: <BreadcrumbCN components={components} />,
          },
          {
            path: '/zh/doc/radio',
            element: <RadioCN components={components} />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/changelogs',
    element: <Main />,
    children: [
      {
        path: 'md',
        element: <Changelogs />,
      },
    ],
  },
]);

export default router;
