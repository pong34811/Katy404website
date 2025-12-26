import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Tv,
  Video,
  Send,
  Calendar,
  Sparkles,
  Youtube,
  Twitter,
} from "lucide-react";

function Content() {
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

  const contentTypes = [
    {
      title: "ไลฟ์สตรีม",
      schedule: "สัปดาห์ละ 2-3 ครั้ง",
      icon: Tv,
      label: "LIVE",
      color: "bg-red-500",
      accent: "text-red-400",
      glow: "shadow-red-500/20",
    },
    {
      title: "ทำคลิปวิดีโอ",
      schedule: "สัปดาห์ละ 3 คลิป",
      icon: Play,
      label: "VIDEO",
      color: "bg-red-600",
      accent: "text-red-400",
      glow: "shadow-red-600/20",
    },
    {
      title: "คลิปสั้น",
      schedule: "สัปดาห์ละ 3 คลิป",
      icon: Video,
      label: "SHORTS",
      color: "bg-rose-600",
      accent: "text-rose-400",
      glow: "shadow-rose-600/20",
    },
    {
      title: "โพสโซเชียล",
      schedule: "2 ต่อสัปดาห์",
      icon: Twitter,
      label: "SOCIAL",
      color: "bg-blue-500",
      accent: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
  ];

  return (
    <section
      id="content"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]"
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
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-primary to-pink-400 animate-gradient-x">
              Content
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Content Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="glass-morphism rounded-[2.5rem] p-10 border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-white/5 opacity-0 group-hover:opacity-100 transition-opacity",
                    content.accent.replace("text", "via")
                  )}
                ></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={cn(
                      "inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 shadow-2xl",
                      content.color,
                      content.glow
                    )}
                  >
                    <content.icon
                      size={44}
                      className="text-white drop-shadow-lg"
                    />
                    {content.label === "LIVE" && (
                      <span className="absolute -top-2 -right-2 flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-white"></span>
                      </span>
                    )}
                  </motion.div>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {content.title}
                  </h3>
                  <div
                    className={cn(
                      "font-black uppercase tracking-widest text-sm",
                      content.accent
                    )}
                  >
                    {content.schedule}
                  </div>
                </div>

                {/* Secondary Tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.4em] opacity-20 transition-opacity group-hover:opacity-40">
                  {content.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-6 px-10 py-5 glass-morphism border-primary/30 rounded-[2rem] shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Calendar size={32} className="text-primary relative z-10" />
              <p className="text-white text-xl md:text-2xl font-black uppercase tracking-tight relative z-10">
                Regular Content Schedule
              </p>
              <Sparkles
                size={32}
                className="text-primary relative z-10 animate-pulse"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default Content;
