import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#09090b] text-white py-20 relative overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-[#aebcdb] to-slate-200">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#aebcdb] mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Personal Info Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#aebcdb]/30 transition-colors group">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-300 group-hover:scale-110 transition-transform">
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
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">
                      Name
                    </p>
                    <p className="text-xl font-bold text-white">
                      เคที่404 (KT404)
                    </p>
                  </div>
                </div>

                {/* Nickname */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#aebcdb]/30 transition-colors group">
                  <div className="p-3 bg-green-500/20 rounded-xl text-green-300 group-hover:scale-110 transition-transform">
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
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">
                      Nickname
                    </p>
                    <p className="text-xl font-bold text-white">เค (K)</p>
                  </div>
                </div>

                {/* Birthday */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#aebcdb]/30 transition-colors group">
                  <div className="p-3 bg-amber-500/20 rounded-xl text-amber-300 group-hover:scale-110 transition-transform">
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
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">
                      Birthday
                    </p>
                    <p className="text-xl font-bold text-white">20/07</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Status & Style */}
            <div className="flex flex-col gap-6">
              {/* Occupation */}
              <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl text-purple-300">
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
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 uppercase tracking-wider">
                    Occupation
                  </h3>
                </div>
                <p className="text-3xl font-bold text-white pl-16">นักศึกษา</p>
              </div>

              {/* Gender / Style */}
              <div className="flex-1 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-pink-500/40 transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-pink-500/30 transition-colors animate-pulse"></div>

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="p-3 bg-pink-500/20 rounded-xl text-pink-300">
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
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-pink-200 uppercase tracking-wider">
                    Gender & Style
                  </h3>
                </div>

                <div className="pl-16 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-white">ชาย</p>
                    <span className="text-pink-300/80 italic">
                      (Femboy Style)
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-pink-500/20 rounded-full border border-pink-500/30 text-pink-200 text-sm font-medium">
                    <span>✨</span>
                    <span>น่ารักแบบตะโกน</span>
                    <span>✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
