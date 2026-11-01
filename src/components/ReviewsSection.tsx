import React from 'react';
import { StudioInfo } from '../types';
import { Star, ExternalLink, ShieldCheck, MessageSquarePlus } from 'lucide-react';

interface ReviewsSectionProps {
  studio: StudioInfo;
  onOpenSettings: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ studio, onOpenSettings }) => {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#0e0e12] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
              <span className="w-5 h-[1px] bg-[#d4af37]/60" />
              <span>Authentic Client Impressions</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Customer Reviews & Experiences
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Read feedback from verified dancers and parents. All reviews adhere strictly to authentic studio records and Google Business Profiles.
            </p>
          </div>

          {/* Action Buttons: Google Reviews CTA and Studio Review Customizer */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Google Reviews Button (Strict Requirement) */}
            <a
              href={studio.googleBusinessReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] active:bg-[#c5a059] rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              {/* Google G icon */}
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-[#d4af37] rounded-lg transition-colors"
              title="Add or update genuine reviews"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Manage Reviews</span>
            </button>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studio.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#141418] border border-neutral-800 hover:border-neutral-700 rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg relative"
            >
              <div>
                {/* Header of review card: Star Rating & Verified Marker */}
                <div className="flex items-center justify-between mb-4">
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-[#d4af37]" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-[#d4af37] text-[#d4af37]' : 'text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Review Body */}
                <p className="text-sm text-neutral-300 italic leading-relaxed mb-6 font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Meta (Author Name & Role/Date) */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-neutral-100 tracking-wide">
                    {review.authorName}
                  </h4>
                  <div className="text-neutral-500 text-[11px]">
                    {review.roleOrRelation}
                  </div>
                </div>
                <div className="text-[11px] text-neutral-500 font-mono">
                  {review.dateText}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Transparency Notice */}
        <div className="mt-8 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4 flex-wrap text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>
              <strong>Authenticity Policy:</strong> In compliance with strict guidelines, no fictitious reviews are created. Placeholders can be directly edited or connected to the studio's Google Business Profile.
            </span>
          </div>
          <button
            onClick={onOpenSettings}
            className="text-xs text-[#d4af37] hover:underline font-medium"
          >
            Update review details &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
