export interface ReviewItem {
  id: string;
  authorName: string;
  roleOrRelation: string; // e.g. "Verified Student" or "Parent of Student"
  rating: number; // 1 to 5
  dateText: string;
  comment: string;
  isPlaceholder?: boolean;
}

export interface StudioInfo {
  studioName: string;
  address: {
    street: string;
    city: string;
    stateOrProvince: string;
    postalCode: string;
    country: string;
    formattedFullAddress: string;
  };
  operatingHours: string;
  parkingArrival: string;
  primaryPhone: string;
  secondaryPhone: string;
  whatsappNumber: string;
  email: string;
  mapsEmbedUrl: string;
  directionsUrl: string;
  googleBusinessReviewsUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  aboutIntroduction: string;
  aboutDescription: string;
  reviews: ReviewItem[];
}
