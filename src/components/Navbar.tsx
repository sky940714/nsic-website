import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Globe, Settings, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// 1. 匯入你的 Logo
import logoImg from '../assets/logo.png';

interface NavMenu {
  label: string;
  items: string[];
}

const navMenus: Record<string, NavMenu> = {
  peak: {
    label: '峰會介紹',
    items: ['起心動念', '會長的話'],
  },
  agenda: {
    label: '活動內容',
    items: ['活動內容表'],
  },
  guests: {
    label: '貴賓介紹',
    items: ['主要貴賓'],
  },
  review: {
    label: '歷年回顧',
    items: ['2025'],
  },
  about: {
    label: '聯絡我們',
    items: [],
  }
};

const pathMap: Record<string, string> = {
  '主要貴賓': '/guests',
  '活動內容表': '/program',
  '2025': '/review-2025',
  '聯絡我們': '/contact',
  '起心動念': '/#origin',
  '會長的話': '/#founder',
  '首頁': '/',
};

interface NavbarProps {
  onShowToast?: (msg: string) => void;
}

export default function Navbar({ onShowToast }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  // 判斷是否在首頁 (首頁才需要透明轉白色的效果)
  const isHomePage = location.pathname === '/';

  const handleShowToast = (message: string) => {
    if (onShowToast) {
      onShowToast(message);
    } else {
      alert(message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        hasScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-md py-0 border-b border-slate-200' 
          : 'bg-transparent py-2 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo 區塊 */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={logoImg} 
              alt="諾科獎 Logo" 
              className={`transition-all duration-500 object-contain ${
                hasScrolled || !isHomePage ? 'h-10' : 'h-12'
              } w-auto`}
            />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
              hasScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
            }`}>
              諾科獎
            </h1>
            <p className={`text-[10px] tracking-widest transition-colors duration-500 ${
              hasScrolled || !isHomePage ? 'text-slate-500' : 'text-white/80'
            }`}>
              國際文教交流協會
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1 text-[15px] font-medium h-full">
          {Object.entries(navMenus).map(([key, menu]) => {
            const hasItems = menu.items.length > 0;
            const targetPath = pathMap[menu.label] || '#';
            const textColor = hasScrolled || !isHomePage 
              ? 'text-slate-700 hover:text-blue-600' 
              : 'text-white/90 hover:text-white';

            return (
              <div key={key} className="relative group h-full flex items-center px-4 cursor-pointer">
                {hasItems ? (
                  <>
                    <span className={`flex items-center gap-1.5 transition-colors duration-300 ${textColor}`}>
                      {menu.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                    {/* Dropdown Menu */}
                    <div className="absolute top-[calc(100%-10px)] left-0 pt-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden py-2 shadow-2xl">
                        {menu.items.map((item) => (
                          <Link 
                            key={item} 
                            to={pathMap[item] || '#'} 
                            className="flex items-center px-5 py-3 text-[14px] text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
                          >
                            <ChevronRight className="w-3.5 h-3.5 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={targetPath} className={`transition-colors duration-300 ${textColor}`}>
                    {menu.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Toolbar */}
        <div className="flex items-center space-x-5">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center group relative h-full cursor-pointer">
            <div className={`flex items-center text-sm font-medium transition-colors duration-500 ${
              hasScrolled || !isHomePage ? 'text-slate-500 hover:text-blue-600' : 'text-white/80 hover:text-white'
            }`}>
              <Globe className="w-4 h-4 mr-1.5" /> 繁中
              <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180" />
            </div>
            {/* Language Dropdown */}
            <div className="absolute top-full right-0 pt-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg border border-slate-100 py-1.5 shadow-xl">
                <button className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">中文</button>
                <button onClick={() => handleShowToast('English version is under construction')} className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">English</button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleShowToast('系統設定功能即將開放')}
            className={`transition-all hover:rotate-90 duration-500 ${
              hasScrolled || !isHomePage ? 'text-slate-400 hover:text-blue-600' : 'text-white/60 hover:text-white'
            }`}
          >
            <Settings className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              hasScrolled || !isHomePage ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (內容不變) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-3 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {Object.entries(navMenus).map(([key, menu]) => {
              const hasItems = menu.items.length > 0;
              const targetPath = pathMap[menu.label] || '#';

              if (!hasItems) {
                return (
                  <Link 
                    key={key}
                    to={targetPath}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition"
                  >
                    {menu.label}
                  </Link>
                );
              }

              return (
                <details key={key} className="group">
                  <summary className="flex justify-between items-center px-4 py-3.5 text-base font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 rounded-xl list-none">
                    {menu.label}
                    <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="bg-slate-50/50 px-4 py-2 space-y-1 border-l-2 border-blue-500/30 ml-6 my-1">
                    {menu.items.map((item) => (
                      <Link 
                        key={item}
                        to={pathMap[item] || '#'} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-[15px] text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}