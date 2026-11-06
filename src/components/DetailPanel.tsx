import React, { useState } from 'react';
import { AnatomyItem } from '../types/anatomy';
import {
  X,
  Volume2,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  MapPin,
  Activity,
  Layers,
  BookOpen,
  Info,
  Check,
} from 'lucide-react';

interface DetailPanelProps {
  item: AnatomyItem | null;
  onClose: () => void;
  isDarkMode: boolean;
  onSelectRelated?: (id: string) => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  item,
  onClose,
  isDarkMode,
}) => {
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!item) return null;

  // Audio pronunciation using Web Speech API
  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      // Try Latin or default voice
      utterance.lang = 'la';
      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Share / Copy link or text
  const handleCopy = () => {
    const textToShare = `${item.nameUz} (${item.nameLatin})\nJoylashuvi: ${item.location}\nVazifasi: ${item.function}\nStatistika: ${item.statistics.label} (${item.statistics.source}, ${item.statistics.year})`;
    navigator.clipboard.writeText(textToShare);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        onClick={onClose}
      />

      {/* Main Panel Container */}
      {/* On mobile: slide-up drawer from bottom (max-h-[88vh]) */}
      {/* On desktop: right fixed or sticky sidebar (w-[420px]) */}
      <aside
        className={`fixed lg:sticky lg:top-4 bottom-0 left-0 right-0 lg:left-auto lg:right-auto z-50 lg:z-10
          w-full lg:w-[430px] lg:max-h-[calc(100vh-2rem)] max-h-[85vh]
          flex flex-col rounded-t-3xl lg:rounded-2xl border shadow-2xl
          overflow-hidden transition-all duration-300 ease-out animate-slideUp lg:animate-none
          ${
            isDarkMode
              ? 'bg-slate-900/95 border-slate-800 text-slate-100'
              : 'bg-white/95 border-slate-200 text-slate-900'
          } backdrop-blur-xl`}
      >
        {/* Mobile Drag Handle */}
        <div className="w-full pt-3 pb-1 flex justify-center lg:hidden">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Header Bar */}
        <div className="p-5 pb-4 border-b border-slate-200/80 dark:border-slate-800/80 flex items-start justify-between gap-3 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border tracking-wider uppercase ${
                item.category === 'organ' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' :
                item.category === 'bone' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' :
                item.category === 'muscle' ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20' :
                'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20'
              }`}>
                {item.systemNameUz}
              </span>
              {item.boneDetails && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {item.boneDetails.count} ta suyak
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {item.nameUz}
            </h2>

            {/* Latin Name with Pronunciation button */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-serif italic font-medium">{item.nameLatin}</span>
              <button
                onClick={() => handleSpeak(item.nameLatin)}
                disabled={isPlayingAudio}
                className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sky-600 dark:text-sky-400 transition-colors"
                title="Lotincha talaffuzini eshitish"
              >
                <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-sky-500' : ''}`} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Ma'lumotdan nusxa olish"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-sm custom-scrollbar">
          {/* 1. Qayerda joylashgani */}
          <div className="rounded-xl p-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Qayerda joylashgani</span>
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {item.location}
            </p>
          </div>

          {/* 2. Vazifasi */}
          <div className="rounded-xl p-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>Asosiy vazifasi</span>
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {item.function}
            </p>
          </div>

          {/* 3. Statistika (WHO / JSST) with Circular / Progress Bar */}
          <div className="rounded-xl p-4 bg-gradient-to-br from-sky-500/10 via-slate-50 to-indigo-500/5 dark:from-sky-950/40 dark:via-slate-900/60 dark:to-indigo-950/30 border border-sky-200 dark:border-sky-900/60">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                <Layers className="w-3.5 h-3.5 text-sky-500" />
                <span>Global Epidemiologik Statistika</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300">
                {item.statistics.year}-yil
              </span>
            </div>

            <div className="flex items-center gap-4 my-2">
              {/* Circular Gauge / Percentage Indicator */}
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track */}
                  <path
                    className="text-slate-200 dark:text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Active Value Track */}
                  <path
                    className="text-sky-500"
                    strokeDasharray={`${Math.min(item.statistics.percentage, 100)}, 100`}
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                  <span className="text-base font-extrabold text-slate-800 dark:text-white">
                    {item.statistics.percentage}%
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium leading-snug text-slate-700 dark:text-slate-300">
                  {item.statistics.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                  <span>Manba:</span>
                  <span className="text-sky-600 dark:text-sky-400 underline decoration-sky-300">{item.statistics.source}</span>
                </p>
              </div>
            </div>

            {item.statistics.details && (
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 pt-2 border-t border-sky-200/60 dark:border-sky-900/40 italic">
                ℹ️ {item.statistics.details}
              </p>
            )}
          </div>

          {/* 4. Eng ko'p uchraydigan kasalliklar */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Keng tarqalgan kasalliklar</span>
            </div>
            <div className="space-y-2">
              {item.diseases.map((dis, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                      {dis.name}
                    </h5>
                    {dis.severity && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        dis.severity === 'jiddiy' ? 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300' :
                        dis.severity === 'eng_kop' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {dis.severity === 'jiddiy' ? 'Xatarli' : dis.severity === 'eng_kop' ? 'Ko\'p uchraydi' : 'O\'rtacha'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {dis.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Kasallik sabablari */}
          <div className="rounded-xl p-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <Info className="w-3.5 h-3.5 text-amber-500" />
              <span>Kasallik kelib chiqish sabablari</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.causes.map((cause, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-xs"
                >
                  • {cause}
                </span>
              ))}
            </div>
          </div>

          {/* 6. Profilaktika maslahatlari */}
          <div className="rounded-xl p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Profilaktika va salomatlik tavsiyasi</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {item.prevention}
            </p>
          </div>

          {/* 7. Qiziqarli fakt */}
          <div className="rounded-xl p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Bilasizmi? (Qiziqarli fakt)</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 italic">
              "{item.funFact}"
            </p>
          </div>

          {/* 8. Tibbiy atamalar lug'ati (Glossary) */}
          {item.glossary && item.glossary.length > 0 && (
            <div className="rounded-xl p-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>Atamalar izohi</span>
              </div>
              <div className="space-y-2 text-xs">
                {item.glossary.map((g, idx) => (
                  <div key={idx} className="border-l-2 border-indigo-400 pl-2.5">
                    <span className="font-bold text-slate-900 dark:text-slate-100">{g.term}: </span>
                    <span className="text-slate-600 dark:text-slate-400">{g.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mandatory Medical Disclaimer */}
          <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-amber-600 dark:text-amber-400 block mb-0.5">⚠️ Ogohlantirish:</span>
            Ushbu ma'lumot faqat o'quv va tanishuv maqsadida taqdim etilgan bo'lib, tibbiy tashxis hisoblanmaydi. Salomatligingiz bo'yicha har qanday shikoyat yoki savol yuzasidan mutaxassis shifokorga murojaat qiling. Statistika JSST va nufuzli tibbiy nashrlarga tayanadi.
          </div>
        </div>
      </aside>
    </>
  );
};
