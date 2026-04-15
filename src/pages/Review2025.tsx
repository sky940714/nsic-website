import DialogueArchive from '../components/DialogueArchive';
import LaureatesSection from '../components/LaureatesSection';

// 匯入大師圖片
import jackImg from '../assets/jack-dongarra.jpg';
import davidImg from '../assets/david-macmillan.jpg';
import konImg from '../assets/konstantin-novoselov.jpg';
import louisImg from '../assets/louis-ignarro.jpg';

const data2025 = [
  {
    id: 1,
    nameCH: "傑克·唐加拉",
    nameEN: "Jack Dongarra",
    title: "A C M 圖靈獎得主",
    image: jackImg,
    bio: "唐加拉因開創性的概念和方法獲得了圖靈獎，這些概念和方法導致了改變世界的計算。",
    awards: [
      { year: "2021年", detail: "獲得 ACM 圖靈獎" },
      { year: "2001年", detail: "獲得 美國國家工程院院士" },
    ],
  },
  {
    id: 2,
    nameCH: "戴維·麥克米倫",
    nameEN: "David W.C. MacMillan",
    title: "諾貝爾化學獎得主",
    image: davidImg,
    bio: "2021年，他因開發了不對稱有機催化而獲得諾貝爾化學獎。",
    awards: [
      { year: "2021年", detail: "獲得 諾貝爾化學獎項" },
      { year: "2017年", detail: "獲得 野依良治獎" },
    ],
  },
  {
    id: 3,
    nameCH: "康斯坦丁·諾沃肖洛夫",
    nameEN: "Konstantin Novoselov",
    title: "諾貝爾物理學獎得主",
    image: konImg,
    bio: "因為「在二維石墨烯材料的開創性實驗」而獲得2010年諾貝爾物理學獎。",
    awards: [
      { year: "2010年", detail: "獲得 諾貝爾物理學獎" },
    ],
  },
  {
    id: 4,
    nameCH: "路易斯·J·伊格納羅",
    nameEN: "Louis J. Ignarro",
    title: "諾貝爾醫學獎得主",
    image: louisImg,
    bio: "他因發現一氧化氮(NO)在心血管系統中充當訊號分子，於1998年獲得諾貝爾生理醫學獎。",
    awards: [
      { year: "1998年", detail: "獲得 諾貝爾生理/醫學獎項" },
    ],
  }
];

export default function Review2025() {
  return (
    <div className="pt-20 min-h-screen bg-[#002B5B]">
      {/* 1. 歷年對話事件紀錄 (深藍背景) */}
      <DialogueArchive />

      {/* 2. 參與大師介紹 (白色背景) */}
      <div className="bg-white border-t border-white/10">
        <LaureatesSection pageTitle="2025 參與科學大師" laureates={data2025} />
      </div>
    </div>
  );
}