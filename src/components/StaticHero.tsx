const StaticHero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 bg-white text-[#1a1a1a] overflow-hidden text-center">
      {/* 輕微的背景點綴 */}
      <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl w-full">
        {/* 主標題：使用 break-keep 避免中文字斷開 */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 break-keep">
          <span className="inline-block">諾科獎</span>
          <span className="inline-block">國際科學對話平台</span>
        </h1>
        
        {/* 副標題修正：
          - 手機版使用 text-[10px] 與極窄字距 tracking-tighter 確保一行顯示 
          - sm 以上恢復正常間距與大小
          - md 以上維持原本 text-3xl 大氣感
        */}
        <h2 className="text-[8px] sm:text-lg md:text-3xl font-light tracking-tighter sm:tracking-widest text-[#002B5B] mb-8 whitespace-nowrap overflow-visible">
          Nobel Science International Dialogue
        </h2>
        
        <div className="space-y-3 px-2 md:px-0">
          <p className="text-base md:text-xl text-slate-600 font-medium">
            連結台灣與世界頂尖科學家
          </p>
          
          {/* 最長英文翻譯修正：
            - 手機版極限 text-[9px] 確保強行一行
            - 使用 whitespace-nowrap 禁止任何斷行
          */}
          <p className="text-[8px] sm:text-xs md:text-sm text-slate-400 font-light italic whitespace-nowrap overflow-visible">
            Ｃonnecting Taiwan with the world’s leading scientific minds
          </p>
        </div>
      </div>

      {/* 捲動提示：顏色改為深灰色 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <p className="text-[8px] tracking-widest mb-2 text-slate-800">SCROLL DOWN</p>
        <div className="w-[1px] h-10 bg-slate-800 mx-auto"></div>
      </div>
    </section>
  );
};

export default StaticHero;