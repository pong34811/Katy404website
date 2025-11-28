import React from "react";

function Dislike() {
  return (
    <section
      id="dislike"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-red-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400">
              DISLIKE
            </span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Three Dislikes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dislike 1 - Ghosts */}
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10 text-center">
                <div className="mb-6 text-8xl group-hover:scale-110 transition-transform">
                  👻
                </div>

                <h3 className="text-3xl font-bold text-pink-400 mb-4">ผี</h3>
                <p className="text-slate-400 text-sm">Ghosts</p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <span className="text-red-400 text-xl">😱</span>
                  <span className="text-purple-200 text-sm font-medium">
                    Scary!
                  </span>
                </div>
              </div>
            </div>

            {/* Dislike 2 - Cockroaches */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10 text-center">
                <div className="mb-6 text-8xl group-hover:scale-110 transition-transform">
                  🪳
                </div>

                <h3 className="text-3xl font-bold text-pink-400 mb-4">
                  แมลงสาบ
                </h3>
                <p className="text-slate-400 text-sm">Cockroaches</p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30">
                  <span className="text-red-400 text-xl">🤢</span>
                  <span className="text-orange-200 text-sm font-medium">
                    Gross!
                  </span>
                </div>
              </div>
            </div>

            {/* Dislike 3 - Vegetables */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md border border-green-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10 text-center">
                <div className="mb-6 text-8xl group-hover:scale-110 transition-transform">
                  🥗
                </div>

                <h3 className="text-3xl font-bold text-pink-400 mb-4">ผัก</h3>
                <p className="text-slate-400 text-sm">Vegetables</p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                  <span className="text-red-400 text-xl">😖</span>
                  <span className="text-green-200 text-sm font-medium">
                    No thanks!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-sm">
              <span className="text-2xl">⚠️</span>
              <p className="text-slate-300 font-medium">
                Please keep these away from me!
              </p>
              <span className="text-2xl">⚠️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dislike;
