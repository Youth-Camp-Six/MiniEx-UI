import React, { ReactNode } from 'react';
import CodeBlock from './components/code-block';

import Main from '../layout/main/main';
import Docs from '../views/doc/doc';
import Home from '../views/home/home';
import NotFound from '../views/not-found/not-found';

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

import '../i18n';
import { createHashRouter, Navigate } from 'react-router-dom';

await compile(MenuUS, { remarkPlugins: [remarkMdxImages] });
await compile(MenuCN, { remarkPlugins: [remarkMdxImages] });
await compile(ButtonUS, { remarkPlugins: [remarkMdxImages] });
await compile(ButtonCN, { remarkPlugins: [remarkMdxImages] });
await compile(TitleUS, { remarkPlugins: [remarkMdxImages] });
await compile(TitleCN, { remarkPlugins: [remarkMdxImages] });
await compile(AvatarUS, { remarkPlugins: [remarkMdxImages] });
await compile(AvatarCN, { remarkPlugins: [remarkMdxImages] });
await compile(DropdownUS, { remarkPlugins: [remarkMdxImages] });
await compile(DropdownCN, { remarkPlugins: [remarkMdxImages] });
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
        element: <Home />,
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
        element: <Home />,
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
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
