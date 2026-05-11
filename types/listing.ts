export type PropertyStatus =
  | "active"
  | "paused"
  | "sold"
  | "rented"
  | "pending";

export interface Address {
  line1: string;
  city: string;
  region?: string;
  postcode?: string;
  country?: string;
  lat?: number;
  lng?: number;
}

export interface Listing {
  id: string;
  title: string;
  slug?: string;
  price: number;
  priceCurrency: string;
  type: "house" | "apartment" | "commercial" | "land";
  bedrooms?: number;
  bathrooms?: number;
  sizeSqm?: number;
  sizeUnit?: "sqm" | "sqft";
  status: PropertyStatus;
  featured?: boolean;
  badges?: string[];
  mainImage: string;
  images: string[];
  address: Address;
  summary?: string;
  description?: string;
  amenities?: string[];
  agentId?: string;
  createdAt: string;
  updatedAt?: string;
}
