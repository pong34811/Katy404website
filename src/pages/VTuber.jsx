import React from "react";

function VTuber() {
  return (
    <section
      id="vtuber"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] bg-purple-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] bg-pink-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-blue-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-[#aebcdb] to-slate-200">
              Why VTuber?
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#aebcdb] mx-auto rounded-full opacity-50 mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            ทำไมถึงมาเป็น{" "}
            <span className="text-purple-300 font-semibold">VTuber</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Three Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Reason 1 - Want Friends */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all hover:transform hover:scale-105 duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/30 transition-colors"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex p-6 bg-blue-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-300"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-blue-200 mb-4">
                  อยากมีเพื่อน
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  ต้องการสร้างความสัมพันธ์และมีเพื่อนใหม่ๆ
                  ที่มีความสนใจเหมือนกัน
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                  <span className="text-2xl">👥</span>
                  <span className="text-blue-200 text-sm font-medium">
                    Friendship
                  </span>
                </div>
              </div>
            </div>

            {/* Reason 2 - Gaming Partners */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all hover:transform hover:scale-105 duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-purple-500/30 transition-colors"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex p-6 bg-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-300"
                  >
                    <line x1="6" x2="10" y1="12" y2="12" />
                    <line x1="8" x2="8" y1="10" y2="14" />
                    <line x1="15" x2="15.01" y1="13" y2="13" />
                    <line x1="18" x2="18.01" y1="11" y2="11" />
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-purple-200 mb-4">
                  อยากหาคนเล่นเกมด้วยกัน
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  มองหาเพื่อนร่วมทีมที่จะเล่นเกมและสนุกไปด้วยกัน
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <span className="text-2xl">🎮</span>
                  <span className="text-purple-200 text-sm font-medium">
                    Gaming
                  </span>
                </div>
              </div>
            </div>

            {/* Reason 3 - Be Appreciated */}
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-md border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/40 transition-all hover:transform hover:scale-105 duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-pink-500/30 transition-colors"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex p-6 bg-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
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
                </div>

                <h3 className="text-2xl font-bold text-pink-200 mb-4">
                  อยากให้มีคนชื่นชอบในตัวตนของเรา
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  ต้องการแสดงตัวตนที่แท้จริงและได้รับการยอมรับ
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30">
                  <span className="text-2xl">💖</span>
                  <span className="text-pink-200 text-sm font-medium">
                    Acceptance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">✨</span>
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                  Let's Create Memories Together!
                </h3>
                <span className="text-4xl">✨</span>
              </div>
              <p className="text-slate-300 text-lg">
                มาร่วมเป็นส่วนหนึ่งของการเดินทางครั้งนี้ไปด้วยกัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VTuber;
