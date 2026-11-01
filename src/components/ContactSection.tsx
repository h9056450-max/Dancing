import React, { useState } from 'react';
import { StudioInfo } from '../types';
import { 
  Phone, 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  Navigation, 
  Clock, 
  Send, 
  CheckCircle2, 
  MapPin,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  studio: StudioInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ studio }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const cleanPrimaryPhone = studio.primaryPhone.replace(/[^0-9+]/g, '');
  const cleanSecondaryPhone = studio.secondaryPhone.replace(/[^0-9+]/g, '');
  const cleanWa = studio.whatsappNumber.replace(/[^0-9]/g, '');

  const waUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
    `Hello ${studio.studioName}! I would like to get more information.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrEmail.trim()) return;

    // Direct WhatsApp forwarding for instant inquiry
    const directWaUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
      `Hello ${studio.studioName}!\nMy Name: ${formData.name}\nContact: ${formData.phoneOrEmail}\nMessage: ${formData.message || 'I would like to inquire about studio visits.'}`
    )}`;

    window.open(directWaUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#0a0a0c] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
            <span className="w-5 h-[1px] bg-[#d4af37]/60" />
            <span>Direct Inquiries & Communication</span>
            <span className="w-5 h-[1px] bg-[#d4af37]/60" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Connect With Our Studio
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Reach out directly by phone, WhatsApp, email, or visit our studio location. Our directors are delighted to welcome you.
          </p>
        </div>

        {/* Contact Grid: Direct Phone & Channels (Left) + Quick Message Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Communication Channels (Strict Requirements) */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. Primary & Secondary Mobile Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Mobile */}
              <div className="p-5 rounded-xl bg-[#141419] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-semibold uppercase tracking-wider text-[#d4af37]">Primary Mobile</span>
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <a
                    href={`tel:${cleanPrimaryPhone}`}
                    className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#d4af37] transition-colors block"
                    title="Click to dial primary phone number"
                  >
                    {studio.primaryPhone}
                  </a>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Studio Front Desk & General Inquiries</span>
                </div>

                <a
                  href={`tel:${cleanPrimaryPhone}`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] rounded-md transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Primary Now</span>
                </a>
              </div>

              {/* Secondary Mobile */}
              <div className="p-5 rounded-xl bg-[#141419] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-semibold uppercase tracking-wider text-neutral-400">Secondary Mobile</span>
                    <Phone className="w-4 h-4 text-neutral-400" />
                  </div>
                  <a
                    href={`tel:${cleanSecondaryPhone}`}
                    className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#d4af37] transition-colors block"
                    title="Click to dial secondary phone number"
                  >
                    {studio.secondaryPhone}
                  </a>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Studio Direct Line & Support</span>
                </div>

                <a
                  href={`tel:${cleanSecondaryPhone}`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-neutral-500 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Secondary</span>
                </a>
              </div>
            </div>

            {/* 2. WhatsApp & Email Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <div className="p-5 rounded-xl bg-[#141419] border border-neutral-800 hover:border-[#25D366]/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-semibold uppercase tracking-wider text-[#25D366]">WhatsApp Official</span>
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#25D366] transition-colors block"
                  >
                    {studio.whatsappNumber}
                  </a>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Instant chat & studio tour appointments</span>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Open WhatsApp</span>
                </a>
              </div>

              {/* Email */}
              <div className="p-5 rounded-xl bg-[#141419] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-semibold uppercase tracking-wider text-neutral-400">Email Address</span>
                    <Mail className="w-4 h-4 text-neutral-400" />
                  </div>
                  <a
                    href={`mailto:${studio.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-[#d4af37] transition-colors truncate block"
                    title="Send an email to the studio"
                  >
                    {studio.email}
                  </a>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Official inquiries & correspondence</span>
                </div>

                <a
                  href={`mailto:${studio.email}`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-[#d4af37] rounded-md transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* 3. Get Directions Bar */}
            <div className="p-5 rounded-xl bg-[#141419] border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Need Turn-by-Turn GPS Directions?</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Launch Google Maps on your mobile device or desktop for live navigation.
                  </p>
                </div>
              </div>

              <a
                href={studio.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] rounded-md transition-colors shrink-0 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* 4. Social Media Integration Bar (Strict Requirement: Instagram, Facebook, YouTube in contact section) */}
            <div className="p-6 rounded-xl bg-[#121217] border border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                    Follow Our Dance Journey
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Explore rehearsal clips, studio announcements, and backstage moments.
                  </p>
                </div>

                {/* Social media links with recognizable icons and open in new tab */}
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a
                    href={studio.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#d4af37] text-neutral-300 hover:text-[#d4af37] transition-all group"
                    title="Instagram Profile (Opens in new window)"
                  >
                    <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={studio.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#d4af37] text-neutral-300 hover:text-[#d4af37] transition-all group"
                    title="Facebook Page (Opens in new window)"
                  >
                    <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href={studio.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#d4af37] text-neutral-300 hover:text-[#d4af37] transition-all group"
                    title="YouTube Channel (Opens in new window)"
                  >
                    <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry / Direct Studio Contact Form (Right) */}
          <div className="lg:col-span-5 bg-[#141419] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-white">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-400 mt-1 mb-6">
              Fill in your inquiry below. Submitting will open a ready-to-send conversation with our studio coordinators.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-semibold text-white text-base">Inquiry Prepared!</h4>
                <p className="text-xs text-neutral-300">
                  Your message has been launched to WhatsApp. We typically respond within minutes during studio hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phoneOrEmail: '', message: '' });
                  }}
                  className="mt-3 inline-block text-xs text-[#d4af37] underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Contact Phone or Email <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phoneOrEmail}
                    onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                    placeholder="e.g. +1 (555) 000-0000 or email@domain.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Message or Studio Inquiry
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to ask or schedule a studio visit..."
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] active:bg-[#c5a059] rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp / Phone</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center">
                  Prefer direct phone call? Dial <a href={`tel:${cleanPrimaryPhone}`} className="text-neutral-300 underline">{studio.primaryPhone}</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
