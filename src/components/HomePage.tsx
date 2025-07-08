import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { StatsCards } from "@/components/StatsCards";
import { SortingControls } from "@/components/SortingControls";
import { ListingCard } from "@/components/ListingCard";
import { mockListings } from "@/data/mockListings";
import { Listing } from "@/types/listing";

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

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <div className="container mx-auto px-4 py-8">
        <StatsCards listings={listings} />
        <SortingControls sortBy={sortBy} setSortBy={setSortBy} />
        
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