import { useState, useEffect } from 'react';
import { Feather, ChevronDown, ChevronRight, Globe, Settings, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  label: '活動內容', // 👈 改名
  items: ['活動內容表'], // 👈 改名
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
    items: [], // 空陣列代表直接跳轉，不顯示下拉選單
  }
};

const pathMap: Record<string, string> = {
  '主要貴賓': '/guests',
  '活動內容表': '/program', // 👈 連結到新分頁
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

  const renderDropdown = (menu: NavMenu) => (
    <div className="absolute top-[calc(100%-10px)] left-0 pt-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-lg border border-slate-100 overflow-hidden py-1.5 shadow-lg">
        {menu.items.map((item) => (
          <Link 
            key={item} 
            to={pathMap[item] || '#'} 
            className="flex items-center px-4 py-2.5 text-[14px] text-slate-600 hover:bg-[#F0F3FA] hover:text-[#2962FF] transition-all"
          >
            <ChevronRight className="w-3.5 h-3.5 mr-2 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            {item}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-shadow ${hasScrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <Feather className="text-amber-700 w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold text-gray-800 leading-none">諾科獎</h1>
            <p className="text-[10px] text-gray-500 tracking-tighter">國際文教交流協會</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-2 text-[15px] font-medium text-slate-700 h-full">
          {Object.entries(navMenus).map(([key, menu]) => {
            const hasItems = menu.items.length > 0;
            const targetPath = pathMap[menu.label] || '#';

            return (
              <div key={key} className="relative group h-full flex items-center px-3 cursor-pointer">
                {hasItems ? (
                  <>
                    <span className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-[#2962FF]">
                      {menu.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                    {renderDropdown(menu)}
                  </>
                ) : (
                  <Link 
                    to={targetPath} 
                    className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#2962FF]"
                  >
                    {menu.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Toolbar */}
        <div className="flex items-center space-x-4 h-full">
          {/* Language Selector */}
          <div className="relative group h-full flex items-center hidden sm:flex">
            <div className="flex items-center text-sm text-slate-500 cursor-pointer hover:text-[#2962FF] transition">
              <Globe className="w-4 h-4 mr-1" /> 繁中
              <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:rotate-180" />
            </div>
            <div className="absolute top-[calc(100%-10px)] right-0 pt-4 w-28 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white/95 backdrop-blur-xl rounded-lg border border-slate-100 overflow-hidden py-1.5 shadow-lg">
                <button className="w-full text-left block px-4 py-2.5 text-[14px] text-slate-600 hover:bg-[#F0F3FA] hover:text-[#2962FF] transition-all">中文</button>
                <button 
                  onClick={() => handleShowToast('English version is under construction')}
                  className="w-full text-left block px-4 py-2.5 text-[14px] text-slate-600 hover:bg-[#F0F3FA] hover:text-[#2962FF] transition-all"
                >
                  English
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleShowToast('系統設定功能即將開放')}
            className="text-slate-400 hover:text-amber-500 transition hover:rotate-90 duration-300"
          >
            <Settings className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-[#F0F3FA] hover:text-[#2962FF] rounded-lg transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg animate-in">
          <div className="px-2 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {Object.entries(navMenus).map(([key, menu]) => {
              const hasItems = menu.items.length > 0;
              const targetPath = pathMap[menu.label] || '#';

              if (!hasItems) {
                return (
                  <Link 
                    key={key}
                    to={targetPath}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
                  >
                    {menu.label}
                  </Link>
                );
              }

              return (
                <details key={key} className="group">
                  <summary className="flex justify-between items-center px-4 py-3 text-base font-medium text-slate-700 cursor-pointer hover:bg-slate-50 rounded-lg">
                    {menu.label}
                    <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="bg-slate-50/50 px-4 py-2 space-y-1 border-l-2 border-[#2962FF]/40 ml-4 my-1">
                    {menu.items.map((item) => (
                      <Link 
                        key={item}
                        to={pathMap[item] || '#'} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2.5 px-3 text-[15px] text-slate-600 hover:text-[#2962FF] hover:bg-slate-100 rounded-md transition"
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