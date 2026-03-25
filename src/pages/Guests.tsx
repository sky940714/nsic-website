import LaureatesSection from '../components/LaureatesSection';

export default function Guests() {
  return (
    <div className="pt-20"> {/* 加上 pt-20 避免內容被固定的 Navbar 遮住 */}
      <LaureatesSection />
    </div>
  );
}