const StaticHero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 bg-white text-[#1a1a1a] overflow-hidden text-center">
      {/* 輕微的背景點綴 */}
      <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl">
        {/* 主標題：使用 break-keep 避免中文字斷開 */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 break-keep">
          <span className="inline-block">諾科獎</span>
          <span className="inline-block">國際科學對話平台</span>
        </h1>
        
        {/* 副標題 */}
        <h2 className="text-xl md:text-3xl font-light tracking-widest text-[#002B5B] mb-8">
          Nobel Science International Dialogue
        </h2>
        
        <div className="space-y-2">
          <p className="text-base md:text-xl text-slate-600">
            連結台灣與世界頂尖科學家
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light italic">
            A global platform connecting Taiwan with the world’s leading scientific minds
          </p>
        </div>
      </div>

      {/* 捲動提示：顏色改為深灰色 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <p className="text-[10px] tracking-widest mb-2 text-slate-800">SCROLL DOWN</p>
        <div className="w-[1px] h-10 bg-slate-800 mx-auto"></div>
      </div>
    </section>
  );
};

export default StaticHero;