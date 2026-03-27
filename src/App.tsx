import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Guests from './pages/Guests';
import Contact from './pages/Contact'; // 👈 匯入
import Review2025 from './pages/Review2025';
import Program from './pages/Program'; // 👈 匯入


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        {/* 主要內容區塊會根據網址變化 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/contact" element={<Contact />} /> {/* 👈 新增 */}
            <Route path="/review-2025" element={<Review2025 />} />
            <Route path="/program" element={<Program />} /> {/* 👈 新增路徑 */}
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;