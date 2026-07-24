import React from 'react';
import { Download, Printer, CheckCircle2, MessageCircle, Sparkles, Film } from 'lucide-react';
import { ROADMAP_TITLE, BRAND_NAME, SUPPORT_WHATSAPP } from '../data/roadmapData';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
  onOpenPdfModal: () => void;
  onPrint: () => void;
  activeTab: 'interactive' | 'pdf-preview';
  setActiveTab: (tab: 'interactive' | 'pdf-preview') => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalCount,
  onOpenPdfModal,
  onPrint,
  activeTab,
  setActiveTab
}) => {
  const progressPercent = Math.round((completedCount / (totalCount || 1)) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-900 p-0.5 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Film className="w-5 h-5 text-cyan-400" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-amber-300 bg-clip-text text-transparent">
                {BRAND_NAME}
              </span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded-full font-medium">
                رسمي
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-bold text-slate-100 font-heading line-clamp-1">
              {ROADMAP_TITLE}
            </h1>
          </div>
        </div>

        {/* Progress & Actions */}
        <div className="flex items-center gap-3">
          
          {/* Progress Indicator */}
          <div className="hidden lg:flex flex-col items-end gap-1 px-3 py-1.5 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>الإنجاز: {completedCount} من {totalCount} ({progressPercent}%)</span>
            </div>
            <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* WhatsApp Support Button */}
          <a
            href={SUPPORT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/60 rounded-xl text-xs font-medium transition-all"
            title="تواصل مع الدعم الفني لـ Exodia"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>تواصل معنا</span>
          </a>
        </div>

      </div>
    </header>
  );
};
