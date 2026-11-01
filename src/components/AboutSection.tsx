import React from 'react';
import { StudioInfo } from '../types';
import { Sparkles, Heart, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  studio: StudioInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ studio }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0b0b0d] border-b border-neutral-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase (Professional Dance Artistry Container) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative framing */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/30 via-neutral-800/40 to-transparent blur-sm" />
              
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl aspect-[4/5] flex flex-col justify-end">
                {/* Visual Artistry Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#141419]/70 to-[#1c1c24] flex items-center justify-center p-8">
                  {/* Atmospheric theatrical lighting and dancer in motion illustration */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                    {/* Theatrical spotlight */}
                    <div className="absolute top-4 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />
                    
                    {/* Beautiful Dance Silhouette Graphic */}
                    <svg
                      viewBox="0 0 400 480"
                      className="w-full h-auto max-h-[320px] text-[#d4af37]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="200" cy="70" r="18" fill="currentColor" />
                      {/* Fluid posture with arabesque extension */}
                      <path
                        d="M200 90 C205 130 215 170 230 210 C245 250 270 290 310 320"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M200 130 C160 145 120 170 90 200"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M200 130 C240 120 280 110 330 100"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M230 210 C210 260 190 320 180 390 C175 425 170 450 165 470"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <ellipse cx="200" cy="465" rx="140" ry="8" fill="#d4af37" opacity="0.2" />
                    </svg>

                    <div className="mt-4 text-center">
                      <span className="font-display text-sm tracking-widest text-[#d4af37] uppercase font-semibold">
                        Artistry in Motion
                      </span>
                      <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
                        A dedicated rehearsal sanctuary designed for precision, strength, and pure expression.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Overlay */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-neutral-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
                        Studio Philosophy
                      </div>
                      <div className="font-display text-base font-bold text-white mt-0.5">
                        Passion &bull; Creativity &bull; Performance
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Est. Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Story & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              <span className="w-5 h-[1px] bg-[#d4af37]/60" />
              <span>About the Studio</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              {studio.aboutIntroduction}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              {studio.aboutDescription}
            </p>

            {/* Three Foundational Pillars (No classes/styles/prices as requested) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <Heart className="w-5 h-5 text-[#d4af37] mb-2.5" />
                <h3 className="font-display text-sm font-bold text-white">Genuine Passion</h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Igniting a lifelong love for music, rhythm, and body awareness through inspiring mentorship.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <Sparkles className="w-5 h-5 text-[#d4af37] mb-2.5" />
                <h3 className="font-display text-sm font-bold text-white">Boundless Creativity</h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Encouraging individuality and artistic courage so every dancer discovers their own voice.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <Award className="w-5 h-5 text-[#d4af37] mb-2.5" />
                <h3 className="font-display text-sm font-bold text-white">Stage Excellence</h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Nurturing performance readiness, spatial grace, and technical precision under master guidance.
                </p>
              </div>
            </div>

            {/* Welcoming community statement */}
            <div className="p-4 rounded-xl bg-[#14141a] border border-[#d4af37]/30 flex items-start gap-3.5">
              <Users className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white font-medium block mb-0.5">An Inclusive, Welcoming Community:</strong>
                Our studio fosters a safe, encouraging space where beginners and seasoned dancers alike share a common passion for artistic growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
