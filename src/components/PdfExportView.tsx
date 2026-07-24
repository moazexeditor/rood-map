import React from 'react';
import { Award, Film, CheckCircle2, Target, MessageCircle, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { ROADMAP_TITLE, BRAND_NAME, WEEKS_DATA, SUMMARY_LISTS, FINAL_ADVICE, SUPPORT_PHONE, SUPPORT_WHATSAPP } from '../data/roadmapData';
import { getYouTubeThumbnail } from '../lib/youtube';

interface PdfExportViewProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export const PdfExportView: React.FC<PdfExportViewProps> = ({ containerRef }) => {
  return (
    <div
      ref={containerRef}
      className="bg-slate-950 text-slate-100 font-sans print:bg-slate-950 print:text-slate-100 space-y-8 print:space-y-0"
      dir="rtl"
    >
      
      {/* PAGE 1: COVER PAGE */}
      <div className="pdf-page w-[210mm] min-h-[297mm] mx-auto bg-slate-950 border border-slate-800/80 p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl print:shadow-none print:border-0 print:p-10">
        
        {/* Background Subtle Gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-lg shadow">
              Ae
            </div>
            <div>
              <div className="text-sm font-extrabold text-amber-400 font-heading tracking-wider">
                {BRAND_NAME}
              </div>
              <div className="text-[10px] text-slate-400">
                Official AE Learning Blueprint
              </div>
            </div>
          </div>

          <div className="px-3 py-1 bg-cyan-950/80 border border-cyan-800 text-cyan-300 rounded-lg text-xs font-semibold">
            نسخة احترافية رسمية 2026
          </div>
        </div>

        {/* Main Center Content */}
        <div className="my-auto text-center py-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Roadmap Exodia المعتمدة</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-heading leading-tight mb-6 text-slate-100">
            Roadmap <span className="text-amber-400">{BRAND_NAME}</span>
            <br />
            <span className="text-3xl sm:text-4xl text-cyan-400 mt-2 block font-extrabold">
              لتعلّم Adobe After Effects خلال شهر
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-sm text-slate-300 leading-relaxed font-medium mb-10">
            منهج عملي، مركز، ومبسط للمبتدئين لبناء مهارات الموشن جرافيكس والتحريك والـ Keyframes وربط المشاهد المتعددة خطوة بخطوة.
          </p>

          {/* 4 Weeks Grid Summary */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto text-right mb-8">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <div className="text-cyan-400 font-bold text-xs font-heading">الأسبوع الأول</div>
              <div className="text-slate-100 text-xs font-bold mt-0.5">أساسيات البرنامج والواجهة</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <div className="text-cyan-400 font-bold text-xs font-heading">الأسبوع الثاني</div>
              <div className="text-slate-100 text-xs font-bold mt-0.5">التحريك والتكوين والـ Graph</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <div className="text-cyan-400 font-bold text-xs font-heading">الأسبوع الثالث</div>
              <div className="text-slate-100 text-xs font-bold mt-0.5">ربط المشاهد ومروع كامل</div>
            </div>
            <div className="bg-slate-900 border border-amber-500/30 p-4 rounded-xl">
              <div className="text-amber-400 font-bold text-xs font-heading">الأسبوع الرابع</div>
              <div className="text-slate-100 text-xs font-bold mt-0.5">مرحلة الاحتراف الأجنبية</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-slate-800/80 pt-6 flex items-center justify-between text-xs text-slate-400">
          <div>
            جميع الحقوق محفوظة لـ <span className="text-slate-200 font-bold">{BRAND_NAME}</span>
          </div>
          <div>
            الدعم الفني والخدمات: <span className="text-emerald-400 font-semibold" dir="ltr">{SUPPORT_PHONE}</span>
          </div>
        </div>

      </div>


      {/* PAGES FOR WEEKS 1 to 4 */}
      {WEEKS_DATA.map((week) => (
        <div
          key={week.number}
          className="pdf-page w-[210mm] min-h-[297mm] mx-auto bg-slate-950 border border-slate-800/80 p-10 flex flex-col justify-between relative shadow-2xl print:shadow-none print:border-0 print:p-10 page-break"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500 text-slate-950 font-black font-heading text-lg flex items-center justify-center">
                {week.number}
              </div>
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">الأسبوع {week.number}</span>
                <h2 className="text-xl font-bold text-slate-100 font-heading">{week.title}</h2>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-400 font-heading">{BRAND_NAME} Roadmap</span>
          </div>

          {/* Body Content */}
          <div className="flex-1 space-y-5">
            
            {/* Overview & Objective */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {week.description}
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-slate-800 text-xs text-cyan-300 font-semibold">
                <Target className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>هدف الأسبوع: {week.objective}</span>
              </div>
            </div>

            {/* Resources List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-amber-400 font-heading uppercase tracking-wider">
                المصادر والدروس المقررة:
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {week.resources.map(res => (
                  <div
                    key={res.id}
                    className={`p-3 bg-slate-900 rounded-xl border flex flex-col justify-between gap-2 ${
                      res.isHighlighted ? 'border-cyan-500/60' : 'border-slate-800'
                    }`}
                  >
                    <div>
                      {/* Thumbnail image */}
                      <div className="aspect-video w-full bg-slate-950 rounded-lg overflow-hidden mb-2 relative">
                        <img
                          src={res.videoId ? getYouTubeThumbnail(res.videoId, 'hq') : `https://picsum.photos/seed/${res.id}/320/180`}
                          alt={res.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {res.badge && (
                          <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-amber-500 text-slate-950 font-black text-[9px] rounded">
                            {res.badge}
                          </span>
                        )}
                      </div>

                      <div className="text-[10px] text-cyan-400 font-bold mb-0.5">{res.channelName}</div>
                      <h4 className="text-xs font-bold text-slate-100 line-clamp-2 leading-tight mb-1">
                        {res.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 line-clamp-2 leading-normal">
                        {res.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-cyan-300 font-mono dir-ltr">
                      <span className="line-clamp-1">{res.url}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 4 extra: Summary Lists if last week */}
            {week.number === 4 && (
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/30">
                  <div className="text-xs font-bold text-amber-400 mb-1.5 font-heading">
                    {SUMMARY_LISTS.arabic.title}
                  </div>
                  <ul className="text-[10px] text-slate-300 space-y-1">
                    {SUMMARY_LISTS.arabic.sources.map((s, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-cyan-500/30">
                  <div className="text-xs font-bold text-cyan-400 mb-1.5 font-heading">
                    {SUMMARY_LISTS.foreign.title}
                  </div>
                  <ul className="text-[10px] text-slate-300 space-y-1">
                    {SUMMARY_LISTS.foreign.sources.map((s, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="border-t border-slate-800 pt-4 mt-4 flex items-center justify-between text-[11px] text-slate-400">
            <div>
              صفحة {week.number + 1} من 5 | <span className="text-slate-200 font-bold">{BRAND_NAME}</span>
            </div>
            <div>
              تواصل معنا: <span className="text-emerald-400 font-bold" dir="ltr">{SUPPORT_PHONE}</span>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};
