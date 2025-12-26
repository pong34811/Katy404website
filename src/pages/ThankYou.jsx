import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Palette,
  Music,
  Settings,
  Loader2,
  Image,
  Sparkles,
  ExternalLink,
  Star,
} from "lucide-react";

function ThankYou() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const credits = [
    {
      title: "Live2D Model",
      name: "@enximadesign",
      url: "https://twitter.com/enximadesign",
      icon: Palette,
      color: "from-pink-500/20 to-purple-500/20",
      accent: "text-pink-400",
      glow: "shadow-pink-500/10",
    },
    {
      title: "BGM Composer",
      name: "@RahuraMusic",
      url: "https://twitter.com/RahuraMusic",
      icon: Music,
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400",
      glow: "shadow-blue-500/10",
    },
    {
      title: "Rigger",
      name: "@enximadesign",
      url: "https://twitter.com/enximadesign",
      icon: Settings,
      color: "from-purple-500/20 to-indigo-500/10",
      accent: "text-purple-400",
      glow: "shadow-purple-500/10",
    },
    {
      title: "Loading Animation",
      name: "@katy404_vtuber",
      url: "https://x.com/katy404_vtuber",
      icon: Loader2,
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400",
      glow: "shadow-cyan-500/10",
    },
    {
      title: "Stream Overlay",
      name: "Minchirie",
      url: "https://min-chi.material.jp/",
      icon: Image,
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      glow: "shadow-amber-500/10",
      fullWidth: true,
    },
  ];

  return (
    <section
      id="thankyou"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Immersive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-pink-500/10 rounded-full blur-[140px]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[140px]"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border-white/10 mb-6 text-sm font-black uppercase tracking-widest text-primary">
            <Heart size={14} className="fill-primary" />
            Special Thanks
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-primary to-rose-400 animate-gradient-x">
              Thank You
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-slate-400 font-medium tracking-wide">
            ขอบคุณทุกคนที่ช่วยสร้างสรรค์ผลงาน
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Credits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credits.map((credit, idx) => (
              <motion.a
                key={idx}
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cn(
                  "glass-morphism rounded-[3rem] p-10 border-white/5 relative overflow-hidden group transition-all duration-500",
                  credit.fullWidth ? "md:col-span-2" : "",
                  credit.glow
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity",
                    credit.color
                  )}
                ></div>

                <div className="flex items-center gap-8 relative z-10">
                  <div
                    className={cn(
                      "flex-shrink-0 w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                      credit.color.replace("20", "80")
                    )}
                  >
                    <credit.icon
                      size={48}
                      className={
                        credit.icon === Loader2 ? "animate-spin-slow" : ""
                      }
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-2">
                      {credit.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p
                        className={cn(
                          "text-3xl font-black tracking-tight",
                          credit.accent
                        )}
                      >
                        {credit.name}
                      </p>
                      <ExternalLink
                        size={20}
                        className="text-white/20 group-hover:text-white transition-colors"
                      />
                    </div>
                    {credit.fullWidth && (
                      <p className="text-slate-400 text-sm mt-3 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                        {credit.url}
                      </p>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-8 px-12 py-6 glass-morphism border-pink-500/30 rounded-[2.5rem] shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-primary/10 opacity-100"></div>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                💖
              </motion.span>
              <p className="text-white text-2xl md:text-3xl font-black italic tracking-tighter relative z-10">
                ขอบคุณทุกคนมากๆ นะคะ!
              </p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Star size={32} className="text-amber-400 fill-amber-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default ThankYou;
