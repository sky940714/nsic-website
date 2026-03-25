import { Feather, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 py-10 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* 頁尾 Logo */}
                <div className="flex items-center space-x-3">
                    <Feather className="text-amber-700 w-8 h-8" />
                    <div>
                        <h1 className="text-xl font-bold text-gray-800 leading-none">諾科獎</h1>
                        <p className="text-[10px] text-gray-500 tracking-tighter">國際文教交流協會</p>
                    </div>
                </div>

                {/* 版權聲明 */}
                <p className="text-sm text-slate-400">© 2026 諾科獎 國際文教交流協會. All Rights Reserved.</p>

                {/* 社群連結圖示 */}
                <div className="flex space-x-4">
                    {/* Facebook SVG */}
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition transform shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </a>
                    
                    {/* Instagram SVG */}
                    <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition transform shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                    </a>
                    
                    {/* LINE (用原生的 MessageCircle 替代) */}
                    <a href="#" className="w-10 h-10 rounded-full bg-[#06c755] text-white flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition transform shadow-md">
                        <MessageCircle className="w-5 h-5" />
                    </a>
                    
                    {/* YouTube SVG */}
                    <a href="#" className="w-10 h-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition transform shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}