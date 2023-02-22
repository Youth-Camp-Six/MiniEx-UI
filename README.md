<p align="center">
  <a href="https://github.com/Youth-Camp-Six/MiniEx-UI">
    <img width="200" src="https://s2.loli.net/2023/02/20/XcSyCj8bsR2nU6A.png">
  </a>
</p>

<h1 align="center">MinEx UI</h1>

<div align="center">

![NPM](https://img.shields.io/npm/l/miniex-ui)
![issues](https://img.shields.io/github/issues/Youth-Camp-Six/MiniEx-UI)
[![GitHub forks](https://img.shields.io/github/forks/Youth-Camp-Six/MiniEx-UI)](https://github.com/Youth-Camp-Six/MiniEx-UI/network)
[![GitHub stars](https://img.shields.io/github/stars/Youth-Camp-Six/MiniEx-UI)](https://github.com/Youth-Camp-Six/MiniEx-UI/stargazers)
![Vsersion](https://img.shields.io/badge/npm-1.1.0-blueviolet)

 </div>
  
# MiniEx-UI

## 命名由来

`MiniEx` 取自 `Minimal and Exquisite`，意义为极简精致。
组件库致力于打造为极简且精致的形式面向用户。

## 项目简介



## 技术栈

```
React + TS + Less + Webpack + Lint + Jest
```

## 项目实现功能

💎 **极简的UI呈现**、**较好的性能**、**较完备的基础组件**

🎉 **从"0"搭建项目架构**（无依赖任何现成的组件文档库，整合UI组件库和文档站，统一编写）

⚡️ **本地开发场景优化**，区分本地、生产环境

🚀 **支持MDX**（React in Markdown）快速编写文档站

🌗 支持**黑夜/白天主题动态切换**

🇨🇳 支持**中/英文国际化**语言切换

🎨 全局**公共样式统一**，@mixin支持

✏️ 支持**CHANGELOG.md记录**更新项

🎯 引入**jest**编写组件单测用例，保证代码稳定性

💬 **Vercel构建文档站**，master分支commit自动触发站点更新

🔍 支持**全文档快速搜索**

🔒 **开发规范保证**（各类lint校验）

## 项目代办

📌 组件开发完善

📌 jest单测覆盖率达100%

📌 新建组件的开发提效（node脚本）

📌 类码上掘金、codepen、codesandbox，支持在线实时编辑代码，便于用户调试

## 页面展示

![miniex-ui](https://cloud.zhuchj.com/202302160127480.png)

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

### 执行单测用例

```
npx jest
```

可选项：
1. `src/xx/xx` 执行制定文件目录下单测
2. `--coverage` 生成单测覆盖率html
3. `-w` 实时监听单测用例变化，重新执行

## Licensed

MIT.
