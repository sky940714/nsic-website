import { Calendar, MapPin, PlayCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// 引入 Swiper 樣式
import 'swiper/css';
import 'swiper/css/pagination';
// 忽略 TypeScript 對 CSS 模組的型別檢查，解決 ts(2882) 錯誤
// @ts-ignore
import 'swiper/css/effect-fade';

// ==========================================
// 1. 匯入北科大場 (NTUT) 照片
// ==========================================
import ntut1 from '../assets/202605/ntut26/ntut1.jpg';
import ntut2 from '../assets/202605/ntut26/ntut2.jpg';
import ntut3 from '../assets/202605/ntut26/ntut3.jpg';
import ntut4 from '../assets/202605/ntut26/ntut4.jpg';
import ntut5 from '../assets/202605/ntut26/ntut5.jpg';
import ntut6 from '../assets/202605/ntut26/ntut6.jpg';

// ==========================================
// 2. 匯入宜大場 (NIU) 照片
// ==========================================
import niu1 from '../assets/202605/niu26/niu1.jpg';
import niu2 from '../assets/202605/niu26/niu2.jpg';
import niu3 from '../assets/202605/niu26/niu3.jpg';
import niu4 from '../assets/202605/niu26/niu4.jpg';
import niu5 from '../assets/202605/niu26/niu5.jpg';
import niu6 from '../assets/202605/niu26/niu6.jpg';
import niu7 from '../assets/202605/niu26/niu7.jpg';
import niu8 from '../assets/202605/niu26/niu8.jpg';

export default function Program() {
  const ntutImages = [ntut1, ntut2, ntut3, ntut4, ntut5, ntut6];
  const niuImages = [niu1, niu2, niu3, niu4, niu5, niu6, niu7, niu8];

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ======================================================= */}
        {/* 頁面標題區 */}
        {/* ======================================================= */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          <h2 className="flex flex-col md:flex-row md:items-end gap-3 font-bold text-slate-800">
            <span className="text-4xl md:text-5xl text-[#002B5B] tracking-wide">
              2026 峰會議程
            </span>
            <span className="text-xl md:text-3xl text-slate-400 font-light tracking-widest pb-1 uppercase">
              Summit Agenda
            </span>
          </h2>
          <div className="w-16 h-1 mt-6 bg-[#002B5B] rounded-full"></div>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* ======================================================= */}
          {/* 第一場：北科大 (左圖右文排版) */}
          {/* ======================================================= */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            
            {/* 左側：輪播照片區 */}
            <div className="w-full md:w-1/2 shrink-0">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-white/50 relative group bg-slate-200">
                <Swiper
                  modules={[Pagination, Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {ntutImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img 
                        src={img} 
                        alt={`北科大場紀實-${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* 右側：文字紀實區 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              {/* 日期與地點標籤 */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#002B5B] font-mono font-bold tracking-widest bg-blue-50 px-3 py-1 rounded-full text-sm">
                  <Calendar className="w-4 h-4" /> 2026.05.13
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                  <MapPin className="w-4 h-4" /> 國立臺北科技大學
                </div>
              </div>

              {/* 標題 (已縮小) */}
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug mb-6">
                探索生命與未來｜<br />Michael Levitt 教授國際科學對話
              </h3>

              {/* 紀實內文 (已放大) */}
              <div className="space-y-5 text-slate-600 text-[17px] md:text-[19px] leading-[1.8] text-justify">
                <p>
                  由諾科獎推動的「國際科學對話」今天於國立臺北科技大學展開。
                </p>
                <p>
                  2013 年諾貝爾化學獎得主 Michael Levitt 教授，以「從原子到生命：人工智慧如何重塑分子科學並幫助我們理解生命與未來」為題，與現場教授、研究者及國際青年觀察員進行深度交流。
                </p>
                <p>
                  特別感謝國立臺北科技大學的共同推動與支持，也感謝中央研究院牟中原院士親自出席與引言。
                </p>
                <p>
                  對諾科獎而言，這不只是一場演講，更是一次讓世界級科學視野與台灣青年、學界彼此靠近的開始。科學真正重要的，不只是知識本身，是如何帶領我們理解生命、文明與未來。
                </p>
                <p className="font-bold text-slate-800 pt-2">
                  謝謝今天所有參與的朋友。
                </p>
              </div>
            </div>

          </div>


          {/* ======================================================= */}
          {/* 第二場：宜大百年校慶 (右圖左文排版 - md:flex-row-reverse) */}
          {/* ======================================================= */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
            
            {/* 右側：輪播照片區 */}
            <div className="w-full md:w-1/2 shrink-0">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-white/50 relative group bg-slate-200">
                <Swiper
                  modules={[Pagination, Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {niuImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img 
                        src={img} 
                        alt={`宜蘭大學場紀實-${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* 左側：文字紀實區 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              {/* 日期與地點標籤 */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#002B5B] font-mono font-bold tracking-widest bg-blue-50 px-3 py-1 rounded-full text-sm">
                  <Calendar className="w-4 h-4" /> 2026.05.14
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                  <MapPin className="w-4 h-4" /> 國立宜蘭大學
                </div>
              </div>

              {/* 標題 (已縮小) */}
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug mb-6">
                跨世代傳承｜<br />宜大百年校慶 × 諾貝爾大師青年座談
              </h3>

              {/* 紀實內文 (已放大) */}
              <div className="space-y-5 text-slate-600 text-[17px] md:text-[19px] leading-[1.8] text-justify">
                <p>
                  在國立宜蘭大學百年校慶的重要時刻，由諾科獎國際文教交流協會與宜蘭大學共同主辦的「跨世代傳承－與諾貝爾得主青年座談」於昨日順利完成。
                </p>
                <p>
                  2013年諾貝爾化學獎得主 Michael Levitt 教授親自來到宜大，與青年學子分享 AI、生命科學與未來世界的視野，中央研究院蔡明道院士共同參與對談。現場令人印象深刻的，不只是世界級科學家的演講，青年學生以英文直接向 Michael Levitt 教授與蔡明道院士提問交流的畫面也令人難忘。
                </p>
                <p>
                  從諾貝爾獎得主、中央研究院院士，到大學生與高中學生，在同一個場域中自然對話，這正是諾科獎長期希望在台灣推動的國際交流風景。諾科獎始終相信，真正重要的，不只是邀請世界級科學家來到台灣，而是讓台灣青年世代開始擁有與世界對話的勇氣、能力與視野。
                </p>
                <p className="font-bold text-slate-800">
                  感謝國立宜蘭大學在百年校慶的重要時刻，與諾科獎共同完成這場跨世代的國際科學交流。
                </p>
              </div>

              {/* 直播錄影連結按鈕 */}
              <div className="mt-8">
                <a 
                  href="https://reurl.cc/vE4Zmj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#002B5B] text-white text-sm font-bold tracking-widest rounded-full hover:bg-blue-800 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <PlayCircle className="w-5 h-5" /> 觀看直播回放
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}