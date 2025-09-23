export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  specifications?: Array<{
    name: string;
    value: string;
  }>;
}