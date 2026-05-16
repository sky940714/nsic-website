import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// 引入 Swiper 核心樣式
import 'swiper/css';

interface MediaItem {
  id: number;
  date: string;
  source: string;
  title: string;
  url: string;
}

// 已替換為最新的真實報導，並依照日期由新到舊排序
const mediaData: MediaItem[] = [
  {
    id: 1,
    date: "2026.05.14",
    source: "葛瑪蘭新聞網",
    title: "跨世代傳承 宜大百年校慶邀諾貝爾大師 Levitt 座談",
    url: "https://www.kamalan-news.com/local/18/18055",
  },
  {
    id: 2,
    date: "2026.05.14",
    source: "Yahoo新聞",
    title: "宜大慶百年 諾貝爾獎大師與青年座談",
    url: "https://tw.news.yahoo.com/%E5%AE%9C%E5%A4%A7%E6%85%B6%E7%99%BE%E5%B9%B4-%E8%AB%BE%E8%B2%9D%E7%88%BE%E7%8D%8E%E5%A4%A7%E5%B8%AB%E8%88%87%E9%9D%92%E5%B9%B4%E5%BA%A7%E8%AB%87-124003044.html",
  },
  {
    id: 3,
    date: "2026.05.14",
    source: "蕃薯藤",
    title: "國立宜蘭大學創校百週年 舉辦諾貝爾大師與青年交流座談",
    url: "https://n.yam.com/Article/20260514696675",
  },
  {
    id: 4,
    date: "2026.05.13",
    source: "工商時報",
    title: "2026 諾科獎國際科學對話揭幕，Michael Levitt 分享分子科學願景",
    url: "https://www.ctee.com.tw/news/20260513701602-431204",
  },
  {
    id: 5,
    date: "2026.05.13",
    source: "更生日報",
    title: "諾貝爾得主訪國立學校、推動科學育苗計畫",
    url: "https://www.ksnews.com.tw/e/101231",
  },
  {
    id: 6,
    date: "2026.05.11",
    source: "Yahoo新聞",
    title: "Michael Levitt 來台啟動 2026 諾科獎國際科學對話",
    url: "https://tw.news.yahoo.com/michael-levitt%E4%BE%86%E5%8F%B0%E5%95%9F%E5%8B%952026%E8%AB%BE%E7%A7%91%E7%8D%8E%E5%9C%8B%E9%9A%9B%E7%A7%91%E5%AD%B8%E5%B0%8D%E8%A9%B1-120426563.html",
  },
  {
    id: 7,
    date: "2026.05.11",
    source: "更生日報",
    title: "諾貝爾大師 Michael Levitt 抵台，2026 諾科獎峰會點燃科學熱情",
    url: "https://www.ksnews.com.tw/e/100429",
  },
  {
    id: 8,
    date: "2026.05.11",
    source: "經濟日報",
    title: "諾貝爾化學獎得主 Michael Levitt 五月來台 啟立諾科獎國際科學對話",
    url: "https://share.google/AaiuM8293HGQZzKUx",
  },
];

