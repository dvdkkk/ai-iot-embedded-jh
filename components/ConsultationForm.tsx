
import React, { useRef, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { handlePhoneClick, NAVER_CONSULTATION_URL } from '../constants';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  return (
    <section id="consultation" className="py-12 bg-purple-800 text-white scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-bold mb-4 backdrop-blur-sm border border-white/20">
                <Sparkles size={14} className="text-purple-300" />
                수강료 국비지원 
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 tracking-tight">
                망설이지 마세요.<br/>
                교육 전문가가 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-100">
                  친절하게 안내해드립니다.
                </span>
              </h2>
              <p className="text-base md:text-lg font-medium text-white/90 mb-6 leading-relaxed">
                국비지원 자격 여부부터 맞춤 취업·교육과정까지<br/>
                <span className="border-b-2 border-white pb-0.5 font-bold">부담 없이 무료로 상담받아 보세요.</span>
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 max-w-md">
                  <div className="w-12 h-12 bg-white text-purple-800 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70">교육문의</p>
                    <a 
                      href="tel:15336176" 
                      onClick={handlePhoneClick}
                      className="text-2xl md:text-3xl font-black text-white hover:text-purple-200 transition-colors block cursor-pointer"
                      title="PC: 상담신청 페이지 새창 열기 / 모바일: 전화 연결"
                    >
                      1533-6176
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 max-w-md">
                  <div className="w-12 h-12 bg-white text-purple-800 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70">교육장소</p>
                    <p className="text-lg md:text-xl font-bold text-white">한국직업능력교육원 안산캠퍼스</p>
                  </div>
                </div>
              </div>
              <p className="font-bold text-sm md:text-base mt-6 text-purple-200">
                여러분의 성공적인 취업과 커리어 전환을 진심으로 응원합니다!
              </p>
            </Reveal>
          </div>

          {/* Right Consultation CTA Card (Replacing previous form) */}
          <Reveal delay={200} className="h-full">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl h-full border border-purple-100 flex flex-col justify-between text-zinc-900 relative overflow-hidden group">
              {/* Subtle decorative background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/60 rounded-full blur-3xl -z-0 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-bold text-xs mb-5">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  실시간 간편 온라인 상담 접수
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-3 tracking-tight">
                  1:1 맞춤 교육상담 신청
                </h3>
                <p className="text-sm md:text-base text-zinc-600 font-medium leading-relaxed mb-6">
                  국비지원 자격 확인부터 상세 커리큘럼, 취업 연계까지<br className="hidden sm:inline" />
                  전문 교육 매니저가 1:1로 빠르고 친절하게 안내해 드립니다.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-3 bg-purple-50/70 p-4 md:p-5 rounded-2xl border border-purple-100 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-bold text-zinc-800">
                      수강료 <span className="text-purple-800 font-black">95~100% 국비지원</span> 
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-bold text-zinc-800">
                      매월 최대 훈련장려금 지급 지원 (해당자)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-bold text-zinc-800">
                      1:1 맞춤 취업 매칭 및 이력서·포트폴리오 완성 지원
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm font-bold text-zinc-800">
                      초보자·비전공자도 마스터하는 체계적인 실무 커리큘럼
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Button */}
              <div className="relative z-10 pt-2">
                <a
                  href={NAVER_CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/btn relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white font-black text-lg md:text-xl py-4 md:py-5 px-8 rounded-2xl shadow-xl hover:shadow-[0_10px_25px_rgba(107,33,168,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] text-center"
                >
                  <span className="tracking-tight">상담신청하기 (네이버 폼)</span>
                  <ExternalLink size={20} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-[11px] md:text-xs text-center text-zinc-500 font-medium mt-3">
                  ※ 클릭 시 네이버 상담신청 페이지로 새창 이동합니다. (간편 1분 접수)
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
