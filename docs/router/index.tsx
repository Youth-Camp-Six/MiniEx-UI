import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Main from '../layout/main/Main';
import Docs from '../views/doc/Doc';
import Home from '../views/home/Home';
import ButtonDoc from '../docs/button/ButtonDoc';
import TextDoc from '../docs/text/TextDoc';

// todo 修改router类型
export const router: any = createHashRouter([
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
            path: '/doc/text',
            element: <TextDoc />,
          },
        ],
      },
    ],
  },
]);

export default router;
