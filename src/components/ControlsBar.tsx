import React from 'react';
import { BodySystem, BodyView, LayerMode, Gender } from '../types/anatomy';
import {
  RotateCcw,
  Layers,
  Activity,
  Heart,
  Wind,
  Utensils,
  Droplets,
  Zap,
  Shield,
  CircleDot,
  Users,
} from 'lucide-react';

interface ControlsBarProps {
  activeView: BodyView;
  onChangeView: (view: BodyView) => void;
  activeLayer: LayerMode;
  onChangeLayer: (layer: LayerMode) => void;
  activeSystem: BodySystem;
  onChangeSystem: (system: BodySystem) => void;
  gender: Gender;
  onChangeGender: (gender: Gender) => void;
  isDarkMode: boolean;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  activeView,
  onChangeView,
  activeLayer,
  onChangeLayer,
  activeSystem,
  onChangeSystem,
  gender,
  onChangeGender,
  isDarkMode,
}) => {
  const systems: Array<{ id: BodySystem; label: string; icon: React.ReactNode; color: string }> = [
    { id: 'all', label: 'Barcha tizimlar', icon: <CircleDot className="w-3.5 h-3.5" />, color: 'sky' },
    { id: 'skeletal', label: 'Suyak (Skelet)', icon: <Activity className="w-3.5 h-3.5" />, color: 'amber' },
    { id: 'muscular', label: 'Mushaklar', icon: <Activity className="w-3.5 h-3.5" />, color: 'rose' },
    { id: 'cardiovascular', label: 'Yurak-qon tomir', icon: <Heart className="w-3.5 h-3.5" />, color: 'red' },
    { id: 'respiratory', label: 'Nafas olish', icon: <Wind className="w-3.5 h-3.5" />, color: 'cyan' },
    { id: 'digestive', label: 'Hazm qilish', icon: <Utensils className="w-3.5 h-3.5" />, color: 'orange' },
    { id: 'urinary', label: 'Siydik-ajratish', icon: <Droplets className="w-3.5 h-3.5" />, color: 'yellow' },
    { id: 'nervous', label: 'Markaziy asab', icon: <Zap className="w-3.5 h-3.5" />, color: 'violet' },
    { id: 'endocrine', label: 'Endokrin bezlar', icon: <Shield className="w-3.5 h-3.5" />, color: 'pink' },
    { id: 'reproductive', label: 'Ko\'payish tizimi', icon: <Users className="w-3.5 h-3.5" />, color: 'emerald' },
    { id: 'lymphatic', label: 'Limfa va immun', icon: <Shield className="w-3.5 h-3.5" />, color: 'purple' },
  ];

  return (
    <div className="space-y-3">
      {/* Top Controls Row: View, Layer, Gender */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        {/* View Toggle: Old tomon / Orqa tomon */}
        <div className={`p-1 rounded-xl border flex items-center gap-1 shadow-xs ${
          isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => onChangeView('front')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'front'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Old tomon
          </button>
          <button
            onClick={() => onChangeView('back')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'back'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Orqa tomon
          </button>
        </div>

        {/* Layers Toggle: Hammasi / Faqat a'zolar / Faqat suyaklar / Mushaklar */}
        <div className={`p-1 rounded-xl border flex items-center gap-1 overflow-x-auto shadow-xs ${
          isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => onChangeLayer('all')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeLayer === 'all'
                ? 'bg-slate-800 text-white dark:bg-slate-700 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Hammasi
          </button>
          <button
            onClick={() => onChangeLayer('organs')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeLayer === 'organs'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Faqat a'zolar
          </button>
          <button
            onClick={() => onChangeLayer('bones')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeLayer === 'bones'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Faqat suyaklar
          </button>
          <button
            onClick={() => onChangeLayer('muscles')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeLayer === 'muscles'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Mushaklar
          </button>
        </div>

        {/* Gender Toggle: Erkak / Ayol */}
        <div className={`p-1 rounded-xl border flex items-center gap-1 shadow-xs ${
          isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => onChangeGender('male')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              gender === 'male'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Erkak
          </button>
          <button
            onClick={() => onChangeGender('female')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              gender === 'female'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Ayol
          </button>
        </div>
      </div>

      {/* Systems Filter Scrollable Pill Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 custom-scrollbar">
        {systems.map((sys) => {
          const isSelected = activeSystem === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => onChangeSystem(sys.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all border shrink-0 ${
                isSelected
                  ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-sm'
                  : isDarkMode
                  ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-300'
                  : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {sys.icon}
              <span>{sys.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
