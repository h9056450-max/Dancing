import React, { useState } from 'react';
import { StudioInfo } from '../types';
import { 
  MapPin, 
  Clock, 
  Car, 
  Navigation, 
  ExternalLink, 
  Edit3
} from 'lucide-react';

interface StudioLocationSectionProps {
  studio: StudioInfo;
  onOpenSettings: () => void;
}

export const StudioLocationSection: React.FC<StudioLocationSectionProps> = ({ 
  studio, 
  onOpenSettings 
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section 
      id="location" 
      aria-label="Studio Location and Visit Information"
      className="pt-6 sm:pt-10 pb-16 sm:pb-20 bg-[#0d0d11] border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-neutral-800/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1.5">
              <span className="w-4 h-[1px] bg-[#d4af37]" />
              <span>Studio Location & Visit</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Location & Visitor Information
            </h1>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Quick customization trigger */}
            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900/90 text-neutral-300 hover:text-white hover:border-[#d4af37] text-xs font-medium transition-colors"
              title="Edit studio address, hours or map embed"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Edit Details</span>
            </button>

            {/* Direct Google Maps link */}
            <a
              href={studio.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#d4af37] transition-colors"
            >
              <span>View Full Map &amp; Street View</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Premium Location Information Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Details & Information Card */}
          <div className="lg:col-span-5 bg-[#141419] border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              {/* 1. Studio Name & Subtitle */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] block mb-1">
                  Dance Studio Facility
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {studio.studioName}
                </h2>
              </div>

              {/* 2. Complete Studio Address */}
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-[#d4af37] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Complete Studio Address
                    </span>
                    <p className="text-sm font-medium text-neutral-100 leading-relaxed">
                      {studio.address.formattedFullAddress}
                    </p>
                    <a
                      href={studio.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#d4af37] hover:underline font-medium mt-2"
                    >
                      <span>Locate on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. Studio Operating Hours */}
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-[#d4af37] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Studio Operating Hours
                    </span>
                    <p className="text-sm text-neutral-200 leading-relaxed font-mono">
                      {studio.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Parking & Arrival Information */}
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-[#d4af37] shrink-0 mt-0.5">
                    <Car className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Parking &amp; Arrival Information
                    </span>
                    <p className="text-sm text-neutral-200 leading-relaxed">
                      {studio.parkingArrival}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions: 6. Prominent Gold Get Directions Button & 7. Street View Link */}
            <div className="pt-6 mt-6 border-t border-neutral-800/80 space-y-3">
              {/* Prominent Gold Get Directions – Open Google Maps Button */}
              <a
                href={studio.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] active:bg-[#c5a059] rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Get Directions – Open Google Maps</span>
              </a>

              {/* View Full Map & Street View Link */}
              <a
                href={studio.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <span>View Full Map &amp; Street View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 5. Interactive Google Maps Embed Showing Actual Studio Location */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden relative min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] shadow-2xl flex flex-col">
            {/* Top Bar for Map */}
            <div className="bg-[#18181e] px-4 py-3 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-[11px] text-neutral-200 font-medium">
                  Google Maps Location: {studio.studioName}
                </span>
              </div>
              <a
                href={studio.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] flex items-center gap-1 transition-colors text-[11px]"
              >
                <span>Open in app</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Iframe with loading overlay */}
            <div className="relative flex-1 w-full h-full min-h-[380px]">
              {!mapLoaded && (
                <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center z-10">
                  <div className="w-9 h-9 border-2 border-neutral-700 border-t-[#d4af37] rounded-full animate-spin mb-3" />
                  <p className="text-xs text-neutral-400 font-medium">Loading Google Maps embed...</p>
                </div>
              )}

              <iframe
                title={`Google Maps embed for ${studio.studioName}`}
                src={studio.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                className="w-full h-full absolute inset-0"
              />
            </div>

            {/* Bottom Map Bar with Address confirmation & Edit prompt */}
            <div className="bg-[#121217] px-4 py-2.5 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-neutral-400">
              <span className="truncate">
                Marker location: {studio.address.formattedFullAddress}
              </span>
              <button
                onClick={onOpenSettings}
                className="text-[#d4af37] hover:underline font-medium shrink-0 text-left"
              >
                Update Map URL &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
