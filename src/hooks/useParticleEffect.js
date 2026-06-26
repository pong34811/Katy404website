import { useEffect } from 'react'

export function useParticleEffect() {
  useEffect(() => {
    const handler = (e) => {
      if (Math.random() > 0.96) {
        const particle = document.createElement('div')
        particle.style.cssText = `
          position: fixed;
          pointer-events: none;
          opacity: 0.6;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: 8px;
          height: 1px;
          background-color: ${Math.random() > 0.5 ? '#d1c4e9' : '#fdd835'};
          z-index: 100;
        `
        document.body.appendChild(particle)

        requestAnimationFrame(() => {
          particle.style.transition = 'all 0.5s ease'
          particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) rotate(45deg)`
          particle.style.opacity = '0'
          setTimeout(() => particle.remove(), 500)
        })
      }
    }

    document.addEventListener('mousemove', handler)
    return () => document.removeEventListener('mousemove', handler)
  }, [])
}
