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
        {
          title: 'Upload',
          path: '/doc/upload',
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
          title: 'Breadcrumb ',
          path: '/doc/breadcrumb',
        },
        {
          title: 'Dropdown ',
          path: '/doc/dropdown',
        },
        {
          title: 'Menu',
          path: '/doc/menu',
        },
        {
          title: 'Tabs',
          path: '/doc/tabs',
        },
      ],
    },
    {
      title: 'Data Entry',
      children: [
        {
          title: 'Radio',
          path: '/doc/radio',
        },
      ],
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
        {
          title: 'Table',
          path: '/doc/table',
        },
      ],
    },
    {
      title: 'Feedback',
      children: [
        {
          title: 'Toast',
          path: '/doc/toast',
        },
      ],
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
        {
          title: 'Upload 上传',
          path: '/doc/upload',
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
          title: 'Breadcrumb 面包屑',
          path: '/doc/breadcrumb',
        },
        {
          title: 'Dropdown 下拉菜单',
          path: '/doc/dropdown',
        },
        {
          title: 'Menu 菜单',
          path: '/doc/menu',
        },
        {
          title: 'Tabs 选项卡',
          path: '/doc/tabs',
        },
      ],
    },
    {
      title: '数据录入',
      children: [
        {
          title: 'Radio 单选框',
          path: '/doc/radio',
        },
      ],
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
        {
          title: 'Table 表格',
          path: '/doc/table',
        },
      ],
    },
    {
      title: '反馈',
      children: [
        {
          title: 'Toast',
          path: '/doc/toast',
        },
      ],
    },
  ],
};
