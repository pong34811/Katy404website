import React from "react";

function Hashtag() {
  return (
    <section
      id="hashtag"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400">
              Hashtags
            </span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full opacity-50 mb-6"></div>
          <p className="text-lg text-slate-400">แท็กที่ใช้ในโซเชียลมีเดีย</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Hashtags Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Tag */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cyan-300"
                    >
                      <line x1="4" x2="20" y1="9" y2="9" />
                      <line x1="4" x2="20" y1="15" y2="15" />
                      <line x1="10" x2="8" y1="3" y2="21" />
                      <line x1="16" x2="14" y1="3" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300">Main Tag</h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-cyan-500/20">
                  <p className="text-3xl font-bold text-cyan-400 font-mono">
                    #kt404
                  </p>
                </div>
              </div>
            </div>

            {/* Fan Name */}
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  <h3 className="text-xl font-bold text-pink-300">Fan Name</h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-pink-500/20">
                  <p className="text-3xl font-bold text-pink-400 font-mono">
                    #ลูกทีม
                  </p>
                </div>
              </div>
            </div>

            {/* Fan Art */}
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-300"
                    >
                      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                      <path d="m14 7 3 3" />
                      <path d="M5 6v4" />
                      <path d="M19 14v4" />
                      <path d="M10 2v2" />
                      <path d="M7 8H3" />
                      <path d="M21 16h-4" />
                      <path d="M11 3H9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-300">Fan Art</h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-purple-500/20">
                  <p className="text-3xl font-bold text-purple-400 font-mono">
                    #kt404art
                  </p>
                </div>
              </div>
            </div>

            {/* Live Tag */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-300"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-300">
                    Live Stream
                  </h3>
                </div>

                <div className="bg-black/30 rounded-2xl p-4 border border-red-500/20">
                  <p className="text-3xl font-bold text-red-400 font-mono">
                    #kt404live
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="text-2xl">💬</span>
              <p className="text-slate-300 font-medium">
                ใช้แท็กเหล่านี้เมื่อโพสต์เกี่ยวกับเรานะ!
              </p>
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hashtag;
