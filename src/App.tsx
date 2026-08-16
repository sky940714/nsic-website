// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Guests from './pages/Guests';
import Contact from './pages/Contact';
import Review2025 from './pages/Review2025';
import Program from './pages/Program';
import EventDetail from './pages/EventDetail';
import Review2026 from './pages/review2026';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/program" element={<Program />} />
            <Route path="/archive/:id" element={<EventDetail />} />

            {/* 更新為更有語意化的路徑 */}
            <Route path="/review/2026-spring" element={<Review2026 />} />
            <Route path="/review/2025" element={<Review2025 />} />
            
            {/* 為了相容舊連結，設定重定向 (Redirect) */}
            <Route path="/review-2026" element={<Navigate to="/review/2026-spring" replace />} />
            <Route path="/review-2025" element={<Navigate to="/review/2025" replace />} />

          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;