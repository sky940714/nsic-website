import { Link } from 'react-router-dom';

export default function SummitBrief() {
  return (
    <section className="py-24 bg-[#f8fafc] text-[#1a1a1a] overflow-hidden relative border-y border-slate-100">
      {/* 裝飾線條 */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* 左欄：活動基本資訊 */}
          <div className="space-y-8">
            <div className="space-y-3">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#002B5B]">2026 諾科獎台北峰會</h2>
               <p className="text-slate-500 text-lg font-medium tracking-wide">從台北出發，開啟與世界持續對話的起點</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
               <div>
                 <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">活動日期</p>
                 {/* 更新 1：使用 inline-block 確保日期不被怪異切斷 */}
                 <p className="text-xl font-bold text-slate-800">
                   <span className="inline-block">2026年5月13日</span>
                   <span className="inline-block">至5月14日</span>
                 </p>
               </div>
               <div>
                 <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">活動地點</p>
                 <p className="text-xl font-bold text-slate-800">台北、宜蘭</p>
               </div>
            </div>
          </div>

          {/* 右欄：峰會重點內容 */}
          <div className="space-y-10">
             <div>
               <h3 className="text-xl font-bold mb-6 flex items-center gap-4 text-slate-800">
                 <span className="w-8 h-[1px] bg-[#002B5B]"></span> 峰會重點
               </h3>
               <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
                 {/* 更新 2：使用 whitespace-nowrap 鎖定大師名字與頭銜 */}
                 <p>本次峰會邀請 <span className="text-[#002B5B] font-bold border-b border-blue-200 pb-0.5">2013年諾貝爾化學獎得主 <span className="whitespace-nowrap">Michael Levitt 教授</span></span> 來台交流。</p>
                 <p>其研究以計算科學方法解析生命系統，為人類理解複雜世界提供新的視角，也深刻影響當代科學與科技的發展方向。</p>
                 
                 {/* 更新 3：引言使用 inline-block 做語意斷句，防止寡行 */}
                 <p className="text-slate-500 italic text-lg font-light border-l-2 border-slate-200 pl-4 py-1 mt-4">
                   <span className="inline-block">「這不只是知識的傳遞，」</span>
                   <span className="inline-block">而是一場關於『如何理解世界』的對話。」</span>
                 </p>
               </div>
             </div>

             {/* 右下角 MORE 連結 */}
             <div className="flex justify-end">
               <Link 
                 to="/program" 
                 className="group relative flex items-center gap-4 bg-[#002B5B] text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all shadow-sm hover:shadow-md hover:bg-[#001f42] hover:pr-12"
               >
                 <span className="relative z-10">MORE DETAILS</span>
                 <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all">→</span>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}