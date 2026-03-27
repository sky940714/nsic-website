import LaureatesSection from '../components/LaureatesSection';

// 匯入圖片 (請確保 assets 資料夾中有這些檔案)
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
    bio: "出生於1950年7月18日，是美國一位計算機科學家，英國皇家學會院士外籍院員，他是田納西大學電氣工程與計算機科學系特聘教授。唐加拉因開創性的概念和方法獲得了圖靈獎，這些概念和方法導致了改變世界的計算。",
    awards: [
      { year: "2021年", detail: "獲得 ACM 圖靈獎" },
      { year: "2004年", detail: "獲得 IEEE Sid Fernbach 獎項" },
      { year: "2001年", detail: "獲得 美國國家工程院院士" },
    ],
  },
  {
    id: 2,
    nameCH: "戴維·麥克米倫",
    nameEN: "David W.C. MacMillan",
    title: "諾貝爾化學獎得主",
    image: davidImg,
    bio: "1968年，麥克米倫在蘇格蘭貝爾斯希爾出生。獲格拉斯哥大學理學士學位之後，前往加利福尼亞大學爾灣分校攻讀博士。2021年，他因開發了不對稱有機催化而獲得諾貝爾化學獎。",
    awards: [
      { year: "2021年", detail: "獲得 諾貝爾化學獎項" },
      { year: "2018年", detail: "當選美國國際科學院院士" },
      { year: "2017年", detail: "獲得 野依良治獎" },
    ],
  },
  {
    id: 3,
    nameCH: "康斯坦丁·諾沃肖洛夫",
    nameEN: "Konstantin Novoselov",
    title: "諾貝爾物理學獎得主",
    image: konImg,
    bio: "出生於1974年8月23日，擁有俄羅斯、英國雙重國籍的物理學家。因為「在二維石墨烯材料的開創性實驗」而與其導師安德烈·海姆一同獲得2010年諾貝爾物理學獎。",
    awards: [
      { year: "2023年", detail: "獲得 中國科學院 外籍院士" },
      { year: "2012年", detail: "獲得 英國下級勳位爵士勳章" },
      { year: "2010年", detail: "獲得 諾貝爾物理學獎" },
    ],
  },
  {
    id: 4,
    nameCH: "路易斯·J·伊格納羅",
    nameEN: "Louis J. Ignarro",
    title: "諾貝爾醫學獎得主",
    image: louisImg,
    bio: "1941年5月31日出生於美國紐約，是一位美國藥理學家。他因發現一氧化氮(NO)在心血管系統中充當訊號分子，於1998年獲得諾貝爾生理醫學獎。",
    awards: [
      { year: "1998年", detail: "獲得 諾貝爾生理/醫學獎項" },
      { year: "1966年", detail: "獲得 明尼蘇達大學藥理學博士學位" },
      { year: "1962年", detail: "獲得 哥倫比亞大學藥學學士學位" },
    ],
  }
];

export default function Review2025() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 使用通用積木，並傳入專屬資料 */}
      <LaureatesSection pageTitle="2025 歷年回顧" laureates={data2025} />
    </div>
  );
}