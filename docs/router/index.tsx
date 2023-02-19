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
import ToastUS from '../components-docs/toastUS.mdx';
import ToastCN from '../components-docs/toastCN.mdx';
import UploadUS from '../components-docs/uploadUS.mdx';
import UploadCN from '../components-docs/uploadCN.mdx';
import TableUS from '../components-docs/tableUS.mdx';
import TableCN from '../components-docs/tableCN.mdx';
import InputTagUS from '../components-docs/inputTagUS.mdx';
import InputTagCN from '../components-docs/inputTagCN.mdx';
import FormUS from '../components-docs/formUS.mdx';
import FormCN from '../components-docs/formCN.mdx';
import FormProUS from '../components-docs/formproUS.mdx';
import FormProCN from '../components-docs/formproCN.mdx';
import CheckboxUS from '../components-docs/checkboxUS.mdx';
import CheckboxCN from '../components-docs/checkboxCN.mdx';
import DrawerCN from '../components-docs/drawerCN.mdx';
import DrawerUS from '../components-docs/drawerUS.mdx';
import DialogCN from '../components-docs/dialogCN.mdx';
import DialogUS from '../components-docs/dialogUS.mdx';
import InputSearchCN from '../components-docs/inputSearchCN.mdx';
import InputSearchUS from '../components-docs/inputSearchUS.mdx';
import Flex from '../components-docs/flexCN.mdx';
import '../i18n';
import { createHashRouter, Navigate } from 'react-router-dom';

/**
 * 定义html标签替换组件
 */
const components = {
  code: CodeBlock as any,
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
    element: <Navigate to='/zh' />,
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
          {
            path: '/en/doc/toast',
            element: <ToastUS components={components} />,
          },
          {
            path: '/en/doc/upload',
            element: <UploadUS components={components} />,
          },
          {
            path: '/en/doc/table',
            element: <TableUS components={components} />,
          },
          {
            path: '/en/doc/inputTag',
            element: <InputTagUS components={components} />,
          },
          {
            path: '/en/doc/input',
            element: <InputSearchUS components={components} />,
          },
          {
            path: '/en/doc/form',
            element: <FormUS components={components} />,
          },
          {
            path: '/en/doc/formpro',
            element: <FormProUS components={components} />,
          },
          {
            path: '/en/doc/Checkbox',
            element: <CheckboxUS components={components} />,
          },
          {
            path: '/en/doc/drawer',
            element: <DrawerUS components={components} />,
          },
          {
            path: '/en/doc/dialog',
            element: <DialogUS components={components} />,
          },
          {
            path: '/en/doc/flex',
            element: <Flex components={components} />,
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
          {
            path: '/zh/doc/toast',
            element: <ToastCN components={components} />,
          },
          {
            path: '/zh/doc/upload',
            element: <UploadCN components={components} />,
          },
          {
            path: '/zh/doc/table',
            element: <TableCN components={components} />,
          },
          {
            path: '/zh/doc/inputTag',
            element: <InputTagCN components={components} />,
          },
          {
            path: '/zh/doc/drawer',
            element: <DrawerCN components={components} />,
          },
          {
            path: '/zh/doc/input',
            element: <InputSearchCN components={components} />,
          },
          {
            path: '/zh/doc/form',
            element: <FormCN components={components} />,
          },
          {
            path: '/zh/doc/formpro',
            element: <FormProCN components={components} />,
          },
          {
            path: '/zh/doc/Checkbox',
            element: <CheckboxCN components={components} />,
          },
          {
            path: '/zh/doc/dialog',
            element: <DialogCN components={components} />,
          },
          {
            path: '/zh/doc/flex',
            element: <Flex components={components} />,
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
