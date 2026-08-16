// src/pages/Home.tsx

import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, MapPin, Mic, ArrowRight } from 'lucide-react';

// 匯入原有組件（無 NewsSection 匯入）
import StaticHero from '../components/StaticHero';
import AboutSection from '../components/AboutSection'; 
import PresidentSection from '../components/PresidentSection';
import MediaSection from '../components/MediaSection';

// 「最新活動速覽（圖二）」組件，已綁定 id="upcoming"
const UpcomingEventSpotlight = () => {
  return (
    <section id="upcoming" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* 區塊標題 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">最新活動</h2>
          <p className="mt-2 text-sm text-slate-400 uppercase tracking-widest">Upcoming Events</p>
          <div className="w-12 h-1 bg-[#002B5B] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 整合式活動速覽卡片 */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 overflow-hidden border border-slate-100">
          <div className="p-8 md:p-10">
            
            {/* 卡片頂部：標題和主題 */}
            <div className="border-b border-slate-100 pb-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#002B5B] leading-tight">
                2026 諾科獎國際論壇
              </h3>
              <p className="mt-2 text-base md:text-lg text-slate-600">
                AI 時代的數位信任：從網際網路安全到未來世界
              </p>
            </div>

            {/* 卡片中部：關鍵資訊 */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#002B5B]" />
                </div>
                <div>
                  <p className="font-bold text-slate-700">日期</p>
                  <p className="text-sm text-slate-500">2026年10月13日 (星期二)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#002B5B]" />
                </div>
                <div>
                  <p className="font-bold text-slate-700">地點</p>
                  <p className="text-sm text-slate-500">國立政治大學公企中心 4樓A431會議廳</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-[#002B5B]" />
                </div>
                <div>
                  <p className="font-bold text-slate-700">主講貴賓</p>
                  <p className="text-sm text-slate-500">Whitfield Diffie (2015 圖靈獎得主)</p>
                </div>
              </div>
            </div>

          </div>
          
          {/* 卡片底部：行動呼籲按鈕 */}
          <Link 
            to="/program" 
            className="group block bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="p-5 flex justify-between items-center text-sm font-bold text-[#002B5B] tracking-widest">
              <span>查看活動詳情與報名</span>
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

// 主要的 Home 組件
export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <StaticHero />
      <AboutSection />           {/* 1. 關於我們（峰會介紹） */}
      <PresidentSection />      {/* 2. 會長的話 */}
      <UpcomingEventSpotlight />    {/* 3. 最新活動 */}
      <MediaSection />          {/* 4. 媒體報導 */}
    </>
  );
}