export default function MediaSection() {
  // 電腦版 Swiper 實體與狀態
  const [desktopSwiper, setDesktopSwiper] = useState<SwiperType | null>(null);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);

  // 手機版 Swiper 底部進度條百分比 (0~100)
  const [mobileProgress, setMobileProgress] = useState(0);

  // 將資料每 4 筆切分為一個陣列 (供電腦版 SwiperSlide 使用)
  const chunkedMediaForDesktop = [];
  for (let i = 0; i < mediaData.length; i += 4) {
    chunkedMediaForDesktop.push(mediaData.slice(i, i + 4));
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 overflow-hidden relative border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ================================================================= */}
        {/* 1. 區塊頂部標頭與導覽 (Title & Navigation) */}
        {/* ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#002B5B] rounded-full"></span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-slate-800">
                媒體報導
              </h2>
            </div>
            <p className="text-xs md:text-sm tracking-[0.25em] text-slate-400 font-light uppercase">
              NSIC Media Coverage
            </p>
          </div>

          {/* 電腦版專屬：頂級精品質感的頁碼與箭頭導覽 */}
          <div className="hidden lg:flex items-center gap-6 select-none">
            {/* 頁碼：01 / 02 */}
            <div className="flex items-center font-mono text-sm tracking-widest">
              <span className="text-[#002B5B] font-bold text-lg">
                {String(desktopActiveIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-3 text-slate-300">/</span>
              <span className="text-slate-400">
                {String(chunkedMediaForDesktop.length).padStart(2, '0')}
              </span>
            </div>
            {/* 左右切換按鈕 */}
            <div className="flex gap-2">
              <button 
                onClick={() => desktopSwiper?.slidePrev()}
                className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                  desktopActiveIndex === 0 
                    ? 'opacity-30 cursor-not-allowed bg-white' 
                    : 'bg-white hover:bg-[#002B5B] hover:text-white hover:border-[#002B5B] shadow-sm'
                }`}
                aria-label="上一頁"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => desktopSwiper?.slideNext()}
                className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                  desktopActiveIndex === chunkedMediaForDesktop.length - 1 
                    ? 'opacity-30 cursor-not-allowed bg-white' 
                    : 'bg-white hover:bg-[#002B5B] hover:text-white hover:border-[#002B5B] shadow-sm'
                }`}
                aria-label="下一頁"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. 電腦版佈局 (Desktop)：每頁 4 列的精緻列表，原地無縫滑動 */}
        {/* ================================================================= */}
        <div className="hidden lg:block bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-xl shadow-slate-200/50 border border-white">
          <Swiper
            modules={[Navigation]}
            speed={700}
            allowTouchMove={true}
            onSwiper={setDesktopSwiper}
            onSlideChange={(swiper) => setDesktopActiveIndex(swiper.activeIndex)}
            className="w-full h-auto"
          >
            {chunkedMediaForDesktop.map((group, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <div className="divide-y divide-slate-100/80">
                  {group.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center py-6 px-6 gap-10 transition-all hover:bg-slate-50/70 rounded-2xl"
                    >
                      {/* 左側：日期與來源 */}
                      <div className="flex items-center gap-6 shrink-0 w-[240px]">
                        <div className="text-slate-400 font-mono text-base tracking-wider shrink-0">
                          {item.date}
                        </div>
                        <div className="shrink-0 border-l-2 border-[#002B5B]/30 pl-4">
                          <span className="text-xs font-bold tracking-[0.15em] text-[#002B5B] uppercase block">
                            {item.source}
                          </span>
                        </div>
                      </div>

                      {/* 中間：新聞標題 */}
                      <div className="flex-grow">
                        <h3 className="text-base md:text-lg font-bold text-slate-700 group-hover:text-[#002B5B] transition-colors leading-relaxed line-clamp-1">
                          {item.title}
                        </h3>
                      </div>

                      {/* 右側：隱形懸浮箭頭 */}
                      <div className="text-slate-300 group-hover:text-[#002B5B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0">
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* ================================================================= */}
        {/* 3. 手機與平板佈局 (Mobile)：1.25張流線卡片，順暢防打架 */}
        {/* ================================================================= */}
        <div className="lg:hidden -mx-6 px-6">
          <Swiper
            speed={500}
            slidesPerView={1.2} /* 露出下一張卡片的邊緣，暗示可滑動 */
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 }
            }}
            onProgress={(_, progress) => {
              // 取得目前滑動百分比 (0 到 1) 轉換成 0~100
              setMobileProgress(Math.max(0, Math.min(progress * 100, 100)));
            }}
            className="w-full !overflow-visible pb-4"
          >
            {mediaData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-6 h-full min-h-[220px] bg-white rounded-2xl border border-slate-200/60 shadow-md shadow-slate-100/50 active:scale-[0.98] transition-transform"
                >
                  <div className="space-y-4">
                    {/* 頂部資訊列 */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-mono font-medium text-slate-400 tracking-wider">
                        {item.date}
                      </span>
                      <span className="text-[11px] font-bold text-[#002B5B] tracking-widest uppercase bg-blue-50/80 px-2.5 py-1 rounded">
                        {item.source}
                      </span>
                    </div>

                    {/* 標題 */}
                    <h3 className="text-[15px] sm:text-base font-bold text-slate-800 leading-snug line-clamp-4">
                      {item.title}
                    </h3>
                  </div>

                  {/* 底部導引閱讀 */}
                  <div className="flex items-center justify-end text-xs font-bold text-[#002B5B] tracking-wider gap-1 pt-4 mt-auto">
                    閱讀全文 <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 手機版專屬：底部極細流動進度條 */}
          <div className="mt-6 mx-auto w-24 h-[2px] bg-slate-200/60 rounded-full relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#002B5B] transition-all duration-200 ease-out rounded-full"
              style={{ width: `${Math.max(mobileProgress, 20)}%` }} // 至少顯示 20% 寬度，避免一開始看不見
            />
          </div>
        </div>

      </div>
    </section>
  );
}