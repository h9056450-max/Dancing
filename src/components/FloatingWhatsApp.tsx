import React, { useState } from 'react';
import { StudioInfo } from '../types';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  studio: StudioInfo;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ studio }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanWa = studio.whatsappNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
    `Hello ${studio.studioName}! I would like to inquire about studio visits and details.`
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Optional quick greeting speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#18181d] text-neutral-100 text-xs px-3.5 py-2 rounded-xl shadow-2xl border border-neutral-700 animate-fade-in">
          <span>Inquire instantly with our studio team!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Dance Studio"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,211,102,0.45)] group cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
