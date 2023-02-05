import React, { ReactNode } from 'react';
import remarkMdxImages from 'remark-mdx-images';
import { compile } from '@mdx-js/mdx';

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

import '../i18n';
import { createHashRouter, Navigate } from 'react-router-dom';

await compile(MenuUS, { remarkPlugins: [remarkMdxImages] });
await compile(MenuCN, { remarkPlugins: [remarkMdxImages] });
await compile(ButtonUS, { remarkPlugins: [remarkMdxImages] });
await compile(ButtonCN, { remarkPlugins: [remarkMdxImages] });
await compile(TitleUS, { remarkPlugins: [remarkMdxImages] });
await compile(TitleCN, { remarkPlugins: [remarkMdxImages] });

// 判断是否存在/views/dev/dev组件, 若存在则引入
const requireCustomFile = require.context('../views/dev/', false, /dev.tsx$/);
let DevCmp = React.lazy(() => import('../views/not-found/not-found'));
if (requireCustomFile?.keys()) {
  const keys: string[] = requireCustomFile?.keys();
  if (keys.includes('./dev.tsx')) {
    DevCmp = React.lazy(() => import('../views/dev/dev'));
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
            <DevCmp />
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
            element: <ButtonUS />,
          },
          {
            path: '/en/doc/menu',
            element: <MenuUS />,
          },
          {
            path: '/en/doc/title',
            element: <TitleUS />,
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
            <DevCmp />
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
            element: <ButtonCN />,
          },
          {
            path: '/zh/doc/menu',
            element: <MenuCN />,
          },
          {
            path: '/zh/doc/title',
            element: <TitleCN />,
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
