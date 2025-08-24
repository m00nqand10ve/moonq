import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'moonq',
  description: '基于Next.js构建的现代化网站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">moonq</h1>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/" className="text-gray-600 hover:text-gray-900">首页</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900">关于</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">联系</a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 moonq. 保留所有权利.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}