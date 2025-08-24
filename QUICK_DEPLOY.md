# 🚀 5分钟快速部署指南

让您的游戏网站快速上线，供其他人通过浏览器访问！

## 方法一：Vercel部署（最简单）

### 步骤1：准备GitHub账号
- 如果没有GitHub账号，请访问 [github.com](https://github.com) 注册

### 步骤2：上传代码到GitHub
1. 在GitHub创建新仓库（Repository）
2. 在本地项目目录打开命令行
3. 运行以下命令：
```bash
git init
git add .
git commit -m "游戏网站初始版本"
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 步骤3：部署到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 点击"Sign up"，选择"Continue with GitHub"
3. 授权Vercel访问您的GitHub
4. 点击"New Project"
5. 找到您刚才创建的仓库，点击"Import"
6. 保持默认设置，点击"Deploy"
7. 等待2-3分钟部署完成

### 步骤4：获取网站链接
- 部署完成后，您会看到类似这样的链接：
- `https://your-project-name.vercel.app`
- 这就是您的网站地址，可以分享给任何人！

## 方法二：Netlify部署（备选方案）

1. 访问 [netlify.com](https://netlify.com)
2. 注册并连接GitHub
3. 点击"New site from Git"
4. 选择您的仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
6. 点击"Deploy site"

## 🎯 一键部署脚本

我们为您准备了自动化脚本：

### Windows用户
双击运行 `deploy.bat` 文件，它会：
- 检查环境
- 安装依赖
- 构建项目
- 提供部署指导

## 📱 移动端友好

部署后的网站完全支持：
- 手机浏览器访问
- 平板设备访问
- 桌面浏览器访问
- 响应式设计，自动适配屏幕大小

## 🔗 分享您的网站

部署成功后，您可以：
- 将链接发送给朋友
- 在社交媒体分享
- 添加到游戏论坛
- 制作二维码供扫描访问

## ⚡ 立即开始

**最快路径：**
1. 注册GitHub账号（2分钟）
2. 上传代码（1分钟）
3. 连接Vercel部署（2分钟）

总计只需5分钟，您的游戏网站就能在全世界访问！

## 🆘 需要帮助？

如果遇到问题：
1. 查看 `DEPLOYMENT.md` 获取详细说明
2. 确保所有文件都已上传到GitHub
3. 检查构建日志中的错误信息

**开始部署，让全世界看到您的游戏！** 🎮✨