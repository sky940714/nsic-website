export default function AnnouncementSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* 標題優化：手機版強制斷行，電腦版維持一行 */}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center animate-on-scroll is-visible">
                    諾科獎國際文教交流協會<br className="md:hidden" />中立公告暨名義使用說明
                </h2>
                
                <div className="space-y-6 text-slate-600 leading-relaxed text-justify animate-on-scroll is-visible delay-100">
                    <p>諾科獎為以公益、教育與國際交流為核心之非營利組織，秉持中立與獨立原則運作。不為任何政黨、候選人或政治團體背書、宣傳，亦不涉及特定宗教立場。</p>
                    
                    <p>在不影響理念獨立、內容自主與公共責任之前提下，諾科獎得進行必要之合作與資源支持。惟任何合作不得干預本會之治理、活動內容、講者安排或關鍵決策。</p>
                    
                    <p>未經事前書面授權，任何個人或單位不得使用諾科獎之名稱、標誌或相關識別進行宣傳、合作聲稱、活動舉辦、商品販售或募款等行為，以避免造成誤認或混淆。媒體報導及學術引用如未造成誤導者，不在此限。</p>
                    
                    <p>如有誤用或不當使用情形，諾科獎得要求停止、修正或移除，並保留依法處理之權利。</p>
                    
                    <p className="pt-4 border-t border-slate-100 font-medium text-slate-500">
                        本公告為長期適用原則，旨在維護本會之公益性、獨立性與公信力。
                    </p>
                    
                    <p className="flex flex-wrap items-center gap-2 font-bold text-[#002B5B]">
                        如需申請授權或通報疑似誤用，請聯繫：
                        <a href="mailto:Service@Nsic.Org.Tw" className="hover:underline transition underline-offset-4">
                            Service@Nsic.Org.Tw
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}