import { Button } from "@/components/ui/button";

interface SortingControlsProps {
  sortBy: "bid" | "time";
  setSortBy: (sort: "bid" | "time") => void;
}

export const SortingControls = ({ sortBy, setSortBy }: SortingControlsProps) => {
  return (
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
  );
};