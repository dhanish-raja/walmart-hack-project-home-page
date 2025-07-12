import { Listing } from "@/types/listing";

export const mockListings: Listing[] = [
  {
    id: "1",
    productName: "Pure Jaggery (Gur) - 10kg",
    quantity: 1,
    basePrice: 500,
    currentBid: 750,
    location: "Maharashtra, India",
    timeLeft: 45,
    bidCount: 12,
    isEnding: true
  },
  {
    id: "2",
    productName: "Basmati Rice - 50kg",
    quantity: 3,
    basePrice: 2500,
    currentBid: 3200,
    location: "Punjab, India",
    timeLeft: 180,
    bidCount: 8,
    isEnding: false
  },
  {
    id: "3",
    productName: "Organic Turmeric - 5kg",
    quantity: 1,
    basePrice: 1000,
    currentBid: 1400,
    location: "Tamil Nadu, India",
    timeLeft: 30,
    bidCount: 15,
    isEnding: true
  },
  {
    id: "4",
    productName: "Red Chili - 10kg",
    quantity: 2,
    basePrice: 3000,
    currentBid: 4200,
    location: "Andhra Pradesh, India",
    timeLeft: 240,
    bidCount: 6,
    isEnding: false
  },
  {
    id: "5",
    productName: "Fresh Coconuts - 50 pieces",
    quantity: 1,
    basePrice: 1000,
    currentBid: 1350,
    location: "Kerala, India",
    timeLeft: 120,
    bidCount: 9,
    isEnding: false
  },
  {
    id: "6",
    productName: "Wheat Grains - 25kg",
    quantity: 1,
    basePrice: 800,
    currentBid: 950,
    location: "Haryana, India",
    timeLeft: 15,
    bidCount: 4,
    isEnding: true
  }
];