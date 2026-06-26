import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          KATY<span className={styles.logoAccent}>404</span>
        </div>
        <div className={styles.links}>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#links" className={styles.link}>Connect</a>
        </div>
      </div>
    </nav>
  )
}
