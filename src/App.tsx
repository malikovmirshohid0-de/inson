import React, { useState, useEffect } from 'react';
import { ANATOMY_ITEMS, getAnatomyItemById } from './data/anatomyData';
import { TOTAL_BONES_COUNT } from './data/bones206';
import { AnatomyItem, BodySystem, BodyView, LayerMode, Gender } from './types/anatomy';
import { Navbar } from './components/Navbar';
import { ControlsBar } from './components/ControlsBar';
import { AnatomyCanvas } from './components/AnatomyCanvas';
import { DetailPanel } from './components/DetailPanel';
import { BonesCatalogModal } from './components/BonesCatalogModal';
import { QuizModal } from './components/QuizModal';
import {
  Heart,
  Bone,
  Brain,
  ShieldAlert,
  Sparkles,
  MousePointerClick,
  Activity,
  Layers,
  ChevronRight,
} from 'lucide-react';

export default function App() {
  // 1. Dark Mode State (with localStorage & prefers-color-scheme)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('anatomy_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  // Apply dark mode class to root HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('anatomy_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('anatomy_theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 2. View & Filter States
  const [activeView, setActiveView] = useState<BodyView>('front');
  const [activeLayer, setActiveLayer] = useState<LayerMode>('all');
  const [activeSystem, setActiveSystem] = useState<BodySystem>('all');
  const [gender, setGender] = useState<Gender>('male');

  // 3. Selection State
  // Default to Heart for immediate engaging visual, or null
  const [selectedItem, setSelectedItem] = useState<AnatomyItem | null>(() => {
    return getAnatomyItemById('heart') || null;
  });

  // 4. Modal States
  const [isBonesCatalogOpen, setIsBonesCatalogOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Handle selecting an item
  const handleSelectItem = (item: AnatomyItem) => {
    setSelectedItem(item);
    // If item only exists in back view and current view is front, switch view
    if (item.views.length === 1 && !item.views.includes(activeView)) {
      setActiveView(item.views[0]);
    }
  };

  const handleSelectById = (id: string) => {
    const it = getAnatomyItemById(id);
    if (it) {
      handleSelectItem(it);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Global Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        items={ANATOMY_ITEMS}
        onSelectItem={handleSelectItem}
        onOpenBonesCatalog={() => setIsBonesCatalogOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main App Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 lg:p-6 space-y-4 sm:space-y-6">
        {/* Controls Toolbar */}
        <ControlsBar
          activeView={activeView}
          onChangeView={setActiveView}
          activeLayer={activeLayer}
          onChangeLayer={setActiveLayer}
          activeSystem={activeSystem}
          onChangeSystem={setActiveSystem}
          gender={gender}
          onChangeGender={setGender}
          isDarkMode={isDarkMode}
        />

        {/* Anatomy Canvas & Inspector Side-by-Side Grid */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {/* Main SVG Interactive Body Canvas */}
          <div className="w-full lg:flex-1 relative">
            <AnatomyCanvas
              items={ANATOMY_ITEMS}
              selectedItem={selectedItem}
              onSelectItem={handleSelectItem}
              activeView={activeView}
              activeLayer={activeLayer}
              activeSystem={activeSystem}
              gender={gender}
              isDarkMode={isDarkMode}
            />

            {/* Quick Helper Badges below canvas */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  A'zolar
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Suyaklar ({TOTAL_BONES_COUNT} ta)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Mushaklar
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Nerv & Endokrin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>💡 Maslahat: Sichqoncha yoki ikki barmoq bilan masshtabni o'zgartiring (Pinch-to-zoom)</span>
              </div>
            </div>
          </div>

          {/* Details Inspector Panel */}
          {/* On Desktop: Sticky side column */}
          {/* On Mobile: Bottom Sheet Drawer (managed inside DetailPanel) */}
          <div className="hidden lg:block shrink-0">
            {selectedItem ? (
              <DetailPanel
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
                isDarkMode={isDarkMode}
                onSelectRelated={handleSelectById}
              />
            ) : (
              /* Desktop Empty State Guide */
              <div
                className={`w-[430px] rounded-2xl border p-6 text-center space-y-4 shadow-sm ${
                  isDarkMode
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-500 flex items-center justify-center mx-auto">
                  <MousePointerClick className="w-7 h-7 animate-bounce" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  A'zo yoki suyakni tanlang
                </h3>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  Modeldagi istalgan tana a'zosi yoki suyak ustiga bosib, uning tuzilishi, JSST statistikasi, keng tarqalgan kasalliklari va profilaktika maslahatlari bilan batafsil tanishing.
                </p>

                <div className="pt-2 text-left space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Tezkor tavsiya etiladigan a'zolar:
                  </h4>
                  {[
                    { id: 'heart', name: 'Yurak (Cor)', desc: 'Asosiy nasos' },
                    { id: 'brain', name: 'Bosh miya (Cerebrum)', desc: 'Boshqaruv markazi' },
                    { id: 'lungs', name: "O'pka (Pulmones)", desc: 'Nafas tizimi' },
                    { id: 'liver', name: 'Jigar (Hepar)', desc: 'Kimyoviy filtr' },
                    { id: 'femur_bone', name: 'Son suyagi (Femur)', desc: 'Eng baquvvat suyak' },
                  ].map((rec) => (
                    <button
                      key={rec.id}
                      onClick={() => handleSelectById(rec.id)}
                      className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                        isDarkMode
                          ? 'bg-slate-800/40 hover:bg-slate-800 border-slate-700/60 text-slate-200'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      <span className="font-semibold">{rec.name}</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        {rec.desc}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Detail Panel (Drawer) */}
        <div className="lg:hidden">
          {selectedItem && (
            <DetailPanel
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
              isDarkMode={isDarkMode}
              onSelectRelated={handleSelectById}
            />
          )}
        </div>

        {/* Interactive Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className={`p-4 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <span className="text-2xl font-black text-amber-500">206 ta</span>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Skelet suyaklari</p>
            <p className="text-[11px] text-slate-400 mt-1">Barcha guruhlar to'liq klassifikatsiyasi</p>
          </div>

          <div className={`p-4 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <span className="text-2xl font-black text-emerald-500">11 ta</span>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Fiziologik tizimlar</p>
            <p className="text-[11px] text-slate-400 mt-1">Yurak, nafas, asab, hazm va barchasi</p>
          </div>

          <div className={`p-4 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <span className="text-2xl font-black text-sky-500">JSST / WHO</span>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Rasmiy statistika</p>
            <p className="text-[11px] text-slate-400 mt-1">Global epidemiologik manbalar 2022-2024</p>
          </div>

          <div className={`p-4 rounded-2xl border ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <span className="text-2xl font-black text-purple-500">O'zbek tilida</span>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Lotincha atamalar bilan</p>
            <p className="text-[11px] text-slate-400 mt-1">Oddiy va tushunarli tibbiy ma'lumotlar</p>
          </div>
        </div>
      </main>

      {/* Mandatory Footer with Legal Medical Disclaimer */}
      <footer
        className={`w-full mt-10 border-t py-8 px-4 sm:px-6 transition-colors duration-200 ${
          isDarkMode
            ? 'bg-slate-950 border-slate-800/80 text-slate-400'
            : 'bg-white border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-4 text-center sm:text-left">
          {/* Prominent Medical Disclaimer Box */}
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center gap-3.5 text-xs leading-relaxed ${
            isDarkMode
              ? 'bg-amber-950/20 border-amber-800/40 text-amber-200/90'
              : 'bg-amber-50/80 border-amber-200 text-amber-900'
          }`}>
            <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0" />
            <p>
              <strong className="font-bold">Muhim tibbiy ogohlantirish:</strong> Ushbu dasturdagi barcha ma'lumotlar faqat ta'lim, o'quv va tanishuv maqsadida taqdim etiladi. Ular professional tibbiy tashxis, maslahat yoki davolash o'rnini bosa olmaydi. Salomatligingizda biron bir shikoyat yoki alomat bo'lsa, zudlik bilan malakali shifokorga murojaat qiling. Keltirilgan statistika JSST (WHO) va global tibbiy tadqiqotlar ma'lumotlariga tayanadi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs pt-2">
            <p>© {new Date().getFullYear()} Inson Anatomiyasi — Interaktiv Ta'lim Atlasi. Barcha huquqlar himoyalangan.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBonesCatalogOpen(true)}
                className="hover:underline text-sky-500"
              >
                206 ta suyak katalogi
              </button>
              <button
                onClick={() => setIsQuizOpen(true)}
                className="hover:underline text-purple-500"
              >
                Bilimni sinash viktorinasi
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BonesCatalogModal
        isOpen={isBonesCatalogOpen}
        onClose={() => setIsBonesCatalogOpen(false)}
        onSelectBone={handleSelectById}
        isDarkMode={isDarkMode}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        isDarkMode={isDarkMode}
        onSelectOrgan={handleSelectById}
      />
    </div>
  );
}
