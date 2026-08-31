import { useEffect } from 'react'

export function useParticleEffect() {
  useEffect(() => {
    const handler = (e) => {
      if (Math.random() > 0.94) {
        const particle = document.createElement('div')
        const colors = ['#c8b8e8', '#d4a843', '#e8879a', '#b8c0d0']
        const color = colors[Math.floor(Math.random() * colors.length)]
        const size = Math.random() * 4 + 2
        particle.style.cssText = `
          position: fixed;
          pointer-events: none;
          opacity: 0.8;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border-radius: 50%;
          z-index: 100;
          box-shadow: 0 0 ${size * 2}px ${color};
        `
        document.body.appendChild(particle)

        requestAnimationFrame(() => {
          const dx = (Math.random() - 0.5) * 80
          const dy = (Math.random() - 0.5) * 80 - 30
          particle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          particle.style.transform = `translate(${dx}px, ${dy}px) scale(0)`
          particle.style.opacity = '0'
          setTimeout(() => particle.remove(), 800)
        })
      }
    }

    document.addEventListener('mousemove', handler)
    return () => document.removeEventListener('mousemove', handler)
  }, [])
}
