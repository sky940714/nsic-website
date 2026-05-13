import { ExternalLink } from 'lucide-react';

interface MediaItem {
  id: number;
  date: string;
  source: string;
  title: string;
  url: string;
}

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
        
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide shrink-0">
            媒體報導 <span className="text-slate-300 ml-2 font-light uppercase text-xl md:text-2xl">Media Coverage</span>
          </h2>
          <div className="h-[1px] flex-grow bg-slate-100"></div>
        </div>

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {mediaData.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center py-5 md:py-8 gap-3 md:gap-12 transition-all hover:bg-slate-50/50 px-4 -mx-4 rounded-xl"
            >
              {/* 手機版將日期與來源並排，節省高度 */}
              <div className="flex items-center gap-4 md:contents">
                <div className="text-slate-400 font-mono text-sm md:text-lg shrink-0">
                  {item.date}
                </div>

                <div className="shrink-0">
                  <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-50 text-[#002B5B] text-[10px] md:text-sm font-bold rounded shadow-sm border border-blue-100 uppercase tracking-widest">
                    {item.source}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-base md:text-xl font-bold text-slate-700 group-hover:text-[#002B5B] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2 text-slate-300 group-hover:text-[#002B5B] group-hover:translate-x-1 transition-all">
                <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">READ ARTICLE</span>
                <ExternalLink className="w-5 h-5" />
              </div>
              
              <div className="md:hidden flex items-center text-[#002B5B] text-xs font-bold">
                閱讀全文 →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}