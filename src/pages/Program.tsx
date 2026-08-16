// src/pages/Program.tsx

import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import whitfieldDiffieImg from '../assets/whitfield-diffie.jpg'; // 確保圖片已在 src/assets/

export default function Program() {
  // Google 表單連結
  const registrationLink = "https://forms.gle/2r45xBWFtJDgxPmX6";

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex items-center justify-center pt-28 pb-24 px-4">
        
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-slate-300/30 overflow-hidden flex flex-col lg:flex-row">
          
          {/* 左欄：講者照片 */}
          <div className="w-full lg:w-5/12 bg-gray-100 lg:bg-transparent">
            <div className="p-4 lg:p-0 flex items-center justify-center">
              <div className="w-4/5 lg:w-full">
                <img 
                  src={whitfieldDiffieImg} 
                  alt="Whitfield Diffie"
                  className="w-full h-full rounded-2xl lg:rounded-none object-contain lg:object-cover lg:object-top"
                />
              </div>
            </div>
          </div>

          {/* 右欄：所有資訊 */}
          <div className="w-full lg:w-7/12 flex flex-col p-6 sm:p-10 md:p-12">
            
            {/* 活動標題 */}
            <div className="mb-2 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#002B5B] leading-tight">
                2026 諾科獎國際論壇
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-slate-600 font-medium">
                AI 時代的數位信任：從網際網路安全到未來世界
              </p>
            </div>
            
            {/* 講者介紹 */}
            <div className="mb-2 lg:mb-8">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">主講貴賓</p>
              <h2 className="text-3xl font-bold text-slate-800">Whitfield Diffie</h2>
              <p className="mt-1 text-lg font-semibold text-[#002B5B]">2015 年圖靈獎得主</p>
              <div className="mt-3 text-base text-slate-600 space-y-2">
                <p>• 現代網路安全與公開金鑰密碼技術的奠基者之一</p>
                <p>• DNS、Diffie-Hellman 金鑰交換等核心技術的發明人</p>
                <p>• 讓安全的網路銀行、電子商務與私密通訊成為可能</p>
              </div>
            </div>

            {/* 分隔線 */}
            <div className="w-full h-px bg-slate-200 my-2 lg:my-4"></div>

            {/* 活動詳情 & 報名 */}
            <div className="mt-auto flex flex-col gap-6 lg:gap-8">
              {/*
                [電腦版優化]
                - 手機上依然是 grid-cols-1。
                - sm 螢幕上是 grid-cols-3 均分。
                - lg 螢幕上，我們自定義欄位寬度，讓日期和地點更寬。
              */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1.5fr_2fr] gap-6">
                
                {/* 日期欄位 */}
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-slate-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">日期</p>
                    <p className="text-sm font-bold text-slate-800 whitespace-nowrap">2026年10月13日 (星期二)</p>
                  </div>
                </div>

                {/* 時間欄位 */}
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">時間</p>
                    <p className="text-sm font-bold text-slate-800">13:30 – 15:20</p>
                  </div>
                </div>

                {/* 地點欄位 */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">地點</p>
                    <p className="text-sm font-bold text-slate-800">
                      國立政治大學公企中心<br/>4樓A431會議廳
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 唯一的報名按鈕 */}
              <a 
                href={registrationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#002B5B] text-white text-base font-bold tracking-widest rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:-translate-y-1"
              >
                立即報名
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>
      
      {/* 關於本場論壇的深度論述 */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">為何這場論壇至關重要？</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>當人工智慧（AI）正以前所未有的速度重塑世界，我們對數位互動的「信任」基礎也面臨著嚴峻挑戰。這場論壇將帶您回歸本源，深入了解現代網路安全的基石，並與此領域的開創者一同展望在 AI 驅動的未來中，我們將如何建立一個更安全、更值得信賴的數位社會。</p>
            <blockquote className="border-l-4 border-[#002B5B] pl-6 py-2 text-left italic text-slate-500">
              “他不是一般的資安專家，而是奠定現代網路安全世界的開創者之一。”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}