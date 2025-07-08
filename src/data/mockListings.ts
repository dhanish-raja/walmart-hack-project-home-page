import { Listing } from "@/types/listing";

export const mockListings: Listing[] = [
  {
    id: "1",
    productName: "Premium Gaming Laptop",
    quantity: 1,
    basePrice: 800,
    currentBid: 1250,
    location: "New York, NY",
    timeLeft: 45,
    bidCount: 12,
    isEnding: true
  },
  {
    id: "2",
    productName: "Vintage Watch Collection",
    quantity: 3,
    basePrice: 200,
    currentBid: 580,
    location: "Los Angeles, CA",
    timeLeft: 180,
    bidCount: 8,
    isEnding: false
  },
  {
    id: "3",
    productName: "Professional Camera Kit",
    quantity: 1,
    basePrice: 500,
    currentBid: 750,
    location: "Chicago, IL",
    timeLeft: 30,
    bidCount: 15,
    isEnding: true
  },
  {
    id: "4",
    productName: "Designer Handbags",
    quantity: 2,
    basePrice: 150,
    currentBid: 320,
    location: "Miami, FL",
    timeLeft: 240,
    bidCount: 6,
    isEnding: false
  },
  {
    id: "5",
    productName: "Mountain Bike",
    quantity: 1,
    basePrice: 300,
    currentBid: 425,
    location: "Seattle, WA",
    timeLeft: 120,
    bidCount: 9,
    isEnding: false
  },
  {
    id: "6",
    productName: "Art Supplies Bundle",
    quantity: 1,
    basePrice: 100,
    currentBid: 185,
    location: "Austin, TX",
    timeLeft: 15,
    bidCount: 4,
    isEnding: true
  }
];