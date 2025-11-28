import React from "react";

function LIKE() {
  return (
    <section
      id="like"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400">
              LIKE
            </span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Gaming Section */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-purple-500/20 rounded-2xl">
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
                    className="text-purple-300"
                  >
                    <line x1="6" x2="10" y1="12" y2="12" />
                    <line x1="8" x2="8" y1="10" y2="14" />
                    <line x1="15" x2="15.01" y1="13" y2="13" />
                    <line x1="18" x2="18.01" y1="11" y2="11" />
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-pink-300">• เกม</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-4xl mb-2 group-hover/item:scale-110 transition-transform">
                    🎮
                  </div>
                  <p className="text-slate-300 font-medium">ROV</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-4xl mb-2 group-hover/item:scale-110 transition-transform">
                    ⚔️
                  </div>
                  <p className="text-slate-300 font-medium">LOL</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-4xl mb-2 group-hover/item:scale-110 transition-transform">
                    📱
                  </div>
                  <p className="text-slate-300 font-medium">Wild Rift</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-4xl mb-2 group-hover/item:scale-110 transition-transform">
                    🐴
                  </div>
                  <p className="text-slate-300 font-medium">เกมม้า</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fashion Section */}
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-pink-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-pink-500/40 transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-pink-500/20 rounded-2xl">
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
                    className="text-pink-300"
                  >
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5h-1v1.27c.6.34 1 .99 1 1.73a2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-.74.4-1.39 1-1.73V9h-1a5 5 0 0 0-5 5H3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                    <path d="M12 14v8" />
                    <path d="M8 22h8" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-pink-300">
                  • ชอบการแต่งตัว, แฟชั่น
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">👔</div>
                    <div>
                      <p className="text-lg font-semibold text-white mb-1">
                        ใส่ชุดอะไรก็ได้
                      </p>
                      <p className="text-slate-400 text-sm">Versatile Style</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🎸</div>
                    <div>
                      <p className="text-lg font-semibold text-white mb-1">
                        แนว PUNK
                      </p>
                      <p className="text-pink-300 text-sm font-medium">
                        Favorite Style ⭐
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Food Section */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-amber-500/20 rounded-2xl">
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
                    className="text-amber-300"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" x2="6" y1="1" y2="4" />
                    <line x1="10" x2="10" y1="1" y2="4" />
                    <line x1="14" x2="14" y1="1" y2="4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-pink-300">• ของกิน</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-5xl mb-3 group-hover/item:scale-110 transition-transform">
                    🍗
                  </div>
                  <p className="text-lg font-semibold text-white">ไก่ทอด</p>
                  <p className="text-slate-400 text-sm mt-1">Fried Chicken</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-5xl mb-3 group-hover/item:scale-110 transition-transform">
                    🍚
                  </div>
                  <p className="text-lg font-semibold text-white">ข้าวมันไก่</p>
                  <p className="text-slate-400 text-sm mt-1">Chicken Rice</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group/item">
                  <div className="text-5xl mb-3 group-hover/item:scale-110 transition-transform">
                    🍖
                  </div>
                  <p className="text-lg font-semibold text-white">เครื่องไก่</p>
                  <p className="text-slate-400 text-sm mt-1">Chicken Innards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LIKE;
