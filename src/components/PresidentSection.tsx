import presidentImg from '../assets/president.jpg';

export default function PresidentSection() {
    return (
        <section id="founder" className="py-24 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-slate-50 rounded-[2rem] p-8 md:p-16 border border-slate-100">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* 左側：文字內容 */}
                        <div className="flex-grow space-y-8 order-2 md:order-1">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-2">會長的話</h2>
                                <div className="w-10 h-1 bg-amber-500"></div>
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-2xl lg:text-3xl font-medium text-slate-600 leading-tight">
                                    諾科獎的起點，是一個很單純的想法
                                </p>
                                <p className="text-xl lg:text-2xl text-slate-600 leading-snug">
                                    讓世界級的科學家，走進台灣，<br className="hidden lg:block" />
                                    與下一代面對面對話。
                                </p>
                                <div className="pt-4 text-lg text-slate-500 italic">
                                    我們相信，有些時刻，會讓一個人看見世界的高度
                                </div>
                            </div>
                        </div>

                        {/* 右側：純淨的照片呈現與姓名職稱 */}
                        <div className="w-full max-w-[280px] md:w-72 shrink-0 order-1 md:order-2 flex flex-col items-center">
                            {/* 照片：僅保留基本圓角，移除所有裝飾框與線條 */}
                            <div className="w-full overflow-hidden rounded-xl shadow-lg mb-6">
                                <img 
                                    src={presidentImg} 
                                    alt="朱愛蓮會長" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                            
                            {/* 姓名與職稱：直接置於照片下方 */}
                            <div className="text-center">
                                <span className="block text-slate-500 text-sm mb-1">創會會長</span>
                                <h3 className="text-2xl font-bold text-blue-900 tracking-wider">朱愛蓮</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}