import React from "react";

function ThankYou() {
  return (
    <section
      id="thankyou"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400">
              Thank you
            </span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full opacity-50 mb-6"></div>
          <p className="text-lg text-slate-400">ขอบคุณทุกคนที่ช่วยสร้างสรรค์</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Credits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Live2D */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl">
                  🎨
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-1">
                    Live2d
                  </h3>
                  <a
                    href="https://twitter.com/enximadesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-slate-300 hover:text-pink-300 transition-colors"
                  >
                    @enximadesign
                  </a>
                </div>
              </div>
            </div>

            {/* BGM */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl">
                  🎵
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-1">BGM</h3>
                  <a
                    href="https://twitter.com/RahuraMusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-slate-300 hover:text-pink-300 transition-colors"
                  >
                    @RahuraMusic
                  </a>
                </div>
              </div>
            </div>

            {/* Rigger */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-1">
                    Rigger
                  </h3>
                  <a
                    href="https://twitter.com/enximadesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-slate-300 hover:text-pink-300 transition-colors"
                  >
                    @enximadesign
                  </a>
                </div>
              </div>
            </div>

            {/* Loading */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl">
                  ⏳
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-1">
                    Loading
                  </h3>
                  <a
                    href="https://twitter.com/kt404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-slate-300 hover:text-pink-300 transition-colors"
                  >
                    @kt404
                  </a>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all md:col-span-2">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl">
                  🖼️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-1">
                    overlay
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg text-slate-300">Minchirie</p>
                    <a
                      href="https://min-chi.material.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-pink-300 transition-colors"
                    >
                      https://min-chi.material.jp/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full backdrop-blur-sm">
              <span className="text-3xl">💖</span>
              <p className="text-white font-semibold text-lg">
                ขอบคุณทุกคนมากๆ นะคะ!
              </p>
              <span className="text-3xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
