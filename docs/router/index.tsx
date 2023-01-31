import React from 'react';
import { createHashRouter } from 'react-router-dom';
import remarkMdxImages from 'remark-mdx-images';
import { compile } from '@mdx-js/mdx';

import Main from '../layout/main/main';
import Docs from '../views/doc/doc';
import Home from '../views/home/home';

import Menu from '../components-docs/menu.mdx';
import Button from '../components-docs/button.mdx';
import Title from '../components-docs/title.mdx';

await compile(Menu, { remarkPlugins: [remarkMdxImages] });
await compile(Button, { remarkPlugins: [remarkMdxImages] });
await compile(Title, { remarkPlugins: [remarkMdxImages] });

// todo 修改router类型
export const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [],
      },
      {
        path: '/doc',
        element: <Docs />,
        children: [
          {
            path: '/doc/button',
            element: <Button />,
          },
          {
            path: '/doc/menu',
            element: <Menu />,
          },
          {
            path: '/doc/title',
            element: <Title />,
          },
        ],
      },
    ],
  },
]);

export default router;
