import { Link } from 'react-router-dom';

export default function StaticHero() {
  return (
    <section className="py-24 text-white overflow-hidden relative min-h-[500px] flex items-center" style={{ background: 'linear-gradient(135deg, #02122c, #155298)' }}>
      {/* 背景斜線（改為更沈穩藍） */}
      <div className="absolute top-0 right-0 w-1/3 h-full -skew-x-12 transform translate-x-20" style={{ backgroundColor: 'rgba(23,78,166,0.15)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* 左欄 */}
          <div className="space-y-8">
            <div className="space-y-2">
               <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">2026 諾科獎台北峰會</h2>
               <p className="text-lg md:text-xl font-medium" style={{ color: '#8FB4FF' }}>
                 從台北出發，開啟與世界持續對話的起點
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
               <div>
                 <p className="text-white/40 text-xs uppercase tracking-widest mb-2">活動日期</p>
                 <p className="text-xl font-bold">2026年5月13日至5月14日</p>
               </div>
               <div>
                 <p className="text-white/40 text-xs uppercase tracking-widest mb-2">活動地點</p>
                 <p className="text-xl font-bold">台北、宜蘭</p>
               </div>
            </div>
          </div>

          {/* 右欄 */}
          <div className="space-y-10">
             <div>
               <h3 className="text-xl font-bold mb-6 flex items-center gap-4">
                 <span className="w-8 h-[1px]" style={{ backgroundColor: '#174EA6' }}></span> 峰會重點
               </h3>
               <div className="space-y-6 text-white/70 leading-relaxed text-base md:text-lg">
                 <p>
                   本次峰會邀請 
                   <span className="text-white font-bold underline underline-offset-4" style={{ textDecorationColor: '#174EA6' }}>
                     2013年諾貝爾化學獎得主 Michael Levitt 教授
                   </span>
                   來台交流。
                 </p>
                 <p>其研究以計算科學方法解析生命系統，為人類理解複雜世界提供新的視角，也深刻影響當代科學與科技的發展方向。</p>
                 <p className="text-white italic text-lg md:text-xl font-light">「這不只是知識的傳遞，而是一場關於『如何理解世界』的對話。」</p>
               </div>
             </div>

             {/* 按鈕 */}
             <div className="flex justify-end">
               <Link 
                 to="/program" 
                 className="group relative flex items-center gap-4 px-8 py-4 rounded-full font-bold overflow-hidden transition-all shadow-xl"
                 style={{ backgroundColor: '#FFFFFF', color: '#0A2540' }}
               >
                 <span className="relative z-10">MORE DETAILS</span>
                 <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all" style={{ color: '#174EA6' }}>→</span>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
