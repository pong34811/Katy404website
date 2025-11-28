import React from "react";

function Character() {
  return (
    <section
      id="character"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-green-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-amber-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-[#aebcdb] to-slate-200">
              My Character
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#aebcdb] mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Two Sides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Peaceful Exterior */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-md border border-green-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/40 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-green-500/30 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-green-500/20 rounded-2xl text-green-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-200">ด้านนอก</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-slate-200 leading-relaxed">
                    เป็นคน
                    <span className="text-green-300 font-semibold">รักสงบ</span>
                  </p>
                  <p className="text-lg text-slate-200 leading-relaxed">
                    ใช้ชีวิตแบบ
                    <span className="text-green-300 font-semibold">ชิลๆ</span>
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-200 text-sm">
                      😌 Peaceful
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-200 text-sm">
                      🌿 Chill
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-200 text-sm">
                      ☮️ Calm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Strategic Interior */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-amber-500/40 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-amber-500/30 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-amber-500/20 rounded-2xl text-amber-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-200">
                    เบื้องหลัง
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-slate-200 leading-relaxed">
                    เป็น
                    <span className="text-amber-300 font-semibold">
                      นักวางแผนตัวยง
                    </span>
                  </p>
                  <p className="text-lg text-slate-200 leading-relaxed">
                    มี
                    <span className="text-amber-300 font-semibold">
                      กลยุทธ์
                    </span>
                    ในทุกสถานการณ์
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-200 text-sm">
                      🎯 Strategic
                    </span>
                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-200 text-sm">
                      📋 Planner
                    </span>
                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-200 text-sm">
                      💡 Tactical
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Motto Section */}
          <div className="relative">
            <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#aebcdb]/10 rounded-full blur-3xl animate-pulse"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#aebcdb]/20 rounded-full border border-[#aebcdb]/30 mb-6">
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
                    className="text-[#aebcdb]"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                  <span className="text-[#aebcdb] font-semibold uppercase tracking-wider text-sm">
                    คติประจำใจ
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-6xl mb-4 opacity-20">"</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-[#aebcdb] to-amber-300 leading-relaxed px-4">
                    ความสำเร็จ เริ่มจากการวางแผน
                  </h3>
                  <div className="text-6xl mt-2 opacity-20 rotate-180">"</div>
                </div>

                <p className="text-slate-400 text-lg italic">
                  Success starts with planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Character;
