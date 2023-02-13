import React from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import remarkMdxImages from 'remark-mdx-images';
import { compile } from '@mdx-js/mdx';

import Main from '../layout/main/main';
import Docs from '../views/doc/doc';
import Home from '../views/home/home';

import MenuUS from '../components-docs/menuUS.mdx';
import MenuCN from '../components-docs/menuCN.mdx';
import ButtonUS from '../components-docs/buttonUS.mdx';
import ButtonCN from '../components-docs/buttonCN.mdx';
import FlexUS from '../components-docs/flexUS.mdx';
import FlexCN from '../components-docs/flexCN.mdx';
import SelectUS from '../components-docs/selectUS.mdx';
import SelectCN from '../components-docs/selectCN.mdx';
import TitleUS from '../components-docs/titleUS.mdx';
import TitleCN from '../components-docs/titleCN.mdx';
import TagUS from '../components-docs/tagUS.mdx';
import TagCN from '../components-docs/tagCN.mdx';

import '../i18n';

await compile(MenuUS, { remarkPlugins: [remarkMdxImages] });
await compile(MenuCN, { remarkPlugins: [remarkMdxImages] });
await compile(ButtonUS, { remarkPlugins: [remarkMdxImages] });
await compile(ButtonCN, { remarkPlugins: [remarkMdxImages] });
await compile(FlexUS, { remarkPlugins: [remarkMdxImages] });
await compile(FlexCN, { remarkPlugins: [remarkMdxImages] });
await compile(SelectUS, { remarkPlugins: [remarkMdxImages] });
await compile(SelectCN, { remarkPlugins: [remarkMdxImages] });
await compile(TagUS, { remarkPlugins: [remarkMdxImages] });
await compile(TagCN, { remarkPlugins: [remarkMdxImages] });
await compile(TitleUS, { remarkPlugins: [remarkMdxImages] });
await compile(TitleCN, { remarkPlugins: [remarkMdxImages] });
// todo 修改router类型
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
          {
            path: '/en/doc/select',
            element: <SelectUS />,
          },
          {
            path: '/en/doc/flex',
            element: <FlexUS />,
          },
          {
            path: '/en/doc/tag',
            element: <TagUS />,
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
        path: '/zh/doc',
        element: <Docs />,
        children: [
          {
            path: '/zh/doc/button',
            element: <ButtonCN />,
          },
          {
            path: '/zh/doc/flex',
            element: <FlexCN />,
          },
          {
            path: '/zh/doc/menu',
            element: <MenuCN />,
          },
          {
            path: '/zh/doc/title',
            element: <TitleCN />,
          },
          {
            path: '/zh/doc/select',
            element: <SelectCN />,
          },
          {
            path: '/zh/doc/tag',
            element: <TagCN />,
          },
        ],
      },
    ],
  },
]);

export default router;
