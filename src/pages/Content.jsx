import React from "react";

function Content() {
  return (
    <section
      id="content"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400">
              Content
            </span>
          </h2>

          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Content Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Live Stream */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105 duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white font-black text-lg">LIVE</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-pink-400 mb-2">
                  ไลฟ์สตรีม
                </h3>
                <p className="text-pink-400 font-semibold">
                  สัปดาห์ละ 2-3 ครั้ง
                </p>
              </div>
            </div>

            {/* Video Content */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105 duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-pink-400 mb-2">
                  ทำคลิปวิดีโอ
                </h3>
                <p className="text-pink-400 font-semibold">สัปดาห์ละ 3 คลิป</p>
              </div>
            </div>

            {/* Shorts */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105 duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-pink-400 mb-2">
                  คลิปสั้น
                </h3>
                <p className="text-pink-400 font-semibold">สัปดาห์ละ 3 คลิป</p>
              </div>
            </div>

            {/* Social Posts */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all hover:transform hover:scale-105 duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-2xl mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-pink-400 mb-2">
                  โพสโซเชียลมีเดีย
                </h3>
                <p className="text-pink-400 font-semibold">2 ต่อสัปดาห์</p>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-900/60 to-purple-800/60 border border-purple-500/30 rounded-full backdrop-blur-sm shadow-lg">
              <span className="text-2xl">📅</span>
              <p className="text-white font-semibold">
                Regular Content Schedule
              </p>
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
