import { useState } from 'react';
import { Clock, X } from 'lucide-react';

// === 圖片匯入區 ===
import new1Img from '../assets/news/new1.jpg';
import new2Img from '../assets/news/new2.jpg';
import new3Img from '../assets/news/new3.jpg'; // 新增的圖片

interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
  content: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 3,
    date: "2026-05-16",
    title: "啟發青年｜讓台灣孩子自然擁有與世界對話的自信",
    summary: "2026 諾科獎國際科學論壇結束後，一直記得的不是舞台也不是掌聲，是在宜蘭大學青年學生站起來用英文向 Michael Levitt 教授提問的那一刻，心裡有一種很深的感受，台灣的孩子不是不敢，是過去很少有機會站在這樣的現場裡。",
    content: "2026 諾科獎國際科學論壇結束後，一直記得的不是舞台也不是掌聲，是在宜蘭大學青年學生站起來用英文向 Michael Levitt 教授提問的那一刻，心裡有一種很深的感受，台灣的孩子不是不敢，是過去很少有機會站在這樣的現場裡。\n\n這也是我一直想做的，不是把諾貝爾獎得主「請來」而已，而是希望有一天，台灣年輕人會很自然地覺得自己可以跟世界對話，這次在宜蘭大學真的有看到這畫面，孩子們專注問安靜聽，問題問得也很好，這種感覺不是熱鬧，是一種很真實的交流。\n\nMichael Levitt 教授離開前，寫了一張紙條和一個紀念物給我，一句：\n“Thanks for everything.”\n很簡單，但讓我感動，雖然相處不久卻感受到彼此的真心。\n\nThank you, Professor Michael Levitt, for your kindness, trust, and the inspiration you brought to Taiwan.",
    image: new3Img 
  },
  {
    id: 1,
    date: "2026-04-13",
    title: "圓夢東部｜把與世界對話的機會，帶進宜蘭大學百年校慶",
    summary: "今天剛走進宜蘭大學禮堂，看著一排排空著的紅色座椅，眼眶瞬間紅了。這一刻，腦海裡浮現的是孩子們坐在這裡聆聽諾貝爾得主演講的樣子⋯",
    content: "今天剛走進宜蘭大學禮堂，看著一排排空著的紅色座椅，眼眶瞬間紅了。\n\n這一刻，腦海裡浮現的是孩子們坐在這裡聆聽諾貝爾得主演講的樣子⋯無論是家在東部，還是在這片土地上求學的孩子，他們同樣聰明、同樣充滿希望，卻常常因為地理的阻隔，少了一點親眼看見世界的機會。\n\n這一刻，心裡有個聲音在對自己說：愛蓮妳終於做到了，終於把這份與世界對話的機會，帶進了東部的校園，讓孩子們能真實地坐在這裡，跟世界頂尖的得主處在同一個空間，想讓他們知道，世界沒有遺忘他們，世界級的智慧與光芒，此刻就近在咫尺。\n\n感謝宜蘭大學校長與團隊的用心，在百年校慶的歷史時刻，謝謝你們如此細緻的安排，協助邀請宜蘭、花蓮、台東地區學校孩子們一起走進這個禮堂，讓這份禮物能圓滿送達，一起走進這個場域，接受這場世界的洗禮。\n\n站在禮堂裡，看著那些椅子，我心裡真的很激動、很安慰，過去所經歷的挑戰與疲憊，在這一刻都變得值得了，這件事對我而言比什麼都重要，我沒有讓這個願望只停留在想像裡。\n\n今天，是最開心的時刻\n今天，是最安慰的一天\n\n#國立宜蘭大學百年校慶",
    image: new2Img 
  },
  {
    id: 2,
    date: "2026-04-09",
    title: "籌備幕後｜重視每一個細節，感謝最強國際執行夥伴",
    summary: "今天場勘。走進去第一件事習慣先繞一圈，看桌子的間距、光線、人站哪裡？視線會到哪裡？不管大小場，我一定親自到現場推敲每個細節...",
    content: "今天場勘。\n\n走進去第一件事習慣先繞一圈，看桌子的間距、光線、人站哪裡？視線會到哪裡？不管大小場，我一定親自到現場推敲每個細節，很知道每一場會議、每一個節奏都是對講者及現場的尊重，那個當下對某個人來說，可能是影響往後的一個重要時刻，這種事沒辦法隨便。\n\n不知為什麼，今天一進現場就想到去年五月，那超級的五天四夜接待及三天14個大小現場⋯\n\n回想在當下，因為知道有紅映團隊，我不用一直回頭確認，采傑隨行秘書們在貴賓旁安靜照顧，不搶戲，但什麼都想到了～幾位得主回去之後都還特別提到他們的細膩。\n\n今年一樣有他們在，我放心！\n\n#國際執行夥伴\n#紅映國際活動製作\n#采傑國際會議服務",
    image: new1Img 
  }
];

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="pt-12 pb-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ================================================================= */}
        {/* 1. 更新後的標題區塊 (與媒體報導樣式一致) */}
        {/* ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#002B5B] rounded-full"></span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-slate-800">
                最新消息
              </h2>
            </div>
            <p className="text-xs md:text-sm tracking-[0.25em] text-slate-400 font-light uppercase">
              Latest News
            </p>
          </div>
        </div>
        
        <div className="space-y-12">
          {newsData.map((news, index) => (
            <div 
              key={news.id} 
              onClick={() => setSelectedNews(news)}
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start animate-on-scroll is-visible cursor-pointer group ${index !== newsData.length - 1 ? 'border-b border-slate-200 pb-10 md:pb-12' : ''}`}
            >
              <div className="w-full md:w-5/12 shrink-0 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition duration-300 aspect-video md:aspect-[4/3] bg-slate-200">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
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

      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 md:w-10 md:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-video md:h-96 shrink-0 relative bg-slate-100">
              {/* 優化為 object-contain，讓手寫紙條完整顯示不被裁切 */}
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            {/* ✨ 這裡已將 pb-32 加到這個外層 div 的 class 裡面，解決擋字問題 ✨ */}
            <div className="p-6 pb-32 sm:p-10 sm:pb-32 md:p-12 pt-2 md:pt-4 bg-white">
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
          <div className="absolute inset-0 z-[-1]" onClick={() => setSelectedNews(null)}></div>
        </div>
      )}
    </section>
  );
}