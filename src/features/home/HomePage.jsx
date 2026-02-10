import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryScroller from "./components/CategoryScroller";
import CategoryDetailModal from "./components/CategoryDetailModal";
import VideoCard from "./components/VideoCard";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="pb-24">
      <Header />
      <SearchBar />

      <CategoryScroller onSelect={setSelectedCategory} />

      <VideoCard />

      <CategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </div>
  );
}

