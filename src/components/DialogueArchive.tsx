import { Link } from 'react-router-dom';

// 匯入 5/9 (峰會晚宴) 圖片 [已統一加上 2025 路徑]
import nightnight1 from '../assets/2025/nightnightevent/nightnight1.jpg';
import nightnight2 from '../assets/2025/nightnightevent/nightnight2.jpg';
import nightnight3 from '../assets/2025/nightnightevent/nightnight3.jpg';
import nightnight4 from '../assets/2025/nightnightevent/nightnight4.jpg';
import nightnight5 from '../assets/2025/nightnightevent/nightnight5.jpg';
import nightnight6 from '../assets/2025/nightnightevent/nightnight6.jpg';
import nightnight7 from '../assets/2025/nightnightevent/nightnight7.jpg';
import nightnight8 from '../assets/2025/nightnightevent/nightnight8.jpg';

// 匯入 5/9 (北科大 最終場 - Louis J. Ignarro) 圖片 [已統一加上 2025 路徑]
import ntut4_1 from '../assets/2025/ntut/ntut4-1.jpg';
import ntut4_2 from '../assets/2025/ntut/ntut4-2.jpg';
import ntut4_3 from '../assets/2025/ntut/ntut4-3.jpg';
import ntut4_4 from '../assets/2025/ntut/ntut4-4.jpg';
import ntut4_5 from '../assets/2025/ntut/ntut4-5.jpg';
import ntut4_6 from '../assets/2025/ntut/ntut4-6.jpg';

// 匯入 5/8 (北科大 第三場 - Konstantin Novoselov) 圖片
import ntut3_1 from '../assets/2025/ntut/ntut3-1.jpg';
import ntut3_2 from '../assets/2025/ntut/ntut3-2.jpg';
import ntut3_3 from '../assets/2025/ntut/ntut3-3.jpg';
import ntut3_4 from '../assets/2025/ntut/ntut3-4.jpg';
import ntut3_5 from '../assets/2025/ntut/ntut3-5.jpg';
import ntut3_6 from '../assets/2025/ntut/ntut3-6.jpg';

// 匯入 5/8 (北科大 第二場 - David W.C. MacMillan) 圖片
import ntut2_1 from '../assets/2025/ntut/ntut2-1.jpg';
import ntut2_2 from '../assets/2025/ntut/ntut2-2.jpg';
import ntut2_3 from '../assets/2025/ntut/ntut2-3.jpg';
import ntut2_4 from '../assets/2025/ntut/ntut2-4.jpg';
import ntut2_5 from '../assets/2025/ntut/ntut2-5.jpg';
import ntut2_6 from '../assets/2025/ntut/ntut2-6.jpg';

// 匯入 5/8 (北科大 第一場 - Jack Dongarra) 圖片
import ntut1_1 from '../assets/2025/ntut/ntut1-1.jpg';
import ntut1_2 from '../assets/2025/ntut/ntut1-2.jpg';
import ntut1_3 from '../assets/2025/ntut/ntut1-3.jpg';
import ntut1_4 from '../assets/2025/ntut/ntut1-4.jpg';

// 匯入 5/8 (路亞) 圖片
import luya1 from '../assets/2025/luya/luya-1.jpg';
import luya2 from '../assets/2025/luya/luya-2.jpg';
import luya3 from '../assets/2025/luya/luya-3.jpg';
import luya4 from '../assets/2025/luya/luya-4.jpg';
import luya5 from '../assets/2025/luya/luya-5.jpg';
import luya6 from '../assets/2025/luya/luya-6.jpg';

// 匯入 5/7 (貴賓之夜) 圖片
import night1 from '../assets/2025/nightevent/night1.jpg';
import night2 from '../assets/2025/nightevent/night2.jpg';
import night3 from '../assets/2025/nightevent/night3.jpg';
import night4 from '../assets/2025/nightevent/night4.jpg';
import night6 from '../assets/2025/nightevent/night6.jpg';
import night7 from '../assets/2025/nightevent/night7.jpg';
import night8 from '../assets/2025/nightevent/night8.jpg';

// 匯入 5/8 (北一女中) 圖片
import tfg1 from '../assets/2025/tfghighschool/tfg1.jpg';
import tfg2 from '../assets/2025/tfghighschool/tfg2.jpg';
import tfg3 from '../assets/2025/tfghighschool/tfg3.jpg';
import tfg4 from '../assets/2025/tfghighschool/tfg4.jpg';
import tfg5 from '../assets/2025/tfghighschool/tfg5.jpg';
import tfg6 from '../assets/2025/tfghighschool/tfg6.jpg';
import tfg7 from '../assets/2025/tfghighschool/tfg7.jpg';

