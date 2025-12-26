import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, GraduationCap, UserCircle } from "lucide-react";

function Story() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="story"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"
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
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient-x">
              My Story
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Story Card */}
          <motion.div variants={itemVariants} className="relative">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-10 -left-6 text-9xl text-primary/10 font-serif leading-none select-none">
              "
            </div>

            <div className="glass-morphism rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group border-white/5">
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-pink-500/10 transition-all duration-700"></div>

              <div className="relative z-10 space-y-8">
                {/* Story Text */}
                <p className="text-xl md:text-3xl text-slate-200 leading-[1.6] font-light">
                  เราเป็น
                  <span className="text-primary font-bold px-2">
                    นักศึกษาชาย
                  </span>
                  อายุ <span className="text-primary font-bold">23 ปี</span>{" "}
                  <br className="hidden md:block" />
                  คนมักจะ{" "}
                  <span className="text-pink-400 font-bold decoration-pink-500/30 underline underline-offset-8">
                    เข้าใจผิด
                  </span>
                  ว่าเราเป็นผู้หญิง เพราะรูปร่างหน้าตาที่น่ารักของเรา
                </p>

                <div className="flex items-center gap-6 py-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center gap-3 px-6 py-3 bg-pink-500/10 rounded-2xl border border-pink-500/20 shadow-lg shadow-pink-500/5"
                  >
                    <Heart
                      size={24}
                      className="text-pink-400 fill-pink-400/20"
                    />
                    <span className="text-pink-200 font-black uppercase tracking-widest text-sm">
                      But Actually
                    </span>
                  </motion.div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                <p className="text-2xl md:text-4xl text-white leading-tight font-black text-center md:text-left">
                  แต่จริง ๆ เราเป็น{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-accent">
                    Femboy
                  </span>{" "}
                  <br className="hidden md:block" />
                  ที่มี{" "}
                  <span className="border-b-4 border-accent/30 pb-1">
                    ร่างกายเป็นผู้ชายนะ !
                  </span>
                </p>

                {/* Emphasis Badge */}
                <div className="flex justify-center md:justify-start pt-10">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-pink-500/20 to-accent/20 rounded-[2rem] border border-white/10 backdrop-blur-xl shadow-2xl"
                  >
                    <Sparkles
                      size={28}
                      className="text-amber-400 animate-pulse"
                    />
                    <span className="text-white font-black text-xl md:text-2xl tracking-tight">
                      Proud to be myself
                    </span>
                    <Sparkles
                      size={28}
                      className="text-amber-400 animate-pulse"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative Quote Mark (Closing) */}
            <div className="absolute -bottom-10 -right-6 text-9xl text-primary/10 font-serif leading-none select-none rotate-180">
              "
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: GraduationCap,
                label: "Student Life",
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                icon: Heart,
                label: "Femboy Pride",
                color: "text-pink-400",
                bg: "bg-pink-500/10",
              },
              {
                icon: Sparkles,
                label: "Be Yourself",
                color: "text-amber-400",
                bg: "bg-amber-500/10",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                className="glass-morphism rounded-[2rem] p-8 text-center border-white/5 group transition-all"
              >
                <div
                  className={cn(
                    "inline-flex p-5 rounded-2xl mb-5 group-hover:scale-110 transition-transform",
                    card.bg,
                    card.color
                  )}
                >
                  <card.icon size={36} />
                </div>
                <p className="text-slate-300 font-bold text-lg uppercase tracking-widest">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default Story;
