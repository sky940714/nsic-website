import { ExternalLink } from 'lucide-react';

interface MediaItem {
  id: number;
  date: string;
  source: string;
  title: string;
  url: string;
}

// 已根據新日期重新排序 (越新越上面)
const mediaData: MediaItem[] = [
  {
    id: 4,
    date: "2026.05.13",
    source: "工商時報",
    title: "2026 諾科獎國際科學對話揭幕，Michael Levitt 分享分子科學願景",
    url: "https://www.ctee.com.tw/news/20260513701602-431204",
  },
  {
    id: 1,
    date: "2026.05.13",
    source: "更生日報",
    title: "諾貝爾得主訪國立學校、推動科學育苗計畫",
    url: "https://www.ksnews.com.tw/e/101231",
  },
  {
    id: 5,
    date: "2026.05.11",
    source: "Yahoo新聞",
    title: "Michael Levitt 來台啟動 2026 諾科獎國際科學對話",
    url: "https://tw.news.yahoo.com/michael-levitt%E4%BE%86%E5%8F%B0%E5%95%9F%E5%8B%952026%E8%AB%BE%E7%A7%91%E7%8D%8E%E5%9C%8B%E9%9A%9B%E7%A7%91%E5%AD%B8%E5%B0%8D%E8%A9%B1-120426563.html",
  },
  {
    id: 3,
    date: "2026.05.11",
    source: "更生日報",
    title: "諾貝爾大師 Michael Levitt 抵台，2026 諾科獎峰會點燃科學熱情",
    url: "https://www.ksnews.com.tw/e/100429",
  },
  {
    id: 2,
    date: "2026.05.11",
    source: "經濟日報",
    title: "諾貝爾化學獎得主Michael Levitt五月來台 啟動諾科獎國際科學對話",
    url: "https://share.google/AaiuM8293HGQZzKUx",
  },
];

export default function MediaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide shrink-0">
            媒體報導 <span className="text-slate-300 ml-2 font-light uppercase text-xl md:text-2xl">Media Coverage</span>
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100"></div>
        </div>

        {/* 媒體報導列表 */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {mediaData.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center py-8 gap-4 md:gap-12 transition-all hover:bg-slate-50/50 px-4 -mx-4 rounded-xl"
            >
              {/* 日期放大：改為 text-base md:text-lg */}
              <div className="text-slate-400 font-mono text-base md:text-lg shrink-0">
                {item.date}
              </div>

              {/* 媒體名稱標籤放大：改為 text-sm，並增加 px-4 py-1.5 的內距 */}
              <div className="shrink-0">
                <span className="px-4 py-1.5 bg-blue-50 text-[#002B5B] text-sm font-bold rounded shadow-sm border border-blue-100 uppercase tracking-widest">
                  {item.source}
                </span>
              </div>

              {/* 新聞標題 */}
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-slate-700 group-hover:text-[#002B5B] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* 右側箭頭圖示 */}
              <div className="hidden md:flex items-center gap-2 text-slate-300 group-hover:text-[#002B5B] group-hover:translate-x-1 transition-all">
                <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">READ ARTICLE</span>
                <ExternalLink className="w-5 h-5" />
              </div>
              
              {/* 手機版顯示的小箭頭 */}
              <div className="md:hidden flex items-center text-[#002B5B] text-sm font-bold">
                閱讀全文 →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}