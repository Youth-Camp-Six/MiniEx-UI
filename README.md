![NPM](https://img.shields.io/npm/l/miniex-ui)
![issues](https://img.shields.io/github/issues/Youth-Camp-Six/MiniEx-UI)
[![GitHub forks](https://img.shields.io/github/forks/Youth-Camp-Six/MiniEx-UI)](https://github.com/Youth-Camp-Six/MiniEx-UI/network)
[![GitHub stars](https://img.shields.io/github/stars/Youth-Camp-Six/MiniEx-UI)](https://github.com/Youth-Camp-Six/MiniEx-UI/stargazers)
![Vsersion](https://img.shields.io/badge/npm-1.0.3-green)

# MiniEx-UI🌱

## 项目简介



## 技术栈

```
React + TS + Less + Webpack + Lint + Jest
```

## 🏅项目实现功能

✅ 1. 极简的UI呈现和较好的性能，无依赖现成的组件文档库

✅ 2. 项目架构整合UI组件库和文档站

✅ 3. 本地开发场景优化，区分本地开发和生产环境

✅ 4. 支持MDX语法引入组件、编写文档

✅ 5. 支持黑夜/白天主题切换

✅ 6. 支持中英文国际化

✅ 7. 全局公共样式统一，@mixin支持

✅ 8. 支持CHANGELOG.log展示

✅ 9. 支持jest编写单测用例

✅ 10. 部署Vercel，master分支commit即刻触发项目文档构建

✅ 11. 支持全文档快速搜索

✅ 12. 开发规范保证（各类lint校验）

## 📌项目代办

✉️ 1. 组件开发完善

✉️ 2. jest单测覆盖率达100%

✉️ 3. 新建组件的开发提效（node脚本）

✉️ 4. 类码上掘金、codepen、codesandbox，支持在线实时编辑代码，便于用户调试

## 页面展示

![miniex-ui](https://cloud.zhuchj.com/202302160127480.png)

## 命名由来

`MiniEx` 取自 `Minimal and Exquisite`，意义为极简精致。
组件库致力于打造为极简且精致的形式面向用户。

## 目录说明

```bash
├── docs/             # 文档相关
│ └── config.json     # 文档配置文件，待定
├── src/              # 源码
│ ├── components/     # 组件
|  ├── button/
|   ├── demo/         # demo 目录
|   ├── style/        # 组件样式
|   ├── button.md     # 组件文档
|   ├── index.ts      # 组件入口
|   └── type.ts       # 组件 props 类型定义
|  ├── input/
|  └── ...
| ├── utils/          # util 方法
| ├── hooks/          # hooks
| ├── styles/         # 全局主题样式
| ├── index.less      # NPM 样式入口
│ └── index.ts        # NPM 入口
├── .eslintrc.js      # eslint 配置文件
├── .npmrc
├── package.json
└── tsconfig.json     # typescript 配置文件
```

## 如何使用

### 项目安装依赖

```
pnpm i
```

### 项目文档站开发环境启动

```
npm run dev
```

### 项目文档站生产环境启动

```
npm run start
```

### 项目组件库打包构建

```
npm run build:pkg
```

## Licensed

MIT.
