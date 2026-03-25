import { Mail, MessageCircle, Landmark } from 'lucide-react';
// 記得把你的 LINE QR Code 圖片放到 assets 裡面並匯入
// import lineQR from '../assets/line_qr.png'; 

export default function Contact() {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* 標題區 */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">聯絡我們</h2>
                    <p className="text-xl text-slate-500 font-light mt-2 tracking-wide">Contact</p>
                    <div className="w-12 h-1 bg-blue-600 mt-6"></div>
                </div>

                {/* 聯絡資訊主要內容 */}
                <div className="space-y-12">
                    <div className="text-lg text-slate-600 leading-relaxed">
                        <p className="flex items-center gap-2 mb-4">
                            若有任何與協會相關問題與建議，歡迎洽詢諾科獎國際文教官方 Line：
                            <span className="text-[#06c755] font-bold">@171iygsm</span>
                        </p>
                        <p className="flex items-center gap-2 text-blue-500">
                            <Mail className="w-5 h-5" />
                            E-mail：<a href="mailto:service@nsic.org.tw" className="hover:underline">service@nsic.org.tw</a>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-start py-8 border-t border-slate-100">
                        {/* 左側：LINE QR Code (佔位符) */}
                        <div className="w-48 h-48 bg-slate-100 flex flex-col items-center justify-center rounded-xl border border-slate-200 shrink-0">
                            {/* 如果你有圖片，把下面這行註解解開 */}
                            {/* <img src={lineQR} alt="LINE QR Code" className="w-full h-full p-2" /> */}
                            <MessageCircle className="w-12 h-12 text-[#06c755] mb-2" />
                            <span className="text-[10px] text-slate-400">LINE QR Code</span>
                        </div>

                        {/* 右側：匯款資訊 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            {/* 帳戶 1 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-blue-600 font-medium">
                                    <Landmark className="w-5 h-5" /> 銀行：華南銀行-台北南門分行
                                </div>
                                <p className="text-slate-600">帳號：<span className="font-mono">117-10-110595-0</span></p>
                                <p className="text-slate-600">戶名：<span className="font-bold">諾科獎國際文教交流協會</span></p>
                            </div>

                            {/* 帳戶 2 */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-blue-600 font-medium">
                                    <Landmark className="w-5 h-5" /> 銀行：華南銀行-台北南門分行
                                </div>
                                <p className="text-slate-600">帳號：<span className="font-mono">117-10-110600-5</span></p>
                                <p className="text-slate-600">戶名：<span className="font-bold">諾科獎教育有限公司</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}