interface ListingGeo {
  geometry: Geometry;
  properties: Properties;
  type: string;
}

interface Properties {
  access: string;
  accommodates: number;
  amenities: string[];
  availability_30: number;
  availability_365: number;
  availability_60: number;
  availability_90: number;
  bathrooms: number;
  bed_type: string;
  bedrooms: number;
  beds: number;
  calculated_host_listings_count: number;
  calendar_last_scraped: string;
  calendar_updated: string;
  cancellation_policy: string;
  city: string;
  cleaning_fee: number;
  country: string;
  country_code: string;
  description: string;
  experiences_offered: string;
  extra_people: number;
  features: string[];
  first_review: string;
  guests_included: number;
  has_availability?: any;
  host_about: string;
  host_acceptance_rate?: any;
  host_id: string;
  host_listings_count: number;
  host_location: string;
  host_name: string;
  host_neighbourhood: string;
  host_picture_url: string;
  host_response_rate: number;
  host_response_time: string;
  host_since: string;
  host_thumbnail_url: string;
  host_total_listings_count: number;
  host_url: string;
  host_verifications: string[];
  house_rules: string;
  id: string;
  interaction: string;
  jurisdiction_names?: any;
  last_review: string;
  last_scraped: string;
  latitude: string;
  license?: any;
  listing_url: string;
  longitude: string;
  market: string;
  maximum_nights: number;
  medium_url: string;
  minimum_nights: number;
  monthly_price?: any;
  name: string;
  neighborhood_overview: string;
  neighbourhood: string;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: string;
  notes: string;
  number_of_reviews: number;
  picture_url: Pictureurl;
  price: number;
  property_type: string;
  review_scores_accuracy: number;
  review_scores_checkin: number;
  review_scores_cleanliness: number;
  review_scores_communication: number;
  review_scores_location: number;
  review_scores_rating: number;
  review_scores_value: number;
  reviews_per_month: number;
  room_type: string;
  scrape_id: string;
  security_deposit?: any;
  smart_location: string;
  space: string;
  square_feet?: any;
  state: string;
  street: string;
  summary: string;
  thumbnail_url: string;
  transit: string;
  weekly_price: number;
  xl_picture_url: string;
  zipcode: string;
}

interface Pictureurl {
  color_summary: string[];
  etag: string;
  filename: string;
  format: string;
  height: number;
  id: string;
  last_synchronized: string;
  mimetype: string;
  thumbnail: boolean;
  width: number;
}

interface Geometry {
  coordinates: number[];
  type: string;
}
