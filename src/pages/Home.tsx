import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 1. 匯入新設計的靜態 Hero 組件
import StaticHero from '../components/StaticHero';

// 2. 匯入其他必要的區塊組件
import AboutSection from '../components/AboutSection';
import PresidentSection from '../components/PresidentSection';
import NewsSection from '../components/NewsSection';
import AnnouncementSection from '../components/AnnouncementSection';

/**
 * 首頁組件 (Home Page)
 * 已將原有的輪播 (HeroSection) 替換為深藍色背景的 StaticHero (Michael Levitt 版)
 */
export default function Home() {
  const { hash } = useLocation();

  // 處理錨點捲動邏輯 (例如點擊導覽列跳轉到特定區塊)
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
      {/* 1. 頂部 Hero 區塊：現在是深藍色專業背景與 2026 峰會資訊 */}
      <StaticHero />

      {/* 2. 關於我們區塊 */}
      <AboutSection /> 

      {/* 注意：原本的 <SummitBrief /> 已整合進 <StaticHero />，
         因此這裡不再需要匯入與渲染，避免內容重複。
      */}

      {/* 3. 會長的話 */}
      <PresidentSection />

      {/* 4. 新聞與公告區塊 */}
      <NewsSection />
      <AnnouncementSection />
    </>
  );
}