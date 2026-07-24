import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../lib/youtube';

interface VideoModalProps {
  videoId: string | null;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoId, title, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md no-print">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <h3 className="text-sm sm:text-base font-bold font-heading text-slate-100 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors"
              title="فتح على يوتيوب"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
              title="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={getYouTubeEmbedUrl(videoId)}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </div>
  );
};
