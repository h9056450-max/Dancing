import React, { useState } from 'react';
import { StudioInfo, ReviewItem } from '../types';
import { 
  X, 
  RotateCcw, 
  Save, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Share2, 
  Star, 
  Plus, 
  Trash2,
  Check,
  Building
} from 'lucide-react';
import { DEFAULT_STUDIO_DATA } from '../data/defaultStudioData';

interface StudioSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  studio: StudioInfo;
  onSave: (updated: StudioInfo) => void;
  onReset: () => void;
}

export const StudioSettingsModal: React.FC<StudioSettingsModalProps> = ({
  isOpen,
  onClose,
  studio,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<StudioInfo>(studio);
  const [activeTab, setActiveTab] = useState<'general' | 'address' | 'contact' | 'reviews' | 'socials'>('general');
  const [savedAlert, setSavedAlert] = useState(false);

  // Sync state if modal opens
  React.useEffect(() => {
    setFormData(studio);
  }, [studio, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 700);
  };

  const handleReviewChange = (index: number, field: keyof ReviewItem, value: any) => {
    const updatedReviews = [...formData.reviews];
    updatedReviews[index] = {
      ...updatedReviews[index],
      [field]: value,
      isPlaceholder: false, // marked as user verified
    };
    setFormData({ ...formData, reviews: updatedReviews });
  };

  const addReview = () => {
    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      authorName: 'Verified Student Name',
      roleOrRelation: 'Dance Student / Parent',
      rating: 5,
      dateText: 'Verified Review',
      comment: 'Authentic student experience feedback describing studio training and mentorship.',
      isPlaceholder: false,
    };
    setFormData({ ...formData, reviews: [...formData.reviews, newRev] });
  };

  const removeReview = (id: string) => {
    setFormData({
      ...formData,
      reviews: formData.reviews.filter((r) => r.id !== id),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121217] border border-neutral-700 w-full max-w-3xl max-h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between bg-[#16161c]">
          <div className="flex items-center gap-2.5">
            <Building className="w-5 h-5 text-[#d4af37]" />
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold text-white">
                Studio Information & Placeholders Editor
              </h2>
              <p className="text-xs text-neutral-400">
                Replace editable placeholders with verified studio data in real time.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 bg-[#0e0e12] overflow-x-auto px-4 py-2 gap-1 text-xs font-medium">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'general' ? 'bg-[#d4af37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            General & Brand
          </button>
          <button
            onClick={() => setActiveTab('address')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'address' ? 'bg-[#d4af37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Header Address & Maps
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'contact' ? 'bg-[#d4af37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Phones & WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'reviews' ? 'bg-[#d4af37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Genuine Reviews ({formData.reviews.length})
          </button>
          <button
            onClick={() => setActiveTab('socials')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'socials' ? 'bg-[#d4af37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Social URLs
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-neutral-200 text-xs">
          {/* 1. General & Brand Tab */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Dance Studio Name
                </label>
                <input
                  type="text"
                  value={formData.studioName}
                  onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                  placeholder="[DANCE STUDIO NAME]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-medium focus:border-[#d4af37] outline-none"
                />
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Displayed in header brand mark, location card, review headings, and footer.
                </span>
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  About Us Story / Academy Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.aboutDescription}
                  onChange={(e) => setFormData({ ...formData, aboutDescription: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* 2. Address & Maps Tab */}
          {activeTab === 'address' && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-amber-200 text-xs">
                <strong>Studio Location &amp; Visit Section:</strong> This is the first main content section visible when visitors open the website, as well as displayed in the sticky header.
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Complete Studio Address (Header &amp; Location Card)
                </label>
                <textarea
                  rows={2}
                  value={formData.address.formattedFullAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: { ...formData.address, formattedFullAddress: e.target.value },
                    })
                  }
                  placeholder="[COMPLETE STUDIO ADDRESS, SUITE / FLOOR, CITY, STATE / REGION, POSTAL CODE]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Studio Operating Hours
                </label>
                <input
                  type="text"
                  value={formData.operatingHours}
                  onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                  placeholder="[STUDIO OPERATING HOURS - E.G. MONDAY TO SATURDAY: 9:00 AM – 9:00 PM]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Parking &amp; Arrival Information
                </label>
                <input
                  type="text"
                  value={formData.parkingArrival}
                  onChange={(e) => setFormData({ ...formData, parkingArrival: e.target.value })}
                  placeholder="[PARKING & ARRIVAL DETAILS - E.G. RESERVED ON-SITE GUEST PARKING AVAILABLE]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Google Maps Embed URL (Iframe Src)
                </label>
                <input
                  type="text"
                  value={formData.mapsEmbedUrl}
                  onChange={(e) => setFormData({ ...formData, mapsEmbedUrl: e.target.value })}
                  placeholder="https://www.google.com/maps/embed?pb=..."
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono text-xs"
                />
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Copy from Google Maps &gt; Share &gt; Embed a map &gt; src attribute.
                </span>
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Google Maps Directions / Destination URL
                </label>
                <input
                  type="text"
                  value={formData.directionsUrl}
                  onChange={(e) => setFormData({ ...formData, directionsUrl: e.target.value })}
                  placeholder="https://www.google.com/maps/dir/?api=1&destination=..."
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono text-xs"
                />
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Triggered by "Get Directions – Open Google Maps" button.
                </span>
              </div>
            </div>
          )}

          {/* 3. Contact & Phone Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-neutral-300 mb-1">
                    Primary Mobile Number (Clickable tel:)
                  </label>
                  <input
                    type="text"
                    value={formData.primaryPhone}
                    onChange={(e) => setFormData({ ...formData, primaryPhone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono"
                  />
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    Bound to header, hero, contact section, and Call Now button.
                  </span>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-300 mb-1">
                    Secondary Mobile Number
                  </label>
                  <input
                    type="text"
                    value={formData.secondaryPhone}
                    onChange={(e) => setFormData({ ...formData, secondaryPhone: e.target.value })}
                    placeholder="+1 (555) 019-5678"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-neutral-300 mb-1">
                    WhatsApp Number (International format)
                  </label>
                  <input
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="+15550192834"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono"
                  />
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    Opens WhatsApp chat conversation directly.
                  </span>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-300 mb-1">
                    Studio Email Address (mailto:)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@dancestudio.com"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4. Genuine Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <div>
                  <h3 className="font-semibold text-white">Genuine Reviews & Google Business Link</h3>
                  <p className="text-neutral-400 text-[11px]">
                    Only authorized reviews. Do not invent false testimonials.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addReview}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-[#d4af37] hover:bg-[#e5c378] text-black font-bold rounded-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Review</span>
                </button>
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Google Business Profile / Write a Review Link
                </label>
                <input
                  type="text"
                  value={formData.googleBusinessReviewsUrl}
                  onChange={(e) => setFormData({ ...formData, googleBusinessReviewsUrl: e.target.value })}
                  placeholder="https://search.google.com/local/writereview?placeid=..."
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-[#d4af37] outline-none font-mono text-xs"
                />
              </div>

              {/* Review Cards list */}
              <div className="space-y-3">
                {formData.reviews.map((rev, index) => (
                  <div key={rev.id} className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <input
                        type="text"
                        value={rev.authorName}
                        onChange={(e) => handleReviewChange(index, 'authorName', e.target.value)}
                        placeholder="[GENUINE REVIEWER NAME]"
                        className="px-2.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-xs font-semibold text-white flex-1"
                      />
                      <input
                        type="text"
                        value={rev.roleOrRelation}
                        onChange={(e) => handleReviewChange(index, 'roleOrRelation', e.target.value)}
                        placeholder="e.g. Student / Parent"
                        className="px-2 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-300 w-36"
                      />
                      <select
                        value={rev.rating}
                        onChange={(e) => handleReviewChange(index, 'rating', Number(e.target.value))}
                        className="px-2 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-[#d4af37] font-semibold"
                      >
                        <option value={5}>5 Stars ★★★★★</option>
                        <option value={4}>4 Stars ★★★★☆</option>
                        <option value={3}>3 Stars ★★★☆☆</option>
                      </select>
                      {formData.reviews.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeReview(rev.id)}
                          className="p-1.5 text-red-400 hover:text-red-300 rounded hover:bg-neutral-800"
                          title="Remove review"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <textarea
                      rows={2}
                      value={rev.comment}
                      onChange={(e) => handleReviewChange(index, 'comment', e.target.value)}
                      placeholder="Actual customer feedback quote..."
                      className="w-full px-2.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-200 resize-none outline-none focus:border-[#d4af37]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Social Media Tab */}
          {activeTab === 'socials' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Instagram Profile URL
                </label>
                <input
                  type="text"
                  value={formData.socials.instagram}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, instagram: e.target.value },
                    })
                  }
                  placeholder="https://instagram.com/[STUDIO_HANDLE]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-mono text-xs focus:border-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  Facebook Page URL
                </label>
                <input
                  type="text"
                  value={formData.socials.facebook}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, facebook: e.target.value },
                    })
                  }
                  placeholder="https://facebook.com/[STUDIO_PAGE]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-mono text-xs focus:border-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-300 mb-1">
                  YouTube Channel URL
                </label>
                <input
                  type="text"
                  value={formData.socials.youtube}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, youtube: e.target.value },
                    })
                  }
                  placeholder="https://youtube.com/@[STUDIO_CHANNEL]"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-mono text-xs focus:border-[#d4af37] outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-neutral-800 bg-[#16161c] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default Placeholders</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] rounded-lg transition-all shadow-md cursor-pointer"
            >
              {savedAlert ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedAlert ? 'Saved!' : 'Save & Apply Live'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
