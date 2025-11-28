import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#09090b] border-t border-white/10 py-16 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-pink-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400">
              Contact Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full opacity-50 mb-4"></div>
          <p className="text-lg text-slate-400">
            ติดต่อเราได้ทางช่องทางเหล่านี้
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61584119863160"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@kt404vtuber"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-white/10 hover:bg-red-600 border border-white/20 hover:border-red-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/KT404VTUBER"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-white/10 hover:bg-black border border-white/20 hover:border-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@kt404_vtuberth"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-white/10 hover:bg-black border border-white/20 hover:border-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Copyright & Info */}
        <div className="text-center space-y-3">
          <p className="text-slate-400 text-sm">
            © 2025 <span className="text-pink-400 font-semibold">KT404</span> -
            All rights reserved
          </p>
          <p className="text-slate-500 text-xs">
            Made with <span className="text-pink-400">💖</span> for the
            community
          </p>
        </div>
      </div>
    </footer>
  );
}
