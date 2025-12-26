import React from "react";
import { motion } from "framer-motion";
import { Moon, Info, Target, List, Sparkles, Quote } from "lucide-react";

function Character() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="character"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[15%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[15%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]"></div>
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
              My Character
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Two Sides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Left Side - Peaceful Exterior */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-emerald-500/10 to-blue-500/5 glass-morphism border-emerald-500/20 rounded-[3rem] p-10 relative overflow-hidden group hover:border-emerald-500/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-emerald-500/20 transition-all"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-5 bg-emerald-500/20 rounded-2xl text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <Moon size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-emerald-200 uppercase tracking-tighter">
                    ด้านนอก
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <p className="text-xl text-slate-200">
                      เป็นคน{" "}
                      <span className="text-emerald-300 font-bold text-2xl">
                        รักสงบ
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <p className="text-xl text-slate-200">
                      ใช้ชีวิตแบบ{" "}
                      <span className="text-emerald-300 font-bold text-2xl">
                        ชิลๆ
                      </span>
                    </p>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-3">
                    {["😌 Peaceful", "🌿 Chill", "☮️ Calm"].map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-200 text-sm font-bold uppercase tracking-widest group-hover:bg-emerald-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Strategic Interior */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 glass-morphism border-amber-500/20 rounded-[3rem] p-10 relative overflow-hidden group hover:border-amber-500/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-amber-500/20 transition-all"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-5 bg-amber-500/20 rounded-2xl text-amber-400 shadow-lg shadow-amber-500/10">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-amber-200 uppercase tracking-tighter">
                    เบื้องหลัง
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <p className="text-xl text-slate-200">
                      เป็น{" "}
                      <span className="text-amber-300 font-bold text-2xl font-black">
                        นักวางแผนตัวยง
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <p className="text-xl text-slate-200">
                      มี{" "}
                      <span className="text-amber-300 font-bold text-2xl">
                        กลยุทธ์
                      </span>{" "}
                      ในทุกสถานการณ์
                    </p>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-3">
                    {["🎯 Strategic", "📋 Planner", "💡 Tactical"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-200 text-sm font-bold uppercase tracking-widest group-hover:bg-amber-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Motto Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-morphism rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden border-white/5 group">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[120px]"
                ></motion.div>
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-[2rem] border border-primary/20 mb-10 shadow-xl shadow-primary/5"
                >
                  <Sparkles size={24} className="text-primary" />
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
                    คติประจำใจ
                  </span>
                </motion.div>

                <div className="mb-8 relative inline-block">
                  <Quote
                    size={80}
                    className="absolute -top-12 -left-12 text-primary/10 -rotate-12"
                  />
                  <h3 className="text-4xl md:text-7xl font-black text-white leading-[1.2] px-4 tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-amber-300">
                      ความสำเร็จ เริ่มจากการวางแผน
                    </span>
                  </h3>
                  <Quote
                    size={80}
                    className="absolute -bottom-12 -right-12 text-primary/10 rotate-168"
                  />
                </div>

                <p className="text-slate-400 text-2xl italic font-medium tracking-wide opacity-60">
                  "Success starts with planning"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Character;
