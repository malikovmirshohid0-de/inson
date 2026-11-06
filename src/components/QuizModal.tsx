import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { X, Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Brain } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onSelectOrgan?: (organId: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  onSelectOrgan,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-xl flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Anatomiya Viktorinasi</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                10 ta qiziqarli savol orqali bilimingizni sinab ko'ring
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

        {/* Progress bar */}
        {!isCompleted && (
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5">
            <div
              className="bg-purple-500 h-1.5 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        {/* Question Body or Completion Screen */}
        <div className="p-5 sm:p-6 flex-1 overflow-y-auto custom-scrollbar">
          {!isCompleted ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Savol {currentIndex + 1} / {QUIZ_QUESTIONS.length}</span>
                <span>To'g'ri javoblar: {score} ta</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold leading-snug text-slate-900 dark:text-slate-100">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let btnStyle = isDarkMode
                    ? 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-200'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-800 dark:text-rose-300';
                    } else {
                      btnStyle = 'opacity-40 border-transparent';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-purple-500/20 border-purple-500 text-purple-700 dark:text-purple-300 font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation box after submit */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm leading-relaxed text-purple-950 dark:text-purple-200 animate-fadeIn">
                  <span className="font-bold block mb-1">💡 Izoh:</span>
                  {currentQ.explanation}
                  {currentQ.relatedOrganId && onSelectOrgan && (
                    <button
                      onClick={() => {
                        onSelectOrgan(currentQ.relatedOrganId!);
                        onClose();
                      }}
                      className="mt-2 block font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      Ushbu a'zoni modelda ko'rish →
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-500 mx-auto flex items-center justify-center">
                <Award className="w-9 h-9" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black">
                {score >= 8 ? "A'lo natija! 🎓" : score >= 5 ? "Yaxshi natija! 👏" : "Qayta urinib ko'ring! 📚"}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Siz 10 ta savoldan <span className="font-bold text-purple-500">{score} tasiga</span> to'g'ri javob berdingiz.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                Anatomiya bilimlari inson o'z sog'lig'ini asrashi va kasalliklarning oldini olishida eng muhim poydevordir.
              </div>

              <div className="pt-3 flex items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-sm flex items-center gap-2 hover:bg-purple-500 transition-colors shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  Qayta boshlash
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Yopish
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!isCompleted && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {isAnswerSubmitted ? "Keyingi savolga o'tish uchun bosing" : "Iltimos, bir javobni tanlang"}
            </span>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className="px-5 py-2 rounded-xl bg-purple-600 disabled:opacity-40 text-white font-bold text-sm hover:bg-purple-500 transition-colors"
              >
                Javobni tekshirish
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
              >
                <span>{currentIndex + 1 === QUIZ_QUESTIONS.length ? 'Natijani ko\'rish' : 'Keyingisi'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
