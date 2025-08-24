import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          欢迎来到月浅的游戏世界
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          体验精彩的元素攻击顶视角射击游戏，
          在这里下载最新版本并开始你的冒险之旅。
        </p>
        <div className="space-x-4">
          <Link href="/download" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            立即下载
          </Link>
          <Link href="/about" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            了解更多
          </Link>
        </div>
      </div>
    </section>
  )
}