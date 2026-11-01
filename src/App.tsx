/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StudioInfo } from './types';
import { DEFAULT_STUDIO_DATA } from './data/defaultStudioData';
import { Header } from './components/Header';
import { StudioLocationSection } from './components/StudioLocationSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StudioSettingsModal } from './components/StudioSettingsModal';

const STORAGE_KEY = 'dance_studio_website_profile_v1';

export default function App() {
  const [studio, setStudio] = useState<StudioInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STUDIO_DATA, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to read studio data from localStorage', e);
    }
    return DEFAULT_STUDIO_DATA;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Synchronize document title with current studio name
  useEffect(() => {
    document.title = `${studio.studioName} – Studio Location & Visit`;
  }, [studio.studioName]);

  const handleSaveStudio = (updated: StudioInfo) => {
    setStudio(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save studio profile to localStorage', e);
    }
  };

  const handleResetStudio = () => {
    setStudio(DEFAULT_STUDIO_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to remove studio profile from localStorage', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-neutral-100 flex flex-col selection:bg-[#c5a059] selection:text-black font-sans">
      {/* Header Section (Sticky, with logo, editable studio name, prominent address, call now, socials) */}
      <Header
        studio={studio}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main One-Page Content Sequence:
          First Main Content: Studio Location & Visit (Hero banner completely removed)
          Followed by:
          1. About the Studio
          2. Customer Reviews
          3. Contact Information
          4. Footer
      */}
      <main className="flex-1">
        {/* FIRST MAIN CONTENT VISIBLE: Studio Location & Visit Section */}
        <StudioLocationSection
          studio={studio}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* 1. About the Studio Section */}
        <AboutSection studio={studio} />

        {/* 2. Customer Reviews Section */}
        <ReviewsSection
          studio={studio}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* 3. Contact Information Section */}
        <ContactSection studio={studio} />
      </main>

      {/* 4. Footer (Logo, studio name, copyright, socials. Strictly NO address in footer) */}
      <Footer studio={studio} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp studio={studio} />

      {/* Interactive Studio Profile & Placeholders Editor Modal */}
      <StudioSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        studio={studio}
        onSave={handleSaveStudio}
        onReset={handleResetStudio}
      />
    </div>
  );
}
