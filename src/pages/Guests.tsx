import LaureatesSection from '../components/LaureatesSection';

// 1. 匯入 Michael Levitt 的照片
// 請確保你已經把照片放進 src/assets/michael-levitt.jpg
import levittImg from '../assets/michael-levitt.jpg'; 

// 2. 建立今年講者的資料陣列
const currentGuests = [
  {
    id: 1,
    nameCH: "邁可·列維特",
    nameEN: "Michael Levitt",
    title: "諾貝爾化學獎得主",
    image: levittImg,
    bio: "1947年，列維特在南非開普敦出生。獲倫敦國王學院物理學學士學位之後，前往劍橋大學攻讀博士學位。在博士期間，他致力於開發計算方法來理解蛋白質和DNA的分子結構，針對生物大分子的動力學行為建立創新的模擬技術，1971年憑藉這項開創性的計算生物學研究獲得生物物理學博士學位。隨後他前往以色列魏茨曼科學研究所工作，1987年加入美國史丹佛大學醫學院。2013年，萊維特教授因「為複雜化學系統開發多尺度模型」的卓越貢獻榮獲諾貝爾化學獎，成功打通了經典物理學與量子物理學之間的橋樑。",
    awards: [
      { year: "2014年", detail: "獲「德拉諾」計算生物科學獎" },
      { year: "2013年", detail: "獲 諾貝爾化學獎" },
      { year: "2001年", detail: "獲選英國皇家學會院士" },
    ]
  }
  // 如果未來還有今年的其他講者，直接在下面增加物件即可
];

export default function Guests() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 3. 呼叫通用積木，傳入「主要貴賓」標題與今年的資料 */}
      <LaureatesSection pageTitle="本年度邀請科學家" laureates={currentGuests} />
    </div>
  );
}