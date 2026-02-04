import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-4 mt-4">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search for Products or Videos"
          className="w-full rounded-full border pl-10 pr-4 py-2 text-sm outline-none"
        />
      </div>
    </div>
  );
}
