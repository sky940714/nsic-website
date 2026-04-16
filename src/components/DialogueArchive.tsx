import { Link } from 'react-router-dom';

// 匯入 5/8 (路亞) 圖片
import luya1 from '../assets/luya/luya-1.jpg';
import luya2 from '../assets/luya/luya-2.jpg';
import luya3 from '../assets/luya/luya-3.jpg';
import luya4 from '../assets/luya/luya-4.jpg';
import luya5 from '../assets/luya/luya-5.jpg';
import luya6 from '../assets/luya/luya-6.jpg';

// 匯入 5/7 (建中及貴賓之夜) 圖片
import night1 from '../assets/nightevent/night1.jpg';
import night2 from '../assets/nightevent/night2.jpg';
import night3 from '../assets/nightevent/night3.jpg';
import night4 from '../assets/nightevent/night4.jpg';
import night6 from '../assets/nightevent/night6.jpg';
import night7 from '../assets/nightevent/night7.jpg';

// 匯入 5/8 (北一女中) 圖片
import tfg1 from '../assets/tfghighschool/tfg1.jpg';
import tfg2 from '../assets/tfghighschool/tfg2.jpg';
import tfg3 from '../assets/tfghighschool/tfg3.jpg';
import tfg4 from '../assets/tfghighschool/tfg4.jpg';
import tfg5 from '../assets/tfghighschool/tfg5.jpg';
import tfg6 from '../assets/tfghighschool/tfg6.jpg';
import tfg7 from '../assets/tfghighschool/tfg7.jpg';

export interface EventType {
  id: number;
  date: string;
  time: string; // 資料層保留，但畫面上不顯示
  title: string;
  location: string;
  speakers: string[];
  displayImage: string;
  images: string[]; 
  description: string;
  details: string;
}

