export default function Features() {
  const features = [
    {
      title: '武器攻击系统',
      description: '多种武器攻击方式，各种武器各具特色',
      icon: '⚡'
    },
    {
      title: '丰富的敌人',
      description: '多样化的怪物类型，从普通敌人到强大Boss',
      icon: '👹'
    },
    {
      title: '装备强化',
      description: '武器和装备强化系统，提升战斗能力',
      icon: '⚔️'
    },
    {
      title: '任务系统',
      description: '完整的任务系统，主线和支线任务丰富游戏内容',
      icon: '📜'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            游戏特色
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            moonq是一款充满挑战的顶视角射击游戏，具备丰富的游戏系统
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}