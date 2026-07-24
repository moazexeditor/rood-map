import React from 'react';
import { Film, Sparkles, Award, PlayCircle, Layers, CheckCircle2, ArrowDownCircle } from 'lucide-react';
import { ROADMAP_TITLE, BRAND_NAME, BRAND_SUBTITLE } from '../data/roadmapData';

interface CoverSectionProps {
  onStartRoadmap: () => void;
  onOpenPdfModal: () => void;
}

export const CoverSection: React.FC<CoverSectionProps> = ({ onStartRoadmap, onOpenPdfModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 pt-10 pb-16">
      
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Brand Luxury Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase shadow-xl mb-6">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{BRAND_NAME} Official Roadmap</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        {/* AE Logo Icon Graphic */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 p-1 shadow-2xl shadow-cyan-500/20 ring-1 ring-cyan-500/40 flex items-center justify-center relative group">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center border border-indigo-500/30">
            <span className="font-heading font-black text-3xl bg-gradient-to-br from-indigo-300 via-cyan-400 to-amber-300 bg-clip-text text-transparent">
              Ae
            </span>
          </div>
          <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-md shadow">
            4 أسابيع
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-100 tracking-tight leading-tight mb-4">
          Roadmap <span className="bg-gradient-to-r from-amber-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">{BRAND_NAME}</span>
          <br />
          <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-200 mt-2 block">
            لتعلّم Adobe After Effects خلال شهر
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          خارطة طريق عمليّة، منظمة، ومصممة بدقة لتأهيل المبتدئين في مجال الموشن جرافيكس من الصفر إلى إطلاق أول مشروع متكامل وبناء الأساس الاحترافي.
        </p>

        {/* Overview Features Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 text-right">
          
          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-bold text-lg font-heading mb-0.5">الأسبوع 1</div>
            <div className="text-slate-200 text-xs font-semibold mb-1">أساسيات البرنامج</div>
            <div className="text-slate-400 text-[11px] leading-tight">الواجهة، التايم لاين، والـ Keyframes</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-bold text-lg font-heading mb-0.5">الأسبوع 2</div>
            <div className="text-slate-200 text-xs font-semibold mb-1">التحريك والتكوين</div>
            <div className="text-slate-400 text-[11px] leading-tight">الـ Graph Editor والممارسات العملية</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center hover:border-cyan-500/40 transition-all">
            <div className="text-cyan-400 font-bold text-lg font-heading mb-0.5">الأسبوع 3</div>
            <div className="text-slate-200 text-xs font-semibold mb-1">مشروع متكامل</div>
            <div className="text-slate-400 text-[11px] leading-tight">ربط المشاهد المتعددة والانتقالات</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center hover:border-amber-500/40 transition-all">
            <div className="text-amber-400 font-bold text-lg font-heading mb-0.5">الأسبوع 4</div>
            <div className="text-slate-200 text-xs font-semibold mb-1">مرحلة الاحتراف</div>
            <div className="text-slate-400 text-[11px] leading-tight">التطبيق على المحتوى الأجنبي العالمي</div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartRoadmap}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer"
          >
            <ArrowDownCircle className="w-5 h-5" />
            <span>استكشاف المنهج والدروس</span>
          </button>

          <button
            onClick={onOpenPdfModal}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 hover:border-amber-400 rounded-xl font-bold text-sm transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>تحميل النسخة المطبوعة PDF</span>
          </button>
        </div>

      </div>
    </section>
  );
};
