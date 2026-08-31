import styles from './ConnectFooter.module.css'

const socials = [
  { name: 'YOUTUBE', icon: 'fab fa-youtube', href: '#', hoverClass: 'youtube' },
  { name: 'DISCORD', icon: 'fab fa-discord', href: '#', hoverClass: 'discord' },
  { name: 'TIKTOK', icon: 'fab fa-tiktok', href: '#', hoverClass: 'tiktok' },
]

export default function ConnectFooter() {
  return (
    <footer id="links" className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.heading}>CONNECT WITH ME</h2>

        <div className={styles.grid}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className={`${styles.socialCard} ${styles[s.hoverClass]}`}
            >
              <i className={`${s.icon} ${styles.icon}`} />
              <span className={styles.label}>{s.name}</span>
            </a>
          ))}
        </div>

        <p className={styles.system}>
          DESIGNED FOR KATY404 // SYSTEM STATUS: STABLE
        </p>
      </div>
    </footer>
  )
}
