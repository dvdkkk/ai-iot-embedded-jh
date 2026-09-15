
import React, { useState } from 'react';
import { Star, Calendar, Clock, MapPin, Home, UserCheck, Flame, Cpu } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  const [bgSrc, setBgSrc] = useState("https://postfiles.pstatic.net/MjAyNjA5MTVfNjkg/MDAxNzg5NDUzNzgwMzc3.pTnYakJdg9ORqrFyJA2NldeMvytmwI8Jh3dBu2dHLHEg.ZG44_0USliLs-SdmPNyYPp3r-QIg6Ewdzglo-ZwfkyYg.PNG?type=w966");

  const statIcons = [
    <Flame size={18} className="text-purple-400 animate-pulse" />,
    <Clock size={18} className="text-purple-400" />,
    <Calendar size={18} className="text-purple-400" />,
    <MapPin size={18} className="text-purple-400" />,
    <Home size={18} className="text-purple-400" />,
    <UserCheck size={18} className="text-purple-400" />,
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-28 pb-16">
      
      {/* Background Image with Multi-layer Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={bgSrc} 
          alt="Hero Background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-100 brightness-110 scale-105 transform animate-fade-in"
          onError={() => {
            // Fallback to high-res reliable tech background if Naver blocks hotlinking (403 / CORS)
            setBgSrc("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(107,33,168,0.2)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/60 border border-purple-700/60 text-purple-200 mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(107,33,168,0.3)]">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold tracking-wide">{hero.badge}</span>
          </div>
          
          {/* Main Title (Left-aligned) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.2] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            AI사물인터넷 MCU기반<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-white drop-shadow-[0_2px_8px_rgba(107,33,168,0.5)]">
              임베디드 펌웨어 전문가로
            </span><br />
            거듭나세요
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed break-keep drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {hero.description}
          </p>

          {/* CTA Buttons / Quick Actions */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#consultation" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-purple-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-purple-700 transition-all shadow-[0_0_25px_rgba(107,33,168,0.4)] hover:scale-105 text-base flex items-center gap-2"
            >
              무료 상담 신청하기
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a 
              href="#courses" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-zinc-900/80 border border-zinc-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all backdrop-blur-md text-base"
            >
              커리큘럼 살펴보기
            </a>
          </div>

          {/* Course Title Card */}
          <div className="mb-12 p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-transparent"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-950/80 rounded-xl border border-purple-800/40 text-purple-400 shrink-0">
                <Cpu size={28} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest block mb-1">Official Course Title</span>
                <h2 className="text-lg md:text-xl font-black text-white tracking-tight">
                  AI사물인터넷 MCU기반 (STM32, ESP32) 임베디드 펌웨어 전문가 양성 과정
                </h2>
              </div>
            </div>
          </div>

          {/* Recruitment Info Summary Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-purple-800/30 transition-all backdrop-blur-sm group">
                <div className="flex items-center gap-2 mb-1.5">
                  {statIcons[idx]}
                  <span className="text-gray-400 text-xs font-semibold tracking-wider">{stat.label}</span>
                </div>
                <span className="text-sm md:text-base font-bold text-white break-keep group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
