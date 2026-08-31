import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const floatTransition = {
  duration: 6,
  ease: 'easeInOut',
  repeat: Infinity,
}

export default function Hero() {
  const scrollY = useMotionValue(0)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handler = () => scrollY.set(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [scrollY])

  const glowScale = useTransform(scrollY, [0, 500], [1, 1.3])
  const glowOpacity = useTransform(scrollY, [0, 300], [0.2, 0.05])

  return (
    <section id="home" className={styles.section}>
      <div className={styles.bgLayer} aria-hidden="true">
        <div className={styles.orb} style={{ top: '10%', left: '5%' }} />
        <div className={styles.orb} style={{ bottom: '15%', right: '8%' }} />
        <div className={styles.orb} style={{ top: '50%', left: '50%' }} />
        <div className={styles.gridLines} />
      </div>

      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className={styles.badgeDot} />
            <span>MALE STUDENT</span>
            <span className={styles.badgeSeparator}>//</span>
            <span>23 YEARS OLD</span>
          </motion.div>

          <div className={styles.titleGroup}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className={styles.titleText}>KATY</span>
              <motion.span
                className={styles.title404}
                animate={{
                  textShadow: [
                    '0 0 20px var(--char-gold), 0 0 40px var(--char-gold)',
                    '0 0 40px var(--char-gold), 0 0 80px var(--char-gold)',
                    '0 0 20px var(--char-gold), 0 0 40px var(--char-gold)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                404
              </motion.span>
            </motion.h1>

            <motion.div
              className={styles.subTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className={styles.subText}>Digital VTuber & Content Creator</span>
            </motion.div>
          </div>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            &ldquo;ความสำเร็จ เริ่มจากการวางแผน&rdquo;
          </motion.p>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, staggerChildren: 0.1 }}
          >
            <motion.div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>MALE</span>
            </motion.div>
            <motion.div className={styles.statItem}>
              <span className={styles.statNumber}>23</span>
              <span className={styles.statLabel}>YEARS</span>
            </motion.div>
            <motion.div className={styles.statItem}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>CHILL</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className={styles.bio}>
              เราเป็นนักศึกษาชาย อายุ 23 ปี ที่รักสงบและชอบใช้ชีวิตแบบชิลๆ
              ส่วนใหญ่คนอื่นมักจะเข้าใจผิดว่าเราเป็นผู้หญิง เพราะรูปร่างหน้าตาที่{' '}
              <span className={styles.highlight}>&ldquo;น่ารัก&rdquo;</span> ของเรา แต่จริงๆ แล้วเราเป็นผู้ชายนะ!
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          ref={wrapperRef}
        >
          <motion.div
            className={styles.charWrapper}
            animate={{ y: [0, -15, 0] }}
            transition={floatTransition}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className={styles.glow}
              style={{ scale: glowScale, opacity: glowOpacity }}
            />

            <div className={styles.imageWrap}>
              <img
                src="/Gemini_Generated_Image_fojbo3fojbo3fojb.webp"
                alt="Katy404 Character - Silver-haired anime boy with golden eyes"
                className={styles.image}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x800/050508/c8b8e8?text=KATY404'
                }}
              />

              <div className={styles.imageOverlay} aria-hidden="true" />

              <div className={styles.cornerAccent} style={{ top: -8, left: -8 }} />
              <div className={styles.cornerAccent} style={{ top: -8, right: -8 }} />
              <div className={styles.cornerAccent} style={{ bottom: -8, left: -8 }} />
              <div className={styles.cornerAccent} style={{ bottom: -8, right: -8 }} />
            </div>

            <div className={styles.floatingTags}>
              <motion.div
                className={styles.tagTop}
                animate={{ rotate: [8, 12, 8], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                100% MALE
              </motion.div>

              <motion.div
                className={styles.tagBottom}
                animate={{ rotate: [-5, -8, -5], y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <i className={`fas fa-heart ${styles.heart}`} /> CHILL_ENTITY
              </motion.div>

              <motion.div
                className={styles.tagSide}
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                VTUBER
              </motion.div>
            </div>

            <div className={styles.ring} aria-hidden="true">
              <motion.div
                className={styles.ringInner}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className={styles.scrollWheel} />
        </motion.div>
        <span className={styles.scrollText}>SCROLL</span>
      </motion.div>
    </section>
  )
}