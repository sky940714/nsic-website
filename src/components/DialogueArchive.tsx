import { Link } from 'react-router-dom';
import jackImg from '../assets/jack-dongarra.jpg';
import konImg from '../assets/konstantin-novoselov.jpg';


// 1. 匯入路亞系列圖片
import luya1 from '../assets/luya/luya-1.jpg';
import luya2 from '../assets/luya/luya-2.jpg';
import luya3 from '../assets/luya/luya-3.jpg';
import luya4 from '../assets/luya/luya-4.jpg';
import luya5 from '../assets/luya/luya-5.jpg';
import luya6 from '../assets/luya/luya-6.jpg';

// 2. 定義介面 (提供給 EventDetail.tsx 使用)
export interface EventType {
  id: number;
  date: string;
  time: string;
  title: string;
  location: string;
  speakers: string[];
  displayImage: string;
  images: string[]; 
  description: string;
  details: string;
}

// 3. 更新資料陣列
export const archiveData: EventType[] = [
  {
    id: 1,
    date: "09.05",
    time: "10:00–12:00",
    title: "國際交流參訪｜學術 × 產業對話",
    location: "陽明交通大學、新竹科學園區",
    speakers: ["傑克·唐加拉", "戴維·麥克米倫"],
    displayImage: jackImg,
    images: [jackImg],
    description: "圖靈獎與諾貝爾化學獎得主共同參與，探討學術研究如何轉化為產業動力。",
    details: "本次參訪深入探討了高效能運算與有機催化在半導體製程中的應用..."
  },
  {
    id: 2,
    date: "05.07",
    time: "14:30–15:30",
    title: "建國中學特別企劃｜跨領域科學對話",
    location: "建國中學",
    speakers: ["傑克·唐加拉", "康斯坦丁·諾沃肖洛夫", "路易斯·J·伊格納羅"],
    displayImage: konImg,
    images: [konImg],
    description: "三位大師與高中生面對面，播下科學探索的種子。",
    details: "三位大師分享了各自在物理、化學與醫學領域的挫折與突破..."
  },
  {
    id: 3,
    date: "05.08",
    time: "10:00–11:30",
    title: "校園講座｜生命科學與醫學對話",
    location: "林口路亞實驗教育機構",
    speakers: ["路易斯·J·伊格納羅"],
    displayImage: luya1,
    images: [luya1, luya2, luya3, luya4, luya5, luya6], 
    description: "諾貝爾醫學獎得主分享一氧化氮的研究歷程與生命科學的未來。",
    details: "【回顧｜5/8 校園育苗專場｜科學種子在路亞發芽 🌱】\n在5月8日的「科學育苗計畫」校園專場中，路亞實驗教育機構迎來一位重量級嘉賓——1998年諾貝爾生理學或醫學獎得主 Louis J. Ignarro 教授。Ignarro 教授以深入淺出的方式分享自己在生理學研究上的突破，並與學生們對話交流，鼓勵年輕世代相信自己、勇敢探索，讓現場孩子們大受啟發。更令人感動的是，這場科學與教育的相遇，不僅點燃了好奇心，也在孩子們心中種下了未來的可能。感謝路亞實驗教育機構長期推動「科學育苗計畫」，讓更多孩子有機會親身接觸世界級科學家，在生活中看見科學、夢想與未來的連結。"
  }
];

// 4. 關鍵修正：必須使用 export default 匯出組件
export default function DialogueArchive() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-[#002B5B]">歷年國際對話</h2>
          <div className="h-[2px] flex-grow bg-slate-200"></div>
        </div>

        <div className="space-y-8">
          {archiveData.map((item) => (
            <Link 
              key={item.id}
              to={`/archive/${item.id}`}
              className="block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8 items-center">
                <div className="w-full md:w-24 shrink-0 text-center md:text-left">
                  <div className="text-[#002B5B] font-mono font-bold text-2xl">{item.date}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.time}</div>
                </div>
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
                <div className="w-32 h-24 shrink-0 rounded-xl overflow-hidden border border-slate-100 shadow-inner">
                  <img src={item.displayImage} alt="" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}