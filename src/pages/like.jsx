import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Shirt,
  Utensils,
  Heart,
  Swords,
  Smartphone,
  Ghost,
  Music,
} from "lucide-react";

function LIKE() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const gameItems = [
    { emoji: "🎮", name: "ROV", icon: Swords },
    { emoji: "⚔️", name: "LOL", icon: Ghost },
    { emoji: "📱", name: "Wild Rift", icon: Smartphone },
    { emoji: "🐴", name: "เกมม้า", icon: StarIcon },
  ];

  return (
    <section
      id="like"
      className="min-h-screen bg-background text-white py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-pink-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 animate-gradient-x">
              LIKE
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto space-y-12"
        >
          {/* Gaming Section */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-[3rem] p-10 md:p-14 relative overflow-hidden group border-white/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-purple-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-6 bg-purple-500/20 rounded-3xl text-purple-400 shadow-2xl shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <Gamepad2 size={40} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
                  • เกม
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "ROV", emoji: "🎮", color: "from-blue-500/20" },
                  { name: "LOL", emoji: "⚔️", color: "from-purple-500/20" },
                  { name: "Wild Rift", emoji: "📱", color: "from-cyan-500/20" },
                  { name: "เกมม้า", emoji: "🐴", color: "from-amber-500/20" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className={cn(
                      "glass-morphism bg-gradient-to-br to-transparent rounded-[2rem] p-8 text-center border-white/5 group/item cursor-default",
                      item.color
                    )}
                  >
                    <div className="text-6xl mb-4 group-hover/item:scale-125 transition-transform duration-500 drop-shadow-2xl">
                      {item.emoji}
                    </div>
                    <p className="text-xl font-black text-white uppercase tracking-widest">
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fashion Section */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-[3rem] p-10 md:p-14 relative overflow-hidden group border-white/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-pink-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-6 bg-pink-500/20 rounded-3xl text-pink-400 shadow-2xl shadow-pink-500/20 group-hover:scale-110 transition-transform">
                  <Shirt size={40} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
                  • ความชอบ
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="glass-morphism bg-white/5 rounded-[2.5rem] p-10 border-white/5 flex items-center gap-8 group/card"
                >
                  <div className="text-7xl group-hover/card:scale-110 transition-transform">
                    👔
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                      แต่งตัวได้ทุกสไตล์
                    </p>
                    <p className="text-slate-400 text-lg font-medium tracking-wide">
                      Versatile Fashion Expert
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-gradient-to-r from-pink-500/20 to-purple-500/10 glass-morphism rounded-[2.5rem] p-10 border-pink-500/30 flex items-center gap-8 group/card relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-7xl group-hover/card:rotate-12 transition-transform relative z-10">
                    🎸
                  </div>
                  <div className="relative z-10">
                    <p className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                      ความชอบแนว PUNK
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-pink-500/50">
                      <Star size={12} fill="white" />
                      Favorite Style
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Food Section */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-[3rem] p-10 md:p-14 relative overflow-hidden group border-white/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-amber-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-6 bg-amber-500/20 rounded-3xl text-amber-400 shadow-2xl shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <Utensils size={40} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
                  • ของกิน
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "ไก่ทอด",
                    emoji: "🍗",
                    desc: "Fried Chicken",
                    color: "from-amber-500/20",
                  },
                  {
                    name: "ข้าวมันไก่",
                    emoji: "🍚",
                    desc: "Chicken Rice",
                    color: "from-slate-200/5",
                  },
                  {
                    name: "เครื่องไก่",
                    emoji: "🍖",
                    desc: "Chicken Innards",
                    color: "from-orange-500/20",
                  },
                ].map((food, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "glass-morphism bg-gradient-to-br to-transparent rounded-[2.5rem] p-10 text-center border-white/5 group/food",
                      food.color
                    )}
                  >
                    <div className="text-8xl mb-6 group-hover/food:rotate-12 transition-transform duration-500">
                      {food.emoji}
                    </div>
                    <p className="text-2xl font-black text-white mb-2">
                      {food.name}
                    </p>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">
                      {food.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const StarIcon = (props) => (
  <svg
    {...props}
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
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Star = StarIcon;

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default LIKE;
