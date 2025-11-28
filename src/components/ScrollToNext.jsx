import React, { useState, useEffect } from "react";

function ScrollToNext() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // List of section IDs in order
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
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if at bottom of page
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      setIsAtBottom(isBottom);

      // Find current section
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
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

  // Don't show button if at the last section
  if (isAtBottom || currentSection >= sections.length - 1) {
    return null;
  }

  return (
    <button
      onClick={scrollToNext}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Scroll to next section"
    >
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
        className="group-hover:translate-y-1 transition-transform"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

export default ScrollToNext;
