import { User } from 'lucide-react';
// 匯入本地圖片
import repPortrait from '../assets/rep_portrait.jpg'; 

export default function IntroductionSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* 改成 md:flex-row 讓電腦版左右並排，
                  並加上 items-center 確保上下置中對齊 
                */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
                    
                    {/* 左側：圓形人像照區塊 */}
                    <div className="relative animate-on-scroll is-visible w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-slate-100 rounded-full overflow-hidden shadow-xl flex items-center justify-center transform transition duration-500 hover:scale-105">
                            {/* 這裡放置頭像圖片 */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                {/* 如果圖片載入失敗或透明時的底圖 */}
                                <User className="w-32 h-32 opacity-20" />
                                {/* 真實圖片 */}
                                <img src={repPortrait} alt="創會會長 朱愛蓮" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* 右側：文字內容 (主標題 + 條列項目) */}
                    <div className="w-full md:w-1/2 animate-on-scroll is-visible delay-200 flex flex-col items-center md:items-start text-center md:text-left">
                        {/* 主標題 (對應截圖的藍色文字) */}
                        <h3 className="text-3xl lg:text-4xl font-bold text-[#0066cc] mb-8 tracking-wide">
                            創會會長 朱愛蓮
                        </h3>
                        
                        {/* 條列式副標題 (對應截圖的灰色圓點列表) */}
                        <ul className="space-y-4 text-lg lg:text-xl text-slate-500">
                            <li className="flex items-center justify-center md:justify-start">
                                <span className="w-2 h-2 rounded-full bg-slate-400 mr-4"></span>
                                農業土壤改良專家
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <span className="w-2 h-2 rounded-full bg-slate-400 mr-4"></span>
                                日本水質處理公司執行長
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}