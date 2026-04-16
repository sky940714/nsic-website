import { Link } from 'react-router-dom';

export default function SummitBrief() {
  return (
    <section className="py-24 bg-[#f8fafc] text-[#1a1a1a] overflow-hidden relative border-y border-slate-100">
      {/* 背景裝飾線條 */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* 左欄：活動基本資訊 */}
          <div className="space-y-10">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#002B5B]">2026 諾科獎台北峰會</h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium tracking-wide">從台北出發，開啟與世界持續對話的起點</p>
            </div>
            
            {/* 修正：手機版改為上下排列 (flex-col)，確保日期能在一行完整顯示 */}
            <div className="flex flex-col sm:flex-row gap-10 border-t border-slate-200 pt-10">
               <div className="flex-1">
                 <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">活動日期 Date</p>
                 <p className="text-xl md:text-2xl font-bold text-slate-800 whitespace-nowrap">
                   2026年5月13日至5月14日
                 </p>
               </div>
               <div className="flex-1">
                 <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">活動地點 Location</p>
                 <p className="text-xl md:text-2xl font-bold text-slate-800">台北、宜蘭</p>
               </div>
            </div>
          </div>

          {/* 右欄：B方案 獨立區塊強調 (已移除「峰會重點」標題) */}
          <div className="space-y-10">
            <div className="space-y-8">
              
              {/* B方案：視覺強調區塊，解決 Michael Levitt 教授英文斷行問題 */}
              <div className="relative p-6 md:p-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm overflow-hidden group">
                {/* 裝飾小圓角 */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                
                <div className="text-sm md:text-base text-slate-400 font-bold tracking-[0.2em] mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#002B5B]"></span>
                  SPECIAL INVITATION
                </div>

                <div className="space-y-6">
                  {/* 第一行：得主身分 */}
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-8 bg-slate-200 rounded-full shrink-0"></div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                      2013年諾貝爾化學獎得主
                    </p>
                  </div>
                  
                  {/* 第二行：名字與核心訊息 */}
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-8 bg-[#002B5B] rounded-full shrink-0"></div>
                    <p className="text-2xl md:text-3xl font-bold text-[#002B5B] leading-tight">
                      Michael Levitt 教授 <span className="text-slate-800">來台交流</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 剩餘內文說明 */}
              <div className="space-y-6 text-slate-600 leading-relaxed text-left md:text-justify text-lg">
                <p>其研究以計算科學方法解析生命系統，為人類理解複雜世界提供新的視角，也深刻影響當代科學與科技的發展方向。</p>
                
                <p className="text-slate-500 italic text-lg font-light border-l-4 border-[#002B5B]/10 pl-6 py-2 mt-8">
                  「這不只是知識的傳遞，而是一場關於『如何理解世界』的對話。」
                </p>
              </div>
            </div>

            {/* 右下角按鈕 */}
            <div className="flex justify-end">
              <Link 
                to="/program" 
                className="group relative flex items-center gap-4 bg-[#002B5B] text-white px-10 py-4 rounded-full font-bold overflow-hidden transition-all shadow-md hover:shadow-xl hover:bg-[#001f42] hover:pr-14"
              >
                <span className="relative z-10">VIEW DETAILS</span>
                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}