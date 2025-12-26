import React from "react";
import { motion } from "framer-motion";
import {
  Youtube,
  Twitter,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Send,
} from "lucide-react";

function Contact() {
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

  const socials = [
    {
      name: "YouTube",
      user: "Katy404",
      url: "https://www.youtube.com/channel/UCXT92S422lAnfBfsPrxpEFw",
      icon: Youtube,
      color: "bg-[#FF0000]",
      glow: "shadow-red-500/20",
      description: "ติดตามไลฟ์สตรีมและคลิปวิดีโอใหม่ๆ",
    },
    {
      name: "X (Twitter)",
      user: "@katy404_vtuber",
      url: "https://x.com/katy404_vtuber",
      icon: Twitter,
      color: "bg-[#000000]",
      glow: "shadow-white/10",
      border: "border-white/10",
      description: "อัปเดตข่าวสารและพูดคุยกันได้ที่นี่",
    },
    {
      name: "TikTok",
      user: "@katy404_vtuberth",
      url: "https://www.tiktok.com/@katy404_vtuberth",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      color: "bg-[#000000]",
      glow: "shadow-cyan-500/20",
      description: "ชมคลิปสั้นและไฮไลท์สนุกๆ",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Gradients */}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border-white/10 mb-6 text-sm font-black uppercase tracking-widest text-primary">
            <Send size={14} className="fill-primary" />
            Get In Touch
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient-x">
              Contact
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-slate-400 font-medium tracking-wide uppercase">
            ช่องทางการติดตามและติดต่องาน
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Social Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className={cn(
                  "glass-morphism rounded-[2.5rem] p-10 border-white/5 relative overflow-hidden group transition-all duration-500 shadow-2xl",
                  social.glow
                )}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={cn(
                      "inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-2xl",
                      social.color
                    )}
                  >
                    <social.icon
                      size={40}
                      className="text-white drop-shadow-lg"
                    />
                  </motion.div>

                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-4">
                    {social.user}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {social.description}
                  </p>

                  <div className="flex items-center gap-2 text-white font-black uppercase text-sm tracking-widest group-hover:gap-4 transition-all">
                    Follow Me <ArrowRight size={18} className="text-primary" />
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:opacity-100 opacity-0 transition-opacity"></div>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-6 px-10 py-5 glass-morphism border-primary/30 rounded-[2rem] shadow-2xl relative group overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <MessageCircle size={32} className="text-primary relative z-10" />
              <p className="text-white text-xl md:text-2xl font-black uppercase tracking-tight relative z-10">
                พร้อมที่จะพูดคุยกับเราหรือยัง?
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

export default Contact;
