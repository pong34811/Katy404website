import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Smile,
  Cake,
  BookOpen,
  Heart,
  Sparkles,
  Info,
} from "lucide-react";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"></div>
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
              About Me
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Personal Info Card */}
            <motion.div
              variants={itemVariants}
              className="glass-morphism rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-transparent opacity-50"></div>
              <div className="space-y-8 relative z-10">
                {/* Name */}
                <div className="flex items-center gap-6 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group/item">
                  <div className="p-4 bg-primary/20 rounded-2xl text-primary group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                    <User size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Name
                    </p>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      เคที้404 (Katy404)
                    </p>
                  </div>
                </div>

                {/* Nickname */}
                <div className="flex items-center gap-6 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group/item">
                  <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                    <Smile size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Nickname
                    </p>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      เค (K)
                    </p>
                  </div>
                </div>

                {/* Birthday */}
                <div className="flex items-center gap-6 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group/item">
                  <div className="p-4 bg-secondary/20 rounded-2xl text-secondary group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform">
                    <Cake size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Birthday
                    </p>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      20 / 07
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Status & Style */}
            <div className="flex flex-col gap-8">
              {/* Occupation */}
              <motion.div
                variants={itemVariants}
                className="flex-1 glass-morphism rounded-[2.5rem] p-10 hover:bg-white/[0.08] transition-all relative overflow-hidden group"
              >
                <div className="absolute -right-8 -top-8 p-8 opacity-5 group-hover:opacity-10 transition-all transform group-hover:rotate-12 group-hover:scale-110 text-primary">
                  <BookOpen size={160} strokeWidth={1} />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-accent/20 rounded-2xl text-accent">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-300 uppercase tracking-[0.2em]">
                    Occupation
                  </h3>
                </div>
                <p className="text-4xl font-black text-white ml-2">นักศึกษา</p>
              </motion.div>

              {/* Gender / Style */}
              <motion.div
                variants={itemVariants}
                className="flex-1 bg-gradient-to-br from-pink-500/10 to-accent/10 glass-morphism border-pink-500/20 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-pink-500/40 transition-all"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/20 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-pink-500/30 transition-all"></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-4 bg-pink-500/20 rounded-2xl text-pink-400">
                    <Info size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-pink-200 uppercase tracking-[0.2em]">
                    Gender & Style
                  </h3>
                </div>

                <div className="relative z-10">
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="text-4xl font-black text-white">ชาย</p>
                    <span className="text-pink-300/80 italic font-medium">
                      (Femboy Style)
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-pink-500/20 rounded-2xl border border-pink-500/30 text-pink-200 text-sm font-bold shadow-lg shadow-pink-500/10"
                  >
                    <Sparkles size={16} className="text-pink-400" />
                    <span>น่ารักแบบตะโกน</span>
                    <Sparkles size={16} className="text-pink-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
