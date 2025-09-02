import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
      setIsVisible(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Custom Scroll Bar */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(20, 20, 20, 0.6);
          border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f97316, #ef4444, #dc2626);
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.6);
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #fb923c, #f87171, #f97316);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.7);
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #f97316 rgba(20, 20, 20, 0.6);
        }
      `}</style>
      {/* Top Progress Bar */}
      <div
        className="fixed left-0 -mt-18 md:-mt-14 right-0 z-[5000] h-1.5 opacity-100"
        style={{ top: "var(--navbar-height, 70px)" }}
      >
        <div className="w-full h-full bg-black/20 backdrop-blur-sm">
          <div
            className="h-full transition-all duration-300 ease-out relative"
            style={{
              width: `${scrollProgress}%`,
              background:
                "linear-gradient(90deg, #f97316 0%, #ef4444 50%, #dc2626 100%)",
              boxShadow:
                "0 0 10px rgba(249,115,22,0.6), 0 0 20px rgba(239,68,68,0.4)",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ animation: "shimmer 2s infinite" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 transform ${
          scrollProgress > 20
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-75"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
          <div className="relative flex items-center justify-center h-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </>
  );
};

export default ScrollProgressBar;
