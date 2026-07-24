import React from 'react';
import { Sparkles, Globe, MessageCircle, HelpCircle, Check, ArrowUpRight, Flame } from 'lucide-react';
import { SUMMARY_LISTS, FINAL_ADVICE, SUPPORT_WHATSAPP, SUPPORT_PHONE } from '../data/roadmapData';

export const SummaryListsSection: React.FC = () => {
  return (
    <div className="space-y-10 my-16">
      
      {/* Arabic vs Foreign Mastery Lists Container */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Arabic List */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">مرحلة التأسيس والتطوير</span>
              <h3 className="text-lg font-bold text-slate-100 font-heading">
                {SUMMARY_LISTS.arabic.title}
              </h3>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            {SUMMARY_LISTS.arabic.sources.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="font-medium text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foreign List */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">مرحلة الاحتراف العالمي</span>
              <h3 className="text-lg font-bold text-slate-100 font-heading">
                {SUMMARY_LISTS.foreign.title}
              </h3>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            {SUMMARY_LISTS.foreign.sources.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="font-medium text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Final Motivational Advice Callout */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl">
        <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
          <Flame className="w-6 h-6" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 mb-3">
          السر في الإتقان هو الممارسة العملية المستمرة
        </h3>

        <p className="max-w-2xl mx-auto text-sm text-slate-200 leading-relaxed font-medium mb-6">
          {FINAL_ADVICE}
        </p>

        {/* WhatsApp Support Button */}
        <div className="pt-4 border-t border-slate-800/80 max-w-md mx-auto">
          <p className="text-xs text-slate-400 mb-3">
            لو واجهتك أي مشكلة أو استفسار أثناء رحلة التعلم، فريق Exodia معك دائماً:
          </p>

          <a
            href={SUPPORT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-950 transition-all group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>تواصل معنا عبر واتساب ({SUPPORT_PHONE})</span>
            <ArrowUpRight className="w-4 h-4 opacity-75" />
          </a>
        </div>
      </div>

    </div>
  );
};
