import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 匯入新設計的組件
import StaticHero from '../components/StaticHero';
import AboutSection from '../components/AboutSection';   // 仿清大 01. ABOUT US 佈局
import SummitBrief from '../components/SummitBrief';   // 2026 峰會資訊與 MORE 連結
import PresidentSection from '../components/PresidentSection'; // 獨立出的會長的話
import NewsSection from '../components/NewsSection';
import AnnouncementSection from '../components/AnnouncementSection';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      {/* 1. 滿版輪播首頁 */}
      <StaticHero />
      {/* 2. 2026 峰會快訊 (含 Michael Levitt 介紹與連結) [cite: 1, 3] */}
      <SummitBrief />
      {/* 3. 關於我們 (NTHU 風格：照片左、文字右)  */}
      <AboutSection /> 
      {/* 4. 會長的話 (感性對話排版) */}
      <PresidentSection />

      {/* 5. 其他資訊區塊 */}
      <NewsSection />
      <AnnouncementSection />
    </>
  );
}