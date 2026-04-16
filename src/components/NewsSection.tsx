import { useState } from 'react';
import { Clock, X } from 'lucide-react';

// === 圖片匯入區 ===
import new1Img from '../assets/news/new1.jpg';
import new2Img from '../assets/news/new2.jpg';

// 定義新聞資料的型別
interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
  content: string;
  image: string;
}

// === 新聞資料庫 (依照日期由新到舊排列) ===
const newsData: NewsItem[] = [
  {
    id: 1,
    date: "2026-04-13",
    title: "圓夢東部｜把與世界對話的機會，帶進宜蘭大學百年校慶",
    summary: "今天剛走進宜蘭大學禮堂，看著一排排空著的紅色座椅，眼眶瞬間紅了。這一刻，腦海裡浮現的是孩子們坐在這裡聆聽諾貝爾得主演講的樣子⋯",
    content: "今天剛走進宜蘭大學禮堂，看著一排排空著的紅色座椅，眼眶瞬間紅了。\n\n這一刻，腦海裡浮現的是孩子們坐在這裡聆聽諾貝爾得主演講的樣子⋯無論是家在東部，還是在這片土地上求學的孩子，他們同樣聰明、同樣充滿希望，卻常常因為地理的阻隔，少了一點親眼看見世界的機會。\n\n這一刻，心裡有個聲音在對自己說：愛蓮妳終於做到了，終於把這份與世界對話的機會，帶進了東部的校園，讓孩子們能真實地坐在這裡，跟世界頂尖的得主處在同一個空間，想讓他們知道，世界沒有遺忘他們，世界級的智慧與光芒，此刻就近在咫尺。\n\n感謝宜蘭大學校長與團隊的用心，在百年校慶的歷史時刻，謝謝你們如此細緻的安排，協助邀請宜蘭、花蓮、台東地區學校孩子們一起走進這個禮堂，讓這份禮物能圓滿送達，一起走進這個場域，接受這場世界的洗禮。\n\n站在禮堂裡，看著那些椅子，我心裡真的很激動、很安慰，過去所經歷的挑戰與疲憊，在這一刻都變得值得了，這件事對我而言比什麼都重要，我沒有讓這個願望只停留在想像裡。\n\n今天，是最開心的時刻\n今天，是最安慰的一天\n\n#國立宜蘭大學百年校慶",
    image: new1Img 
  },
  {
    id: 2,
    date: "2026-04-09",
    title: "籌備幕後｜重視每一個細節，感謝最強國際執行夥伴",
    summary: "今天場勘。走進去第一件事習慣先繞一圈，看桌子的間距、光線、人站哪裡？視線會到哪裡？不管大小場，我一定親自到現場推敲每個細節...",
    content: "今天場勘。\n\n走進去第一件事習慣先繞一圈，看桌子的間距、光線、人站哪裡？視線會到哪裡？不管大小場，我一定親自到現場推敲每個細節，很知道每一場會議、每一個節奏都是對講者及現場的尊重，那個當下對某個人來說，可能是影響往後的一個重要時刻，這種事沒辦法隨便。\n\n不知為什麼，今天一進現場就想到去年五月，那超級的五天四夜接待及三天14個大小現場⋯\n\n回想在當下，因為知道有紅映團隊，我不用一直回頭確認，采傑隨行秘書們在貴賓旁安靜照顧，不搶戲，但什麼都想到了～幾位得主回去之後都還特別提到他們的細膩。\n\n今年一樣有他們在，我放心！\n\n#國際執行夥伴\n#紅映國際活動製作\n#采傑國際會議服務",
    image: new2Img
  }
];

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* 標題區 */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">最新消息</h2>
          <div className="h-[2px] flex-grow bg-slate-200"></div>
        </div>
        
        {/* 新聞列表 */}
        <div className="space-y-12">
          {newsData.map((news, index) => (
            <div 
              key={news.id} 
              onClick={() => setSelectedNews(news)}
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start animate-on-scroll is-visible cursor-pointer group ${index !== newsData.length - 1 ? 'border-b border-slate-200 pb-10 md:pb-12' : ''}`}
            >
              {/* 左側縮圖 */}
              <div className="w-full md:w-5/12 shrink-0 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition duration-300 aspect-video md:aspect-[4/3] bg-slate-200">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* 右側文字 */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <div className="flex items-center text-xs text-slate-500 mb-2 md:mb-3 font-medium">
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> {news.date}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#002B5B] transition leading-snug">
                  {news.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-3">
                  {news.summary}
                </p>
                <span className="text-slate-400 group-hover:text-[#002B5B] transition text-sm font-bold tracking-widest">
                  查看詳情 <span className="ml-1 inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 彈出視窗 (Modal) */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm transition-opacity">
          
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 md:w-10 md:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal 上方：大圖片 */}
            <div className="w-full aspect-video md:h-96 shrink-0 relative bg-slate-100">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Modal 下方：完整文字內容 */}
            <div className="p-6 sm:p-10 md:p-12 pt-2 md:pt-4 bg-white">
              <div className="flex items-center gap-2 text-[#002B5B] mb-4 text-xs md:text-sm font-bold tracking-widest">
                <Clock className="w-4 h-4" />
                {selectedNews.date}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-8 leading-tight">
                {selectedNews.title}
              </h2>
              
              <div className="text-base md:text-lg text-slate-600 leading-relaxed text-justify whitespace-pre-wrap">
                {selectedNews.content}
              </div>
            </div>

          </div>
          
          <div 
            className="absolute inset-0 z-[-1]" 
            onClick={() => setSelectedNews(null)}
          ></div>
        </div>
      )}

    </section>
  );
}