export interface Agent {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  phone: string;
  email: string;
  rating: number;
  listingsCount: number;
  verified?: boolean;
  specialties: string[];
  photo: string;
  bio: string;
}
