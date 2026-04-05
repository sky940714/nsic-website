import { Link } from 'react-router-dom';
import aboutImg from '../assets/about-origin.jpg'; // 確保 assets 裡有這張圖

export default function AboutSection() {
  return (
    <section id="origin" className="relative py-24 overflow-hidden bg-white">
      {/* 背景裝飾大字 */}
      <div className="absolute top-10 right-0 text-[10rem] md:text-[12rem] font-bold text-slate-50 select-none leading-none z-0">
        01. ABOUT US
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 左側：照片區 (帶框線設計) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 border-l-2 border-t-2 border-slate-200"></div>
            <div className="relative z-10 p-4">
               <img 
                 src={aboutImg} 
                 alt="Nobel Science Origin" 
                 className="w-full shadow-2xl rounded-sm"
               />
               <div className="absolute bottom-10 -left-8 transform -rotate-90 origin-bottom-left">
                 <span className="text-sm tracking-[0.5em] text-slate-400 uppercase font-light">Origin</span>
               </div>
            </div>
          </div>

          {/* 右側：文字區 */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-slate-800 tracking-wider">NSIC</h2>
              <p className="text-lg text-slate-500 font-medium">諾諾諾 國際文教交流協會</p>
              <div className="w-12 h-[1px] bg-slate-300 mt-6"></div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              諾科獎致力於建立一個面向世界的國際科學交流平台，透過持續性的對話，連結頂尖科學思想與社會發展，讓台灣成為全球科學與文明交流的重要節點。
            </p>

            <Link to="/contact" className="inline-flex items-center group text-sm font-bold tracking-widest text-slate-800 border-b border-slate-200 pb-2 hover:border-blue-600 transition-colors">
               VIEW CONTACT <span className="ml-4 transform group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}