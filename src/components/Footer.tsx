import { Feather, MessageCircle } from 'lucide-react';

/**
 * 頁尾導覽列 (Footer)
 * 只保留 Facebook 與 Line 社群連結
 */
export default function Footer() {
    return (
        <footer className="bg-slate-50 py-10 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* 1. 頁尾 Logo */}
                <div className="flex items-center space-x-3">
                    <Feather className="text-amber-700 w-8 h-8" />
                    <div>
                        <h1 className="text-xl font-bold text-gray-800 leading-none">諾科獎</h1>
                        <p className="text-[10px] text-gray-500 tracking-tighter">國際文教交流協會</p>
                    </div>
                </div>

                {/* 2. 版權聲明 */}
                <p className="text-sm text-slate-400">© 2026 諾科獎 國際文教交流協會. All Rights Reserved.</p>

                {/* 3. 社群連結圖示 (僅保留 Facebook 與 Line) */}
                <div className="flex space-x-4">
                    {/* Facebook 連結 */}
                    <a 
                        href="https://www.facebook.com/p/%E8%AB%BE%E7%A7%91%E7%8D%8E%E5%9C%8B%E9%9A%9B%E6%96%87%E6%95%99%E4%BA%A4%E6%B5%81%E5%8D%94%E6%9C%83-61566980976065/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition transform shadow-md"
                        title="Facebook"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </a>
                    
                    {/* LINE 連結 */}
                    <a 
                        href="https://line.me/ti/p/~@171iygsm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#06c755] text-white flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition transform shadow-md"
                        title="Line"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}