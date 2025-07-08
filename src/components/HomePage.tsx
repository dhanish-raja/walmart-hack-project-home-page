import { useState, useEffect } from "react";
import { Clock, MapPin, TrendingUp, Users, Package, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Listing {
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

// Mock data for active listings
const mockListings: Listing[] = [
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

const formatTimeLeft = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/80">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold line-clamp-1 text-foreground group-hover:text-primary transition-colors">
            {listing.productName}
          </CardTitle>
          <Badge 
            variant={listing.isEnding ? "destructive" : "secondary"}
            className={listing.isEnding ? "animate-pulse" : ""}
          >
            {listing.isEnding ? "Ending Soon" : "Active"}
          </Badge>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Package className="h-3 w-3" />
            <span>Qty: {listing.quantity}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{listing.location}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Current Bid</p>
            <p className="text-2xl font-bold text-success">${listing.currentBid}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Base Price</p>
            <p className="text-lg text-foreground">${listing.basePrice}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center py-2 border-t border-border/30">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{listing.bidCount} bids</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-3 w-3" />
            <span className={listing.isEnding ? "text-warning font-medium" : "text-muted-foreground"}>
              {formatTimeLeft(listing.timeLeft)} left
            </span>
          </div>
        </div>
        
        <Button 
          variant={listing.isEnding ? "ending" : "bid"}
          className="w-full"
        >
          <Gavel className="h-4 w-4" />
          Place Bid
        </Button>
      </CardContent>
    </Card>
  );
};

export const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>(mockListings);
  const [sortBy, setSortBy] = useState<"bid" | "time">("bid");

  // Sort listings based on selected criteria
  const sortedListings = [...listings].sort((a, b) => {
    if (sortBy === "bid") {
      return b.currentBid - a.currentBid;
    }
    return a.timeLeft - b.timeLeft;
  });

  const stats = {
    totalListings: listings.length,
    endingSoon: listings.filter(l => l.isEnding).length,
    totalBids: listings.reduce((sum, l) => sum + l.bidCount, 0),
    topBid: Math.max(...listings.map(l => l.currentBid))
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Gavel className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AuctionHub
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost">Profile</Button>
              <Button variant="auction">List Item</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-card to-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalListings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-warning/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ending Soon</p>
                  <p className="text-2xl font-bold text-foreground">{stats.endingSoon}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-success/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Bids</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalBids}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card to-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Highest Bid</p>
                  <p className="text-2xl font-bold text-foreground">${stats.topBid}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sorting Controls */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-foreground">Live Auctions</h2>
          <div className="flex gap-2">
            <Button
              variant={sortBy === "bid" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("bid")}
            >
              Sort by Highest Bid
            </Button>
            <Button
              variant={sortBy === "time" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("time")}
            >
              Sort by Time Left
            </Button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;