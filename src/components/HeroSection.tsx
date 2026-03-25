export default function HeroSection() {
    return (
        <section className="pt-20 min-h-[600px] hex-bg relative flex items-center overflow-hidden">
            {/* 裝飾用光暈 */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* 左側：狀態提示 */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start animate-on-scroll is-visible">
                    <h3 className="text-2xl font-bold text-slate-700 mb-6">相關活動與場次將依序公布</h3>
                    <button 
                        onClick={() => alert('請訂閱我們的電子報以獲得最新通知！')} 
                        className="px-10 py-3 bg-slate-400 text-white rounded-full font-bold shadow-lg shadow-slate-200 hover:bg-slate-500 hover:shadow-slate-300 transition-all transform hover:-translate-y-1 active:translate-y-0"
                    >
                        敬請期待
                    </button>
                </div>

                {/* 右側：主要標題 */}
                <div className="order-1 lg:order-2 text-center lg:text-right">
                    <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-2 animate-on-scroll is-visible delay-100">
                        諾科獎臺北峰會 2026
                    </h2>
                    <h4 className="text-2xl md:text-3xl font-light text-amber-600 tracking-widest mb-8 animate-on-scroll is-visible delay-200">
                        NSIC TAIPEI SUMMIT 2026
                    </h4>
                    <div className="space-y-4 animate-on-scroll is-visible delay-300">
                        <p className="text-2xl font-bold text-slate-700">一個以國際學術思想與公共議題為核心的年度平台</p>
                        <div className="inline-block border-t border-slate-300 pt-4 mt-4">
                            <p className="text-lg text-slate-500 leading-relaxed">
                                串聯世界級學術思想<br />
                                培育青年世代的國際視野與公共責任
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}