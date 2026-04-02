import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. 匯入你的背景圖片 (請根據實際檔名修改)
import bg1 from '../assets/hero-bg-1.jpg';
import bg2 from '../assets/hero-bg-2.jpg';
import bg3 from '../assets/hero-bg-3.jpg';

const slides = [
  { url: bg1, title: "諾科獎 國際文教交流協會" },
  { url: bg2, title: "諾科獎 國際文教交流協會" },
  { url: bg3, title: "諾科獎 國際文教交流協會" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動輪播邏輯 (每 5 秒換一張)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* 背景輪播圖片 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" /> {/* 遮罩讓文字更清楚 */}
          <img
            src={slide.url}
            alt="background"
            className="h-full w-full object-cover scale-105 animate-slow-zoom"
          />
        </div>
      ))}

      {/* 中央文案內容 (仿清大排版) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
        <div className="relative max-w-5xl w-full text-center space-y-6">
          
          {/* 上方小字與裝飾線 */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-white/50"></div>
            <span className="text-lg md:text-xl tracking-[0.3em] font-light">NOBEL SCIENCE DIALOGUE</span>
            <div className="h-[1px] w-12 bg-white/50"></div>
          </div>

          {/* 主標題 */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest leading-tight">
            諾科獎 <br className="md:hidden" />
            <span className="text-4xl md:text-6xl font-normal ml-0 md:ml-4">國際文教交流協會</span>
          </h1>

          {/* 裝飾十字線 (清大特色) */}
          <div className="relative py-8">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-white/30"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-[1px] bg-white/60"></div>
          </div>

          {/* 下方感性文案 */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium tracking-wide">
              串聯世界級學術思想
            </p>
            <p className="text-lg md:text-xl font-light text-white/80">
              培育青年世代的國際視野與公共責任
            </p>
          </div>
        </div>
      </div>

      {/* 左右切換按鈕 (選配) */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition">
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition">
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* 向下捲動提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">scroll down</span>
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/80" />
        </div>
      </div>
    </section>
  );
}