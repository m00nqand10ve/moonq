# 网站部署指南

本文档介绍如何将您的游戏网站部署到在线平台，让其他人可以通过浏览器直接访问。

## 部署选项

### 1. Vercel (推荐) - 免费且简单

**优势：**
- 完全免费
- 自动HTTPS
- 全球CDN
- 自动部署
- 支持自定义域名

**部署步骤：**

1. **准备Git仓库**
   ```bash
   # 在项目目录中初始化Git
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **上传到GitHub**
   - 在GitHub创建新仓库
   - 将代码推送到GitHub：
   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

3. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击"New Project"
   - 选择您的GitHub仓库
   - 点击"Deploy"

4. **访问网站**
   - 部署完成后，Vercel会提供一个免费域名
   - 格式：`https://your-project-name.vercel.app`

### 2. Netlify - 免费替代方案

**部署步骤：**

1. 访问 [netlify.com](https://netlify.com)
2. 注册并连接GitHub账号
3. 选择"New site from Git"
4. 选择您的仓库
5. 设置构建命令：`npm run build`
6. 设置发布目录：`out`
7. 点击"Deploy site"

### 3. GitHub Pages - 完全免费

**部署步骤：**

1. **修改next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **创建GitHub Actions工作流**
   创建 `.github/workflows/deploy.yml`：
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **启用GitHub Pages**
   - 在GitHub仓库设置中启用Pages
   - 选择"gh-pages"分支作为源

## 快速部署（推荐Vercel）

如果您想最快速地让网站上线，建议使用Vercel：

1. **创建GitHub账号**（如果没有）
2. **上传代码到GitHub**
3. **连接Vercel并部署**

整个过程只需要10-15分钟，您就能获得一个可以分享的网站链接！

## 自定义域名（可选）

部署完成后，您可以：
- 使用平台提供的免费域名
- 购买自定义域名并绑定
- 所有主要平台都支持自定义域名

## 注意事项

1. **文件下载功能**：确保将`发布版.7z`文件放在`public/downloads/`目录中
2. **环境变量**：如果有敏感配置，在部署平台中设置环境变量
3. **构建时间**：首次部署可能需要几分钟时间

## 获取帮助

如果在部署过程中遇到问题：
- 查看平台的官方文档
- 检查构建日志中的错误信息
- 确保所有依赖都已正确安装

部署成功后，您就可以将网站链接分享给其他人了！