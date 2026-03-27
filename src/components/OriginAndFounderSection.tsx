import { Lightbulb } from 'lucide-react';
// 匯入會長照片
import presidentImg from '../assets/president.jpg';

export default function OriginAndFounderSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* 區塊一：峰會緣起 (維持不變) */}
                <div id="origin" className="mb-32 animate-on-scroll is-visible scroll-mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">起心動念</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                        {/* 中文版 */}
                        <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                            <p>在科技浪潮席捲全球的今日，掌握先機、洞悉未來趨勢，成為各國競逐的焦點。台灣，作為全球科技產業的重要樞紐，更需要一個平台，匯聚國際頂尖智慧，引領科技創新，邁向更美好的未來。</p>
                            <p>有鑑於此，「諾科獎國際文教交流協會」將於 2025 年舉辦首屆「諾科獎台北峰會」。</p>
                            <p>本次峰會以「超級運算改變研究方式AI」為主題，期望搭建一個國際級的交流平台，邀請3位諾貝爾獎、1位圖靈獎得主等世界級科學巨擘，以及各領域的專家學者、企業領袖齊聚一堂，共同探討人工智慧、量子計算、生物科技等前瞻科技的發展趨勢。</p>
                            <p className="font-bold text-blue-800 mt-4">「2025 諾科獎台北峰會」，邀請您一同見證科技的力量，共創美好未來！</p>
                        </div>
                        {/* 英文版 */}
                        <div className="space-y-4 text-slate-500 leading-relaxed text-justify md:border-l md:border-slate-200 md:pl-12">
                            <h3 className="text-xl font-bold text-slate-700 mb-4">2025 Nobel Prize Taipei Summit Origin</h3>
                            <p>Today, as the wave of science and technology sweeps across the world, seizing opportunities and understanding future trends has become the focus of competition among countries. Taiwan needs a platform to gather top international wisdom, lead technological innovation, and move towards a better future.</p>
                            <p>The summit is not only a display platform for top international technologies, but also an important bridge connecting Taiwan with the world.</p>
                            <p className="font-bold text-slate-700 mt-4">"2025 Nobel Prize Taipei Summit" invites you to witness the power of technology!</p>
                        </div>
                    </div>
                </div>

                {/* 區塊二：會長的話 (全新簡潔排版) */}
                <div id="founder" className="animate-on-scroll is-visible delay-100 scroll-mt-24">
                    <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-slate-100">
                        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                            
                            {/* 左側：感性文字 */}
                            <div className="flex-grow space-y-8 order-2 md:order-1">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-2">會長的話</h2>
                                    <div className="w-10 h-1 bg-amber-500"></div>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="text-2xl lg:text-3xl font-medium text-slate-700 leading-tight">
                                        諾科獎的起點，是一個很單純的想法
                                    </p>
                                    <p className="text-xl lg:text-2xl text-slate-600 leading-snug">
                                        讓世界級的科學家，走進台灣，<br className="hidden lg:block" />
                                        與下一代面對面對話。
                                    </p>
                                    <div className="pt-4">
                                        <p className="text-lg text-slate-500 italic">
                                            我們相信，有些時刻，<br />
                                            會讓一個人看見世界的高度
                                        </p>
                                    </div>
                                </div>

                                {/* 會長簽名與頭銜 */}
                                <div className="pt-8 border-t border-slate-100">
                                    <div className="flex items-end gap-4 mb-4">
                                        <span className="text-slate-500 text-sm">創會會長</span>
                                        <h3 className="text-3xl font-bold text-blue-900">朱愛蓮</h3>
                                    </div>
                                    <ul className="space-y-1 text-slate-500 text-sm">
                                        <li>• 農華土壤改良專家</li>
                                        <li>• 日本水質處理公司執行長</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 右側：圓形照片 */}
                            <div className="w-64 h-64 lg:w-80 lg:h-80 shrink-0 order-1 md:order-2">
                                <div className="relative w-full h-full">
                                    {/* 裝飾外圈 */}
                                    <div className="absolute -inset-4 border-2 border-amber-100 rounded-full animate-pulse"></div>
                                    {/* 照片容器 */}
                                    <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl">
                                        <img 
                                            src={presidentImg} 
                                            alt="創會會長 朱愛蓮" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}