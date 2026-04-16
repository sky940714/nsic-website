import { Mail, MessageCircle, Landmark } from 'lucide-react';
import AnnouncementSection from '../components/AnnouncementSection';

// 1. 匯入圖片檔案
import LogoOrganizers from '../assets/logo-2.jpg';      
import LogoNTUT from '../assets/logo-ntut.png';        
import LogoNIU from '../assets/logo-niu.png';          
import LogoRedin from '../assets/logo-redin.png';      
import LogoBright from '../assets/logo-bright.png';    

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  return (
    <div className="pt-32 bg-white min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex-grow">
        
        {/* 標題區 */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-800">聯絡我們</h2>
          <p className="text-xl text-slate-500 font-light mt-2 tracking-wide">Contact</p>
          <div className="w-12 h-1 bg-[#002B5B] mt-6 rounded-full"></div>
        </div>

        {/* 聯絡資訊區塊 */}
        <div className="space-y-12 mb-16">
          <div className="text-lg text-slate-600 leading-relaxed">
            <p className="mb-6">若有任何與協會相關問題與建議，歡迎透過以下方式與我們聯繫：</p>
            <div className="flex gap-6 mb-10">
              <a href="https://www.facebook.com/p/%E8%AB%BE%E7%A7%91%E7%8D%8E%E5%9C%8B%E9%9A%9B%E6%96%87%E6%95%99%E4%BA%A4%E6%B5%81%E5%8D%94%E6%9C%83-61566980976065/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity">
                <FacebookIcon className="w-7 h-7 fill-current" />
              </a>
              <a href="https://line.me/ti/p/~@171iygsm" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#06c755] rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity">
                <MessageCircle className="w-7 h-7 fill-current" />
              </a>
            </div>
            <div className="flex items-center gap-3 text-[#002B5B]">
              <Mail className="w-5 h-5" />
              <span>E-mail：</span>
              <a href="mailto:service@nsic.org.tw" className="hover:underline font-medium">service@nsic.org.tw</a>
            </div>
          </div>

          {/* 銀行匯款資訊 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-slate-100">
            <div className="p-5 bg-[#f8fafc] rounded-xl space-y-3 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 text-[#002B5B] font-bold"><Landmark className="w-5 h-5" /> 銀行：華南銀行-台北南門分行</div>
              <div className="text-slate-600 text-sm"><p>帳號：117-10-110595-0</p><p>戶名：諾科獎國際文教交流協會</p></div>
            </div>
            <div className="p-5 bg-[#f8fafc] rounded-xl space-y-3 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 text-[#002B5B] font-bold"><Landmark className="w-5 h-5" /> 銀行：華南銀行-台北南門分行</div>
              <div className="text-slate-600 text-sm"><p>帳號：117-10-110600-5</p><p>戶名：諾科獎教育有限公司</p></div>
            </div>
          </div>
        </div>

        {/* 夥伴單位區塊 */}
        <div className="pt-10 border-t border-slate-100 space-y-12 pb-24">
          
          {/* 主辦單位 */}
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">主辦單位</h3>
            <img src={LogoOrganizers} alt="主辦單位" className="h-12 md:h-14 w-auto object-contain" />
          </section>

          {/* 學術合作夥伴 */}
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">學術合作夥伴</h3>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <img src={LogoNTUT} alt="國立臺北科技大學" className="h-12 md:h-14 w-auto object-contain" />
              <img src={LogoNIU} alt="國立宜蘭大學" className="h-12 md:h-14 w-auto object-contain" />
            </div>
          </section>

          {/* 國際執行夥伴 */}
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">國際執行夥伴</h3>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <img src={LogoRedin} alt="紅映國際活動製作" className="h-12 md:h-14 w-auto object-contain" />
              <img src={LogoBright} alt="采傑國際會議服務" className="h-12 md:h-14 w-auto object-contain" />
            </div>
          </section>

        </div>
      </div>

      {/* 5. 移入底部的中立公告區塊 */}
      <AnnouncementSection />
    </div>
  );
}