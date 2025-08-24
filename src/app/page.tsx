import Hero from '@/components/Hero'
import Features from '@/components/Features'
import GameIntro from '@/components/GameIntro'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <GameIntro />
    </div>
  )
}