// 匯入 5/8 (偏鄉學子) 圖片
import bright1 from '../assets/2025/bright/bright1.jpg';
import bright2 from '../assets/2025/bright/bright2.jpg';
import bright3 from '../assets/2025/bright/bright3.jpg';

// 匯入 5/7 (建中參訪) 圖片
import ckhs1 from '../assets/2025/ckhighschool/ckhs1.jpg';
import ckhs2 from '../assets/2025/ckhighschool/ckhs2.jpg';
import ckhs3 from '../assets/2025/ckhighschool/ckhs3.jpg';
import ckhs4 from '../assets/2025/ckhighschool/ckhs4.jpg';
import ckhs5 from '../assets/2025/ckhighschool/ckhs5.jpg';
import ckhs6 from '../assets/2025/ckhighschool/ckhs6.jpg';

export interface EventType {
  id: number;
  date: string;
  time: string; 
  title: string;
  location: string;
  speakers: string[];
  displayImage: string;
  images: string[]; 
  description: string;
  details: string;
}

// 資料陣列：依照日期由新到舊排列
export const archiveData: EventType[] = [
  {
    id: 10, 
    date: "05.09",
    time: "18:00–21:30", 
    title: "峰會晚宴｜小小科學種子閃耀登場",
    location: "峰會晚宴",
    speakers: ["傑克·唐加拉", "康斯坦丁·諾沃肖洛夫", "路易斯·J·伊格納羅"],
    displayImage: nightnight1,
    images: [nightnight1, nightnight2, nightnight3, nightnight4, nightnight5, nightnight6, nightnight7, nightnight8],
    description: "2025諾科獎台北峰會壓軸晚宴圓滿落幕，三位國際大師與產官學界貴賓齊聚，小小科學種子帶來精彩話劇演出。",
    details: "【回顧｜5/9 峰會晚宴圓滿落幕 小小科學種子閃耀登場 】\n\n2025諾科獎台北峰會於5月9日晚間舉辦壓軸晚宴，三位來自諾貝爾與圖靈獎的大師與產官學界貴賓齊聚一堂，為這場為期三天的國際交流盛會畫下圓滿句點。\n\n晚宴中，特別邀請路亞實驗教育機構的小朋友們登台演出一齣富有創意與科學想像力的話劇，孩子們以純真生動的方式，表達他們對科學的理解與熱情，贏得全場嘉賓與大師們熱烈掌聲。\n\n這不僅是一場科學與產業的交流晚宴，更是希望與靈感的傳遞。感謝所有參與者與協力夥伴，讓2025諾科獎台北峰會圓滿落幕，也為未來世代播下追夢的種子。"
  },
  {
    id: 9, 
    date: "05.09",
    time: "09:30–12:00", 
    title: "台北科技大學｜Louis J. Ignarro 公益演講",
    location: "台北科技大學",
    speakers: ["路易斯·J·伊格納羅"],
    displayImage: ntut4_1,
    images: [ntut4_1, ntut4_2, ntut4_3, ntut4_4, ntut4_5, ntut4_6],
    description: "1998年諾貝爾醫學獎得主 Louis J. Ignarro 教授分享一氧化氮研究歷程，啟發夢想與信念的生命對話。",
    details: "【回顧｜5/9 Louis J. Ignarro 公益演講圓滿落幕 】\n\n「2025臺灣諾科獎週」最終場臺北市大學聯合公益演講於5月9日上午在臺北科技大學登場，由1998年諾貝爾生理學或醫學獎得主 Louis J. Ignarro 教授擔綱主講，吸引眾多醫學與生命科學領域師生熱情參與。\n\nIgnarro 教授以其開創性的研究—發現一氧化氮在生理訊號傳導中的關鍵角色為主軸，分享他長達15年的研究歷程，以及面對質疑與挑戰仍不放棄的堅持。他強調：「做研究不能只為了結果，更是為了對生命本質的理解與貢獻。」\n\n本場演講由諾科獎國際文教交流協會主辦、馬偕紀念醫院協辦，並特別感謝中央研究院院長廖俊智院士親臨現場致詞，肯定Ignarro 教授對生醫科學界的深遠貢獻，也勉勵在場青年學子勇於探索、投身科研。\n\n現場互動熱烈，學生提問踴躍，Ignarro 教授也以親切、風趣的態度一一回應，留下深刻印象。這場演講不僅是一堂科學課，更是一場啟發夢想與信念的生命對話。"
  },
  {
    id: 8, 
    date: "05.08",
    time: "16:30–18:00", 
    title: "台北科技大學｜Konstantin Novoselov 公益演講",
    location: "台北科技大學",
    speakers: ["康斯坦丁·諾沃肖洛夫"],
    displayImage: ntut3_1,
    images: [ntut3_1, ntut3_2, ntut3_3, ntut3_4, ntut3_5, ntut3_6],
    description: "2010年諾貝爾物理學獎得主 Konstantin Novoselov 教授分享石墨烯發現歷程，與學子探討科學創新的本質。",
    details: "【回顧｜5/8 Konstantin Novoselov 台北科大公益演講 精彩回顧】\n\n「2025臺灣諾科獎週」系列活動於5月8日持續登場，下午場由2010年諾貝爾物理學獎得主 Konstantin Novoselov 教授主講，現場座無虛席、反應熱烈。\n\n本場由諾科獎國際文教交流協會主辦、國立宜蘭大學協辦，特別感謝中央研究院副院長 周美吟院士親臨致詞與共襄盛舉，為活動增添亮點。\n\nNovoselov 教授以石墨烯的發現歷程為起點，深入分享科學創新的本質與跨領域合作的重要。他鼓勵學生勇於提問、保持好奇，並相信「重大發現往往來自對簡單問題的深刻思考」。\n\n現場學生提問踴躍，展現對科學的熱情與思辨力，也在與大師的互動中，激發對未來科技參與的想像與行動力。"
  },
  {
    id: 7, 
    date: "05.08",
    time: "14:00–16:30", 
    title: "台北科技大學｜David W.C. MacMillan 公益演講",
    location: "台北科技大學",
    speakers: ["戴維·麥克米倫"],
    displayImage: ntut2_1,
    images: [ntut2_1, ntut2_2, ntut2_3, ntut2_4, ntut2_5, ntut2_6],
    description: "2021年諾貝爾化學獎得主 David W.C. MacMillan 教授分享有機催化技術革命，鼓勵青年擁抱未知。",
    details: "【回顧｜5/8 David W.C. MacMillan 北科大公益演講 精彩回顧】\n\n在「2025臺灣諾科獎週」系列活動中，5月8日下午由2021年諾貝爾化學獎得主 David W.C. MacMillan 教授擔綱演講，吸引大量青年學子與科學愛好者熱烈參與。\n\n本場演講由諾科獎國際文教交流協會主辦、台北科技大學協辦，並榮幸邀請到中研院牟中原院士親臨現場致詞，為活動揭開深具高度與溫度的序幕。\n\nMacMillan 教授以其在不對稱有機催化技術方面的革命性研究為起點，分享自己從蘇格蘭小鎮走向國際科學舞台的歷程，鼓勵青年勇於發問、擁抱未知。他強調：「科學並非遙不可及，而是來自對身邊世界的好奇與觀察」。\n\n現場互動熱烈，學生踴躍提問，大師亦親切回應，這場面對面的對話不僅傳遞了知識，更為未來播下了靈感與勇氣的種子。"
  },
  {
    id: 6, 
    date: "05.08",
    time: "09:30–12:00",
    title: "台北科技大學｜Jack Dongarra 公益演講",
    location: "台北科技大學",
    speakers: ["傑克·唐加拉"],
    displayImage: ntut1_1,
    images: [ntut1_1, ntut1_2, ntut1_3, ntut1_4], 
    description: "2021年圖靈獎得主 Jack Dongarra 教授分享高效能運算的前瞻貢獻，鼓勵青年參與科學與創新。",
    details: "【回顧｜5/8 Jack Dongarra 台北科大公益演講 精彩時刻 】\n\n在「臺灣諾科獎週」系列活動中，由諾科獎國際文教交流協會主辦、國立中正大學協辦的臺北市大學聯合公益演講於5月8日上午在台北科技大學登場，講者為2021年圖靈獎得主 Jack Dongarra 教授。\n\n講題聚焦「青年學子未來如何參與科學與創新」，Dongarra 教授以生動案例介紹他在高效能運算（HPC）與超級電腦應用上的前瞻貢獻，並鼓勵學生勇於進入科學現場，掌握跨領域合作與技術突破的契機。\n\n現場座無席虛，氣氛熱烈，來自各校的青年學子踴躍提問，Dongarra 教授亦誠懇回應，展現一位國際頂尖科學家對教育的熱情與對未來世代的期許。\n\n透過這場演講，不僅讓學生對運算與科學創新有更深入的理解，也激發了對參與未來全球挑戰的想像力與信心。"
  },
  {
    id: 1, 
    date: "05.08",
    time: "09:00–12:00",
    title: "台北市北一女中｜向大師學習：諾貝爾化學獎得主對談",
    location: "北一女中",
    speakers: ["戴維·麥克米倫"],
    displayImage: tfg1,
    images: [tfg1, tfg2, tfg3, tfg4, tfg5, tfg6, tfg7],
    description: "2021年諾貝爾化學獎得主 David W.C. MacMillan 與北一女中學生深度對談，並親自展示諾貝爾獎牌。",
    details: "【回顧｜5/8 向大師學習｜北一女迎來諾貝爾化學獎得主 】\n\n5月8日上午，由台北市教育局主辦的「台北市高中公益場－向大師學習」於北一女中盛大舉行，榮幸邀請到2021年諾貝爾化學獎得主 David W.C. MacMillan 與北市多所高中學子對談，展開一場充滿啟發與思辨的科學饗宴。\n\n為了讓同學們能夠親眼見證諾貝爾的榮耀，MacMillan 教授特地從國外攜帶他本人所獲得的諾貝爾獎牌來到現場，引起全場驚喜與感動。同學們不僅近距離接觸國際級大師，還親眼看到象徵全球科學最高榮譽的獎牌，現場氣氛熱烈而難忘。\n\n感謝北一女中協辦與台北市教育局的精心規劃，讓青年學子在青春階段就能與世界頂尖科學家交流對話，激盪對未來的更多想像。"
  },
  {
    id: 4, 
    date: "05.08",
    time: "09:30–12:00",
    title: "全省高中公益演講｜諾貝爾科學之光：照亮偏鄉學子夢想",
    location: "政大公企中心",
    speakers: ["康斯坦丁·諾沃肖洛夫"],
    displayImage: bright1,
    images: [bright1, bright2, bright3],
    description: "2010年諾貝爾物理學獎得主 Konstantin Novoselov 教授與全台偏鄉高中學子面對面交流，鼓勵青年勇敢逐夢。",
    details: "【回顧｜諾貝爾科學之光：照亮偏鄉學子夢想 】\n\n在教育部青年發展署的支持下，5月8日上午於政大公企中心舉辦的「全省高中公益演講」順利登場，主題為「諾貝爾科學之光：照亮偏鄉學子夢想」。\n\n現場邀請到2010年諾貝爾物理學獎得主 Konstantin Novoselov 教授親臨分享，與來自全台各地，尤其偏鄉地區的高中學子進行面對面交流。Novoselov 教授以自身經歷鼓勵青年學子勇於提問、勇敢逐夢，現場氣氛熱烈、充滿啟發。\n\n這場公益演講不僅是一堂科學教育的精彩課，更是一道希望的光，讓來自不同角落的學子感受到世界與未來的可能性。"
  },
  {
    id: 3, 
    date: "05.08",
    time: "10:00–11:30",
    title: "校園講座｜生命科學與醫學對話",
    location: "林口路亞實驗教育機構",
    speakers: ["路易斯·J·伊格納羅"],
    displayImage: luya1,
    images: [luya1, luya2, luya3, luya4, luya5, luya6], 
    description: "諾貝爾醫學獎得主分享一氧化氮的研究歷程與生命科學的未來。",
    details: "【回顧｜5/8 校園育苗專場｜科學種子在路亞發芽 🌱】\n\n在5月8日的「科學育苗計畫」校園專場中，路亞實驗教育機構迎來一位重量級嘉賓——1998年諾貝爾生理學或醫學獎得主 Louis J. Ignarro 教授。Ignarro 教授以深入淺出的方式分享自己在生理學研究上的突破，並與學生們對話交流，鼓勵年輕世代相信自己、勇敢探索，讓現場孩子們大受啟發。\n\n更令人感動的是，這場科學與教育的相遇，不僅點燃了好奇心，也在孩子們心中種下了未來的可能。感謝路亞實驗教育機構長期推動「科學育苗計畫」，讓更多孩子有機會親身接觸世界級科學家，在生活中看見科學、夢想與未來的連結。"
  },
  {
    id: 5, 
    date: "05.07",
    time: "14:30–16:30",
    title: "建中參訪｜科學大師走進百年學府",
    location: "建國中學",
    speakers: ["傑克·唐加拉", "康斯坦丁·諾沃肖洛夫", "路易斯·J·伊格納羅"],
    displayImage: ckhs1,
    images: [ckhs1, ckhs2, ckhs3, ckhs4, ckhs5, ckhs6],
    description: "圖靈獎與諾貝爾物理、醫學獎得主親臨建中，與學子熱烈對談，啟發科學熱情。",
    details: "【回顧｜5/7 建中參訪｜科學大師走進百年學府 】\n\n在2025諾科獎台北峰會開幕前夕，三位國際級科學大師——圖靈獎得主 Jack Dongarra 、物理獎得主 Konstantin Novoselov，以及醫學獎得主 Louis J. Ignarro——特別走進百年學府建國中學，與學子們展開一場啟發思維的深度對話。\n\n面對來自全球科研高峰的大師，建中學生熱情提問，現場交流熱烈。三位得主也紛紛肯定台灣學生的思辨能力與對科學的熱情，並鼓勵大家勇敢追夢、探索未知。\n\n這場跨世代的相遇，讓科學不再只是書本上的知識，而是可以親身感受、對話與實踐的未來方向。"
  },
  {
    id: 2, 
    date: "05.07",
    time: "18:30–21:00",
    title: "超級貴賓之夜｜產官學界與國際大師的創新對話",
    location: "W Hotel",
    speakers: ["傑克·唐加拉", "康斯坦丁·諾沃肖洛夫", "路易斯·J·伊格納羅"],
    displayImage: night1,
    images: [night1, night2, night3, night4, night6, night7, night8], 
    description: "匯聚產官學界領袖與重要嘉賓，與諾貝爾及圖靈獎大師共話未來，共享知識與創新的交流盛宴。",
    details: "【回顧｜2025臺灣諾科獎週開幕日精彩時刻】\n\n2025臺灣諾科獎週於5月7日精彩展開！當日上午，大師們特別走訪建國中學，與師生進行深度交流，感受到台灣年輕世代對科學的熱情與潛力。\n\n下午在台北科技大學舉行的正式開幕典禮，象徵這場國際級科學盛會隆重啟動，四位諾貝爾與圖靈獎得主齊聚一堂，場面盛大。\n\n晚間於W Hotel舉辦的「超級貴賓之夜」更匯聚來自產官學界的重要嘉賓，與國際大師共話未來，共享知識與創新的交流盛宴。\n\n這一天，為2025諾科獎台北峰會寫下精彩序章，也開啟科學與教育的新對話。\n\n更多高光時刻，敬請持續關注！"
  }
];

