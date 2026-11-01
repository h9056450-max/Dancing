import { StudioInfo } from '../types';

export const DEFAULT_STUDIO_DATA: StudioInfo = {
  studioName: '[DANCE STUDIO NAME]',
  address: {
    street: '[STUDIO STREET ADDRESS]',
    city: '[CITY]',
    stateOrProvince: '[STATE/PROVINCE]',
    postalCode: '[POSTAL CODE]',
    country: '[COUNTRY]',
    formattedFullAddress: '[COMPLETE STUDIO ADDRESS, SUITE / FLOOR, CITY, STATE / REGION, POSTAL CODE]',
  },
  operatingHours: '[STUDIO OPERATING HOURS - E.G. MONDAY TO SATURDAY: 9:00 AM – 9:00 PM, SUNDAY: BY APPOINTMENT]',
  parkingArrival: '[PARKING & ARRIVAL DETAILS - E.G. RESERVED ON-SITE GUEST PARKING AVAILABLE WITH STEP-FREE ENTRANCE]',
  primaryPhone: '+1 (555) 019-2834',
  secondaryPhone: '+1 (555) 019-5678',
  whatsappNumber: '+15550192834',
  email: 'contact@dancestudioplaceholder.com',
  // Standard embed placeholder showing a neutral arts district pin
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.987844!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjciTiA3M8KwNTknMTYuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Dance+Studio',
  googleBusinessReviewsUrl: 'https://search.google.com/local/writereview?placeid=[GOOGLE_PLACE_ID_PLACEHOLDER]',
  socials: {
    instagram: 'https://instagram.com/[STUDIO_INSTAGRAM_HANDLE]',
    facebook: 'https://facebook.com/[STUDIO_FACEBOOK_PAGE]',
    youtube: 'https://youtube.com/@[STUDIO_YOUTUBE_CHANNEL]',
  },
  aboutIntroduction: 'Cultivating Artistry, Movement & Creative Expression',
  aboutDescription: 'Founded with a profound commitment to the art of movement, our dance academy provides an inspiring atmosphere where dancers of all backgrounds explore their true potential. We believe dance is more than physical technique—it is an emotional language, a source of lifelong confidence, and a celebration of human creativity. Within our professionally equipped studios, students discover discipline, stage presence, and the joy of authentic performance under the guidance of passionate master instructors.',
  reviews: [
    {
      id: 'rev-placeholder-1',
      authorName: '[GENUINE REVIEWER NAME - PENDING]',
      roleOrRelation: 'Verified Student / Parent',
      rating: 5,
      dateText: 'Awaiting verified client submission',
      comment: '[This card is reserved for a genuine customer review provided by the studio owner or imported from Google Business Profile. Replace this text with actual student or parent feedback.]',
      isPlaceholder: true,
    },
    {
      id: 'rev-placeholder-2',
      authorName: '[GENUINE REVIEWER NAME - PENDING]',
      roleOrRelation: 'Parent of Dancer',
      rating: 5,
      dateText: 'Awaiting verified client submission',
      comment: '[This card is reserved for an authentic customer testimonial. To preserve integrity, testimonials are only published once directly verified from official Google Reviews or studio records.]',
      isPlaceholder: true,
    },
    {
      id: 'rev-placeholder-3',
      authorName: '[GENUINE REVIEWER NAME - PENDING]',
      roleOrRelation: 'Studio Member',
      rating: 5,
      dateText: 'Awaiting verified client submission',
      comment: '[Reserved for verified feedback highlighting studio atmosphere, instructor guidance, and performance training experience. You can edit this in the Studio Information Editor.]',
      isPlaceholder: true,
    },
  ],
};
