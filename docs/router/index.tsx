import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Main from '../layout/main/main';
import Docs from '../views/doc/doc';
import Home from '../views/home/home';
import ButtonDoc from '../docs/button/button-doc';
import MenuDoc from '../docs/menu/menu-doc';

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
            element: <ButtonDoc />,
          },
          {
            path: '/doc/menu',
            element: <MenuDoc />,
          },
        ],
      },
    ],
  },
]);

export default router;
