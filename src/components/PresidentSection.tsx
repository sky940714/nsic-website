import presidentImg from '../assets/president.jpg';

export default function PresidentSection() {
    return (
        <section id="founder" className="py-24 bg-white scroll-mt-24 border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* 頂部小標題 */}
                <div className="mb-12 md:mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide mb-4">會長的話</h2>
                    <div className="w-12 h-1 bg-[#002B5B] rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* 內容區塊 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
                    
                    {/* 區塊 1：文字與引言 */}
                    <div className="order-2 md:order-1 w-full md:w-7/12 flex flex-col justify-center relative">
                        
                        {/* 裝飾性巨型引號 */}
                        <div className="hidden md:block absolute -top-12 -left-8 text-[140px] text-slate-50 font-serif leading-none select-none z-0">
                            “
                        </div>

                        <div className="relative z-10 w-full">
                            
                            <h3 className="text-3xl lg:text-4xl font-bold text-[#002B5B] leading-snug tracking-wide mb-8 text-center md:text-left">
                                諾科獎的起點，<br />是一個很單純的想法
                            </h3>

                            {/* 內文說明：加入 md:hidden 控制手機版專屬斷行 */}
                            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed text-justify md:text-left mb-10 md:pr-12">
                                <p className="font-medium">
                                    讓世界級的科學家，走進台灣，<br className="md:hidden" />與下一代面對面對話。
                                </p>
                                {/* 精緻小分隔線 */}
                                <div className="hidden md:block w-16 h-[1px] bg-slate-300"></div>
                            </div>

                            {/* 雜誌風質感引言卡片：加入 md:hidden 控制手機版專屬斷行 */}
                            <blockquote className="relative p-6 sm:p-8 bg-gradient-to-br from-[#f8fafc] to-white border border-slate-100 rounded-2xl shadow-sm md:mr-8 mt-4">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#002B5B] rounded-l-2xl"></div>
                                <p className="text-lg md:text-xl lg:text-2xl text-slate-500 italic font-light leading-relaxed">
                                    「我們相信，有些時刻，<br className="md:hidden" />會讓一個人看見世界的高度。」
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    {/* 區塊 2：照片與署名 */}
                    <div className="order-1 md:order-2 w-full max-w-[320px] md:max-w-none md:w-5/12 flex flex-col items-center md:items-end z-10">
                        <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-slate-100 mb-6 relative group">
                            <img 
                                src={presidentImg} 
                                alt="朱愛蓮會長" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                        <div className="text-center md:text-right w-full md:pr-4">
                            <span className="block text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold">
                                Founder & President
                            </span>
                            <span className="block text-slate-500 text-sm mb-2 font-medium">
                                創會會長
                            </span>
                            <h4 className="text-3xl font-bold text-[#002B5B] tracking-widest">
                                朱愛蓮
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}