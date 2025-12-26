import React from "react";
import { motion } from "framer-motion";
import { Youtube, Twitter, Facebook, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.youtube.com/channel/UCXT92S422lAnfBfsPrxpEFw",
      icon: Youtube,
      color: "hover:bg-red-600 hover:shadow-red-500/20",
      label: "YouTube",
    },
    {
      href: "https://x.com/katy404_vtuber",
      icon: Twitter,
      color: "hover:bg-black hover:shadow-white/10",
      label: "X (Twitter)",
    },
    {
      href: "https://www.tiktok.com/@katy404_vtuberth",
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
      color: "hover:bg-black hover:shadow-cyan-500/20",
      label: "TikTok",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61584119863160",
      icon: Facebook,
      color: "hover:bg-blue-600 hover:shadow-blue-500/20",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-background border-t border-white/5 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[100%] bg-primary/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="text-3xl font-black tracking-tighter flex items-center gap-2 mb-4 justify-center">
              <span className="text-white">KATY</span>
              <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-base font-black border border-primary/30">
                404
              </span>
            </div>
            <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-sm">
              Digital Content Creator & VTuber
            </p>
          </motion.div>

          {/* Social Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-xl",
                  social.color
                )}
                title={social.label}
              >
                <social.icon
                  size={28}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </motion.a>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

          <div className="text-center space-y-4">
            <p className="text-slate-400 font-bold tracking-tight">
              © {currentYear} <span className="text-primary">KATY404</span> —
              All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
              Made with{" "}
              <Heart size={16} className="text-primary fill-primary" /> for the
              community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const cn = (...classes) => classes.filter(Boolean).join(" ");
