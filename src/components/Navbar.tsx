// src/components/Navbar.tsx

import { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoImg from '../assets/logo.png';

interface NavMenu {
  label: string;
  items: string[];
}

// 重新設計導覽列結構
const navMenus: Record<string, NavMenu> = {
  aboutUs: {
    label: '關於我們',
    items: ['峰會介紹', '會長的話', '最新活動', '媒體報導'],
  },
  program: {
    label: '活動內容', // 已改為「活動內容」這四個字
    items: [], // 沒有下拉選單，直接點擊跳轉 /program
  },
  review: {
    label: '歷年回顧',
    items: ['2026 春季場', '2025'],
  },
  contact: {
    label: '聯絡我們',
    items: [], // 沒有下拉選單，直接點擊跳轉 /contact
  }
};

// 設定各個項目點擊後的跳轉路徑與錨點
const pathMap: Record<string, string> = {
  '峰會介紹': '/#origin',       // 對應首頁的「關於我們（NSIC）」區塊
  '會長的話': '/#founder',      // 對應首頁的「會長的話（朱會長）」區塊
  '最新活動': '/#upcoming',     // 對應首頁的「最新活動（圖二）」區塊
  '媒體報導': '/#media',        // 對應首頁的「媒體報導」區塊
  '活動內容': '/program',       // 對應獨立的詳細活動與報名頁面
  '2026 春季場': '/review/2026-spring',
  '2025': '/review/2025',
  '聯絡我們': '/contact',
  '首頁': '/',
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getPath = (item: string) => pathMap[item] || '#';

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-slate-100 shadow-sm py-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo 區塊 */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={logoImg} 
              alt="諾科獎 Logo" 
              className="transition-all duration-500 object-contain h-10 w-auto"
            />
          </div>
        </Link>

        {/* 電腦版選單 */}
        <nav className="hidden lg:flex items-center space-x-1 text-[15px] font-medium h-full">
          {Object.entries(navMenus).map(([key, menu]) => {
            const hasItems = menu.items.length > 0;
            const targetPath = getPath(menu.label);
            const textColor = 'text-slate-700 hover:text-[#002B5B]';

            return (
              <div key={key} className="relative group h-full flex items-center px-4 cursor-pointer">
                {hasItems ? (
                  <>
                    <span className={`flex items-center gap-1.5 transition-colors duration-300 ${textColor}`}>
                      {menu.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                    <div className="absolute top-[calc(100%-10px)] left-0 pt-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden py-2 shadow-2xl">
                        {menu.items.map((item) => (
                          <Link 
                            key={item} 
                            to={getPath(item)} 
                            className="flex items-center px-5 py-3 text-[14px] text-slate-600 hover:bg-slate-50 hover:text-[#002B5B] transition-all"
                          >
                            <ChevronRight className="w-3.5 h-3.5 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={targetPath} className={`transition-colors duration-300 ${textColor} h-full flex items-center`}>
                    {menu.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* 漢堡排按鈕（手機版） */}
        <div className="flex items-center space-x-5">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 手機版下拉選單 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-3 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {Object.entries(navMenus).map(([key, menu]) => {
              const hasItems = menu.items.length > 0;
              const targetPath = getPath(menu.label);

              if (!hasItems) {
                return (
                  <Link 
                    key={key}
                    to={targetPath}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#002B5B] rounded-xl transition"
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
                  <div className="bg-slate-50/50 px-4 py-2 space-y-1 border-l-2 border-[#002B5B]/30 ml-6 my-1">
                    {menu.items.map((item) => (
                      <Link 
                        key={item}
                        to={getPath(item)} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-[15px] text-slate-600 hover:text-[#002B5B] hover:bg-white rounded-lg transition"
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