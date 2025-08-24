export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            关于我们
          </h1>
          <p className="text-lg text-gray-600">
            了解我们的故事、使命和愿景
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              我们的使命
            </h2>
            <p className="text-gray-600 mb-6">
              我们致力于创建现代化、高性能的网站解决方案，
              帮助企业和个人在数字世界中脱颖而出。
            </p>
            <p className="text-gray-600 mb-6">
              通过使用最新的技术栈和最佳实践，
              我们确保每个项目都能提供卓越的用户体验。
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                现代化设计理念
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                高性能优化
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                响应式布局
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                SEO友好
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">技术栈</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Next.js</span>
                <span className="text-blue-200">React框架</span>
              </div>
              <div className="flex justify-between">
                <span>TypeScript</span>
                <span className="text-blue-200">类型安全</span>
              </div>
              <div className="flex justify-between">
                <span>Tailwind CSS</span>
                <span className="text-blue-200">样式框架</span>
              </div>
              <div className="flex justify-between">
                <span>Vercel</span>
                <span className="text-blue-200">部署平台</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}