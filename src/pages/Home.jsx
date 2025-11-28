import React from "react";
import characterImg from "../assets/img/logo.webp";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b] text-white"
    >
      {/* Background Gradients - Matching Hair (Silver/Blue) and Eyes (Gold) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Hair Color Glow (Top Left) */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#aebcdb]/20 rounded-full blur-[120px]"></div>
        {/* Darker Shadow/Outfit (Bottom Right) */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-slate-800/20 rounded-full blur-[120px]"></div>
        {/* Eye Color Subtle Glow (Center) */}
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-amber-400/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 z-10 text-center relative">
        {/* Character Image */}
        <div className="mb-8 relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#aebcdb] to-slate-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <img
            src={characterImg}
            alt="KT404 Character"
            className="relative w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800/50 shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-2"
          />
        </div>

        {/* Main Heading */}
        <h1 className="font-bold mb-6 tracking-tight leading-tight">
          <span className="block text-xl md:text-2xl text-slate-400 mb-2 font-medium tracking-widest uppercase">
            สวัสดี, ผมชื่อ
          </span>
          {/* Gradient matching Silver/Blue Hair */}
          <span className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-[#aebcdb] to-slate-200 animate-gradient-x drop-shadow-lg">
            KT404
          </span>
        </h1>

        {/* Subheading */}
        <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
          <p className="text-base md:text-xl text-slate-300 leading-relaxed font-light">
            ส่วนใหญ่คนอื่นมักจะเข้าใจผิดว่าเราเป็นผู้หญิง เพราะรูปร่างหน้าตา
            น่ารักของเรา
            <br />
            <span className="text-[#aebcdb] font-medium">
              "แต่จริง ๆ เราเป็นผู้ชายนะ !"
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
