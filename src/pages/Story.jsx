import React from "react";

function Story() {
  return (
    <section
      id="story"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[-5%] w-[35%] h-[35%] bg-pink-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-[#aebcdb] to-slate-200">
              My Story
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#aebcdb] mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Story Card */}
          <div className="relative">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-6 -left-4 text-8xl text-[#aebcdb]/20 font-serif leading-none select-none">
              "
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Animated Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>

              <div className="relative z-10 space-y-6">
                {/* Story Text */}
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                  เราเป็น
                  <span className="text-[#aebcdb] font-medium">
                    นักศึกษาชาย
                  </span>{" "}
                  อายุ <span className="text-[#aebcdb] font-medium">23 ปี</span>{" "}
                  ส่วนใหญ่คนอื่นมักจะ
                  <span className="text-pink-300 font-medium">เข้าใจผิด</span>
                  ว่าเราเป็นผู้หญิง เพราะรูปร่างหน้าตาน่ารักของเรา
                </p>

                <div className="flex items-center gap-3 py-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-300"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span className="text-pink-200 text-sm font-medium">
                      But Actually
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>

                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                  แต่จริง ๆ เราเป็น{" "}
                  <span className="text-pink-300 font-semibold">Femboy</span>{" "}
                  ที่มี
                  <span className="text-white font-medium">
                    ร่างกายเป็นผู้ชาย
                  </span>
                  นะ!
                </p>

                {/* Emphasis Badge */}
                <div className="flex justify-center pt-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 backdrop-blur-sm">
                    <span className="text-2xl">✨</span>
                    <span className="text-white font-semibold">
                      Proud to be myself
                    </span>
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Quote Mark (Closing) */}
            <div className="absolute -bottom-6 -right-4 text-8xl text-[#aebcdb]/20 font-serif leading-none select-none rotate-180">
              "
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🎓
              </div>
              <p className="text-slate-300 font-medium">Student Life</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                💖
              </div>
              <p className="text-slate-300 font-medium">Femboy Pride</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                ✨
              </div>
              <p className="text-slate-300 font-medium">Be Yourself</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
