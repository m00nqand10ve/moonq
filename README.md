# 现代网站项目

这是一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的现代化网站项目。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React** - 用户界面库

## 项目结构

```
modern-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx      # 关于页面
│   │   ├── contact/
│   │   │   └── page.tsx      # 联系页面
│   │   ├── layout.tsx        # 根布局
│   │   └── page.tsx          # 首页
│   ├── components/
│   │   ├── Features.tsx      # 特性组件
│   │   └── Hero.tsx          # 英雄区域组件
│   ├── lib/                  # 工具函数
│   └── styles/
│       └── globals.css       # 全局样式
├── package.json              # 项目依赖
├── next.config.js           # Next.js 配置
├── tailwind.config.ts       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
└── postcss.config.js        # PostCSS 配置
```

## 安装和运行

### 前提条件

确保您的系统已安装 Node.js (版本 18 或更高)。

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 功能特性

- ✅ 响应式设计
- ✅ 现代化 UI/UX
- ✅ TypeScript 支持
- ✅ Tailwind CSS 样式
- ✅ 暗色/亮色模式支持
- ✅ SEO 优化
- ✅ 快速页面加载

## 页面说明

### 首页 (`/`)
- 英雄区域展示
- 核心特性介绍
- 现代化设计风格

### 关于页面 (`/about`)
- 公司/项目介绍
- 使命和愿景
- 技术栈展示

### 联系页面 (`/contact`)
- 联系信息展示
- 交互式联系表单
- 响应式布局

## 自定义和扩展

### 添加新页面

在 `src/app/` 目录下创建新的文件夹和 `page.tsx` 文件：

```typescript
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>新页面</h1>
    </div>
  )
}
```

### 创建新组件

在 `src/components/` 目录下创建新的组件文件：

```typescript
// src/components/NewComponent.tsx
export default function NewComponent() {
  return (
    <div className="p-4">
      <h2>新组件</h2>
    </div>
  )
}
```

### 修改样式

- 全局样式：编辑 `src/styles/globals.css`
- 组件样式：使用 Tailwind CSS 类名
- 主题配置：修改 `tailwind.config.ts`

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 上导入项目
3. 自动部署完成

### 其他平台

- **Netlify**: 支持 Next.js 静态导出
- **AWS**: 使用 AWS Amplify 或 EC2
- **Docker**: 使用提供的 Dockerfile

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License