import React, { useState } from 'react';
import { Download, X, FileText, CheckCircle2, Loader2, Printer, Sparkles } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PdfExportView } from './PdfExportView';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  onPrint
}) => {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');

  if (!isOpen) return null;

  const handleGeneratePdf = async () => {
    try {
      setGenerating(true);
      setProgress(10);
      setStatusText('تجهيز الصفحات للتنسيق العالي...');

      const container = document.getElementById('pdf-render-target');
      if (!container) {
        throw new Error('تعذر العثور على حاوية الصفحات');
      }

      const pages = container.querySelectorAll<HTMLElement>('.pdf-page');
      if (!pages || pages.length === 0) {
        throw new Error('لم يتم العثور على صفحات للتحويل');
      }

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        setStatusText(`جاري معالجة وتصدير الصفحة ${i + 1} من ${pages.length}...`);
        
        const canvas = await html2canvas(page, {
          scale: 2, // High DPI
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#020617',
          logging: false
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
        setProgress(Math.round(((i + 1) / pages.length) * 90));
      }

      setStatusText('حفظ ملف PDF النهائي...');
      setProgress(100);

      pdf.save('Roadmap_Exodia_After_Effects.pdf');

      setTimeout(() => {
        setGenerating(false);
        onClose();
      }, 1000);

    } catch (err) {
      console.error('PDF Generation Error:', err);
      setStatusText('حدث خطأ بسيط. سيتم تحويلك للطباعة المباشرة لتصدير PDF بأعلى دقة.');
      setTimeout(() => {
        setGenerating(false);
        onPrint();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md no-print">
      
      {/* Hidden container used exclusively for capturing canvas/PDF pages */}
      <div className="fixed top-[-9999px] left-[-9999px] opacity-100 pointer-events-none">
        <div id="pdf-render-target">
          <PdfExportView />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={generating}
          className="absolute top-4 left-4 p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer disabled:opacity-50"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold font-heading text-slate-100 mb-1">
            تصدير ملف PDF احترافي
          </h3>
          <p className="text-xs text-slate-400">
            خارطة طريق Exodia المعتمدة مقسمة في 5 صفحات A4 منسقة تماماً
          </p>
        </div>

        {/* Generation Progress Indicator */}
        {generating ? (
          <div className="space-y-4 my-6 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-center">
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold text-sm">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{statusText}</span>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-amber-400 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 font-mono">{progress}%</div>
          </div>
        ) : (
          <div className="space-y-3 mb-6 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>مميزات الملف المصدر:</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300 pr-1">
              <li>غلاف فاخر يحمل اسم وهوية Exodia الرسمية</li>
              <li>صور مصغرة (Thumbnails) فائقة الوضوح لكافة الكورس والدروس</li>
              <li>روابط مباشرة وسهلة التصفح لكافة قنوات وفيديوهات يوتيوب</li>
              <li>تنسيق فورمال ورسمي ألوان كحلي وذهبي وسيان مريح للعين</li>
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleGeneratePdf}
            disabled={generating}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer disabled:opacity-50"
          >
            <Download className="w-5 h-5" />
            <span>تنزيل ملف PDF المباشر (High Resolution)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onPrint();
            }}
            disabled={generating}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold text-xs border border-slate-700 transition-all cursor-pointer disabled:opacity-50"
          >
            <Printer className="w-4 h-4 text-slate-400" />
            <span>طباعة أو حفظ عبر نافذة المتصفح المباشرة</span>
          </button>
        </div>

      </div>

    </div>
  );
};
