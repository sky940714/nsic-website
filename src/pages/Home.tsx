import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 匯入組件
import StaticHero from '../components/StaticHero';
import SummitBrief from '../components/SummitBrief';
import AboutSection from '../components/AboutSection'; 
import PresidentSection from '../components/PresidentSection';
import MediaSection from '../components/MediaSection';
import NewsSection from '../components/NewsSection';

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
      <StaticHero />
      <SummitBrief />
      <AboutSection /> 
      <PresidentSection />
      
      {/* 媒體報導區塊置於此 */}
      <MediaSection />
      
      <NewsSection />
    </>
  );
}