// 資料陣列：依照日期由新到舊排列
export const archiveData: EventType[] = [
  {
    id: 1, // 最新的 5/8 北一女活動
    date: "05.08",
    time: "09:00–12:00",
    title: "台北市北一女中｜向大師學習：諾貝爾化學獎得主對談",
    location: "北一女中",
    speakers: ["戴維·麥克米倫"],
    displayImage: tfg1,
    images: [tfg1, tfg2, tfg3, tfg4, tfg5, tfg6, tfg7],
    description: "2021年諾貝爾化學獎得主 David W.C. MacMillan 與北一女中學生深度對談，並親自展示諾貝爾獎牌。",
    details: "【回顧｜5/8 向大師學習｜北一女迎來諾貝爾化學獎得主 】\n5月8日上午，由台北市教育局主辦的「台北市高中公益場－向大師學習」於北一女中盛大舉行，榮幸邀請到2021年諾貝爾化學獎得主 David W.C. MacMillan 與北市多所高中學子對談，展開一場充滿啟發與思辨的科學饗宴。\n為了讓同學們能夠親眼見證諾貝爾的榮耀，MacMillan 教授特地從國外攜帶他本人所獲得的諾貝爾獎牌來到現場，引起全場驚喜與感動。同學們不僅近距離接觸國際級大師，還親眼看到象徵全球科學最高榮譽的獎牌，現場氣氛熱烈而難忘。感謝北一女中協辦與台北市教育局的精心規劃，讓青年學子在青春階段就能與世界頂尖科學家交流對話，激盪對未來的更多想像。"
  },
  {
    id: 3, // 同為 5/8 的路亞活動
    date: "05.08",
    time: "10:00–11:30",
    title: "校園講座｜生命科學與醫學對話",
    location: "林口路亞實驗教育機構",
    speakers: ["路易斯·J·伊格納羅"],
    displayImage: luya1,
    images: [luya1, luya2, luya3, luya4, luya5, luya6], 
    description: "諾貝爾醫學獎得主分享一氧化氮的研究歷程與生命科學的未來。",
    details: "【回顧｜5/8 校園育苗專場｜科學種子在路亞發芽 🌱】\n在5月8日的「科學育苗計畫」校園專場中，路亞實驗教育機構迎來一位重量級嘉賓——1998年諾貝爾生理學或醫學獎得主 Louis J. Ignarro 教授。Ignarro 教授以深入淺出的方式分享自己在生理學研究上的突破，並與學生們對話交流，鼓勵年輕世代相信自己、勇敢探索，讓現場孩子們大受啟發。更令人感動的是，這場科學與教育的相遇，不僅點燃了好奇心，也在孩子們心中種下了未來的可能。感謝路亞實驗教育機構長期推動「科學育苗計畫」，讓更多孩子有機會親身接觸世界級科學家，在生活中看見科學、夢想與未來的連結。"
  },
  {
    id: 2, // 5/7 夜間活動與建中行程
    date: "05.07",
    time: "14:30–21:00",
    title: "建國中學及貴賓之夜｜跨領域科學對話",
    location: "建國中學、北科大、W Hotel",
    speakers: ["傑克·唐加拉", "康斯坦丁·諾沃肖洛夫", "路易斯·J·伊格納羅"],
    displayImage: night1,
    images: [night1, night2, night3, night4, night6, night7],
    description: "圖靈獎、諾貝爾醫學獎、諾貝爾物理學獎得主與學生面對面交流。",
    details: "【回顧｜2025臺灣諾科獎週開幕日精彩時刻】\n2025臺灣諾科獎週於5月7日精彩展開！當日上午，大師們特別走訪建國中學，與師生進行深度交流，感受到台灣年輕世代對科學的熱情與潛力。下午在台北科技大學舉行的正式開幕典禮，象徵這場國際級科學盛會隆重啟動，四位諾貝爾與圖靈獎得主齊聚一堂，場面盛大。晚間於W Hotel舉辦的「超級貴賓之夜」更匯聚來自產官學界的重要嘉賓，與國際大師共話未來，共享知識與創新的交流盛宴。\n這一天，為2025諾科獎台北峰會寫下精彩序章，也開啟科學與教育的新對話。更多高光時刻，敬請持續關注！"
  }
];

export default function DialogueArchive() {
  return (
    <div className="bg-[#f8fafc] py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">歷年國際對話</h2>
          <div className="h-[2px] flex-grow bg-slate-200"></div>
        </div>

        {/* 卡片列表 */}
        <div className="space-y-12">
          {archiveData.map((item) => (
            <Link 
              key={item.id}
              to={`/archive/${item.id}`}
              className="block bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group border border-slate-100"
            >
              {/* 改用 items-center 確保垂直置中，移除 items-stretch */}
              <div className="flex flex-col md:flex-row items-center">
                
                {/* 區塊 1：文字資訊 (手機版在下方，電腦版在左方) */}
                <div className="order-2 md:order-1 flex-1 w-full p-8 md:p-12 flex flex-col justify-center">
                  
                  {/* 日期與地點 */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-[#002B5B] tracking-tighter">
                      {item.date}
                    </span>
                    <span className="px-4 py-1.5 bg-blue-50/50 text-[#002B5B] text-xs md:text-sm rounded-full font-semibold border border-blue-100/50">
                      {item.location}
                    </span>
                  </div>
                  
                  {/* 標題與簡介 */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#002B5B] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* 滑動顯示的「查看更多」按鈕 */}
                  <div className="mt-auto flex items-center text-sm font-bold text-[#002B5B] tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                    VIEW DETAILS <span className="ml-2">→</span>
                  </div>
                </div>

                {/* 區塊 2：大圖片 (強制固定比例 aspect-[4/3] 解決大小不一的問題) */}
                <div className="order-1 md:order-2 w-full md:w-5/12 shrink-0 relative overflow-hidden aspect-video md:aspect-[4/3]">
                  <img 
                    src={item.displayImage} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}