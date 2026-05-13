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
    id: 1,
    date: "2025.05.09",
    source: "更生日報",
    title: "諾貝爾得主訪國立學校、推動科學育苗計畫",
    url: "https://www.ksnews.com.tw/e/101231",
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
              className="group flex flex-col md:flex-row md:items-center py-8 gap-4 md:gap-12 transition-all hover:bg-slate-50/50 px-4 -mx-4 rounded-xl"
            >
              <div className="text-slate-400 font-mono text-sm md:text-base shrink-0">
                {item.date}
              </div>

              <div className="shrink-0">
                <span className="px-3 py-1 bg-blue-50 text-[#002B5B] text-xs font-bold rounded shadow-sm border border-blue-100 uppercase tracking-widest">
                  {item.source}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-slate-700 group-hover:text-[#002B5B] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2 text-slate-300 group-hover:text-[#002B5B] group-hover:translate-x-1 transition-all">
                <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">READ ARTICLE</span>
                <ExternalLink className="w-5 h-5" />
              </div>
              
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