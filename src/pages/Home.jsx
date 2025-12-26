import React from "react";
import { motion } from "framer-motion";
import characterImg from "../assets/img/logo.webp";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-white"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[120px]"
        ></motion.div>
        <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative inline-block group"
        >
          {/* Glowing Ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-50 transition duration-700"></div>

          <div className="relative">
            <img
              src={characterImg}
              alt="Katy404 Character"
              className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/10 shadow-2xl transition duration-500 group-hover:scale-[1.02] group-hover:rotate-1"
            />
            {/* Status Indicator */}
            <div className="absolute bottom-6 right-6 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background shadow-lg shadow-emerald-500/50"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-bold tracking-tight leading-tight"
          >
            <span className="block text-xl md:text-2xl text-slate-400 mb-2 font-medium tracking-[0.3em] uppercase">
              HELL0, I AM
            </span>
            <span className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-gradient-x drop-shadow-2xl font-black">
              Katy404
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto glass-morphism rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent"></div>
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light">
              "คนมักจะเข้าใจผิดว่าผมเป็นผู้หญิง เพราะหน้าตา... <br />
              <span className="text-primary font-semibold text-2xl md:text-3xl mt-2 block">
                แต่จริง ๆ เราเป็นผู้ชายนะ !
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
