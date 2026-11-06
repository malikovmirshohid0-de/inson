import React, { useState, useMemo } from 'react';
import { BONES_206_DATA, TOTAL_BONES_COUNT } from '../data/bones206';
import { BoneCatalogItem } from '../types/anatomy';
import { X, Search, CheckCircle, Bone, ChevronRight } from 'lucide-react';

interface BonesCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBone: (boneId: string) => void;
  isDarkMode: boolean;
}

export const BonesCatalogModal: React.FC<BonesCatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectBone,
  isDarkMode,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredBones = useMemo(() => {
    return BONES_206_DATA.filter((bone) => {
      const matchesSearch =
        bone.nameUz.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bone.nameLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bone.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        selectedRegion === 'all' || bone.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const regionCounts = useMemo(() => {
    return {
      all: TOTAL_BONES_COUNT,
      bosh: BONES_206_DATA.filter((b) => b.region === 'bosh').reduce((a, c) => a + c.count, 0),
      umurtqa: BONES_206_DATA.filter((b) => b.region === 'umurtqa').reduce((a, c) => a + c.count, 0),
      kokrak: BONES_206_DATA.filter((b) => b.region === 'kokrak').reduce((a, c) => a + c.count, 0),
      qol: BONES_206_DATA.filter((b) => b.region === 'qol').reduce((a, c) => a + c.count, 0),
      oyoq: BONES_206_DATA.filter((b) => b.region === 'oyoq').reduce((a, c) => a + c.count, 0),
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <Bone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <span>Inson Skeletidagi Barcha 206 ta Suyak</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-800">
                  {TOTAL_BONES_COUNT} / 206 ta
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                To'liq anatomik tasnif, juft va toq suyaklar ro'yxati hamda tavsifi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Suyak nomi yoki lotincha nomini qidiring (masalan: peshona, femur, tibia)..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-700 text-white focus:border-amber-500'
                  : 'bg-white border-slate-300 text-slate-900 focus:border-amber-500'
              }`}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Tozalash
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold custom-scrollbar">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                selectedRegion === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Hammasi ({regionCounts.all})
            </button>
            <button
              onClick={() => setSelectedRegion('bosh')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                selectedRegion === 'bosh'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Bosh suyagi ({regionCounts.bosh})
            </button>
            <button
              onClick={() => setSelectedRegion('umurtqa')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                selectedRegion === 'umurtqa'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Umurtqa pog'onasi ({regionCounts.umurtqa})
            </button>
            <button
              onClick={() => setSelectedRegion('kokrak')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                selectedRegion === 'kokrak'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Ko'krak qafasi ({regionCounts.kokrak})
            </button>
            <button
              onClick={() => setSelectedRegion('qol')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                selectedRegion === 'qol'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Qo'l suyaklari ({regionCounts.qol})
            </button>
            <button
              onClick={() => setSelectedRegion('oyoq')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                selectedRegion === 'oyoq'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Oyoq suyaklari ({regionCounts.oyoq})
            </button>
          </div>
        </div>

        {/* Bones List Table / Cards */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 custom-scrollbar">
          {filteredBones.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              Hech qanday suyak topilmadi. Qidiruv so'zini o'zgartirib ko'ring.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredBones.map((bone: BoneCatalogItem) => (
                <div
                  key={bone.id}
                  onClick={() => {
                    // Try to map to main model part
                    const targetId =
                      bone.region === 'bosh' ? 'skull' :
                      bone.region === 'umurtqa' ? 'spine' :
                      bone.region === 'kokrak' ? 'ribs' :
                      bone.id === 'clavicle' || bone.id === 'scapula' ? 'clavicle_scapula' :
                      bone.id === 'humerus' || bone.id === 'radius' || bone.id === 'ulna' ? 'arm_bones' :
                      bone.region === 'qol' ? 'hand_bones' :
                      bone.id === 'hip_bone' ? 'pelvis' :
                      bone.id === 'femur' ? 'femur_bone' :
                      bone.id === 'patella' || bone.id === 'tibia' || bone.id === 'fibula' ? 'patella_tibia_fibula' :
                      'foot_bones';

                    onSelectBone(targetId);
                    onClose();
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer hover:scale-[1.01] hover:border-amber-400/80 ${
                    isDarkMode
                      ? 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/60'
                      : 'bg-white hover:bg-amber-50/40 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                          {bone.nameUz}
                        </h4>
                        <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          {bone.count} ta {bone.isPaired ? '(juft)' : '(toq)'}
                        </span>
                      </div>
                      <p className="text-xs font-serif italic text-slate-500 dark:text-slate-400 mt-0.5">
                        {bone.nameLatin}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {bone.description}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>{bone.regionUz}</span>
                    <span className="text-sky-500 hover:underline">Modelda ko'rish →</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>Kattalarda inson skeleti: 206 ta suyak (chaqaloqlarda ~300 ta bo'lib keyin birikadi).</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
