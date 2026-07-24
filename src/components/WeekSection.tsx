import React from 'react';
import { Target, Lightbulb, CheckCircle, Sparkles, BookOpen, Layers } from 'lucide-react';
import { WeekData } from '../types';
import { ResourceCard } from './ResourceCard';

interface WeekSectionProps {
  week: WeekData;
  completedResourceIds: string[];
  onToggleCompleteResource: (id: string) => void;
  onPlayVideo?: (videoId: string, title: string) => void;
}

export const WeekSection: React.FC<WeekSectionProps> = ({
  week,
  completedResourceIds,
  onToggleCompleteResource,
  onPlayVideo
}) => {
  const weekResources = week.resources;
  const completedCount = weekResources.filter(r => completedResourceIds.includes(r.id)).length;
  const isWeekDone = weekResources.length > 0 && completedCount === weekResources.length;

  return (
    <section id={`week-${week.number}`} className="mb-14 scroll-mt-24">
      
      {/* Week Header Container */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-6 shadow-xl relative overflow-hidden">
        
        {/* Accent Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10">
          
          <div className="flex items-center gap-3">
            {/* Week Badge */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center font-heading font-black text-xl shadow-lg shadow-cyan-500/20">
              {week.number}
            </div>

            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-heading">
                الأسبوع {week.number}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-100 font-heading">
                {week.title}
              </h2>
            </div>
          </div>

          {/* Progress Status Badge */}
          <div className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 ${
            isWeekDone
              ? 'bg-emerald-950 text-emerald-300 border-emerald-700/80'
              : 'bg-slate-800/80 text-slate-300 border-slate-700'
          }`}>
            <CheckCircle className={`w-4 h-4 ${isWeekDone ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span>تم إنجاز {completedCount} من {weekResources.length}</span>
          </div>

        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 font-medium mb-5 max-w-3xl leading-relaxed">
          {week.subtitle}
        </p>

        {/* Objective Callout Box (هدف الأسبوع) */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 mb-5 flex items-start gap-3">
          <div className="p-2 bg-cyan-950 rounded-xl text-cyan-400 border border-cyan-800/50 shrink-0 mt-0.5">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              هدف الأسبوع الأساسي
            </div>
            <div className="text-xs sm:text-sm text-slate-200 font-semibold leading-normal">
              {week.objective}
            </div>
          </div>
        </div>

        {/* Instructions list (المطلوب كتابته بشكل مختصر) */}
        {week.instructions.length > 0 && (
          <div className="space-y-2 mb-4">
            <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>تعليمات تنفيذ الأسبوع:</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {week.instructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Takeaways Chips */}
        {week.keyTakeaways && week.keyTakeaways.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
            <span className="text-[11px] font-bold text-slate-400">المهارات المكتسبة:</span>
            {week.keyTakeaways.map((takeaway, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-700/60"
              >
                #{takeaway}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {weekResources.map(resource => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            isCompleted={completedResourceIds.includes(resource.id)}
            onToggleComplete={onToggleCompleteResource}
            onPlayVideo={onPlayVideo}
          />
        ))}
      </div>

    </section>
  );
};
