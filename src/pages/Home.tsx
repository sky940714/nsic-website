import { useEffect } from 'react'; // 👈 新增
import { useLocation } from 'react-router-dom'; // 👈 新增
import HeroSection from '../components/HeroSection';
import OriginAndFounderSection from '../components/OriginAndFounderSection';
import IntroductionSection from '../components/IntroductionSection';
import NewsSection from '../components/NewsSection';
import AnnouncementSection from '../components/AnnouncementSection';

export default function Home() {
  const { hash } = useLocation(); // 抓取網址後面的 #內容

  useEffect(() => {
    if (hash) {
      // 稍微延遲 100 毫秒，確保頁面元素都長出來了再捲動
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]); // 只要 # 字號改變，就會觸發這段程式碼

  return (
    <>
      <HeroSection />
      <OriginAndFounderSection />
      <IntroductionSection />
      <NewsSection />
      <AnnouncementSection />
    </>
  );
}