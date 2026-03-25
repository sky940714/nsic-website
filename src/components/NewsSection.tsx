import { Clock } from 'lucide-react';

export default function NewsSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-12 animate-on-scroll is-visible">最新消息</h2>
                
                <div className="space-y-12">
                    {/* News Item 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start animate-on-scroll is-visible border-b border-slate-200 pb-12">
                        <div className="w-full md:w-1/3 shrink-0">
                            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400" alt="朱愛蓮會長回到故鄉" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center text-xs text-slate-500 mb-3 font-medium">
                                <Clock className="w-3.5 h-3.5 mr-1.5" /> 2025-09-08
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-700 transition cursor-pointer">朱愛蓮會長回到故鄉</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                朱愛蓮會長今日回到故鄉，特別感謝花蓮高中、花蓮女中兩位校長親自陪同，參觀花中典雅莊重的禮堂<a href="#" className="text-slate-400 hover:text-blue-600 transition ml-1">...查看更多 &gt;</a>
                            </p>
                        </div>
                    </div>
                    
                    {/* News Item 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start animate-on-scroll is-visible border-b border-slate-200 pb-12">
                        <div className="w-full md:w-1/3 shrink-0">
                            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400" alt="諾貝爾科學之光" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center text-xs text-slate-500 mb-3 font-medium">
                                <Clock className="w-3.5 h-3.5 mr-1.5" /> 2025-09-03
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-700 transition cursor-pointer">諾貝爾科學之光 照亮偏鄉學子夢想</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                2025年5月8日，在教育部青年署的協助下，24所偏鄉中學近400位孩子來到政大公企中心，有些極偏遠地區學校甚至前一天就提早過來<a href="#" className="text-slate-400 hover:text-blue-600 transition ml-1">...查看更多 &gt;</a>
                            </p>
                        </div>
                    </div>

                    {/* News Item 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start animate-on-scroll is-visible">
                        <div className="w-full md:w-1/3 shrink-0">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400" alt="朱會長到新北市三光國小" className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center text-xs text-slate-500 mb-3 font-medium">
                                <Clock className="w-3.5 h-3.5 mr-1.5" /> 2025-09-02
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-700 transition cursor-pointer">朱會長到新北市三光國小</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                今天朱會長到新北市三光國小。學校不僅開設陶藝、陶笛、擊劍、小提琴、薩克斯風班，孩子畢業時還要具備一項才藝<a href="#" className="text-slate-400 hover:text-blue-600 transition ml-1">...查看更多 &gt;</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}