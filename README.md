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

## 命名由来（Origin of naming）

`MiniEx` 取自 `Minimal and Exquisite`，意义为极简精致。


## 项目简介（Project Introduction）

- 本项目由`MiniEx`团队共同开发。项目的团队成员来自中国各地，有研究生、即将毕业的本科生、本科入学不久的在校生...

- 项目组件库致力于打造为`极简且精致`的形式面向用户

- 项目组件仍处于开发过程中，因此不建议引用本项目的组件用于实际业务场景中

> The project was co-developed by the `MiniEx` team. The team members of the project come from all over China, there are graduate students, undergraduate students who are about to graduate, undergraduate students who have just entered the school... 

> The project component library is intended to be `Minimal and Exquisite` for the user

> The project components are still under development, so it is not recommended to reference the components of the project for use in real business scenarios

## 项目技术栈（Project technology stack）

`React`、`TypeScript`、`Less`、`MDX`

## 项目实现功能（Project Implementation Functions）

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

## 项目待办（Project to-do）

📌 组件开发完善

📌 jest单测覆盖率达100%

📌 新建组件的开发提效（node脚本）

📌 类码上掘金、codepen、codesandbox，支持在线实时编辑代码，便于用户调试

📌 文档站兼容移动端（@media）

...

## 页面展示（Page Display）

### 白天（light）

![miniex-ui-light](https://cloud.zhuchj.com/202302160127480.png)

### 黑夜（night）

![miniex-ui-dark](https://cloud.zhuchj.com/202302222341673.png)

## 目录注释（Contents notes）

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

## 如何使用（How to use）

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

### 单测用例

请查阅：[如何为项目编写单测用例](https://zhuchj.com/unit-test.html)

## Licensed

MIT.
