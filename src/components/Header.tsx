import React, { useState } from 'react';
import { StudioInfo } from '../types';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ExternalLink,
  Settings2
} from 'lucide-react';

interface HeaderProps {
  studio: StudioInfo;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({ studio, onOpenSettings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = studio.primaryPhone.replace(/[^0-9+]/g, '');

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0c]/95 backdrop-blur-md border-b border-neutral-800 transition-all duration-300">
      {/* Top Address & Direct Contact Bar (Strict requirement: Complete studio address prominently displayed in header) */}
      <div className="bg-[#141417] border-b border-neutral-800/80 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          {/* Prominent Complete Studio Address */}
          <div className="flex items-center gap-2 text-neutral-300 min-w-0 w-full md:w-auto">
            <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
            <a
              href={studio.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to view studio on Google Maps"
              className="hover:text-[#d4af37] transition-colors truncate font-medium flex items-center gap-1 group text-left"
            >
              <span className="text-neutral-400 shrink-0 font-normal">Studio Location:</span>
              <span className="text-neutral-100 group-hover:text-[#d4af37] underline decoration-neutral-700 underline-offset-2">
                {studio.address.formattedFullAddress}
              </span>
              <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-[#d4af37] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Contact & Socials Bar */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto text-neutral-400">
            {/* Primary Mobile Number */}
            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors text-xs font-medium"
              title="Call Studio Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-neutral-200">{studio.primaryPhone}</span>
            </a>

            <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">|</span>

            {/* Social Media Icons (Strict Requirement: Instagram, Facebook, YouTube in header) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={studio.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                title="Instagram (Opens in new tab)"
                className="text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={studio.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                title="Facebook (Opens in new tab)"
                className="text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={studio.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                title="YouTube (Opens in new tab)"
                className="text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Quick Customize Details button */}
              <button
                onClick={onOpenSettings}
                className="ml-2 inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-white px-2 py-0.5 rounded border border-amber-600/40 hover:border-amber-400 bg-amber-950/30 transition-colors"
                title="Edit studio placeholders, phone, address & reviews"
              >
                <Settings2 className="w-3 h-3 text-[#d4af37]" />
                <span className="hidden sm:inline">Customize</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Studio Name Brand Zone */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            {/* Elegant Custom Dance Monogram Icon */}
            <div className="w-11 h-11 rounded-lg bg-neutral-900 border border-[#d4af37]/40 flex items-center justify-center p-2 group-hover:border-[#d4af37] transition-colors relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/15 to-transparent opacity-80" />
              {/* Refined Vector Pirouette Dancer Monogram */}
              <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="4" r="2" />
                <path d="M12 6v6" />
                <path d="m9 11 3 1 3-1" />
                <path d="m10 17 2-5 3 2 1 4" />
                <path d="m7 21 3-4" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-neutral-100 group-hover:text-[#d4af37] transition-colors uppercase whitespace-nowrap">
                {studio.studioName}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
                Premier Dance Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#location" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              Location &amp; Visit
            </a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              About Studio
            </a>
            <a href="#reviews" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              Customer Reviews
            </a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              Contact &amp; Hours
            </a>
          </nav>

          {/* Primary Action Zone: Call Now Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] active:bg-[#c5a059] rounded-md transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] rounded transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101014] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4">
          {/* Prominent Address display in mobile menu too */}
          <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
            <div className="flex items-start gap-2.5 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">
                  Studio Address
                </span>
                <p className="font-medium text-neutral-200 leading-relaxed">
                  {studio.address.formattedFullAddress}
                </p>
                <a
                  href={studio.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#d4af37] hover:underline mt-2 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <nav className="flex flex-col space-y-2 text-base font-medium text-neutral-300">
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-[#d4af37] transition-colors"
            >
              Studio Location &amp; Visit
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-[#d4af37] transition-colors"
            >
              About the Studio
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-[#d4af37] transition-colors"
            >
              Customer Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-[#d4af37] transition-colors"
            >
              Contact Information
            </a>
          </nav>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] rounded-lg transition-colors text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({studio.primaryPhone})</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-600/40 rounded-lg hover:bg-amber-950/60"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Edit Studio Details & Placeholders</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
