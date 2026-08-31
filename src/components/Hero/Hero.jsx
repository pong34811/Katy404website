import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const floatTransition = {
  duration: 6,
  ease: 'easeInOut',
  repeat: Infinity,
}

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeDot} />
            MALE STUDENT // 23 YEARS OLD
          </motion.div>

          <div>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              KATY
              <motion.span
                className={styles.title404}
                style={{ textShadow: '2px 0 #d1c4e9, -2px 0 #fdd835' }}
                animate={{
                  textShadow: [
                    '2px 0 #d1c4e9, -2px 0 #fdd835',
                    '4px 0 #d1c4e9, -4px 0 #fdd835',
                    '-2px 0 #d1c4e9, 2px 0 #fdd835',
                    '2px 0 #d1c4e9, -2px 0 #fdd835',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                404
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &ldquo;ความสำเร็จ เริ่มจากการวางแผน&rdquo;
          </motion.p>

          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className={styles.charWrapper}
            animate={{ y: [0, -20, 0] }}
            transition={floatTransition}
          >
            <div className={styles.glow} />

            <div className={styles.imageWrap}>
              <img
                src="/Gemini_Generated_Image_fojbo3fojbo3fojb.webp"
                alt="Katy404 Character"
                className={styles.image}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x800/0f0f13/b4a7d6?text=KATY404'
                }}
              />
            </div>

            <div className={styles.tagTop}>100% MALE</div>
            <div className={styles.tagBottom}>
              <i className={`fas fa-heart ${styles.heart}`} /> CHILL_ENTITY
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
