import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { BodySystem, BodyView, LayerMode, Gender, AnatomyItem } from '../types/anatomy';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Sparkles } from 'lucide-react';

interface AnatomyCanvasProps {
  items: AnatomyItem[];
  selectedItem: AnatomyItem | null;
  onSelectItem: (item: AnatomyItem) => void;
  activeView: BodyView;
  activeLayer: LayerMode;
  activeSystem: BodySystem;
  gender: Gender;
  isDarkMode: boolean;
}

export const AnatomyCanvas: React.FC<AnatomyCanvasProps> = ({
  items,
  selectedItem,
  onSelectItem,
  activeView,
  activeLayer,
  activeSystem,
  gender,
  isDarkMode,
}) => {
  // Zoom & Pan state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState<AnatomyItem | null>(null);
  const [touchDistance, setTouchDistance] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Helper map for items
  const itemsMap = useMemo(() => {
    const map = new Map<string, AnatomyItem>();
    items.forEach((item) => map.set(item.id, item));
    return map;
  }, [items]);

  // Reset zoom & pan
  const handleResetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev * 1.25, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev / 1.25, 0.7));
  };

  // Center on selected item
  useEffect(() => {
    if (selectedItem) {
      // Optional subtle feedback
    }
  }, [selectedItem]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setScale((prev) => Math.min(Math.max(prev * zoomFactor, 0.7), 3.5));
  };

  // Mouse drag pan
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag on primary button
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      // Pinch start
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchDistance(dist);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    } else if (e.touches.length === 2 && touchDistance !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / touchDistance;
      setScale((prev) => Math.min(Math.max(prev * ratio, 0.7), 3.5));
      setTouchDistance(dist);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchDistance(null);
  };

  // Determine visibility and opacity for each element
  const getElementStyle = (
    itemId: string,
    category: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'endocrine',
    system: BodySystem
  ) => {
    const isSelected = selectedItem?.id === itemId;
    const isHovered = hoveredItem?.id === itemId;

    // Check layer filter
    let layerVisible = true;
    if (activeLayer === 'organs' && category !== 'organ' && category !== 'endocrine' && category !== 'vessel') {
      layerVisible = false;
    } else if (activeLayer === 'bones' && category !== 'bone') {
      layerVisible = false;
    } else if (activeLayer === 'muscles' && category !== 'muscle') {
      layerVisible = false;
    }

    // Check system filter
    let systemMatched = true;
    if (activeSystem !== 'all') {
      if (activeSystem === 'reproductive') {
        systemMatched = system === 'reproductive_male' || system === 'reproductive_female';
      } else {
        systemMatched = system === activeSystem;
      }
    }

    if (!layerVisible) {
      return {
        opacity: isDarkMode ? 0.08 : 0.12,
        pointerEvents: 'none' as const,
        filter: 'grayscale(80%)',
      };
    }

    if (!systemMatched) {
      return {
        opacity: isDarkMode ? 0.15 : 0.2,
        cursor: 'pointer',
        filter: 'grayscale(70%)',
      };
    }

    return {
      opacity: isSelected ? 1 : isHovered ? 0.95 : 0.85,
      cursor: 'pointer',
      filter: isSelected ? 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.9))' : isHovered ? 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))' : 'none',
      transition: 'all 0.2s ease-in-out',
    };
  };

  const handlePartClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const item = itemsMap.get(id);
    if (item) {
      onSelectItem(item);
    }
  };

  const handlePartHover = (id: string | null) => {
    if (!id) {
      setHoveredItem(null);
      return;
    }
    const item = itemsMap.get(id);
    if (item) {
      setHoveredItem(item);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[600px] sm:h-[700px] lg:h-[780px] rounded-2xl overflow-hidden border select-none transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800'
          : 'bg-gradient-to-b from-sky-50/50 via-white to-slate-50 border-slate-200'
      }`}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: isDarkMode
            ? 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Canvas Floating Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <div className={`flex flex-col rounded-xl backdrop-blur-md border shadow-lg overflow-hidden ${
          isDarkMode ? 'bg-slate-900/80 border-slate-700/60' : 'bg-white/80 border-slate-200'
        }`}>
          <button
            onClick={handleZoomIn}
            className={`p-2.5 transition-colors hover:bg-sky-500/10 active:scale-95 ${
              isDarkMode ? 'text-slate-200 hover:text-sky-400' : 'text-slate-700 hover:text-sky-600'
            }`}
            title="Kattalashtirish (Zoom in)"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <div className={`h-[1px] w-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
          <button
            onClick={handleZoomOut}
            className={`p-2.5 transition-colors hover:bg-sky-500/10 active:scale-95 ${
              isDarkMode ? 'text-slate-200 hover:text-sky-400' : 'text-slate-700 hover:text-sky-600'
            }`}
            title="Kichiklashtirish (Zoom out)"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <div className={`h-[1px] w-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
          <button
            onClick={handleResetZoom}
            className={`p-2.5 transition-colors hover:bg-sky-500/10 active:scale-95 ${
              isDarkMode ? 'text-slate-200 hover:text-sky-400' : 'text-slate-700 hover:text-sky-600'
            }`}
            title="O'lchamni tiklash (100%)"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Current scale badge */}
        <div className={`px-2.5 py-1 text-xs font-semibold rounded-lg text-center backdrop-blur-md border shadow-sm ${
          isDarkMode ? 'bg-slate-900/80 text-slate-400 border-slate-800' : 'bg-white/80 text-slate-500 border-slate-200'
        }`}>
          {Math.round(scale * 100)}%
        </div>
      </div>

      {/* View Indicator Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide uppercase shadow-sm border backdrop-blur-md flex items-center gap-1.5 ${
          isDarkMode ? 'bg-slate-900/85 border-slate-700 text-sky-400' : 'bg-white/90 border-slate-200 text-sky-600'
        }`}>
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          {activeView === 'front' ? 'Old ko\'rinish' : 'Orqa ko\'rinish'} • {gender === 'male' ? 'Erkak' : 'Ayol'}
        </span>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredItem && (
        <div className={`absolute bottom-4 left-4 z-20 max-w-xs p-3 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-200 pointer-events-none animate-fadeIn ${
          isDarkMode ? 'bg-slate-900/90 border-slate-700 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${
              hoveredItem.category === 'organ' ? 'bg-emerald-500' :
              hoveredItem.category === 'bone' ? 'bg-amber-400' :
              hoveredItem.category === 'muscle' ? 'bg-rose-500' : 'bg-purple-500'
            }`} />
            <h4 className="font-bold text-sm tracking-tight">{hoveredItem.nameUz}</h4>
          </div>
          <p className="text-xs italic text-slate-400 mt-0.5">{hoveredItem.nameLatin}</p>
          <div className="flex items-center gap-2 mt-1.5 text-[11px] font-medium text-slate-400">
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">{hoveredItem.systemNameUz}</span>
            <span>Bosganda ma'lumot ochiladi</span>
          </div>
        </div>
      )}

      {/* Instruction hint when nothing selected */}
      {!selectedItem && (
        <div className={`absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium backdrop-blur-sm pointer-events-none ${
          isDarkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-white/70 border-slate-200 text-slate-500'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>Istalgan a'zo yoki suyak ustiga bosing</span>
        </div>
      )}

      {/* Main SVG Anatomy Scene */}
      <div
        className="w-full h-full flex items-center justify-center transition-transform duration-75"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <svg
          viewBox="0 0 500 960"
          className="w-auto h-full max-h-[920px] overflow-visible drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="grad-head" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor={isDarkMode ? '#cbd5e1' : '#f8fafc'} />
              <stop offset="100%" stopColor={isDarkMode ? '#64748b' : '#cbd5e1'} />
            </radialGradient>

            <linearGradient id="grad-bone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="grad-bone-clean" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isDarkMode ? '#f1f5f9' : '#ffffff'} />
              <stop offset="100%" stopColor={isDarkMode ? '#94a3b8' : '#e2e8f0'} />
            </linearGradient>

            <linearGradient id="grad-heart" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>

            <linearGradient id="grad-lungs" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="grad-liver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            <linearGradient id="grad-stomach" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            <linearGradient id="grad-intestine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>

            <linearGradient id="grad-kidney" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            <linearGradient id="grad-muscle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#be123c" stopOpacity="0.85" />
            </linearGradient>

            {/* Glow Filter for Active Element */}
            <filter id="active-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.95" />
              <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#0284c7" floodOpacity="0.7" />
            </filter>

            {/* Subtle Drop Shadow */}
            <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* =============================================================== */}
          {/* BASE HUMAN BODY SILHOUETTE (OUTLINE)                            */}
          {/* =============================================================== */}
          <g id="body-silhouette" className="pointer-events-none">
            {/* Ambient Body Aura */}
            <path
              d="
                M250,55 
                C285,55 305,80 305,120 
                C305,150 288,175 275,185
                C300,190 345,200 375,225
                C405,250 435,320 445,410
                C450,455 455,510 448,550
                C444,570 435,585 425,585
                C415,585 410,570 412,530
                C416,460 405,380 395,350
                C380,390 375,460 375,520
                C375,560 380,600 375,660
                C370,720 355,800 345,860
                C340,890 350,915 350,920
                C350,930 330,935 315,935
                C300,935 300,915 302,880
                C306,810 302,730 295,660
                C285,570 270,540 250,540
                C230,540 215,570 205,660
                C198,730 194,810 198,880
                C200,915 200,935 185,935
                C170,935 150,930 150,920
                C150,915 160,890 155,860
                C145,800 130,720 125,660
                C125,600 125,560 125,520
                C125,460 120,390 105,350
                C95,380 84,460 88,530
                C90,570 85,585 75,585
                C65,585 56,570 52,550
                C45,510 50,455 55,410
                C65,320 95,250 125,225
                C155,200 200,190 225,185
                C212,175 195,150 195,120
                C195,80 215,55 250,55 Z
              "
              fill={isDarkMode ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)'}
              stroke={isDarkMode ? '#334155' : '#cbd5e1'}
              strokeWidth="2.5"
              strokeDasharray="6,4"
              className="transition-colors duration-300"
            />
          </g>

          {/* =============================================================== */}
          {/* MUSCLE LAYER (Visible in 'all' or 'muscles')                    */}
          {/* =============================================================== */}
          {activeView === 'front' && (
            <g id="muscles-front">
              {/* Pectoralis Major (Ko'krak) */}
              <g
                id="part-pectorals"
                onClick={(e) => handlePartClick(e, 'pectorals')}
                onMouseEnter={() => handlePartHover('pectorals')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('pectorals', 'muscle', 'muscular')}
              >
                <path
                  d="M245,230 C220,225 180,235 160,265 C150,285 155,310 180,315 C210,320 235,300 245,280 Z"
                  fill="url(#grad-muscle)"
                  stroke="#fda4af"
                  strokeWidth={selectedItem?.id === 'pectorals' ? '3' : '1'}
                />
                <path
                  d="M255,230 C280,225 320,235 340,265 C350,285 345,310 320,315 C290,320 265,300 255,280 Z"
                  fill="url(#grad-muscle)"
                  stroke="#fda4af"
                  strokeWidth={selectedItem?.id === 'pectorals' ? '3' : '1'}
                />
              </g>

              {/* Biceps (Qo'l mushaklari) */}
              <g
                id="part-biceps"
                onClick={(e) => handlePartClick(e, 'biceps_triceps')}
                onMouseEnter={() => handlePartHover('biceps_triceps')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('biceps_triceps', 'muscle', 'muscular')}
              >
                {/* Left Arm Biceps */}
                <ellipse cx="140" cy="305" rx="14" ry="32" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'biceps_triceps' ? '3' : '1'} transform="rotate(15 140 305)" />
                {/* Right Arm Biceps */}
                <ellipse cx="360" cy="305" rx="14" ry="32" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'biceps_triceps' ? '3' : '1'} transform="rotate(-15 360 305)" />
              </g>

              {/* Rectus Abdominis (Press) */}
              <g
                id="part-abdominals"
                onClick={(e) => handlePartClick(e, 'abdominals')}
                onMouseEnter={() => handlePartHover('abdominals')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('abdominals', 'muscle', 'muscular')}
              >
                {/* 6 pack blocks */}
                <rect x="226" y="325" width="20" height="22" rx="4" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'abdominals' ? '3' : '1'} />
                <rect x="254" y="325" width="20" height="22" rx="4" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'abdominals' ? '3' : '1'} />
                <rect x="226" y="352" width="20" height="24" rx="4" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'abdominals' ? '3' : '1'} />
                <rect x="254" y="352" width="20" height="24" rx="4" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'abdominals' ? '3' : '1'} />
                <rect x="226" y="381" width="20" height="26" rx="4" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'abdominals' ? '3' : '1'} />
                <rect x="254" y="381" width="20" height="26" rx="4" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'abdominals' ? '3' : '1'} />
              </g>

              {/* Quadriceps (Son to'rt boshli mushagi) */}
              <g
                id="part-quadriceps"
                onClick={(e) => handlePartClick(e, 'quadriceps_calves')}
                onMouseEnter={() => handlePartHover('quadriceps_calves')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('quadriceps_calves', 'muscle', 'muscular')}
              >
                {/* Left Leg Quads */}
                <path d="M185,550 C170,600 170,670 190,720 C205,720 220,680 225,620 C225,570 210,550 185,550 Z" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'quadriceps_calves' ? '3' : '1'} />
                {/* Right Leg Quads */}
                <path d="M315,550 C330,600 330,670 310,720 C295,720 280,680 275,620 C275,570 290,550 315,550 Z" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'quadriceps_calves' ? '3' : '1'} />
              </g>
            </g>
          )}

          {/* BACK VIEW MUSCLES */}
          {activeView === 'back' && (
            <g id="muscles-back">
              {/* Gluteus Maximus (Katta dumba mushagi) */}
              <g
                id="part-gluteus"
                onClick={(e) => handlePartClick(e, 'gluteus')}
                onMouseEnter={() => handlePartHover('gluteus')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('gluteus', 'muscle', 'muscular')}
              >
                <path d="M195,470 C165,490 160,540 190,565 C220,580 245,550 245,500 Z" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'gluteus' ? '3' : '1'} />
                <path d="M305,470 C335,490 340,540 310,565 C280,580 255,550 255,500 Z" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'gluteus' ? '3' : '1'} />
              </g>

              {/* Triceps (Qo'l orqa) */}
              <g
                id="part-triceps"
                onClick={(e) => handlePartClick(e, 'biceps_triceps')}
                onMouseEnter={() => handlePartHover('biceps_triceps')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('biceps_triceps', 'muscle', 'muscular')}
              >
                <ellipse cx="138" cy="295" rx="13" ry="30" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'biceps_triceps' ? '3' : '1'} transform="rotate(-10 138 295)" />
                <ellipse cx="362" cy="295" rx="13" ry="30" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'biceps_triceps' ? '3' : '1'} transform="rotate(10 362 295)" />
              </g>

              {/* Calves / Gastrocnemius (Boldir mushaklari) */}
              <g
                id="part-calves"
                onClick={(e) => handlePartClick(e, 'quadriceps_calves')}
                onMouseEnter={() => handlePartHover('quadriceps_calves')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('quadriceps_calves', 'muscle', 'muscular')}
              >
                <ellipse cx="185" cy="790" rx="18" ry="40" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'quadriceps_calves' ? '3' : '1'} />
                <ellipse cx="315" cy="790" rx="18" ry="40" fill="url(#grad-muscle)" stroke="#fda4af" strokeWidth={selectedItem?.id === 'quadriceps_calves' ? '3' : '1'} />
              </g>
            </g>
          )}

          {/* =============================================================== */}
          {/* BONE / SKELETON LAYER                                           */}
          {/* =============================================================== */}
          <g id="skeletal-system">
            {/* SKULL (Bosh suyagi) */}
            <g
              id="part-skull"
              onClick={(e) => handlePartClick(e, 'skull')}
              onMouseEnter={() => handlePartHover('skull')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('skull', 'bone', 'skeletal')}
            >
              {/* Cranial Vault */}
              <path
                d="M210,110 C210,80 225,65 250,65 C275,65 290,80 290,110 C290,135 282,145 280,160 L220,160 C218,145 210,135 210,110 Z"
                fill="url(#grad-bone-clean)"
                stroke={isDarkMode ? '#e2e8f0' : '#475569'}
                strokeWidth={selectedItem?.id === 'skull' ? '3.5' : '1.8'}
              />
              {activeView === 'front' ? (
                <>
                  {/* Eye orbits */}
                  <ellipse cx="235" cy="118" rx="8" ry="10" fill={isDarkMode ? '#0f172a' : '#1e293b'} />
                  <ellipse cx="265" cy="118" rx="8" ry="10" fill={isDarkMode ? '#0f172a' : '#1e293b'} />
                  {/* Nasal cavity */}
                  <path d="M250,126 L246,138 L254,138 Z" fill={isDarkMode ? '#0f172a' : '#1e293b'} />
                  {/* Maxilla & Mandible */}
                  <path
                    d="M232,150 L268,150 L263,172 C263,176 237,176 237,172 Z"
                    fill="url(#grad-bone-clean)"
                    stroke={isDarkMode ? '#e2e8f0' : '#475569'}
                    strokeWidth="1.2"
                  />
                  {/* Teeth line */}
                  <line x1="238" y1="158" x2="262" y2="158" stroke={isDarkMode ? '#0f172a' : '#334155'} strokeWidth="1" strokeDasharray="2,2" />
                </>
              ) : (
                /* Occipital back sutures */
                <path d="M250,75 L250,135 M230,125 L250,135 L270,125" stroke={isDarkMode ? '#94a3b8' : '#64748b'} strokeWidth="1.2" fill="none" />
              )}
            </g>

            {/* CERVICAL & SPINAL COLUMN (Umurtqa pog'onasi) */}
            <g
              id="part-spine"
              onClick={(e) => handlePartClick(e, 'spine')}
              onMouseEnter={() => handlePartHover('spine')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('spine', 'bone', 'skeletal')}
            >
              {/* Vertebral column blocks */}
              {[
                { y: 178, w: 18, h: 8 },  // C-spine
                { y: 188, w: 20, h: 8 },
                { y: 200, w: 22, h: 9 },  // Thoracic
                { y: 212, w: 23, h: 9 },
                { y: 224, w: 24, h: 10 },
                { y: 237, w: 24, h: 10 },
                { y: 250, w: 25, h: 10 },
                { y: 263, w: 25, h: 10 },
                { y: 276, w: 26, h: 11 },
                { y: 290, w: 26, h: 11 },
                { y: 304, w: 27, h: 11 },
                { y: 318, w: 27, h: 12 },
                { y: 333, w: 28, h: 12 },  // Lumbar
                { y: 348, w: 29, h: 13 },
                { y: 364, w: 30, h: 13 },
                { y: 380, w: 31, h: 14 },
                { y: 397, w: 32, h: 14 },
                { y: 414, w: 30, h: 18 },  // Sacrum
                { y: 434, w: 16, h: 12 },  // Coccyx
              ].map((v, i) => (
                <rect
                  key={i}
                  x={250 - v.w / 2}
                  y={v.y}
                  width={v.w}
                  height={v.h}
                  rx="3"
                  fill="url(#grad-bone-clean)"
                  stroke={isDarkMode ? '#e2e8f0' : '#475569'}
                  strokeWidth={selectedItem?.id === 'spine' ? '2.5' : '1.2'}
                  opacity={activeView === 'back' ? 0.95 : 0.45}
                />
              ))}
            </g>

            {/* CLAVICLES (O'mrov) & SCAPULAE (Kurak) */}
            <g
              id="part-clavicle-scapula"
              onClick={(e) => handlePartClick(e, 'clavicle_scapula')}
              onMouseEnter={() => handlePartHover('clavicle_scapula')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('clavicle_scapula', 'bone', 'skeletal')}
            >
              {activeView === 'front' ? (
                <>
                  {/* Left Clavicle */}
                  <path d="M242,198 C215,195 185,205 160,205" fill="none" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'clavicle_scapula' ? '5' : '3.5'} strokeLinecap="round" />
                  {/* Right Clavicle */}
                  <path d="M258,198 C285,195 315,205 340,205" fill="none" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'clavicle_scapula' ? '5' : '3.5'} strokeLinecap="round" />
                </>
              ) : (
                <>
                  {/* Left Scapula */}
                  <path d="M190,210 L155,225 L175,280 L195,240 Z" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth={selectedItem?.id === 'clavicle_scapula' ? '3' : '1.5'} />
                  {/* Right Scapula */}
                  <path d="M310,210 L345,225 L325,280 L305,240 Z" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth={selectedItem?.id === 'clavicle_scapula' ? '3' : '1.5'} />
                </>
              )}
            </g>

            {/* STERNUM & RIBS (To'sh va Qovurg'alar) */}
            <g
              id="part-ribs"
              onClick={(e) => handlePartClick(e, 'ribs')}
              onMouseEnter={() => handlePartHover('ribs')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('ribs', 'bone', 'skeletal')}
            >
              {/* Rib arcs (10 pairs visible) */}
              {[
                { r: 40, y: 220, ry: 15 },
                { r: 52, y: 234, ry: 18 },
                { r: 64, y: 249, ry: 21 },
                { r: 72, y: 266, ry: 24 },
                { r: 78, y: 284, ry: 27 },
                { r: 80, y: 304, ry: 28 },
                { r: 78, y: 324, ry: 26 },
                { r: 72, y: 342, ry: 24 },
                { r: 62, y: 358, ry: 20 },
                { r: 50, y: 372, ry: 16 },
              ].map((rib, i) => (
                <g key={i}>
                  {/* Left rib */}
                  <path
                    d={`M240,${rib.y - 10} C${240 - rib.r},${rib.y - 5} ${240 - rib.r},${rib.y + rib.ry} 242,${rib.y + rib.ry + 8}`}
                    fill="none"
                    stroke="url(#grad-bone-clean)"
                    strokeWidth={selectedItem?.id === 'ribs' ? '3.5' : '2.2'}
                    opacity={activeLayer === 'bones' ? 0.95 : 0.4}
                  />
                  {/* Right rib */}
                  <path
                    d={`M260,${rib.y - 10} C${260 + rib.r},${rib.y - 5} ${260 + rib.r},${rib.y + rib.ry} 258,${rib.y + rib.ry + 8}`}
                    fill="none"
                    stroke="url(#grad-bone-clean)"
                    strokeWidth={selectedItem?.id === 'ribs' ? '3.5' : '2.2'}
                    opacity={activeLayer === 'bones' ? 0.95 : 0.4}
                  />
                </g>
              ))}

              {/* Sternum (To'sh) in Front View */}
              {activeView === 'front' && (
                <path
                  d="M245,205 L255,205 L257,222 L254,300 L250,315 L246,300 L243,222 Z"
                  fill="url(#grad-bone-clean)"
                  stroke={isDarkMode ? '#e2e8f0' : '#475569'}
                  strokeWidth={selectedItem?.id === 'ribs' ? '3' : '1.8'}
                  opacity={activeLayer === 'bones' ? 0.95 : 0.65}
                />
              )}
            </g>

            {/* ARM BONES (Yelka, Tirsak, Bilak suyaklari) */}
            <g
              id="part-arm-bones"
              onClick={(e) => handlePartClick(e, 'arm_bones')}
              onMouseEnter={() => handlePartHover('arm_bones')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('arm_bones', 'bone', 'skeletal')}
            >
              {/* Left Humerus (Yelka) */}
              <line x1="158" y1="210" x2="135" y2="340" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'arm_bones' ? '9' : '7'} strokeLinecap="round" />
              {/* Left Forearm (Radius/Ulna) */}
              <line x1="135" y1="340" x2="110" y2="445" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'arm_bones' ? '7' : '5'} strokeLinecap="round" />
              <line x1="131" y1="342" x2="105" y2="447" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'arm_bones' ? '6' : '4'} strokeLinecap="round" />

              {/* Right Humerus (Yelka) */}
              <line x1="342" y1="210" x2="365" y2="340" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'arm_bones' ? '9' : '7'} strokeLinecap="round" />
              {/* Right Forearm (Radius/Ulna) */}
              <line x1="365" y1="340" x2="390" y2="445" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'arm_bones' ? '7' : '5'} strokeLinecap="round" />
              <line x1="369" y1="342" x2="395" y2="447" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'arm_bones' ? '6' : '4'} strokeLinecap="round" />
            </g>

            {/* HAND BONES (Qo'l panjasi) */}
            <g
              id="part-hand-bones"
              onClick={(e) => handlePartClick(e, 'hand_bones')}
              onMouseEnter={() => handlePartHover('hand_bones')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('hand_bones', 'bone', 'skeletal')}
            >
              {/* Left Hand */}
              <circle cx="106" cy="455" r="8" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth={selectedItem?.id === 'hand_bones' ? '2.5' : '1'} />
              <path d="M106,462 L95,505 M102,463 L99,512 M107,463 L106,515 M112,463 L113,510 M115,460 L123,490" stroke="url(#grad-bone-clean)" strokeWidth="2.5" strokeLinecap="round" />

              {/* Right Hand */}
              <circle cx="394" cy="455" r="8" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth={selectedItem?.id === 'hand_bones' ? '2.5' : '1'} />
              <path d="M394,462 L405,505 M398,463 L401,512 M393,463 L394,515 M388,463 L387,510 M385,460 L377,490" stroke="url(#grad-bone-clean)" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* PELVIS (Chanoq suyagi) */}
            <g
              id="part-pelvis"
              onClick={(e) => handlePartClick(e, 'pelvis')}
              onMouseEnter={() => handlePartHover('pelvis')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('pelvis', 'bone', 'skeletal')}
            >
              {/* Pelvic girdle wings */}
              <path
                d="
                  M250,420 
                  C225,410 195,405 185,430 
                  C175,455 180,490 205,505 
                  C220,515 240,510 250,490 
                  C260,510 280,515 295,505 
                  C320,490 325,455 315,430 
                  C305,405 275,410 250,420 Z
                "
                fill="url(#grad-bone-clean)"
                stroke={isDarkMode ? '#e2e8f0' : '#475569'}
                strokeWidth={selectedItem?.id === 'pelvis' ? '3.5' : '2'}
              />
              {/* Obturator foramens */}
              <ellipse cx="225" cy="485" rx="10" ry="12" fill={isDarkMode ? '#0f172a' : '#f1f5f9'} stroke={isDarkMode ? '#64748b' : '#94a3b8'} strokeWidth="1" />
              <ellipse cx="275" cy="485" rx="10" ry="12" fill={isDarkMode ? '#0f172a' : '#f1f5f9'} stroke={isDarkMode ? '#64748b' : '#94a3b8'} strokeWidth="1" />
            </g>

            {/* FEMUR (Son suyagi) */}
            <g
              id="part-femur"
              onClick={(e) => handlePartClick(e, 'femur_bone')}
              onMouseEnter={() => handlePartHover('femur_bone')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('femur_bone', 'bone', 'skeletal')}
            >
              {/* Left Femur */}
              <line x1="205" y1="495" x2="195" y2="690" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'femur_bone' ? '12' : '9'} strokeLinecap="round" />
              <circle cx="205" cy="495" r="9" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth="1.5" />

              {/* Right Femur */}
              <line x1="295" y1="495" x2="305" y2="690" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'femur_bone' ? '12' : '9'} strokeLinecap="round" />
              <circle cx="295" cy="495" r="9" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth="1.5" />
            </g>

            {/* PATELLA, TIBIA & FIBULA (Tizza qopqog'i va Boldir suyaklari) */}
            <g
              id="part-tibia-fibula"
              onClick={(e) => handlePartClick(e, 'patella_tibia_fibula')}
              onMouseEnter={() => handlePartHover('patella_tibia_fibula')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('patella_tibia_fibula', 'bone', 'skeletal')}
            >
              {/* Left Patella */}
              {activeView === 'front' && (
                <circle cx="195" cy="695" r="7" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth={selectedItem?.id === 'patella_tibia_fibula' ? '2.5' : '1.5'} />
              )}
              {/* Left Tibia & Fibula */}
              <line x1="195" y1="702" x2="185" y2="870" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'patella_tibia_fibula' ? '10' : '7.5'} strokeLinecap="round" />
              <line x1="183" y1="708" x2="175" y2="865" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'patella_tibia_fibula' ? '5' : '3.5'} strokeLinecap="round" />

              {/* Right Patella */}
              {activeView === 'front' && (
                <circle cx="305" cy="695" r="7" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth={selectedItem?.id === 'patella_tibia_fibula' ? '2.5' : '1.5'} />
              )}
              {/* Right Tibia & Fibula */}
              <line x1="305" y1="702" x2="315" y2="870" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'patella_tibia_fibula' ? '10' : '7.5'} strokeLinecap="round" />
              <line x1="317" y1="708" x2="325" y2="865" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'patella_tibia_fibula' ? '5' : '3.5'} strokeLinecap="round" />
            </g>

            {/* FOOT BONES (Oyoq panjasi) */}
            <g
              id="part-foot-bones"
              onClick={(e) => handlePartClick(e, 'foot_bones')}
              onMouseEnter={() => handlePartHover('foot_bones')}
              onMouseLeave={() => handlePartHover(null)}
              style={getElementStyle('foot_bones', 'bone', 'skeletal')}
            >
              {/* Left Foot */}
              <ellipse cx="185" cy="880" rx="9" ry="6" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth="1" />
              <path d="M185,885 L180,920 L165,920" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'foot_bones' ? '6' : '4'} strokeLinecap="round" />

              {/* Right Foot */}
              <ellipse cx="315" cy="880" rx="9" ry="6" fill="url(#grad-bone-clean)" stroke={isDarkMode ? '#e2e8f0' : '#475569'} strokeWidth="1" />
              <path d="M315,885 L320,920 L335,920" stroke="url(#grad-bone-clean)" strokeWidth={selectedItem?.id === 'foot_bones' ? '6' : '4'} strokeLinecap="round" />
            </g>
          </g>

          {/* =============================================================== */}
          {/* ORGANS LAYER (Visible in Front / Back appropriately)             */}
          {/* =============================================================== */}
          {/* BRAIN (Miya) */}
          <g
            id="part-brain"
            onClick={(e) => handlePartClick(e, 'brain')}
            onMouseEnter={() => handlePartHover('brain')}
            onMouseLeave={() => handlePartHover(null)}
            style={getElementStyle('brain', 'organ', 'nervous')}
          >
            <path
              d="M225,120 C220,100 230,80 250,80 C270,80 280,100 275,120 C270,135 230,135 225,120 Z"
              fill={selectedItem?.id === 'brain' ? '#a855f7' : isDarkMode ? '#8b5cf6' : '#a78bfa'}
              opacity="0.85"
              stroke="#c084fc"
              strokeWidth={selectedItem?.id === 'brain' ? '3' : '1.5'}
            />
            {/* Cerebral convolutions (Giruslar) */}
            <path d="M232,95 Q240,90 248,96 T265,95 M235,110 Q245,105 255,112 T268,108" fill="none" stroke="#e9d5ff" strokeWidth="1.2" />
          </g>

          {/* CEREBELLUM & SPINAL CORD (Back view) */}
          {activeView === 'back' && (
            <>
              <g
                id="part-cerebellum"
                onClick={(e) => handlePartClick(e, 'cerebellum')}
                onMouseEnter={() => handlePartHover('cerebellum')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('cerebellum', 'organ', 'nervous')}
              >
                <ellipse cx="250" cy="142" rx="22" ry="14" fill="#6366f1" stroke="#a5b4fc" strokeWidth={selectedItem?.id === 'cerebellum' ? '3' : '1.5'} />
                <line x1="235" y1="142" x2="265" y2="142" stroke="#e0e7ff" strokeWidth="1" strokeDasharray="2,2" />
              </g>

              <g
                id="part-spinal-cord"
                onClick={(e) => handlePartClick(e, 'spinal_cord')}
                onMouseEnter={() => handlePartHover('spinal_cord')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('spinal_cord', 'organ', 'nervous')}
              >
                <line x1="250" y1="156" x2="250" y2="380" stroke="#818cf8" strokeWidth={selectedItem?.id === 'spinal_cord' ? '5' : '3.5'} strokeLinecap="round" />
              </g>
            </>
          )}

          {/* SENSORY ORGANS (Eyes & Ears in Front view) */}
          {activeView === 'front' && (
            <>
              <g
                id="part-eye"
                onClick={(e) => handlePartClick(e, 'eye')}
                onMouseEnter={() => handlePartHover('eye')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('eye', 'organ', 'nervous')}
              >
                <circle cx="235" cy="118" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                <circle cx="265" cy="118" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              </g>

              <g
                id="part-ear"
                onClick={(e) => handlePartClick(e, 'ear')}
                onMouseEnter={() => handlePartHover('ear')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('ear', 'organ', 'nervous')}
              >
                <path d="M207,112 C204,118 204,128 208,132" fill="none" stroke="#f59e0b" strokeWidth={selectedItem?.id === 'ear' ? '3.5' : '2.5'} strokeLinecap="round" />
                <path d="M293,112 C296,118 296,128 292,132" fill="none" stroke="#f59e0b" strokeWidth={selectedItem?.id === 'ear' ? '3.5' : '2.5'} strokeLinecap="round" />
              </g>

              {/* THYROID GLAND (Qalqonsimon bez) */}
              <g
                id="part-thyroid"
                onClick={(e) => handlePartClick(e, 'thyroid')}
                onMouseEnter={() => handlePartHover('thyroid')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('thyroid', 'endocrine', 'endocrine')}
              >
                <path
                  d="M242,185 C235,180 236,192 240,195 C246,196 254,196 260,195 C264,192 265,180 258,185 C255,188 245,188 242,185 Z"
                  fill="#ec4899"
                  stroke="#fbcfe8"
                  strokeWidth={selectedItem?.id === 'thyroid' ? '2.5' : '1.2'}
                />
              </g>

              {/* TRACHEA (Kekirdak) */}
              <g
                id="part-trachea"
                onClick={(e) => handlePartClick(e, 'trachea')}
                onMouseEnter={() => handlePartHover('trachea')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('trachea', 'organ', 'respiratory')}
              >
                <rect x="246" y="196" width="8" height="34" rx="2" fill="#06b6d4" stroke="#a5f3fc" strokeWidth={selectedItem?.id === 'trachea' ? '2.5' : '1'} />
                {/* Cartilage rings */}
                <line x1="246" y1="202" x2="254" y2="202" stroke="#ffffff" strokeWidth="1" />
                <line x1="246" y1="208" x2="254" y2="208" stroke="#ffffff" strokeWidth="1" />
                <line x1="246" y1="214" x2="254" y2="214" stroke="#ffffff" strokeWidth="1" />
                <line x1="246" y1="220" x2="254" y2="220" stroke="#ffffff" strokeWidth="1" />
              </g>

              {/* LUNGS (O'pka) */}
              <g
                id="part-lungs"
                onClick={(e) => handlePartClick(e, 'lungs')}
                onMouseEnter={() => handlePartHover('lungs')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('lungs', 'organ', 'respiratory')}
              >
                {/* Right Lung (on viewer's left side) */}
                <path
                  d="M238,228 C215,225 180,240 180,285 C180,330 200,345 235,342 C240,342 242,280 238,228 Z"
                  fill="url(#grad-lungs)"
                  stroke="#38bdf8"
                  strokeWidth={selectedItem?.id === 'lungs' ? '3' : '1.5'}
                  filter="url(#soft-shadow)"
                />
                {/* Left Lung (on viewer's right side, with cardiac notch) */}
                <path
                  d="M262,228 C285,225 320,240 320,285 C320,330 300,345 265,342 C258,320 255,275 262,228 Z"
                  fill="url(#grad-lungs)"
                  stroke="#38bdf8"
                  strokeWidth={selectedItem?.id === 'lungs' ? '3' : '1.5'}
                  filter="url(#soft-shadow)"
                />
              </g>

              {/* HEART & AORTA (Yurak va Aorta) */}
              <g
                id="part-aorta"
                onClick={(e) => handlePartClick(e, 'aorta')}
                onMouseEnter={() => handlePartHover('aorta')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('aorta', 'vessel', 'cardiovascular')}
              >
                {/* Aortic Arch */}
                <path d="M250,238 C250,225 265,222 266,236 L266,280" fill="none" stroke="#f43f5e" strokeWidth={selectedItem?.id === 'aorta' ? '6' : '4.5'} strokeLinecap="round" />
                {/* Vena Cava */}
                <path d="M242,228 L242,255" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
              </g>

              <g
                id="part-heart"
                onClick={(e) => handlePartClick(e, 'heart')}
                onMouseEnter={() => handlePartHover('heart')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('heart', 'organ', 'cardiovascular')}
              >
                {/* Heart muscle shape */}
                <path
                  d="M248,245 C238,242 232,252 235,268 C238,285 258,305 262,305 C266,305 275,285 272,268 C270,252 260,242 252,245 Z"
                  fill="url(#grad-heart)"
                  stroke="#f87171"
                  strokeWidth={selectedItem?.id === 'heart' ? '3.5' : '1.8'}
                  filter="url(#soft-shadow)"
                />
                {/* Coronary artery detail */}
                <path d="M248,252 Q252,265 256,280" fill="none" stroke="#fecaca" strokeWidth="1.2" />
              </g>

              {/* LIVER (Jigar) */}
              <g
                id="part-liver"
                onClick={(e) => handlePartClick(e, 'liver')}
                onMouseEnter={() => handlePartHover('liver')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('liver', 'organ', 'digestive')}
              >
                <path
                  d="M192,342 C205,335 255,335 268,348 C270,365 258,390 230,395 C200,398 185,375 192,342 Z"
                  fill="url(#grad-liver)"
                  stroke="#f59e0b"
                  strokeWidth={selectedItem?.id === 'liver' ? '3' : '1.5'}
                  filter="url(#soft-shadow)"
                />
              </g>

              {/* GALLBLADDER (O't pufagi) */}
              <g
                id="part-gallbladder"
                onClick={(e) => handlePartClick(e, 'gallbladder')}
                onMouseEnter={() => handlePartHover('gallbladder')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('gallbladder', 'organ', 'digestive')}
              >
                <ellipse cx="228" cy="385" rx="6" ry="8" fill="#10b981" stroke="#6ee7b7" strokeWidth={selectedItem?.id === 'gallbladder' ? '2.5' : '1.2'} />
              </g>

              {/* STOMACH (Oshqozon) */}
              <g
                id="part-stomach"
                onClick={(e) => handlePartClick(e, 'stomach')}
                onMouseEnter={() => handlePartHover('stomach')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('stomach', 'organ', 'digestive')}
              >
                <path
                  d="M255,348 C270,345 295,355 295,375 C295,398 275,410 252,400 C246,396 250,370 255,348 Z"
                  fill="url(#grad-stomach)"
                  stroke="#fbbf24"
                  strokeWidth={selectedItem?.id === 'stomach' ? '3' : '1.5'}
                  filter="url(#soft-shadow)"
                />
              </g>

              {/* SPLEEN (Taloq) */}
              <g
                id="part-spleen"
                onClick={(e) => handlePartClick(e, 'spleen')}
                onMouseEnter={() => handlePartHover('spleen')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('spleen', 'organ', 'lymphatic')}
              >
                <ellipse cx="298" cy="360" rx="9" ry="14" fill="#a855f7" stroke="#d8b4fe" strokeWidth={selectedItem?.id === 'spleen' ? '2.5' : '1.2'} transform="rotate(25 298 360)" />
              </g>

              {/* PANCREAS (Oshqozon osti bezi) */}
              <g
                id="part-pancreas"
                onClick={(e) => handlePartClick(e, 'pancreas')}
                onMouseEnter={() => handlePartHover('pancreas')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('pancreas', 'organ', 'digestive')}
              >
                <path d="M238,390 C250,385 275,385 285,392 C275,398 250,398 238,390 Z" fill="#eab308" stroke="#fef08a" strokeWidth={selectedItem?.id === 'pancreas' ? '2.5' : '1.2'} />
              </g>

              {/* INTESTINES (Katta va Kichik ichaklar) */}
              {/* Large Intestine (Yo'g'on ichak) */}
              <g
                id="part-large-intestine"
                onClick={(e) => handlePartClick(e, 'large_intestine')}
                onMouseEnter={() => handlePartHover('large_intestine')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('large_intestine', 'organ', 'digestive')}
              >
                <path
                  d="
                    M210,465 L210,405 C210,400 215,395 220,395 
                    L280,395 C285,395 290,400 290,405 
                    L290,470 L280,470 L280,405 L220,405 L220,465 Z
                  "
                  fill="#c2410c"
                  stroke="#fdba74"
                  strokeWidth={selectedItem?.id === 'large_intestine' ? '3' : '1.5'}
                />
              </g>

              {/* Small Intestine (Ingichka ichak) */}
              <g
                id="part-small-intestine"
                onClick={(e) => handlePartClick(e, 'small_intestine')}
                onMouseEnter={() => handlePartHover('small_intestine')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('small_intestine', 'organ', 'digestive')}
              >
                <rect x="222" y="410" width="56" height="52" rx="10" fill="url(#grad-intestine)" stroke="#fed7aa" strokeWidth={selectedItem?.id === 'small_intestine' ? '3' : '1.5'} />
                {/* Winding folds */}
                <path d="M228,422 Q245,418 262,424 T274,420 M226,436 Q245,432 264,438 T274,434 M228,450 Q245,446 262,452" fill="none" stroke="#fff7ed" strokeWidth="1.2" />
              </g>

              {/* APPENDIX (Ko'r ichak) */}
              <g
                id="part-appendix"
                onClick={(e) => handlePartClick(e, 'appendix')}
                onMouseEnter={() => handlePartHover('appendix')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('appendix', 'organ', 'digestive')}
              >
                <path d="M210,470 C206,478 208,485 214,488" fill="none" stroke="#f43f5e" strokeWidth={selectedItem?.id === 'appendix' ? '3.5' : '2.5'} strokeLinecap="round" />
              </g>

              {/* BLADDER (Qovuq) */}
              <g
                id="part-bladder"
                onClick={(e) => handlePartClick(e, 'bladder')}
                onMouseEnter={() => handlePartHover('bladder')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('bladder', 'organ', 'urinary')}
              >
                <ellipse cx="250" cy="505" rx="16" ry="12" fill="#eab308" stroke="#fef08a" strokeWidth={selectedItem?.id === 'bladder' ? '3' : '1.5'} />
              </g>

              {/* REPRODUCTIVE ORGANS (Respectful & scientific) */}
              {gender === 'male' ? (
                <g
                  id="part-male-reproductive"
                  onClick={(e) => handlePartClick(e, 'male_reproductive')}
                  onMouseEnter={() => handlePartHover('male_reproductive')}
                  onMouseLeave={() => handlePartHover(null)}
                  style={getElementStyle('male_reproductive', 'organ', 'reproductive_male')}
                >
                  <circle cx="245" cy="528" r="6.5" fill="#0284c7" stroke="#bae6fd" strokeWidth={selectedItem?.id === 'male_reproductive' ? '2.5' : '1'} />
                  <circle cx="255" cy="528" r="6.5" fill="#0284c7" stroke="#bae6fd" strokeWidth={selectedItem?.id === 'male_reproductive' ? '2.5' : '1'} />
                </g>
              ) : (
                <g
                  id="part-female-reproductive"
                  onClick={(e) => handlePartClick(e, 'female_reproductive')}
                  onMouseEnter={() => handlePartHover('female_reproductive')}
                  onMouseLeave={() => handlePartHover(null)}
                  style={getElementStyle('female_reproductive', 'organ', 'reproductive_female')}
                >
                  {/* Uterus & Ovaries */}
                  <path d="M244,495 L256,495 L253,510 L247,510 Z" fill="#ec4899" stroke="#fbcfe8" strokeWidth={selectedItem?.id === 'female_reproductive' ? '2.5' : '1'} />
                  <circle cx="236" cy="498" r="3.5" fill="#f43f5e" />
                  <circle cx="264" cy="498" r="3.5" fill="#f43f5e" />
                </g>
              )}
            </>
          )}

          {/* BACK VIEW: KIDNEYS & ADRENALS */}
          {activeView === 'back' && (
            <>
              {/* KIDNEYS (Buyraklar) */}
              <g
                id="part-kidneys"
                onClick={(e) => handlePartClick(e, 'kidneys')}
                onMouseEnter={() => handlePartHover('kidneys')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('kidneys', 'organ', 'urinary')}
              >
                {/* Left Kidney */}
                <path d="M225,320 C210,320 205,338 208,355 C212,370 226,375 232,360 C234,345 235,325 225,320 Z" fill="url(#grad-kidney)" stroke="#d97706" strokeWidth={selectedItem?.id === 'kidneys' ? '3' : '1.5'} />
                {/* Right Kidney (slightly lower) */}
                <path d="M275,326 C290,326 295,344 292,361 C288,376 274,381 268,366 C266,351 265,331 275,326 Z" fill="url(#grad-kidney)" stroke="#d97706" strokeWidth={selectedItem?.id === 'kidneys' ? '3' : '1.5'} />
              </g>

              {/* ADRENAL GLANDS (Buyrak usti bezlari) */}
              <g
                id="part-adrenals"
                onClick={(e) => handlePartClick(e, 'adrenal_glands')}
                onMouseEnter={() => handlePartHover('adrenal_glands')}
                onMouseLeave={() => handlePartHover(null)}
                style={getElementStyle('adrenal_glands', 'endocrine', 'endocrine')}
              >
                <path d="M218,318 L228,312 L232,320 Z" fill="#f59e0b" stroke="#fef3c7" strokeWidth={selectedItem?.id === 'adrenal_glands' ? '2' : '1'} />
                <path d="M272,324 L282,318 L286,326 Z" fill="#f59e0b" stroke="#fef3c7" strokeWidth={selectedItem?.id === 'adrenal_glands' ? '2' : '1'} />
              </g>
            </>
          )}

          {/* =============================================================== */}
          {/* SELECTION RING / HIGHLIGHT PULSE                                */}
          {/* =============================================================== */}
          {selectedItem && (
            <g className="pointer-events-none animate-pulse">
              <circle
                cx={
                  selectedItem.id === 'heart' ? 258 :
                  selectedItem.id === 'brain' ? 250 :
                  selectedItem.id === 'lungs' ? 250 :
                  selectedItem.id === 'stomach' ? 270 :
                  selectedItem.id === 'liver' ? 230 :
                  selectedItem.id === 'kidneys' ? 228 :
                  selectedItem.id === 'skull' ? 250 :
                  selectedItem.id === 'spine' ? 250 :
                  selectedItem.id === 'pelvis' ? 250 :
                  selectedItem.id === 'femur_bone' ? 205 :
                  selectedItem.id === 'patella_tibia_fibula' ? 195 :
                  selectedItem.id === 'arm_bones' ? 150 :
                  selectedItem.id === 'hand_bones' ? 106 :
                  selectedItem.id === 'foot_bones' ? 185 :
                  selectedItem.id === 'gluteus' ? 195 :
                  selectedItem.id === 'pectorals' ? 200 :
                  selectedItem.id === 'biceps_triceps' ? 140 :
                  selectedItem.id === 'abdominals' ? 250 :
                  selectedItem.id === 'thyroid' ? 250 :
                  selectedItem.id === 'trachea' ? 250 :
                  selectedItem.id === 'bladder' ? 250 : 250
                }
                cy={
                  selectedItem.id === 'heart' ? 275 :
                  selectedItem.id === 'brain' ? 110 :
                  selectedItem.id === 'lungs' ? 285 :
                  selectedItem.id === 'stomach' ? 375 :
                  selectedItem.id === 'liver' ? 365 :
                  selectedItem.id === 'kidneys' ? 348 :
                  selectedItem.id === 'skull' ? 115 :
                  selectedItem.id === 'spine' ? 300 :
                  selectedItem.id === 'pelvis' ? 465 :
                  selectedItem.id === 'femur_bone' ? 590 :
                  selectedItem.id === 'patella_tibia_fibula' ? 780 :
                  selectedItem.id === 'arm_bones' ? 275 :
                  selectedItem.id === 'hand_bones' ? 475 :
                  selectedItem.id === 'foot_bones' ? 895 :
                  selectedItem.id === 'gluteus' ? 515 :
                  selectedItem.id === 'pectorals' ? 275 :
                  selectedItem.id === 'biceps_triceps' ? 305 :
                  selectedItem.id === 'abdominals' ? 365 :
                  selectedItem.id === 'thyroid' ? 190 :
                  selectedItem.id === 'trachea' ? 212 :
                  selectedItem.id === 'bladder' ? 505 : 250
                }
                r="30"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeDasharray="4,4"
              />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
