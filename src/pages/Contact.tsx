import { Mail, MessageCircle, Landmark } from 'lucide-react';

/**
 * 自定義 Facebook 圖示
 */
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* 1. 標題區 */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">聯絡我們</h2>
                    <p className="text-xl text-slate-500 font-light mt-2 tracking-wide">Contact</p>
                    <div className="w-12 h-1 bg-blue-600 mt-6"></div>
                </div>

                {/* 2. 聯絡資訊與社群圖示 */}
                <div className="space-y-12">
                    <div className="text-lg text-slate-600 leading-relaxed">
                        <p className="mb-6">
                            若有任何與協會相關問題與建議，歡迎透過以下方式與我們聯繫：
                        </p>
                        
                        {/* 圓形社群 Icon 按鈕區塊 */}
                        <div className="flex gap-6 mb-10">
                            {/* Facebook 按鈕 */}
                            <a 
                                href="https://www.facebook.com/p/%E8%AB%BE%E7%A7%91%E7%8D%8E%E5%9C%8B%E9%9A%9B%E6%96%87%E6%95%99%E4%BA%A4%E6%B5%81%E5%8D%94%E6%9C%83-61566980976065/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
                                title="Facebook"
                            >
                                <FacebookIcon className="w-7 h-7 fill-current" />
                            </a>

                            {/* Line 按鈕 */}
                            <a 
                                href="https://line.me/ti/p/~@171iygsm" // 這裡請貼入你的 Line 連結
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-[#06c755] rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
                                title="Line"
                            >
                                <MessageCircle className="w-7 h-7 fill-current" />
                            </a>
                        </div>

                        <div className="space-y-4">
                            {/* Email 連結 */}
                            <div className="flex items-center gap-3 text-blue-500">
                                <Mail className="w-5 h-5" />
                                <span>E-mail：</span>
                                <a href="mailto:service@nsic.org.tw" className="hover:underline font-medium">
                                    service@nsic.org.tw
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3. 銀行匯款資訊 */}
                    <div className="flex flex-col md:flex-row gap-12 items-start py-10 border-t border-slate-100">

                        {/* 右側：匯款帳戶資訊 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            <div className="p-5 bg-slate-50 rounded-lg space-y-3 border border-slate-100">
                                <div className="flex items-center gap-2 text-blue-700 font-bold">
                                    <Landmark className="w-5 h-5" /> 銀行：華南銀行-台北南門分行
                                </div>
                                <div className="text-slate-600 text-sm space-y-1">
                                    <p>帳號：<span className="font-mono text-base text-slate-800">117-10-110595-0</span></p>
                                    <p>戶名：<span className="font-bold text-slate-800">諾科獎國際文教交流協會</span></p>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 rounded-lg space-y-3 border border-slate-100">
                                <div className="flex items-center gap-2 text-blue-700 font-bold">
                                    <Landmark className="w-5 h-5" /> 銀行：華南銀行-台北南門分行
                                </div>
                                <div className="text-slate-600 text-sm space-y-1">
                                    <p>帳號：<span className="font-mono text-base text-slate-800">117-10-110600-5</span></p>
                                    <p>戶名：<span className="font-bold text-slate-800">諾科獎教育有限公司</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}