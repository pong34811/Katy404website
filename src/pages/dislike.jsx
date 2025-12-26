import React from "react";
import { motion } from "framer-motion";
import { Ghost, Skull, Ban, AlertTriangle, Sparkles } from "lucide-react";

function Dislike() {
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

  const dislikes = [
    {
      title: "ผี",
      desc: "Ghosts",
      emoji: "👻",
      tag: "Scary!",
      status: "😱",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      icon: Ghost,
    },
    {
      title: "แมลงสาบ",
      desc: "Cockroaches",
      emoji: "🪳",
      tag: "Gross!",
      status: "🤢",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      icon: Ban,
    },
    {
      title: "ผัก",
      desc: "Vegetables",
      emoji: "🥗",
      tag: "No thanks!",
      status: "😖",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      icon: Ban,
    },
  ];

  return (
    <section
      id="dislike"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-red-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[140px]"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-400 animate-gradient-x">
              DISLIKE
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Three Dislikes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {dislikes.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotate: idx % 2 === 0 ? 1 : -1,
                }}
                className={cn(
                  "glass-morphism rounded-[3rem] p-12 text-center border-white/5 relative overflow-hidden group",
                  item.border
                )}
              >
                <div
                  className={cn(
                    "absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] -mr-20 -mt-20 group-hover:opacity-60 transition-opacity",
                    item.bg
                  )}
                ></div>

                <div className="relative z-10">
                  <div className="text-8xl mb-8 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                    {item.emoji}
                  </div>

                  <h3
                    className={cn(
                      "text-3xl font-black mb-2 uppercase tracking-tight",
                      item.color
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-black uppercase tracking-widest text-sm mb-8">
                    {item.desc}
                  </p>

                  <div
                    className={cn(
                      "inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border transition-all group-hover:bg-white/5",
                      item.bg,
                      item.border
                    )}
                  >
                    <span className="text-2xl">{item.status}</span>
                    <span
                      className={cn(
                        "text-sm font-black uppercase tracking-widest",
                        item.color
                      )}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-6 px-10 py-5 bg-red-500/10 border border-red-500/20 rounded-[2rem] backdrop-blur-xl shadow-2xl shadow-red-500/10 group cursor-default"
            >
              <AlertTriangle
                size={32}
                className="text-red-400 animate-bounce"
              />
              <p className="text-white text-xl md:text-2xl font-black uppercase tracking-tight">
                Please keep these <span className="text-red-400">away</span>{" "}
                from me!
              </p>
              <AlertTriangle
                size={32}
                className="text-red-400 animate-bounce"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default Dislike;