export default function DialogueArchive() {
  return (
    <div className="bg-[#f8fafc] py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 標題區 */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">歷年國際對話</h2>
          <div className="h-[2px] flex-grow bg-slate-200"></div>
        </div>

        {/* 卡片列表 */}
        <div className="space-y-12">
          {archiveData.map((item) => (
            <Link 
              key={item.id}
              to={`/archive/${item.id}`}
              className="block bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group border border-slate-100"
            >
              <div className="flex flex-col md:flex-row items-center">
                
                {/* 區塊 1：文字資訊 */}
                <div className="order-2 md:order-1 flex-1 w-full p-8 md:p-12 flex flex-col justify-center">
                  
                  {/* 日期與地點 */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-[#002B5B] tracking-tighter">
                      {item.date}
                    </span>
                    <span className="px-4 py-1.5 bg-blue-50/50 text-[#002B5B] text-xs md:text-sm rounded-full font-semibold border border-blue-100/50">
                      {item.location}
                    </span>
                  </div>
                  
                  {/* 標題與簡介 */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#002B5B] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* 滑動顯示的「查看更多」按鈕 */}
                  <div className="mt-auto flex items-center text-sm font-bold text-[#002B5B] tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                    VIEW DETAILS <span className="ml-2">→</span>
                  </div>
                </div>

                {/* 區塊 2：大圖片 */}
                <div className="order-1 md:order-2 w-full md:w-5/12 shrink-0 relative overflow-hidden aspect-video md:aspect-[4/3]">
                  <img 
                    src={item.displayImage} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}