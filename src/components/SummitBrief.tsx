import { Link } from 'react-router-dom';

export default function SummitBrief() {
  return (
    <section className="py-24 bg-[#f8fafc] text-[#1a1a1a] overflow-hidden relative border-y border-slate-100">
      {/* 背景裝飾線條 */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 調整：手機版兩大區塊間距縮短 (gap-12) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* 左欄：核心資訊 */}
          {/* 調整：手機版上下元素間距縮短 (space-y-8) */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#002B5B]">2026 諾科獎台北峰會</h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium tracking-wide">從台北出發，開啟與世界持續對話的起點</p>
            </div>
            
            {/* 活動日期與地點：優化手機版內縮間距 */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 border-t border-slate-200 pt-6 md:pt-10">
               <div className="flex-1">
                 <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">活動日期 Date</p>
                 <p className="text-xl md:text-2xl font-bold text-slate-800 whitespace-nowrap">
                   2026.05.13 — 05.14
                 </p>
               </div>
               {/* 調整：手機版分隔間距從 pt-8 縮短至 pt-6 */}
               <div className="flex-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-6 sm:pt-0 sm:pl-12">
                 <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">活動地點 Location</p>
                 <p className="text-xl md:text-2xl font-bold text-slate-800">台北、宜蘭</p>
               </div>
            </div>
          </div>

          {/* 右欄：峰會亮點 (維持你喜歡的垂直線條風) */}
          <div className="space-y-12">
            
            {/* 峰會重點標題區 */}
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 bg-[#002B5B]"></div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-widest uppercase">
                峰會重點 <span className="text-slate-300 ml-2 font-light">Highlights</span>
              </h3>
            </div>

            <div className="space-y-10">
              {/* 大師強調區塊 */}
              <div className="border-l-4 border-[#002B5B] pl-6 md:pl-10 space-y-4">
                <p className="text-lg md:text-xl text-slate-400 font-medium">本次峰會重磅邀請</p>
                
                <div className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                    2013年諾貝爾化學獎得主
                  </h4>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#002B5B] leading-tight">
                    <span className="inline-block sm:whitespace-nowrap">Michael Levitt 教授 <span className="text-slate-800">來台交流</span></span>
                  </h4>
                </div>
              </div>

              {/* 說明內容 */}
              <div className="space-y-8 text-slate-600 leading-relaxed text-left md:text-justify text-lg">
                <p>其研究以計算科學方法解析生命系統，為人類理解複雜世界提供新的視角，也深刻影響當代科學與科技的發展方向。</p>
                
                <div className="relative pt-6">
                  <span className="absolute top-0 left-0 w-12 h-0.5 bg-slate-200"></span>
                  <p className="text-slate-400 italic font-light">
                    「這不只是知識的傳遞，而是一場關於『如何理解世界』的對話。」
                  </p>
                </div>
              </div>
            </div>

            {/* 按鈕：圓形箭頭按鈕 */}
            <div className="flex justify-end pt-4">
              <Link 
                to="/program" 
                className="group flex items-center gap-4 text-sm font-bold tracking-[0.2em] text-[#002B5B]"
              >
                VIEW DETAILS 
                <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#002B5B] group-hover:text-white group-hover:border-[#002B5B] transition-all duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}