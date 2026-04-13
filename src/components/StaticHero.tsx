const StaticHero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 bg-[#002B5B] text-white overflow-hidden text-center">
      {/* 背景可以放一張低透明度的科技感圖片 */}
      <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl">
        {/* 主標題 */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          諾科獎國際科學對話平台 <br />
          <span className="text-2xl md:text-4xl block mt-3 font-light tracking-widest">
            Nobel Science International Dialogue
          </span>
        </h1>

        {/* 副標題 */}
        <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
          連結台灣與世界頂尖科學家的國際科學對話平台 <br />
          <span className="text-base md:text-lg block mt-2 opacity-80 font-light">
            A global platform connecting Taiwan with the world’s leading scientific minds
          </span>
        </p>
      
      </div>

      {/* 捲動提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <p className="text-xs tracking-widest mb-2">SCROLL DOWN</p>
        <div className="w-[1px] h-10 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default StaticHero;