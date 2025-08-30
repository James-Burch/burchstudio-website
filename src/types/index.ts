export interface Template {
  id: string;
  title: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  demoUrl: string;
  images: string[];
  techStack: string[];
  included: string[];
  timeline: string;
  stripeProductId: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface PriceRange {
  id: string;
  label: string;
  min: number;
  max: number;
}

export interface TemplateData {
  templates: Template[];
  categories: Category[];
  priceRanges: PriceRange[];
}
