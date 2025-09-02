import React, { useState, useEffect } from "react";
import DeveloperFooter from "./DeveloperFooter";

const TournamentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Tournament date - September 10, 2025
  const tournamentDate = new Date('2025-09-10T00:00:00').getTime();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = tournamentDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [tournamentDate]);

  const tabData = [
    {
      id: 0,
      title: "টুর্নামেন্ট তথ্য",
      icon: "⚽",
      color: "from-blue-500 to-indigo-600",
      content: [
        {
          icon: "🎖️",
          label: "টুর্নামেন্ট নাম",
          value:
            "শহীদ জাহিদুল ইসলাম স্মৃতি স্মরণে নবীন শিক্ষার্থীদের ফুটবল টুর্নামেন্ট ২০২৫",
        },
        {
          icon: "📅",
          label: "তারিখ",
          value: "উদ্ভবনি ম্যাচ ১০ সেপ্টেম্বর ২০২৫",
        },
        {
          icon: "📍",
          label: "স্থান",
          value: "সরকারি এডওয়ার্ড কলেজ মাঠ",
        },
        {
          icon: "💰",
          label: "এন্ট্রি ফি",
          value: "৫০০ টাকা মাত্র",
        },
        {
          icon: "🎓",
          label: "যোগ্যতা",
          value: "শুধুমাত্র নবীন শিক্ষার্থীরাই অংশগ্রহণ করতে পারবে",
        },
      ],
    },
    {
      id: 1,
      title: "দল ও নিয়মাবলি",
      icon: "👥",
      color: "from-green-500 to-emerald-600",
      content: [
        {
          icon: "👕",
          label: "দলের আকার",
          value:
            "প্রতিটি দলে সর্বমোট ১৫ জন খেলোয়াড় (১১ জন মাঠে + ৪ জন রিজার্ভ)",
        },
        {
          icon: "⏱️",
          label: "খেলার সময়",
          value: "মোট ৬০ মিনিট (প্রতি অর্ধ ৩০ মিনিট) + ১০ মিনিট বিরতি",
        },
        {
          icon: "🪪",
          label: "পরিচয়পত্র",
          value: "খেলার আগে কলেজ পরিচয়পত্র প্রদর্শন বাধ্যতামূলক",
        },
        {
          icon: "🌍",
          label: "নিয়মাবলি",
          value: "আন্তর্জাতিক ফুটবল নিয়ম (FIFA) অনুসরণ করা হবে",
        },
        {
          icon: "👨‍⚖️",
          label: "সিদ্ধান্ত",
          value: "রেফারির সিদ্ধান্তই চূড়ান্ত। সমতায় শেষ হলে পেনাল্টি শুটআউট",
        },
      ],
    },
    {
      id: 2,
      title: "পুরস্কার ঘোষণা",
      icon: "🏆",
      color: "from-yellow-500 to-orange-600",
      content: [
        {
          icon: "🥇",
          label: "চ্যাম্পিয়ন দল",
          value: "আকর্ষণীয় চ্যাম্পিয়ন ট্রফি + খেলোয়াড়দের জন্য মেডেল",
        },
        {
          icon: "🥈",
          label: "রানার্স-আপ দল",
          value: "আকর্ষণীয় রানার্স-আপ ট্রফি + খেলোয়াড়দের জন্য মেডেল",
        },
        {
          icon: "⚽",
          label: "ম্যান অফ দা টুর্নামেন্ট",
          value: "বিশেষ মেডেল ও সম্মাননা",
        },
        {
          icon: "🌟",
          label: "ম্যান অফ দা ফাইনাল",
          value: "বিশেষ মেডেল ও সম্মাননা",
        },
        {
          icon: "🧤",
          label: "সেরা গোলকিপার",
          value: "বিশেষ মেডেল ও সম্মাননা",
        },
        {
          icon: "🎯",
          label: "সেরা গোলদাতা",
          value: "টপ স্কোরার মেডেল ও সম্মাননা",
        },
      ],
    },
  ];

  return (
    <div
      id="Tournament"
      className="relative py-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Enhanced Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-football-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 40}px`,
              height: `${15 + Math.random() * 40}px`,
              background:
                i % 4 === 0
                  ? `radial-gradient(circle, #f97316, #ea580c)`
                  : i % 4 === 1
                  ? `radial-gradient(circle, #10b981, #059669)`
                  : i % 4 === 2
                  ? `radial-gradient(circle, #f59e0b, #d97706)`
                  : `radial-gradient(circle, #3b82f6, #2563eb)`,
              borderRadius: i % 3 === 0 ? "50%" : "30%",
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              filter: "blur(1px)",
              boxShadow: `0 0 ${
                15 + Math.random() * 25
              }px rgba(249, 115, 22, 0.6)`,
            }}
          />
        ))}
      </div>

      {/* Football Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-orange-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-4 border-green-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-yellow-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 md:px-6">
        {/* Countdown Timer */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-black text-white text-center mb-8">
              টুর্নামেন্ট শুরু হতে <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">বাকি</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "দিন", value: countdown.days, color: "from-red-500 to-pink-600" },
                { label: "ঘন্টা", value: countdown.hours, color: "from-orange-500 to-red-600" },
                { label: "মিনিট", value: countdown.minutes, color: "from-yellow-500 to-orange-600" },
                { label: "সেকেন্ড", value: countdown.seconds, color: "from-green-500 to-emerald-600" }
              ].map((item, index) => (
                <div key={index} className={`backdrop-blur-2xl bg-gradient-to-br ${item.color}/20 border border-orange-500/20 rounded-2xl p-6 text-center shadow-xl scale-105 transition-all duration-300`}>
                  <div className="text-4xl md:text-6xl font-black text-orange-400 mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-lg text-white font-bold tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-4 md:px-8 py-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-2xl border border-orange-500/40 rounded-full shadow-2xl mb-8">
            <span className="text-orange-400 font-bold text-lg md:text-xl tracking-wide flex items-center gap-3">
              🎖️ শহীদ জাহিদুল ইসলাম স্মৃতি স্মরণে 🎖️
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              ✨ <span className="text-white">নবীন শিক্ষার্থীদের </span> ফুটবল
              টুর্নামেন্ট ২০২৫ ✨
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xl mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl">
                📅
              </div>
              <span className="font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
               শুরু <span className="tiro-bangla-regular" >১০</span>  সেপ্টেম্বর ২০২৫
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl">
                📍
              </div>
              <span className="font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                সরকারি এডওয়ার্ড কলেজ মাঠ
              </span>
            </div>
          </div>
        </div>

        {/* Main Content - All Sections Combined */}
        <div
          className={`mb-16  -mt-14 transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/50 to-gray-900/30 border border-orange-500/30 rounded-3xl shadow-2xl">
            <div className="p-6 md:p-6 space-y-4">
              {/* Tournament Info Section */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-xl">
                      ⚽
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      টুর্নামেন্ট তথ্য
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {tabData[0].content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-black/30 to-gray-900/30 border border-orange-500/20  border-orange-500/40  transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xl font-bold text-orange-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-base text-gray-100 leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

              {/* Rules & Teams Section */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-xl">
                      👥
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      দল ও নিয়মাবলি
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {tabData[1].content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-black/30 to-gray-900/30 border border-orange-500/20  border-orange-500/40  transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xl font-bold text-orange-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-base text-gray-100 leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

              {/* Prizes Section */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl shadow-xl">
                      🏆
                    </div>
                    <h3 className="text-3xl md:text-4xl  font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                      পুরস্কার ঘোষণা
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {tabData[2].content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-black/30 to-gray-900/30 border border-orange-500/20  border-orange-500/40  transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xl font-bold text-orange-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-base text-gray-100 leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Centered and Simplified */}
        <div
          className={`transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Single Combined Card */}
          <div className="backdrop-blur-3xl bg-gradient-to-br md:-mt-10 from-black/60 to-gray-900/40 border border-purple-500/30 rounded-3xl p-4 shadow-2xl transition-all duration-500 mb-8">
            {/* Organization Info with Logo */}
            <div className="flex flex-col md:flex-row items-center md:justify-evenly gap-6 mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="https://i.ibb.co.com/67y9b8w6/716e30c7-a41f-4a18-8fb8-1eb7ef119bfc-removebg-preview.png"
                  alt="College Logo"
                  className="w-38 h-38 object-contain rounded-full shadow-2xl border-2 border-gradient-to-r from-purple-400 to-pink-400"
                />
              </div>

              {/* Organization Text */}
              <div className="text-center md:text-left">
                <p className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  আয়োজনে:
                </p>
                <div className="space-y-2">
                  <p className="text-2xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    সরকারি এডওয়ার্ড কলেজ
                  </p>
                  <p className="text-2xl md:text-2xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    একাডেমিক ও কালচারাল ফোরাম
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h4 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  যোগাযোগ
                </h4>
              </div>

              {/* Contact Numbers - Simplified */}
              <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                {/* Shawon */}
                <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-blue-500/20 border border-blue-400/30">
                  <div className="w-10 h-10 bg-blue-400/40 rounded-full flex items-center justify-center text-lg">
                    📞
                  </div>
                  <div className="text-left">
                    <p className="text-blue-400 font-semibold text-lg">
                      Shawon
                    </p>
                    <p className="text-white font-bold text-lg">01768298331</p>
                  </div>
                </div>

                {/* Tanzim */}
                <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-purple-500/20 border border-purple-400/30">
                  <div className="w-10 h-10 bg-purple-400/40 rounded-full flex items-center justify-center text-lg">
                    📞
                  </div>
                  <div className="text-left">
                    <p className="text-purple-400 font-semibold text-lg">
                      Tanzim
                    </p>
                    <p className="text-white font-bold text-lg">01628147782</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="text-center">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-500">
              <p className=" text-2xl md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                <span className="text-white font-bold">শহীদ জাহিদুল ইসলাম</span>
                -এর স্মৃতিকে {" "}
                <span className="text-blue-400 font-semibold">সম্মান</span>{" "}
                জানিয়ে আয়োজিত এই
                 <span className="text-green-400 ml-2 font-semibold mr-2">
                  ঐতিহ্যবাহী ফুটবল টুর্নামেন্টে
                </span>
                আপনাদের সবাইকে জানাই
                <span className="text-orange-400 ml-2 font-bold">
                  আন্তরিক আমন্ত্রণ
                </span>
                ।
              </p>
            </div>
          </div>
        </div>


      </div>
<DeveloperFooter />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes football-float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-40px) translateX(20px) rotate(90deg)
              scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(-30px) rotate(180deg)
              scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-60px) translateX(15px) rotate(270deg)
              scale(1.05);
            opacity: 0.4;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-football-float {
          animation: football-float 15s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TournamentSection;