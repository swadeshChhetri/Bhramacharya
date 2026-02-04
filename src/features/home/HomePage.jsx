import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryScroller from "./components/CategoryScroller";
import VideoCard from "./components/VideoCard";

export default function HomePage() {
  return (
    <div className="pb-24">
      <Header />
      <SearchBar />
      <CategoryScroller />
      <VideoCard />
    </div>
  );
}
