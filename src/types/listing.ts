export interface Listing {
  id: string;
  productName: string;
  quantity: number;
  basePrice: number;
  currentBid: number;
  location: string;
  timeLeft: number; // in minutes
  bidCount: number;
  isEnding: boolean;
}