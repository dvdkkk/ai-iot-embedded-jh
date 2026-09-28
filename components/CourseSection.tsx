import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { BookOpen, Database, Smartphone, Brain, Rocket, CheckCircle2, Code2, Terminal, Server, Camera, Cpu, Layers } from 'lucide-react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const CourseSection: React.FC = () => {
  const stepsData = [
    {
      step: "STEP 1",
      title: "프로그래밍 실습",
      category: "기초 프로그래밍",
      content: "프로그래밍 기초 요소 학습 / 파일 조작과 문서 탐색 / 오픈소스 활용 및 실습",
      stack: "프로그래밍 언어, HTML5, CSS3, JavaScript",
      icon: Terminal,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      step: "STEP 2",
      title: "서버 프로그래밍과 데이터베이스 구현",
      category: "백엔드 & DB",
      content: "서버프로그래밍 기초 요소 / 데이터베이스 구현과 관리 / 서버와 데이터베이스 실습",
      stack: "서버와 데이터베이스 실습, SQL, jQuery",
      icon: Server,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      step: "STEP 3",
      title: "임베디드 시스템과 펌웨어 프로그래밍",
      category: "임베디드 펌웨어",
      content: "펌웨어 프로그래밍 기초 / 마이크로컨트롤러 기반 프로그래밍 / 센서와 액추에이터 활용",
      stack: "아두이노, 센서 IF 신호처리, MCU 프로그래밍 실습, Server / Client / Serial 통신 터미널 GUI 프로그램",
      icon: Cpu,
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      step: "STEP 4",
      title: "애플리케이션개발언어",
      category: "알고리즘 & 자료구조",
      content: "자료구조 파악 / 알고리즘 파악 및 실습",
      stack: "자료구조 파악, 알고리즘 파악 및 실습, HTML5, CSS3, JavaScript",
      icon: Code2,
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      step: "STEP 5",
      title: "임베디드시스템과 라즈베리파이 활용",
      category: "SBC & MCU 응용",
      content: "라즈베리파이로 프로그래밍 / 센서 및 데이터 활용 / MCU(STM32, ESP32) 활용",
      stack: "라즈베리파이, USB Web 카메라 영상처리 제어 프로그램 개발 실습",
      icon: Layers,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      step: "STEP 6",
      title: "리눅스 기초와 활용",
      category: "임베디드 리눅스",
      content: "리눅스 환경구축 / 리눅스 운영체제 소개와 기본 명령어 / 파일 시스템 관리 및 권한 설정",
      stack: "ESP32 펌웨어 제어 프로그램 실습, UART / USART 시리얼 통신 제어 프로그램 개발 실습",
      icon: Database,
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      step: "STEP 7",
      title: "컴퓨터 비전 활용",
      category: "AI & 영상인식",
      content: "컴퓨터 비전 기초 / OpenCV 활용 프로그래밍 / 응용 프로젝트 / 딥러닝을 통한 이미지 분류 / 확장된 이미지 처리 기술",
      stack: "OpenCV활용 프로그래밍 실습, 영상처리 및 인식 프로그램 개발 실습",
      icon: Camera,
      color: "from-rose-500/20 to-red-500/20"
    },
    {
      step: "STEP 8",
      title: "웹 대시보드 디자인과 활용",
      category: "IoT 관제 & 대시보드",
      content: "웹 프론트엔드 기초 / 데이터 시각화와 대시보드 구현",
      stack: "데이터 시각화와 대시보드 구현 실습, Network 소켓 통신 프로그램 실습",
      icon: BookOpen,
      color: "from-violet-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300 mb-4 backdrop-blur-md">
            <Code2 size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">CURRICULUM ROADMAP</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            체계적인 <span className="text-purple-400">9단계 실무 완성</span> 커리큘럼
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            기초 프로그래밍부터 하드웨어 펌웨어, AI 컴퓨터 비전 및 스마트팜 최종 캡스톤 프로젝트까지 완벽 마스터합니다.
          </p>
        </Reveal>

        {/* Steps 1 to 8 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stepsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="h-full bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 hover:border-purple-600/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black tracking-widest text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/40">
                        {item.step}
                      </span>
                      <div className="p-2.5 bg-zinc-800 rounded-xl text-purple-300 group-hover:bg-purple-800 group-hover:text-white transition-colors">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                      {item.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">실습 / 기술 스택</span>
                    <p className="text-zinc-300 text-xs font-medium leading-snug">
                      {item.stack}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* STEP 9 - Wide Highlighted Capstone Project Card */}
        <Reveal delay={300}>
          <div className="bg-gradient-to-r from-purple-950/80 via-zinc-900 to-zinc-900 border-2 border-purple-700/60 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(107,33,168,0.25)] relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-800 text-white text-xs font-black tracking-widest">
                  <Rocket size={14} />
                  STEP 9 • 최종 캡스톤 프로젝트
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  SmartFarm 통합 IoT 관리 시스템 개발 프로젝트
                </h3>
                
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  스마트팜 제작 / 컴퓨터비전 스마트팜 제작 / 화재감지 모니터링 시스템 스마트팜 제작 등 실무 현장에서 바로 적용할 수 있는 종합 임베디드 펌웨어 & IoT 프로젝트를 완성합니다.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-zinc-800/80 border border-zinc-700 rounded-lg text-xs font-bold text-purple-300">스마트팜 제작</span>
                  <span className="px-3 py-1 bg-zinc-800/80 border border-zinc-700 rounded-lg text-xs font-bold text-purple-300">컴퓨터비전 스마트팜</span>
                  <span className="px-3 py-1 bg-zinc-800/80 border border-zinc-700 rounded-lg text-xs font-bold text-purple-300">화재감지 모니터링 시스템</span>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto text-center lg:text-right">
                <a
                  href="https://naver.me/Fuzw9Srr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105 text-base w-full lg:w-auto cursor-pointer"
                >
                  과정 문의 및 신청
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Consultation CTA */}
        <Reveal className="w-full mt-20 flex justify-center">
          <a
            href="https://naver.me/Fuzw9Srr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-800 to-purple-900 text-white font-black text-lg md:text-xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(107,33,168,0.4)] hover:shadow-[0_0_50px_rgba(107,33,168,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }}></span>
            상담신청하기
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </Reveal>

      </div>
    </section>
  );
};
