import { Clock, MapPin, Users, Package, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Listing } from "@/types/listing";
import { formatTimeLeft } from "@/utils/time";

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
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
            <p className="text-2xl font-bold text-success">₹{listing.currentBid}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Base Price</p>
            <p className="text-lg text-foreground">₹{listing.basePrice}</p>
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