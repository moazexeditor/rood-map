import React, { useState } from 'react';
import { Play, ExternalLink, Copy, Check, Tv, Sparkles, Youtube } from 'lucide-react';
import { Resource } from '../types';
import { getYouTubeThumbnail } from '../lib/youtube';

interface ResourceCardProps {
  resource: Resource;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  onPlayVideo?: (videoId: string, title: string) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  isCompleted,
  onToggleComplete,
  onPlayVideo
}) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const thumbnailUrl = resource.videoId
    ? getYouTubeThumbnail(resource.videoId, 'hq')
    : `https://picsum.photos/seed/${resource.id}/640/360`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(resource.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group relative bg-slate-900/90 rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
        isCompleted
          ? 'border-emerald-500/50 bg-slate-900/40 opacity-80'
          : resource.isHighlighted
          ? 'border-cyan-500/60 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
          : 'border-slate-800/80 hover:border-slate-700 hover:shadow-xl'
      }`}
    >
      
      {/* Thumbnail Header */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group">
        
        {!imageError ? (
          <img
            src={thumbnailUrl}
            alt={resource.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 flex flex-col items-center justify-center p-4 text-center">
            <Youtube className="w-10 h-10 text-red-500/80 mb-2" />
            <span className="text-xs text-slate-300 font-medium">{resource.channelName || 'YouTube Video'}</span>
          </div>
        )}

        {/* Thumbnail Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between pointer-events-none">
          
          {/* Main Badge e.g. أهمهم or كورس أساسي */}
          {resource.badge ? (
            <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md border ${
              resource.badge === 'أهمهم'
                ? 'bg-amber-500 text-slate-950 border-amber-300 font-black animate-pulse'
                : resource.isHighlighted
                ? 'bg-cyan-500 text-slate-950 border-cyan-300'
                : 'bg-slate-900/90 text-slate-200 border-slate-700'
            }`}>
              {resource.badge}
            </span>
          ) : <div />}

          {/* Completion Checkbox Button */}
          <button
            type="button"
            onClick={() => onToggleComplete(resource.id)}
            className={`pointer-events-auto p-1.5 rounded-lg border backdrop-blur-md transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title={isCompleted ? "تم الإنجاز" : "تحديد كمكتمل"}
          >
            <Check className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Video Preview Play Button Overlay */}
        {resource.videoId && onPlayVideo && (
          <button
            onClick={() => onPlayVideo(resource.videoId!, resource.title)}
            className="absolute inset-0 flex items-center justify-center group-hover:bg-slate-950/30 transition-colors cursor-pointer"
            title="تشغيل معاينة الفيديو"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
            </div>
          </button>
        )}

      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        
        <div>
          {/* Channel Name */}
          {resource.channelName && (
            <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-1">
              <Tv className="w-3.5 h-3.5" />
              <span>{resource.channelName}</span>
            </div>
          )}

          {/* Resource Title */}
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-100 line-clamp-2 leading-snug mb-1.5">
            {resource.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {resource.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          
          {/* Open Link Button */}
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-semibold border border-slate-700/80 transition-all group/btn"
          >
            <span>فتح الرابط</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-cyan-400 transition-colors" />
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 transition-all cursor-pointer"
            title="نسخ رابط الدرس"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

        </div>

      </div>

    </div>
  );
};
