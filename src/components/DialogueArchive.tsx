import { useState } from 'react';
import jackImg from '../assets/jack-dongarra.jpg';
import konImg from '../assets/konstantin-novoselov.jpg';
import louisImg from '../assets/louis-ignarro.jpg';


const archiveData = [
  {
    id: 1,
    date: "09.05",
    time: "10:00–12:00",
    title: "國際交流參訪｜學術 × 產業對話",
    location: "陽明交通大學、新竹科學園區",
    speakers: ["傑克·唐加拉", "戴維·麥克米倫"],
    displayImage: jackImg,
    description: "圖靈獎與諾貝爾化學獎得主共同參與，探討學術研究如何轉化為產業動力。",
    details: "本次參訪深入探討了高效能運算與有機催化在半導體製程中的應用，大師們與園區工程師針對未來技術轉型進行了深度對話。"
  },
  {
    id: 2,
    date: "05.07",
    time: "14:30–15:30",
    title: "建國中學特別企劃｜跨領域科學對話",
    location: "建國中學",
    speakers: ["傑克·唐加拉", "康斯坦丁·諾沃肖洛夫", "路易斯·J·伊格納羅"],
    displayImage: konImg,
    description: "三位大師與高中生面對面，播下科學探索的種子。",
    details: "三位大師分享了各自在物理、化學與醫學領域的挫折與突破，鼓勵青年學子不應侷限於課本知識，而要具備跨領域的思辨能力。"
  },
  {
    id: 3,
    date: "05.08",
    time: "10:00–11:30",
    title: "校園講座｜生命科學與醫學對話",
    location: "林口路亞實驗教育機構",
    speakers: ["路易斯·J·伊格納羅"],
    displayImage: louisImg,
    description: "諾貝爾醫學獎得主分享一氧化氮的研究歷程與生命科學的未來。",
    details: "Ignarro 教授詳細講解了一氧化氮作為訊號分子的發現過程，並與師生討論了基礎科學研究在日常預防醫學中的關鍵角色。"
  }
];

export default function DialogueArchive() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 py-16"> {/* 底色改為淺灰 */}
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-[#002B5B]">2025 歷年回顧</h2> {/* 主標保留藍色 */}
          <div className="h-[2px] flex-grow bg-slate-200"></div>
        </div>

        <div className="space-y-8">
          {archiveData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8 items-center">
                
                {/* 左側日期：改為深灰文字 */}
                <div className="w-full md:w-24 shrink-0 text-center md:text-left">
                  <div className="text-[#002B5B] font-mono font-bold text-2xl">{item.date}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.time}</div>
                </div>

                {/* 文字內容：改為深灰/黑色 */}
                <div className="flex-grow space-y-3">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-semibold">
                    {item.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* 右側照片：縮小尺寸並保持精緻 */}
                <div className="w-32 h-24 shrink-0 rounded-xl overflow-hidden border border-slate-100 shadow-inner">
                  <img src={item.displayImage} alt="" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                </div>
              </div>

              {/* 點擊後展開的詳細內容 */}
              {expandedId === item.id && (
                <div className="px-8 pb-8 pt-2 border-t border-slate-50 bg-slate-50/50 animate-in fade-in slide-in-from-top-2">
                  <h4 className="font-bold text-slate-700 mb-2">對話深度摘要：</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.details}</p>
                  <div className="mt-4 flex gap-2">
                    {item.speakers.map(s => (
                      <span key={s} className="text-[10px] bg-white px-2 py-1 rounded border border-slate-200 text-slate-500">#{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}