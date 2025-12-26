import React from "react";
import { motion } from "framer-motion";
import { Users, Gamepad2, Heart, Sparkles, Star } from "lucide-react";

function VTuber() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const reasons = [
    {
      title: "อยากมีเพื่อน",
      desc: "ต้องการสร้างความสัมพันธ์และมีเพื่อนใหม่ๆ ที่มีความสนใจเหมือนกัน",
      icon: Users,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "bg-blue-500/20",
      tag: "Friendship",
      emoji: "👥",
    },
    {
      title: "อยากหาคนเล่นเกมด้วยกัน",
      desc: "มองหาเพื่อนร่วมทีมที่จะเล่นเกมและสนุกไปด้วยกัน",
      icon: Gamepad2,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "bg-purple-500/20",
      tag: "Gaming",
      emoji: "🎮",
    },
    {
      title: "อยากให้มีคนชื่นชอบในตัวตนของเรา",
      desc: "ต้องการแสดงตัวตนที่แท้จริงและได้รับการยอมรับ",
      icon: Heart,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      glow: "bg-pink-500/20",
      tag: "Acceptance",
      emoji: "💖",
    },
  ];

  return (
    <section
      id="vtuber"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-pink-500/10 rounded-full blur-[120px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient-x">
              Why VTuber?
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-slate-400 font-medium tracking-wide">
            ทำไมถึงมาเป็น{" "}
            <span className="text-primary font-black uppercase text-3xl">
              VTuber?
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Three Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className={cn(
                  "glass-morphism rounded-[2.5rem] p-10 relative overflow-hidden group border-white/5",
                  reason.border
                )}
              >
                <div
                  className={cn(
                    "absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] -mr-20 -mt-20 group-hover:opacity-60 transition-opacity",
                    reason.glow
                  )}
                ></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={cn(
                      "inline-flex p-7 rounded-3xl mb-8 group-hover:scale-110 transition-transform shadow-2xl",
                      reason.bg,
                      reason.color
                    )}
                  >
                    <reason.icon size={48} strokeWidth={1.5} />
                  </motion.div>

                  <h3
                    className={cn(
                      "text-2xl font-black mb-6 leading-tight",
                      reason.color
                    )}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                    {reason.desc}
                  </p>

                  <div
                    className={cn(
                      "inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border transition-colors group-hover:bg-white/5",
                      reason.bg,
                      reason.border
                    )}
                  >
                    <span className="text-2xl">{reason.emoji}</span>
                    <span
                      className={cn(
                        "text-sm font-black uppercase tracking-widest",
                        reason.color
                      )}
                    >
                      {reason.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-center group border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-6 mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Star
                    size={40}
                    className="text-amber-400 fill-amber-400/20"
                  />
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-pink-300 tracking-tight">
                  Let's Create Memories Together!
                </h3>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Star
                    size={40}
                    className="text-amber-400 fill-amber-400/20"
                  />
                </motion.div>
              </div>
              <p className="text-slate-200 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                มาร่วมเป็นส่วนหนึ่งของการเดินทางที่แสนพิเศษ{" "}
                <br className="hidden md:block" />
                เพื่อสร้าง{" "}
                <span className="text-primary font-black uppercase">
                  รอยยิ้ม
                </span>{" "}
                และ{" "}
                <span className="text-pink-400 font-black uppercase">
                  ความทรงจำ
                </span>{" "}
                ไปด้วยกัน
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default VTuber;
