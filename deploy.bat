@echo off
echo ====================================
echo 游戏网站快速部署脚本
echo ====================================
echo.

echo 检查Node.js和npm...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未找到Node.js，请先安装Node.js
    echo 下载地址：https://nodejs.org/
    pause
    exit /b 1
)

npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未找到npm
    pause
    exit /b 1
)

echo Node.js和npm已安装 ✓
echo.

echo 安装项目依赖...
npm install
if %errorlevel% neq 0 (
    echo 错误：依赖安装失败
    pause
    exit /b 1
)
echo 依赖安装完成 ✓
echo.

echo 构建项目...
npm run build
if %errorlevel% neq 0 (
    echo 错误：项目构建失败
    pause
    exit /b 1
)
echo 项目构建完成 ✓
echo.

echo ====================================
echo 本地构建完成！
echo ====================================
echo.
echo 现在您可以选择以下部署方式：
echo.
echo 1. Vercel (推荐)：
echo    - 访问 https://vercel.com
echo    - 使用GitHub账号登录
echo    - 导入此项目进行部署
echo.
echo 2. 本地预览：
echo    - 运行 'npm run start' 启动生产服务器
echo    - 访问 http://localhost:3000
echo.
echo 详细部署说明请查看 DEPLOYMENT.md 文件
echo.
pause