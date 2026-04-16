import michaelLevittImg from '../assets/michael-levitt.jpg';

// 1. 只保留主要貴賓
const mainMasters = [
  {
    id: 1,
    nameZh: "邁可·列維特",
    nameEn: "MICHAEL LEVITT",
    title: "2013年諾貝爾化學獎得主",
    image: michaelLevittImg,
    description: "1947年，列維特在南非開普敦出生。他致力於蛋白質的電腦模擬，這一領域在當時剛剛起步，他開發了第一個計算蛋白質分子動力學的程式。\n\n他的研究以計算科學方法解析生命系統，為人類理解複雜世界提供新的視角，也深刻影響當代科學與科技的發展方向。",
  }
];

export default function Guests() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 頁面標題：已更改為「本年度受邀科學家」 */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">本年度受邀科學家</h1>
          <div className="w-12 h-1 bg-[#002B5B] mx-auto rounded-full"></div>
        </div>

        {/* 主要貴賓介紹區塊 (左圖右文，手機版自動上下排列) */}
        <div className="max-w-5xl mx-auto">
          {mainMasters.map(master => (
            <div key={master.id} className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              
              {/* 左側：照片 */}
              <div className="w-full md:w-5/12 shrink-0">
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative group">
                  <img 
                    src={master.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt={master.nameZh} 
                  />
                </div>
              </div>

              {/* 右側：文字介紹 */}
              <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-[#002B5B] text-white text-sm font-bold rounded-full mb-6 shadow-sm">
                    {master.title}
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">{master.nameZh}</h2>
                  <p className="text-xl tracking-widest text-slate-400 font-medium uppercase mb-6">{master.nameEn}</p>
                  
                  <div className="w-12 h-[2px] bg-slate-200 mb-6"></div>
                </div>
                
                <div className="text-slate-600 text-lg leading-relaxed text-justify space-y-4">
                  {master.description.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}