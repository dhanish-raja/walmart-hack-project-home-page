import { Clock, TrendingUp, Users, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Listing } from "@/types/listing";

interface StatsCardsProps {
  listings: Listing[];
}

export const StatsCards = ({ listings }: StatsCardsProps) => {
  const stats = {
    totalListings: listings.length,
    endingSoon: listings.filter(l => l.isEnding).length,
    totalBids: listings.reduce((sum, l) => sum + l.bidCount, 0),
    topBid: Math.max(...listings.map(l => l.currentBid))
  };

  return (
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
  );
};