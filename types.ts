
export interface Service {
  id: string;
  title: string;
  description: string;
  priceEstimate?: string;
  image: string;
  fullDescription?: string;
  duration?: string;
  maintenance?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
