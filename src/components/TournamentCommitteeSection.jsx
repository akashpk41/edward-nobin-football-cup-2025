import React, { useState, useEffect } from "react";
import { MessageCircle } from 'lucide-react';

const TournamentCommitteeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === null ? 0 : (prev + 1) % 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const committeeMembers = [
  {
    id: 1,
    title: "👤 Convener",
    name: "Md. Shawon Hossain",
    department: "Islamic History and Culture",
    session: "2022–2023",
    mobile: "01768298331",
    image: "https://i.ibb.co.com/Cs6m0P8H/shawonss.png",
    color: "from-orange-500 via-red-500 to-yellow-500",
    bgColor: "from-orange-500/20 via-red-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/50",
    iconBg: "from-orange-600 to-red-700",
    priority: "highest",
    whatsapp: "https://wa.me/8801768298331?text=Hello%20Shawon",
    facebook: "https://www.facebook.com/muhammadshawonhossain34"
  },
  {
    id: 2,
    title: "👥 Co-Convener",
    name: "Rezaul Islam Badhon",
    department: "Management",
    session: "2021–2022",
    mobile: "01709514747",
    image: "https://i.ibb.co.com/x8tJQhy2/badhon.png",
    color: "from-blue-500 via-indigo-500 to-purple-500",
    bgColor: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    borderColor: "border-blue-500/50",
    iconBg: "from-blue-600 to-indigo-700",
    priority: "high",
    whatsapp: "https://wa.me/8801709514747?text=Hello%20Badhon",
    facebook: "https://www.facebook.com/reja.ula.isalama.bamdhana"
  },
  {
    id: 3,
    title: "⚖️ Rules & Event Co-Ordinator",
    name: "Md. Tanzim Hossain",
    department: "Chemistry",
    session: "2022–2023",
    mobile: "01628147782",
    image: "https://i.ibb.co.com/0R72jHkj/tanzim.png",
    color: "from-green-500 via-emerald-500 to-teal-500",
    bgColor: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    borderColor: "border-green-500/50",
    iconBg: "from-green-600 to-emerald-700",
    priority: "medium",
    whatsapp: "https://wa.me/8801628147782?text=Hello%20Tanzim",
    facebook: "https://www.facebook.com/tanzim.hossain.1614"
  },
  {
    id: 4,
    title: "💰 Finance Co-Ordinator",
    name: "Akash PK",
    department: "Degree (2nd Year)",
    session: "2022–2023",
    mobile: "01405700935",
    image: "https://i.ibb.co.com/6R0r2XSC/akash.png",
    color: "from-yellow-500 via-amber-500 to-orange-500",
    bgColor: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/50",
    iconBg: "from-yellow-600 to-amber-700",
    priority: "medium",
    whatsapp: "https://wa.me/8801405700935?text=Hello%20Akash",
    facebook: "https://www.facebook.com/atapk41"
  },
  {
    id: 5,
    title: "📣 Public Relations & Media Co-Ordinator",
    name: "Md. Ohiduzzaman",
    department: "Political Science",
    session: "2020–2021",
    mobile: "01744195453",
    image: "https://i.ibb.co.com/v6WrwG0y/nice.png",
    color: "from-purple-500 via-pink-500 to-rose-500",
    bgColor: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    borderColor: "border-purple-500/50",
    iconBg: "from-purple-600 to-pink-700",
    priority: "medium",
    whatsapp: "https://wa.me/8801744195453?text=Hello%20Ohiduzzaman",
    facebook: "https://www.facebook.com/oheduzzaman.nice"
  },
  {
    id: 6,
    title: "🛠️ Logistics & Operations",
    name: "Akash Ahmed Shuvo",
    department: "Economics",
    session: "2021–2022",
    mobile: "+8801611-998767",
    image: "https://i.ibb.co.com/kgmQDQGs/shuvo-ahmed-akash.png",
    color: "from-cyan-500 via-teal-500 to-blue-500",
    bgColor: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/50",
    iconBg: "from-cyan-600 to-teal-700",
    priority: "low",
    whatsapp: "https://wa.me/8801611998767?text=Hello%20Akash%20Ahmed",
    facebook: "https://www.facebook.com/shovo.shovo.121772"
  },
  {
    id: 7,
    title: "🛠️ Logistics & Operations",
    name: "Shoaib Ahmed Shuvo",
    department: "Management",
    session: "2020–2021",
    mobile: "01733606795",
    image: "https://i.ibb.co.com/B527ZxFY/shoibshuvo.png",
    color: "from-red-500 via-pink-500 to-purple-500",
    bgColor: "from-red-500/20 via-pink-500/20 to-purple-500/20",
    borderColor: "border-red-500/50",
    iconBg: "from-red-600 to-pink-700",
    priority: "low",
    whatsapp: "https://wa.me/8801733606795?text=Hello%20Shoaib",
    facebook: "https://facebook.com/username_shoaib"
  },
  {
    id: 8,
    title: "🛠️ Logistics & Operations",
    name: "Abdul Alim",
    department: "Sociology",
    session: "Master's 2022–2023",
    mobile: "0176860328",
    image: "https://i.ibb.co.com/YB36V7kG/alim.png",
    color: "from-indigo-500 via-violet-500 to-purple-500",
    bgColor: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/50",
    iconBg: "from-indigo-600 to-violet-700",
    priority: "low",
    whatsapp: "https://wa.me/880176860328?text=Hello%20Alim",
    facebook: "https://www.facebook.com/abdul.alim.sarker.432937180"
  }
];

  // Separate conveners and team members
  const conveners = committeeMembers.filter(
    (member) => member.priority === "highest" || member.priority === "high"
  );
  const coordinators = committeeMembers.filter(
    (member) => member.priority === "medium"
  );
  const logisticsTeam = committeeMembers.filter(
    (member) => member.priority === "low"
  );

  const MemberCard = ({ member, index, isActive }) => (
    <div
      className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
        isActive ? "scale-105 z-20" : ""
      }`}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* Default Glow Effect - Always visible */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          member.color
        } opacity-20 rounded-4xl blur-2xl animate-pulse transition-all duration-700
        ${isActive ? "opacity-40 blur-3xl" : ""}`}
      />

      <div
    className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
      isActive ? "scale-105 z-20" : ""
    }`}
    onMouseEnter={() => setActiveCard(index)}
    onMouseLeave={() => setActiveCard(null)}
  >
    {/* Default Glow Effect - Always visible */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${
        member.color
      } opacity-20 rounded-4xl blur-2xl animate-pulse transition-all duration-700
      ${isActive ? "opacity-40 blur-3xl" : ""}`}
    />

    {/* Member Card */}
    <div
      className={`relative backdrop-blur-3xl bg-gradient-to-br from-black/70 to-gray-900/50 border-2 rounded-4xl p-8 shadow-2xl ${
        member.borderColor
      } transition-all duration-700 ${
        isActive
          ? `${member.borderColor} shadow-2xl transform rotate-1`
          : `border-white/20 group-hover:${member.borderColor}`
      } hover:shadow-2xl`}
    >
      {/* Priority Badge */}
      {member.priority === "highest" && (
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      )}

      {/* Member Photo - Larger size with default glow */}
      <div className="relative mb-8">
        {/* Image Background Glow - Always visible */}
        <div
          className={`absolute -inset-4 bg-gradient-to-br ${member.color} opacity-20 rounded-full blur-xl animate-pulse`}
        />

        <div
          className={`w-52 h-52 mx-auto relative rounded-full overflow-hidden border-4 ${member.borderColor} shadow-2xl group-hover:scale-110 transition-all duration-500`}
          style={{
            boxShadow: `0 0 30px ${
              member.color.includes("orange")
                ? "rgba(249, 115, 22, 0.4)"
                : member.color.includes("blue")
                ? "rgba(59, 130, 246, 0.4)"
                : member.color.includes("green")
                ? "rgba(34, 197, 94, 0.4)"
                : member.color.includes("yellow")
                ? "rgba(234, 179, 8, 0.4)"
                : member.color.includes("purple")
                ? "rgba(147, 51, 234, 0.4)"
                : member.color.includes("cyan")
                ? "rgba(6, 182, 212, 0.4)"
                : member.color.includes("red")
                ? "rgba(239, 68, 68, 0.4)"
                : "rgba(99, 102, 241, 0.4)"
            }`,
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 -z-10 animate-pulse`}
          />
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3E%3C/svg%3E";
            }}
          />
          {/* Glow overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-full group-hover:from-black/40 transition-all duration-500`}
          />
        </div>

        {/* Position Icon */}
        <div
          className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${member.iconBg} rounded-full flex items-center justify-center shadow-xl border-2 border-white/20`}
        >
          <span className="text-lg">{member.title.split(" ")[0]}</span>
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center space-y-4">
        {/* Position Title */}
        <div
          className={`inline-block px-4 py-2 bg-gradient-to-r ${member.bgColor} backdrop-blur-sm border ${member.borderColor} rounded-2xl shadow-lg`}
        >
          <p
            className={`text-sm font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent tracking-wide`}
          >
            {member.title}
          </p>
        </div>

        {/* Name */}
        <h4 className="text-2xl font-black text-white group-hover:text-orange-300 transition-colors duration-300 leading-tight">
          {member.name}
        </h4>

        {/* Details */}
        <div className="space-y-3 text-gray-200">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full flex items-center justify-center">
              <span className="text-xs">🏛️</span>
            </div>
            <p className="text-sm font-semibold text-blue-300">
              {member.department}
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full flex items-center justify-center">
              <span className="text-xs">📅</span>
            </div>
            <p className="text-sm font-semibold text-green-300">
              {member.session}
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
              <span className="text-xs">📱</span>
            </div>
            <p className="text-sm font-semibold text-purple-300 tracking-wider">
              {member.mobile}
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 pt-4">
          {/* Facebook Icon */}
          <a
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Messenger Icon */}
          <a
            href={`https://m.me/${member.facebook?.split('/').pop()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z"/>
            </svg>
          </a>

          {/* WhatsApp Icon */}
          <a
            href={member.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="pt-4">
          <a
            href={member.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide flex items-center justify-center gap-3 block`}
          >
            <MessageCircle size={20} />
            Send Message
          </a>
        </div>
      </div>

      {/* Active Glow */}
      {isActive && (
        <div
          className={`absolute inset-0 border-2 ${member.borderColor} rounded-4xl pointer-events-none animate-pulse`}
        />
      )}
    </div>
  </div>
    </div>
  );

  return (
    <div
      id="Tournament"
      className="relative py-18 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Dynamic Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 24}px`,
              height: `${8 + Math.random() * 24}px`,
              background: `linear-gradient(45deg,
                ${
                  ["#f97316", "#ef4444", "#eab308", "#8b5cf6", "#06b6d4"][
                    Math.floor(Math.random() * 5)
                  ]
                }60,
                ${
                  ["#dc2626", "#f59e0b", "#f97316", "#a855f7", "#0ea5e9"][
                    Math.floor(Math.random() * 5)
                  ]
                }30)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: `0 0 ${
                8 + Math.random() * 16
              }px rgba(249, 115, 22, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Floating Football Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              filter: `hue-rotate(${Math.random() * 360}deg)`,
              animation: `float ${
                15 + Math.random() * 10
              }s ease-in-out infinite`,
            }}
          >
            ⚽
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tournament Header */}
        <div
          className={`text-center mb-24 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Memorial Badge */}
          <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600/40 via-orange-600/30 to-yellow-600/40 backdrop-blur-3xl border border-red-500/50 rounded-full shadow-2xl mb-10 transform hover:scale-105 transition-all duration-500">
            <span className="text-red-300 font-black text-xl  md:text-5xl tracking-wide flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse">
                🏆
              </div>
              শহীদ জাহিদুল ইসলাম স্মৃতি স্মরণে
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                🎖️
              </div>
            </span>
          </div>

          {/* Tournament Title */}
          <h1 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              নবীন <span className="ml-2">শিক্ষার্থীদের</span>
            </span>

            <span className="bg-gradient-to-r ml-2 from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent ml-2">
              ফুটবল টুর্নামেন্ট
            </span>

            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              <span className="ml-2">বাস্তবায়ন</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text ml-2 text-transparent">
                কমিটি
              </span>{" "}
              ২০২৫
            </span>
          </h1>
        </div>

        {/* Conveners Section */}
        <div
          className={`mb-16  -mt-18  transform transition-all duration-1200 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-0">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-2xl border border-orange-500/40 rounded-full shadow-xl mb-6">
              <h3 className="text-2xl font-black text-orange-300 flex items-center gap-3">
                <span className="text-3xl">👑</span>
                নেতৃত্ব পর্যায়
                <span className="text-3xl">👑</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {conveners.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                isActive={activeCard === index}
              />
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-2xl border border-blue-500/40 rounded-full shadow-xl mb-6">
              <h3 className="text-2xl font-black text-blue-300 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                ম্যানেজমেন্ট বোর্ড
                <span className="text-3xl">🎯</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coordinators.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={conveners.length + index}
                isActive={activeCard === conveners.length + index}
              />
            ))}
          </div>
        </div>

        {/* Logistics Team Section */}
        <div
          className={`mb-20 transform transition-all duration-1200 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-600/30 to-teal-600/30 backdrop-blur-2xl border border-green-500/40 rounded-full shadow-xl mb-6">
              <h3 className="text-2xl font-black text-green-300 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                লজিস্টিকস ও অপারেশনস টিম
                <span className="text-3xl">🛠️</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsTeam.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={conveners.length + coordinators.length + index}
                isActive={
                  activeCard === conveners.length + coordinators.length + index
                }
              />
            ))}
          </div>
        </div>

        {/* Tournament Info & Notice - Mobile Responsive */}
        <div
          className={`transform transition-all duration-1200 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-3xl bg-gradient-to-br from-black/60 to-gray-900/40 border border-orange-500/30 rounded-4xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600/40 to-orange-600/40 backdrop-blur-2xl border border-red-500/50 rounded-full shadow-xl mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-red-300 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">📢</span>
                  গুরুত্বপূর্ণ বিজ্ঞপ্তি
                  <span className="text-2xl sm:text-3xl lg:text-4xl">📢</span>
                </h3>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl text-2xl sm:text-3xl animate-bounce">
                    ⚽
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
                      অংশগ্রহণের শর্তাবলী
                    </h4>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto sm:mx-0" />
                  </div>
                </div>

                <div className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed space-y-4">
                  <p className="text-center sm:text-left">
                    <span className="text-orange-400 font-black">
                      শুধুমাত্র নবীন শিক্ষার্থীদের
                    </span>{" "}
                    অংশগ্রহণে
                    <span className="text-red-400 font-black">
                      {" "}
                      "শহীদ জাহিদুল ইসলাম স্মৃতি ফুটবল টুর্নামেন্ট ২০২৫"
                    </span>{" "}
                    আয়োজন করা হয়েছে।
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl">⚽</span>
                      <span className="text-yellow-400 font-black text-sm sm:text-base">
                        স্মৃতি টুর্নামেন্ট
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl">🎗️</span>
                      <span className="text-green-400 font-black text-sm sm:text-base">
                        শহীদের সম্মানে
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tournament Stats - Mobile Responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
                  {[
                    {
                      icon: "🏆",
                      label: "টুর্নামেন্ট",
                      value: "২০২৫",
                      color: "from-yellow-500 to-orange-600",
                    },
                    {
                      icon: "⚽",
                      label: "ফুটবল",
                      value: "নবীন",
                      color: "from-green-500 to-emerald-600",
                    },
                    {
                      icon: "🎗️",
                      label: "স্মৃতি",
                      value: "শহীদ",
                      color: "from-red-500 to-pink-600",
                    },
                    {
                      icon: "🎯",
                      label: "লক্ষ্য",
                      value: "সম্মান",
                      color: "from-purple-500 to-indigo-600",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`backdrop-blur-xl bg-gradient-to-br ${stat.color}/20 border border-white/20 rounded-3xl p-4 sm:p-6 text-center shadow-xl hover:scale-105 transition-all duration-300 group`}
                    >
                      <div
                        className={`text-3xl sm:text-4xl mb-3 animate-bounce`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {stat.icon}
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-gray-300 font-medium">
                          {stat.label}
                        </p>
                        <p
                          className={`text-lg sm:text-xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl font-black text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide">
                  যোগাযোগ করুন
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl font-black text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide">
                  আরো জানুন
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div
          className={`text-center mt-16 transform transition-all duration-1200 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-gray-800/60 to-gray-900/40 border border-gray-600/30 rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse">💝</span>
                <span className="text-base sm:text-lg font-semibold">
                  শহীদ জাহিদুল ইসলামের স্মৃতির প্রতি সম্মান
                </span>
              </div>
              <div className="h-px w-12 sm:h-12 sm:w-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse">🤝</span>
                <span className="text-base sm:text-lg font-semibold">
                  একসাথে এগিয়ে চলার প্রত্যাশায়
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>
        {`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-20px) rotate(5deg);
            }
            66% {
              transform: translateY(-10px) rotate(-3deg);
            }
          }

          .animate-float-particle {
            animation: float 8s ease-in-out infinite;
          }

          .animate-float-football {
            animation: float 15s ease-in-out infinite;
          }

          .rounded-4xl {
            border-radius: 2rem;
          }

          /* Custom particle animation */
          @keyframes particle-float {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
              opacity: 0.3;
            }
            25% {
              transform: translate3d(-10px, -15px, 0) rotate(90deg) scale(1.1);
              opacity: 0.7;
            }
            50% {
              transform: translate3d(15px, -25px, 0) rotate(180deg) scale(0.9);
              opacity: 0.4;
            }
            75% {
              transform: translate3d(-5px, -10px, 0) rotate(270deg) scale(1.05);
              opacity: 0.6;
            }
          }

          /* Responsive text sizing */
          @media (max-width: 640px) {
            .text-5xl {
              font-size: 2rem;
            }
            .text-4xl {
              font-size: 1.875rem;
            }
            .text-3xl {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TournamentCommitteeSection;
