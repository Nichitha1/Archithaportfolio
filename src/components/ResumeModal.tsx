import { Download, X } from 'lucide-react';
import { useEffect } from 'react';
import { PROFILE, RESUME_PDF_PATH } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#060e1f]/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="sentinel-glass flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#38bdf8]/20 bg-[#0b1325] px-5 py-3.5">
          <div>
            <h2 id="resume-modal-title" className="font-display text-sm font-semibold text-[#f8fafc]">
              {PROFILE.name} — Official Resume
            </h2>
            <p className="text-xs text-[#94a3b8]">
              {PROFILE.role} · {PROFILE.company}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={RESUME_PDF_PATH}
              download="Architha_Dameruppula_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded bg-[#38bdf8] px-3.5 py-1.5 text-xs font-semibold text-[#070b14] hover:bg-[#7bd0ff] transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#38bdf8]/25 text-[#dbe2fb] hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#070b14] p-2 sm:p-4">
          <iframe
            src={RESUME_PDF_PATH}
            title="Architha Dameruppula Resume PDF"
            className="h-full w-full rounded border border-[#38bdf8]/15 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
