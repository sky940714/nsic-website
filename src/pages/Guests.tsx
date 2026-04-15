import michaelLevittImg from '../assets/michael-levitt.jpg';
import jackDongarraImg from '../assets/jack-dongarra.jpg';
import konNovoselovImg from '../assets/konstantin-novoselov.jpg';
import louisIgnarroImg from '../assets/louis-ignarro.jpg';
import davidMacmillanImg from '../assets/david-macmillan.jpg';

// 1. 將貴賓分類
const mainMasters = [
  {
    id: 1,
    nameZh: "邁可·列維特",
    nameEn: "MICHAEL LEVITT",
    title: "2013年諾貝爾化學獎得主",
    image: michaelLevittImg,
    description: "1947年，列維特在南非開普敦出生。他致力於蛋白質的電腦模擬，這一領域在當時剛剛起步，他開發了第一個計算蛋白質分子動力學的程式...",
  }
];

const otherMasters = [
  {
    id: 2,
    nameZh: "傑克·唐加拉",
    nameEn: "JACK DONGARRA",
    title: "圖靈獎得主",
    image: jackDongarraImg,
  },
  {
    id: 3,
    nameZh: "康斯坦丁·諾沃肖洛夫",
    nameEn: "KONSTANTIN NOVOSELOV",
    title: "諾貝爾物理學獎得主",
    image: konNovoselovImg,
  },
  {
    id: 4,
    nameZh: "路易斯·J·伊格納羅",
    nameEn: "LOUIS J. IGNARRO",
    title: "諾貝爾醫學獎得主",
    image: louisIgnarroImg,
  },
  {
    id: 5,
    nameZh: "戴維·麥克米倫",
    nameEn: "DAVID MACMILLAN",
    title: "諾貝爾化學獎得主",
    image: davidMacmillanImg,
  }
];

export default function Guests() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 標題 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">科學大師陣容</h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 區塊一：主要貴賓 (大圖模式) */}
        <div className="space-y-20 mb-24">
          {mainMasters.map(master => (
            <div key={master.id} className="relative group overflow-hidden rounded-3xl bg-slate-900 aspect-[16/9] md:aspect-[21/9]">
              {/* 背景大圖 */}
              <img 
                src={master.image} 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" 
                alt={master.nameZh} 
              />
              {/* 文字疊加層 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-3xl">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4">
                    {master.title}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{master.nameZh}</h2>
                  <p className="text-xl font-mono text-blue-400 mb-6">{master.nameEn}</p>
                  <p className="text-slate-200 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-none">
                    {master.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 區塊二：其他貴賓 (維持原本並排一行的小圖模式) */}
        <div className="border-t border-slate-100 pt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">更多受邀貴賓</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {otherMasters.map(master => (
              <div key={master.id} className="text-center group">
                <div className="aspect-square rounded-2xl overflow-hidden border border-slate-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img src={master.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={master.nameZh} />
                </div>
                <h4 className="font-bold text-slate-800">{master.nameZh}</h4>
                <p className="text-xs text-slate-400 mt-1">{master.nameEn}</p>
                <p className="text-[10px] text-blue-600 mt-2 font-medium">{master.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}