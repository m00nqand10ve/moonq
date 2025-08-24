import Link from 'next/link';

export default function GameIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：游戏介绍文字 */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              moonq - 俯视角地牢肉鸽探险游戏
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              在这个充满挑战的世界中，你将扮演一名勇敢的战士，掌握各种武器的力量。
              面对无数的敌人和强大的Boss，运用策略和技巧来生存和获胜。
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">多武器战斗系统</h3>
                  <p className="text-gray-600">掌握多种武器攻击，每种武器都有独特的效果和战术用途</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">智能敌人AI</h3>
                  <p className="text-gray-600">面对具有不同行为模式的敌人，包括群体攻击、治疗型怪物和强大的Boss</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">成长系统</h3>
                  <p className="text-gray-600">通过完成任务、击败敌人来获得经验和装备，不断提升角色能力</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/download" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                立即下载
              </Link>
              <Link href="/about" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
                了解更多
              </Link>
            </div>
          </div>
          
          {/* 右侧：游戏截图/预览 */}
          <div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-4">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">游戏主界面预览</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-gray-500 text-sm">战斗场景</span>
              </div>
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-gray-500 text-sm">装备界面</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 游戏统计信息 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">武器类型</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">敌人种类</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-600">装备道具</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
            <div className="text-gray-600">游戏关卡</div>
          </div>
        </div>
      </div>
    </section>
  );
}