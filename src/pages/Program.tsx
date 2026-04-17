import { Calendar, MapPin, Users, BookOpen } from 'lucide-react';

export default function Program() {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                
                {/* 1. 頁面標題：手機版上下排列，電腦版維持左右並排 */}
                <div className="mb-16">
                    <h2 className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 font-bold text-slate-800">
                        <span className="text-4xl" style={{ color: '#0A2540' }}>
                            <span className="mr-2">✦</span>峰會議程
                        </span>
                        <span className="text-2xl md:text-4xl text-slate-400 font-light tracking-tight pb-1">
                            Summit Agenda
                        </span>
                    </h2>
                    <div className="w-12 h-1 mt-6" style={{ backgroundColor: '#0A2540' }}></div>
                </div>

                {/* 2. 議程列表 */}
                <div className="space-y-12">
                    
                    {/* --- 5/13 台北場次 --- */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[2px] hover:border-[#392061] transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 border-b border-slate-200 pb-6">
                            <div className="text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors duration-300 hover:bg-[#174EA6]" style={{ backgroundColor: '#0A2540' }}>
                                <Calendar className="w-5 h-5" />
                                2026年5月13日｜台北
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 font-medium">
                                <MapPin className="w-5 h-5" style={{ color: '#2C5282' }} />
                                國立台北科技大學
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: '#0A2540' }}>
                                    <BookOpen className="w-4 h-4" style={{ color: '#2C5282' }} /> 主題 Theme
                                </h3>
                                <p className="text-2xl font-bold text-slate-800 leading-tight mb-2">
                                    人工智慧與分子科學：理解生命與人類未來
                                </p>
                                {/* 手機版英文調整：縮小字體並確保在一行 (或在寬度內自然呈現) */}
                                <p className="text-[13px] md:text-base text-slate-500 italic font-light leading-snug">
                                    Artificial Intelligence and Molecular Science: Understanding Life and the Future of Humanity
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: '#0A2540' }}>
                                    <Users className="w-4 h-4" style={{ color: '#2C5282' }} /> 對象 Target Audience
                                </h3>
                                <p className="text-lg text-slate-700">學術領袖與產業決策者</p>
                            </div>
                        </div>
                    </div>

                    {/* --- 5/14 宜蘭場次 --- */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[2px] hover:border-[#392061] transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 border-b border-slate-200 pb-6">
                            <div className="text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors duration-300 hover:bg-[#174EA6]" style={{ backgroundColor: '#0A2540' }}>
                                <Calendar className="w-5 h-5" />
                                2026年5月14日｜宜蘭
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 font-medium">
                                <MapPin className="w-5 h-5" style={{ color: '#2C5282' }} />
                                國立宜蘭大學
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: '#0A2540' }}>
                                    <BookOpen className="w-4 h-4" style={{ color: '#2C5282' }} /> 主題 Theme
                                </h3>
                                <p className="text-2xl font-bold text-slate-800 leading-tight mb-2">
                                    人工智慧如何改變生命科學與未來社會
                                </p>
                                {/* 手機版英文調整 */}
                                <p className="text-[13px] md:text-base text-slate-500 italic font-light leading-snug">
                                    How Artificial Intelligence is Transforming Life Sciences and Future Society
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: '#0A2540' }}>
                                    <Users className="w-4 h-4" style={{ color: '#2C5282' }} /> 對象 Target Audience
                                </h3>
                                <p className="text-lg text-slate-700">
                                    大學生、青年學子及教育界人士 <span className="text-slate-400 text-sm ml-1">（約250人）</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}