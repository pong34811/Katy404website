import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ScrollToNext() {
  const [currentSection, setCurrentSection] = useState(0);
  const [show, setShow] = useState(true);

  const sections = [
    "home",
    "about",
    "story",
    "character",
    "vtuber",
    "like",
    "dislike",
    "content",
    "hashtag",
    "thankyou",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isBottom) {
        setShow(false);
        return;
      }

      setShow(true);

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextIndex = currentSection + 1;
    if (nextIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {show && currentSection < sections.length - 1 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(174, 188, 219, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToNext}
          className="fixed bottom-10 right-10 z-50 w-16 h-16 glass-morphism border-primary/20 text-primary rounded-2xl shadow-2xl flex items-center justify-center group"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} strokeWidth={2.5} />
          </motion.div>

          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-2xl border border-primary/50 animate-ping opacity-20 group-hover:hidden"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToNext;
