import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { CoverSection } from './components/CoverSection';
import { WeekSection } from './components/WeekSection';
import { SummaryListsSection } from './components/SummaryListsSection';
import { VideoModal } from './components/VideoModal';
import { PdfExportModal } from './components/PdfExportModal';
import { PdfExportView } from './components/PdfExportView';
import { WEEKS_DATA, BRAND_NAME, SUPPORT_WHATSAPP, SUPPORT_PHONE } from './data/roadmapData';
import { MessageCircle, Heart, ArrowUp, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [completedResources, setCompletedResources] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('exodia_ae_completed_resources');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf-preview'>('interactive');
  const [activeWeekFilter, setActiveWeekFilter] = useState<number | 'all'>('all');
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Calculate total resources count
  const allResources = WEEKS_DATA.flatMap(w => w.resources);
  const totalCount = allResources.length;
  const completedCount = completedResources.length;

  useEffect(() => {
    try {
      localStorage.setItem('exodia_ae_completed_resources', JSON.stringify(completedResources));
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }
  }, [completedResources]);

  const handleToggleCompleteResource = (id: string) => {
    setCompletedResources(prev => {
      const next = prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id];
      if (next.length === totalCount && prev.length < totalCount) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('هل أنت تأكد من إعادة ضبط حالة التقدم؟')) {
      setCompletedResources([]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToRoadmap = () => {
    const el = document.getElementById('roadmap-start');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredWeeks = activeWeekFilter === 'all'
    ? WEEKS_DATA
    : WEEKS_DATA.filter(w => w.number === activeWeekFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Header Navigation */}
      <Header
        completedCount={completedCount}
        totalCount={totalCount}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onPrint={handlePrint}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Mode 1: INTERACTIVE VIEW */}
      {activeTab === 'interactive' && (
        <main className="flex-1">
          
          {/* Cover Hero Banner */}
          <CoverSection
            onStartRoadmap={scrollToRoadmap}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />

          <div id="roadmap-start" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            
            {/* Week Filter Bar & Controls */}
            <div className="sticky top-20 z-30 bg-slate-950/90 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-xl mb-10 flex flex-wrap items-center justify-between gap-3 no-print">
              
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <button
                  onClick={() => setActiveWeekFilter('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeWeekFilter === 'all'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  الخطة الكلية (4 أسابيع)
                </button>

                {WEEKS_DATA.map(w => (
                  <button
                    key={w.number}
                    onClick={() => setActiveWeekFilter(w.number)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeWeekFilter === w.number
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    الأسبوع {w.number}
                  </button>
                ))}
              </div>

              {/* Reset Progress Button */}
              {completedCount > 0 && (
                <button
                  onClick={handleResetProgress}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-rose-400 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                  title="إعادة ضبط التقدم"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>إعادة الضبط</span>
                </button>
              )}

            </div>

            {/* Weeks Sections */}
            <div className="space-y-4">
              {filteredWeeks.map(week => (
                <WeekSection
                  key={week.number}
                  week={week}
                  completedResourceIds={completedResources}
                  onToggleCompleteResource={handleToggleCompleteResource}
                  onPlayVideo={(videoId, title) => setSelectedVideo({ id: videoId, title })}
                />
              ))}
            </div>

            {/* Arabic & Foreign Mastery Summaries */}
            <SummaryListsSection />

          </div>

        </main>
      )}

      {/* Main Mode 2: LIVE PDF PAGES PREVIEW */}
      {activeTab === 'pdf-preview' && (
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 mb-6 flex items-center justify-between flex-wrap gap-4 no-print">
            <div>
              <h2 className="text-base font-bold font-heading text-slate-100">
                معاينة صفحات ملف PDF الفاخر
              </h2>
              <p className="text-xs text-slate-400">
                هذا هو التنسيق النهائي الدقيق الذي سيظهر في ملف PDF المحمل أو المطبوع
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-xl shadow cursor-pointer"
              >
                تنزيل ملف PDF الآن
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 cursor-pointer"
              >
                طباعة المظاهر المباشرة
              </button>
            </div>
          </div>

          <PdfExportView />
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 space-y-3">
          <div className="flex items-center justify-center gap-2 text-slate-300 font-bold font-heading">
            <span className="text-amber-400">{BRAND_NAME}</span>
            <span>– Roadmap Exodia لتعلّم After Effects خلال شهر</span>
          </div>

          <p className="max-w-md mx-auto text-slate-500 text-[11px] leading-normal">
            تصميم وإعداد خاص لصالح علامة {BRAND_NAME}. لتقديم أي استفسار أو للحصول على الدعم الفني المباشر تواصل معنا فوراً.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              href={SUPPORT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>دعم واتساب: {SUPPORT_PHONE}</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo.id}
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* PDF Export Modal */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onPrint={handlePrint}
      />

    </div>
  );
}
