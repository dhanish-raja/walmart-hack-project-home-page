import { Listing } from "@/types/listing";

export const mockListings: Listing[] = [
  {
    id: "1",
    productName: "Premium Organic Honey",
    quantity: 1,
    basePrice: 25,
    currentBid: 45,
    location: "Vermont, VT",
    timeLeft: 45,
    bidCount: 12,
    isEnding: true
  },
  {
    id: "2",
    productName: "Fresh Tomatoes (50 lbs)",
    quantity: 3,
    basePrice: 30,
    currentBid: 58,
    location: "California, CA",
    timeLeft: 180,
    bidCount: 8,
    isEnding: false
  },
  {
    id: "3",
    productName: "Hardwood Lumber Bundle",
    quantity: 1,
    basePrice: 150,
    currentBid: 220,
    location: "Oregon, OR",
    timeLeft: 30,
    bidCount: 15,
    isEnding: true
  },
  {
    id: "4",
    productName: "Raw Cotton Bales",
    quantity: 2,
    basePrice: 80,
    currentBid: 125,
    location: "Texas, TX",
    timeLeft: 240,
    bidCount: 6,
    isEnding: false
  },
  {
    id: "5",
    productName: "Fresh Milk (10 gallons)",
    quantity: 1,
    basePrice: 35,
    currentBid: 42,
    location: "Wisconsin, WI",
    timeLeft: 120,
    bidCount: 9,
    isEnding: false
  },
  {
    id: "6",
    productName: "Wheat Grain (100 lbs)",
    quantity: 1,
    basePrice: 40,
    currentBid: 55,
    location: "Kansas, KS",
    timeLeft: 15,
    bidCount: 4,
    isEnding: true
  }
];