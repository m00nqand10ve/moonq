'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DownloadPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // 模拟下载过程
      const response = await fetch('/api/download/release');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '发布版.7z';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('下载失败，请稍后重试');
      }
    } catch (error) {
      console.error('下载错误:', error);
      alert('下载失败，请稍后重试');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                游戏下载
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                首页
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                关于
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                联系
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 游戏介绍区域 */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              元素攻击 - 顶视角射击游戏
            </h1>
            <p className="text-xl text-gray-600">
              一款俯视角地牢肉鸽游戏，体验刺激的战斗和丰富的游戏内容
            </p>
          </div>

          {/* 游戏特色 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">武器攻击系统</h3>
              <p className="text-gray-600">多种武器攻击方式，每种武器都有独特的效果和战斗策略</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">丰富的怪物系统</h3>
              <p className="text-gray-600">多样化的敌人类型，包括普通怪物、精英怪物和强大的Boss</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">任务系统</h3>
              <p className="text-gray-600">完整的任务系统，包括主线任务和支线任务</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">装备强化</h3>
              <p className="text-gray-600">武器和装备强化系统，提升角色战斗能力，创造属于你自己的build</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">地图探索</h3>
              <p className="text-gray-600">多样化的地图设计，隐藏区域和秘密等待发现</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">音效系统</h3>
              <p className="text-gray-600">沉浸式的音效和背景音乐，增强游戏体验</p>
            </div>
          </div>

          {/* 系统要求 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">系统要求</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">最低配置</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 操作系统: Windows 7/8/10/11</li>
                  <li>• 处理器: Intel Core i3 或同等性能</li>
                  <li>• 内存: 4 GB RAM</li>
                  <li>• 显卡: DirectX 9.0c 兼容</li>
                  <li>• 存储空间: 需要 500 MB 可用空间</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">推荐配置</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 操作系统: Windows 10/11</li>
                  <li>• 处理器: Intel Core i5 或同等性能</li>
                  <li>• 内存: 8 GB RAM</li>
                  <li>• 显卡: DirectX 11 兼容</li>
                  <li>• 存储空间: 需要 500 MB 可用空间</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 下载区域 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">立即下载游戏</h2>
              <p className="text-blue-100 mb-6">免费下载完整版游戏，开始你的冒险之旅</p>
              
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
              >
                {downloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    下载中...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    下载发布版.7z
                  </>
                )}
              </button>
              
              <p className="text-blue-100 text-sm mt-4">
                文件大小: 约 5MB | 版本: 1.0.0 | 更新时间: 2025年8月
              </p>
            </div>
          </div>
        </div>

        {/* 游戏截图区域 */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">游戏截图</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-gray-500">游戏截图 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}