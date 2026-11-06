import React, { useState, useRef, useEffect } from 'react';
import { AnatomyItem } from '../types/anatomy';
import {
  Sun,
  Moon,
  Search,
  Bone,
  Brain,
  Sparkles,
  Info,
  X,
  HeartPulse,
} from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  items: AnatomyItem[];
  onSelectItem: (item: AnatomyItem) => void;
  onOpenBonesCatalog: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleDarkMode,
  items,
  onSelectItem,
  onOpenBonesCatalog,
  onOpenQuiz,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Search results
  const searchResults = searchTerm.trim()
    ? items.filter(
        (it) =>
          it.nameUz.toLowerCase().includes(searchTerm.toLowerCase()) ||
          it.nameLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
          it.systemNameUz.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 w-full border-b backdrop-blur-xl transition-colors duration-200 ${
        isDarkMode
          ? 'bg-slate-950/85 border-slate-800/80 text-white'
          : 'bg-white/85 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-rose-500 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-400">
              <HeartPulse className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base sm:text-lg tracking-tight leading-none">
                Inson Anatomiyasi
              </h1>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-500 border border-sky-500/20">
                Atlas
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden xs:block">
              Interaktiv 3D/SVG Ta'lim Platformasi
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div
          ref={searchContainerRef}
          className="relative flex-1 max-w-md mx-2 sm:mx-4"
        >
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="A'zo yoki suyakni qidiring..."
              className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-700/80 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                  : 'bg-slate-100/90 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              }`}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div
              className={`absolute top-full left-0 right-0 mt-2 max-h-80 overflow-y-auto rounded-xl border shadow-2xl z-50 p-1.5 space-y-1 animate-fadeIn custom-scrollbar ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-700 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectItem(item);
                    setIsSearchFocused(false);
                    setSearchTerm('');
                  }}
                  className={`p-2.5 rounded-lg flex items-center justify-between gap-2 cursor-pointer transition-colors ${
                    isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.category === 'organ'
                          ? 'bg-emerald-500'
                          : item.category === 'bone'
                          ? 'bg-amber-400'
                          : item.category === 'muscle'
                          ? 'bg-rose-500'
                          : 'bg-sky-500'
                      }`}
                    />
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm">
                        {item.nameUz}
                      </h5>
                      <span className="text-[11px] italic text-slate-400">
                        {item.nameLatin}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">
                    {item.systemNameUz}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* 206 Bones Button */}
          <button
            onClick={onOpenBonesCatalog}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border ${
              isDarkMode
                ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20'
                : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
            }`}
            title="Barcha 206 ta suyak ro'yxati"
          >
            <Bone className="w-4 h-4 text-amber-500" />
            <span className="hidden md:inline">206 ta suyak</span>
            <span className="md:hidden">206</span>
          </button>

          {/* Quiz Test Button */}
          <button
            onClick={onOpenQuiz}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border ${
              isDarkMode
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20'
                : 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100'
            }`}
            title="Anatomiya bo'yicha test topshirish"
          >
            <Brain className="w-4 h-4 text-purple-500" />
            <span className="hidden md:inline">Test / Viktorina</span>
            <span className="md:hidden">Test</span>
          </button>

          {/* Kun / Tun (Light / Dark) Toggle */}
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-xl border transition-all active:scale-90 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title={isDarkMode ? 'Kun rejimiga o\'tish (Yorug\')' : 'Tun rejimiga o\'tish (Qorong\'i)'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
