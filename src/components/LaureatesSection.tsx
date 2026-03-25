import { Award } from 'lucide-react';
import jackImg from '../assets/jack-dongarra.jpg';
import davidImg from '../assets/david-macmillan.jpg';
import konImg from '../assets/konstantin-novoselov.jpg';
import louisImg from '../assets/louis-ignarro.jpg';

// 定義資料結構
const laureates = [
  {
    id: 1,
    nameCH: "傑克·唐加拉",
    nameEN: "Jack Dongarra",
    title: "A C M 圖靈獎得主",
    type: "TURING AWARD",
    bio: "出生於1950年7月18日，是美國一位計算機科學家，英國皇家學會院士外籍院員，他是田納西大學電氣工程與計算機科學系特聘教授。橡樹嶺國家實驗室計算機科學與數學學部傑出研究人員，曼徹斯特大學數學學院圖靈獎學金，萊斯大學計算機科學系兼職教授，同時也是創新計算實驗室的創始主任。唐加拉因開創性的概念和方法獲得了圖靈獎，這些概念和方法導致了改變世界的計算。他的算法和軟體被認為為推動了高性能計算的發展，並在人工智慧的計算科學到計算機圖形學的許多領域產生了重大影響。",
    awards: [
      { year: "2021年", detail: "獲得 ACM 圖靈獎" },
      { year: "2004年", detail: "獲得 IEEE Sid Fernbach 獎項" },
      { year: "2001年", detail: "獲得 美國國家工程院院士" },
    ],
    // 這裡請替換成你 assets 裡的圖片路徑
    image: jackImg, 
  },
  {
    id: 2,
    nameCH: "戴維·麥克米倫",
    nameEN: "David W.C. MacMillan",
    title: "諾貝爾化學獎得主",
    type: "NOBEL PRIZE",
    bio: "1968年，麥克米倫在蘇格蘭貝爾斯希爾出生。獲格拉斯哥大學理學士學位之後，留校與厄尼·科爾文 (Ernie Colvin) 共事。1990年，他離開英國，前往加利福尼亞大學爾灣分校攻讀博士，師從拉里·E·奧弗曼，針對雙環四氫呋喃的立體控制形成開發新的反應方法，最終完整合成脫乙醯氧基白蛋白醋酸鹽，為單胞菌素二萜，通過軟珊瑚白柳珊瑚 (Eunicella stricta) 分離得出，1996年，他憑藉該項畢業研究獲得哲學博士學位。",
    awards: [
      { year: "2021年", detail: "獲得 諾貝爾化學獎項" },
      { year: "2018年", detail: "當選美國國際科學院院士" },
      { year: "2017年", detail: "獲得 野依良治獎" },
      { year: "2015年", detail: "獲得 哈里森豪獎" },
    ],
    image: davidImg,
  },
  {
    id: 3,
    nameCH: "康斯坦丁·諾沃肖洛夫",
    nameEN: "Konstantin Novoselov",
    title: "諾貝爾物理學獎得主",
    type: "NOBEL PRIZE",
    bio: "出生於1974年8月23日，擁有俄羅斯、英國雙重國籍的物理學家，於莫斯科物理技術學院及奈梅亨拉德伯德大學博士學位畢業，為曼徹斯特大學教授，因為「在二維石墨烯材料的開創性實驗」而與其導師安德烈·海姆一同獲得2010年諾貝爾物理學獎。",
    awards: [
      { year: "2023年", detail: "獲得 中國科學院 外籍院士" },
      { year: "2012年", detail: "獲得 英國下級勳位爵士勳章" },
      { year: "2010年", detail: "獲得 諾貝爾物理學獎" },
    ],
    image: konImg,
  },
  {
    id: 4,
    nameCH: "路易斯·J·伊格納羅",
    nameEN: "Louis J. Ignarro",
    title: "諾貝爾醫學獎得主",
    type: "NOBEL PRIZE",
    bio: "1941 年 5 月 31 日出生於美國紐約州布魯克林，是一位美國藥理學家，他與羅伯特·福奇戈特和費里德·穆拉德因發現一氧化氮(NO)在心血管系統中充當訊號分子。這項工作揭示了一種全新的機制，透過這種機制，體內的血管可以放鬆和擴張，例如，成功的抗陽痿藥物枸櫞酸西地那非 (威而鋼) 背後的原理就是基於這項研究。伊格納羅就讀於哥倫比亞大學，於 1962 年獲得藥學學士學位。1966 年獲得明尼蘇達大學藥理學博士學位。他於2013年以名譽教授身份退休。",
    awards: [
      { year: "1998年", detail: "獲得 諾貝爾生理/醫學獎項" },
      { year: "1966年", detail: "獲得 明尼蘇達大學藥理學博士學位" },
      { year: "1962年", detail: "獲得 哥倫比亞大學藥學學士學位" },
    ],
    image: louisImg,
  }
];

export default function LaureatesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 標題區 */}
        <div className="mb-16 animate-on-scroll is-visible">
          <h2 className="text-3xl font-bold text-slate-800">貴賓介紹</h2>
          <p className="text-xl text-slate-500 font-light mt-1">Nobel Laureate</p>
          <div className="w-12 h-1 bg-blue-600 mt-4"></div>
        </div>

        {/* 講者列表 */}
        <div className="space-y-32">
          {laureates.map((person, index) => (
            <div 
              key={person.id} 
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-start animate-on-scroll is-visible ${index % 2 !== 0 ? '' : ''}`}
            >
              {/* 左側：大頭照 */}
              <div className="w-full md:w-2/5 shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-slate-100 rounded-2xl -z-10 group-hover:bg-blue-50 transition-colors"></div>
                  <img 
                    src={person.image} 
                    alt={person.nameCH} 
                    className="w-full aspect-[4/5] object-cover rounded-xl shadow-lg grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* 右側：文字資訊 */}
              <div className="w-full md:w-3/5">
                {/* 勳銜標籤 */}
                <div className="flex items-center mb-6">
                  <div className="bg-[#003399] text-white px-6 py-1.5 text-sm tracking-[0.2em] font-medium">
                    {person.title}
                  </div>
                  {person.type === "TURING AWARD" && (
                     <div className="ml-4 flex items-center text-blue-600 font-bold text-xs">
                        <Award className="w-4 h-4 mr-1" /> ACM TURING
                     </div>
                  )}
                </div>

                {/* 姓名 */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#003399] mb-1">{person.nameCH}</h3>
                  <p className="text-2xl font-bold text-blue-900/80 tracking-tight">{person.nameEN}</p>
                </div>

                {/* 簡介 */}
                <p className="text-slate-600 leading-relaxed text-justify mb-10 text-[15px]">
                  {person.bio}
                </p>

                {/* 獲獎表格 */}
                <div className="border border-blue-100 rounded-lg overflow-hidden bg-blue-50/30">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      {person.awards.map((award, idx) => (
                        <tr key={idx} className={idx !== person.awards.length - 1 ? "border-b border-blue-100" : ""}>
                          <td className="px-6 py-3 font-bold text-blue-700 w-24">{award.year}</td>
                          <td className="px-6 py-3 text-slate-600">{award.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}