// src/pages/Review2026.tsx

import { useState, useEffect } from 'react';
import { Calendar, MapPin, PlayCircle, ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

// 引入 Swiper 樣式
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// 1. 匯入講者介紹組件和相關圖片
import LaureatesSection from '../components/LaureatesSection';
import michaelLevittImg from '../assets/michael-levitt.jpg';

// 2. 匯入 2026 活動照片
import ntut1 from '../assets/202605/ntut26/ntut1.jpg';
import ntut2 from '../assets/202605/ntut26/ntut2.jpg';
import ntut3 from '../assets/202605/ntut26/ntut3.jpg';
import ntut4 from '../assets/202605/ntut26/ntut4.jpg';
import ntut5 from '../assets/202605/ntut26/ntut5.jpg';
import ntut6 from '../assets/202605/ntut26/ntut6.jpg';

import niu1 from '../assets/202605/niu26/niu1.jpg';
import niu2 from '../assets/202605/niu26/niu2.jpg';
import niu3 from '../assets/202605/niu26/niu3.jpg';
import niu4 from '../assets/202605/niu26/niu4.jpg';
import niu5 from '../assets/202605/niu26/niu5.jpg';
import niu6 from '../assets/202605/niu26/niu6.jpg';
import niu7 from '../assets/202605/niu26/niu7.jpg';
import niu8 from '../assets/202605/niu26/niu8.jpg';

// 3. 定義活動和講者資料
interface ProgramItem {
  id: number;
  date: string;
  location: string;
  title: string;
  content: string[];
  images: string[];
  liveLink?: string;
  alignment: 'left' | 'right';
}

const programs: ProgramItem[] = [
  {
    id: 1,
    date: "2026.05.13",
    location: "國立臺北科技大學",
    title: "探索生命與未來｜Michael Levitt 教授國際科學對話",
    content: [
      "由諾科獎推動的「國際科學對話」今天於國立臺北科技大學展開。",
      "2013 年諾貝爾化學獎得主 Michael Levitt 教授，以「從原子到生命：人工智慧如何重塑分子科學並幫助我們理解生命與未來」為題，與現場教授、研究者及國際青年觀察員進行深度交流。",
      "特別感謝國立臺北科技大學的共同推動與支持，也感謝中央研究院牟中原院士親自出席與引言。",
      "對諾科獎而言，這不只是一場演講，更是一次讓世界級科學視野與台灣青年、學界彼此靠近的開始。科學真正重要的，不只是知識本身，是如何帶領我們理解生命、文明與未來。",
      "謝謝今天所有參與的朋友。"
    ],
    images: [ntut1, ntut2, ntut3, ntut4, ntut5, ntut6],
    alignment: 'left'
  },
  {
    id: 2,
    date: "2026.05.14",
    location: "國立宜蘭大學",
    title: "跨世代傳承｜宜大百年校慶 × 諾貝爾大師青年座談",
    content: [
      "在國立宜蘭大學百年校慶的重要時刻，由諾科獎國際文教交流協會與宜蘭大學共同主辦的「跨世代傳承－與諾貝爾得主青年座談」於昨日順利完成。",
      "2013年諾貝爾化學獎得主 Michael Levitt 教授親自來到宜大，與青年學子分享 AI、生命科學與未來世界的視野，中央研究院蔡明道院士共同參與對談。現場令人印象深刻的，不只是世界級科學家的演講，青年學生以英文直接向 Michael Levitt 教授與蔡明道院士提問交流的畫面也令人難忘。",
      "從諾貝爾獎得主、中央研究院院士，到大學生與高中學生，在同一個場域中自然對話，這正是諾科獎長期希望在台灣推動的國際交流風景。諾科獎始終相信，真正重要的，不只是邀請世界級科學家來到台灣，而是讓台灣青年世代開始擁有與世界對話的勇氣、能力與視野。",
      "感謝國立宜蘭大學在百年校慶的重要時刻，與諾科獎共同完成這場跨世代的國際科學交流。"
    ],
    images: [niu1, niu2, niu3, niu4, niu5, niu6, niu7, niu8],
    liveLink: "https://reurl.cc/vE4Zmj",
    alignment: 'right'
  }
];

const speakers2026 = [
  {
    id: 1,
    nameCH: "邁可·列維特",
    nameEN: "Michael Levitt",
    title: "2013年諾貝爾化學獎得主",
    image: michaelLevittImg,
    bio: "他的研究以計算科學方法解析生命系統，為人類理解複雜世界提供新的視角，也深刻影響當代科學與科技的發展方向。",
  }
];

export default function Review2026() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  useEffect(() => {
    if (selectedProgram) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProgram]);

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 頁面標題 - 已修改 */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start">
          {/*
            - 標題文字已更換為您指定的內容
            - 調整字體大小以適應較長的標題 (text-3xl md:text-4xl)
            - 移除英文副標題
          */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] tracking-wide leading-tight md:leading-snug">
            人工智慧如何改變生命科學與未來社會
          </h2>
          <div className="w-16 h-1 mt-6 bg-[#002B5B] rounded-full"></div>
        </div>

        {/* 電腦版佈局：雜誌排版 */}
        <div className="hidden md:flex flex-col gap-32">
          {programs.map((item) => (
            <div key={item.id} className={`flex items-center gap-16 ${item.alignment === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="w-1/2 shrink-0">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-white/50 relative group bg-slate-200">
                  <Swiper modules={[Pagination, Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 4000 }} pagination={{ clickable: true }} className="w-full h-full">
                    {item.images.map((img, idx) => (
                      <SwiperSlide key={idx}><img src={img} className="w-full h-full object-cover" alt="recaps" /></SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[#002B5B] font-mono font-bold tracking-widest bg-blue-50 px-3 py-1 rounded-full text-sm"><Calendar className="w-4 h-4" /> {item.date}</div>
                  <div className="flex items-center gap-2 text-slate-500 font-medium text-sm"><MapPin className="w-4 h-4" /> {item.location}</div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug mb-6">{item.title}</h3>
                <div className="space-y-5 text-slate-600 text-[17px] md:text-[19px] leading-[1.8] text-justify">
                  {item.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {item.liveLink && (
                  <div className="mt-8">
                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#002B5B] text-white text-sm font-bold tracking-widest rounded-full hover:bg-blue-800 transition-all">
                      <PlayCircle className="w-5 h-5" /> 觀看直播回放
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 手機版佈局：精緻卡片列表 */}
        <div className="md:hidden flex flex-col gap-10">
          {programs.map((item) => (
            <div key={item.id} onClick={() => setSelectedProgram(item)} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 cursor-pointer active:scale-[0.98] transition-transform">
              <div className="aspect-[16/10] w-full relative">
                <img src={item.images[0]} className="w-full h-full object-cover" alt="cover" />
                <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#002B5B] text-xs font-bold rounded-full shadow-sm">{item.date}</span></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3"><MapPin className="w-3 h-3" /> {item.location}</div>
                <h3 className="text-xl font-bold text-slate-800 leading-tight mb-6">{item.title}</h3>
                <div className="flex items-center text-[#002B5B] font-bold text-sm tracking-widest">查看詳情紀實 <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 手機版：全螢幕沉浸式詳情頁 */}
      {selectedProgram && (
        <div className="fixed top-20 inset-x-0 bottom-0 z-40 bg-white md:hidden animate-in fade-in slide-in-from-right duration-300 overflow-y-auto">
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-16 flex items-center px-6">
            <button onClick={() => setSelectedProgram(null)} className="flex items-center gap-2 text-[#002B5B] font-bold">
              <ArrowLeft className="w-5 h-5" /> 返回
            </button>
          </div>
          <div className="pb-32 bg-white">
            <div className="w-full aspect-[4/3] px-5 pt-6 pb-2">
              <Swiper 
                modules={[Pagination, Navigation]} 
                pagination={{ clickable: true }}
                navigation 
                style={{
                  '--swiper-navigation-color': 'rgba(255, 255, 255, 0.85)',
                  '--swiper-navigation-size': '22px',
                  '--swiper-pagination-color': '#002B5B',
                  '--swiper-pagination-bullet-inactive-color': '#cbd5e1',
                  textShadow: '0px 1px 3px rgba(0,0,0,0.4)'
                } as React.CSSProperties}
                className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-100"
              >
                {selectedProgram.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} className="w-full h-full object-cover" alt="slide" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-slate-500 font-mono tracking-widest text-xs mb-4">
                <Clock className="w-4 h-4" /> {selectedProgram.date} ｜ {selectedProgram.location}
              </div>
              <h2 className="text-2xl font-bold text-slate-800 leading-snug mb-8">{selectedProgram.title}</h2>
              <div className="space-y-6 text-slate-600 text-[17px] leading-[1.8] text-justify font-light">
                {selectedProgram.content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {selectedProgram.liveLink && (
                <div className="mt-10">
                  <a href={selectedProgram.liveLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 w-full py-4 bg-[#002B5B] text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"><PlayCircle className="w-5 h-5" /> 觀看直播錄影回放</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 講者介紹區塊 */}
      <div className="mt-12 md:mt-24 bg-white border-t border-slate-100">
        <LaureatesSection pageTitle="2026 春季場 科學大師" laureates={speakers2026} />
      </div>

    </div>
  );
}