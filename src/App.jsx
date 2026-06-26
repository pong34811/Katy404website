import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ConnectFooter from './components/ConnectFooter/ConnectFooter'
import { useParticleEffect } from './hooks/useParticleEffect'

export default function App() {
  useParticleEffect()

  return (
    <>
      <div className="bg-grid" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />
      <Navbar />
      <Hero />
      <ConnectFooter />
    </>
  )
}
