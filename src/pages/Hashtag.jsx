import React from "react";
import { motion } from "framer-motion";
import {
  Hash,
  Heart,
  Palette,
  Radio,
  MessageSquare,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

function Hashtag() {
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

  const tags = [
    {
      title: "Main Tag",
      tag: "#katy404",
      icon: Hash,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "shadow-cyan-500/10",
    },
    {
      title: "Fan Name",
      tag: "#ลูกทีม",
      icon: Heart,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      glow: "shadow-pink-500/10",
    },
    {
      title: "Fan Art",
      tag: "#katy404art",
      icon: Palette,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "shadow-purple-500/10",
    },
    {
      title: "Live Stream",
      tag: "#katy404live",
      icon: Radio,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      glow: "shadow-red-500/10",
    },
  ];

  return (
    <section
      id="hashtag"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px]"
        ></motion.div>
        <motion.div
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[140px]"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-pink-400 animate-gradient-x">
              Hashtags
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-slate-400 font-medium tracking-wide uppercase">
            แท็กที่ใช้ในโซเชียลมีเดีย
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Hashtags Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tags.map((item, idx) => (
              <HashtagCard key={idx} item={item} variants={itemVariants} />
            ))}
          </div>

          {/* Bottom Info */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-6 px-10 py-5 glass-morphism border-white/5 rounded-[2rem] shadow-2xl group cursor-default"
            >
              <MessageSquare
                size={32}
                className="text-primary group-hover:rotate-12 transition-transform"
              />
              <p className="text-slate-300 text-xl md:text-2xl font-black tracking-tight uppercase">
                ใช้แท็กเหล่านี้เมื่อ{" "}
                <span className="text-white">โพสต์เกี่ยวกับเรา</span> นะ!
              </p>
              <Sparkles size={32} className="text-primary animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HashtagCard({ item, variants }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.tag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        "glass-morphism rounded-[2.5rem] p-10 border-white/5 relative overflow-hidden group cursor-pointer",
        item.border,
        item.glow
      )}
      onClick={copyToClipboard}
    >
      <div
        className={cn(
          "absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] -mr-20 -mt-20 group-hover:opacity-60 transition-opacity",
          item.bg
        )}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className={cn("p-4 rounded-2xl shadow-2xl", item.bg, item.color)}
            >
              <item.icon size={32} />
            </div>
            <h3
              className={cn(
                "text-2xl font-black uppercase tracking-widest",
                item.color
              )}
            >
              {item.title}
            </h3>
          </div>
          <div className="p-2 text-white/20 group-hover:text-white/60 transition-colors">
            {copied ? (
              <Check size={24} className="text-green-400" />
            ) : (
              <Copy size={24} />
            )}
          </div>
        </div>

        <div className="bg-black/40 rounded-[2rem] p-6 border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center">
          <p
            className={cn(
              "text-4xl md:text-5xl font-black font-mono tracking-tighter transition-all group-hover:scale-105",
              item.color
            )}
          >
            {item.tag}
          </p>
        </div>

        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-black text-green-400 uppercase tracking-widest"
          >
            Copied!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default Hashtag;
