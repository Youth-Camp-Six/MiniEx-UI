import { ISiderbarConfig } from './sidebar.type';

export const siderbarConfig: ISiderbarConfig = {
  us: [
    {
      title: 'General',
      children: [
        {
          title: 'Button',
          path: '/doc/button',
        },
      ],
    },
    {
      title: 'Layout',
      children: [],
    },
    {
      title: 'Navigation',
      children: [
        {
          title: 'Menu',
          path: '/doc/menu',
        },
      ],
    },
    {
      title: 'Data Entry',
      children: [],
    },
    {
      title: 'Data Display',
      children: [
        {
          title: 'Avatar',
          path: '/doc/avatar',
        },
        {
          title: 'Title',
          path: '/doc/title',
        },
      ],
    },
    {
      title: 'Feedback',
      children: [],
    },
  ],
  zh: [
    {
      title: '通用',
      children: [
        {
          title: 'Button 按钮',
          path: '/doc/button',
        },
      ],
    },
    {
      title: '布局',
      children: [],
    },
    {
      title: '导航',
      children: [
        {
          title: 'Dropdown 下拉菜单',
          path: '/doc/dropdown',
        },
        {
          title: 'Menu 菜单',
          path: '/doc/menu',
        },
      ],
    },
    {
      title: '数据录入',
      children: [],
    },
    {
      title: '数据展示',
      children: [
        {
          title: 'Avatar 头像',
          path: '/doc/avatar',
        },
        {
          title: 'Title 标题',
          path: '/doc/title',
        },
      ],
    },
    {
      title: '反馈',
      children: [],
    },
  ],
};
