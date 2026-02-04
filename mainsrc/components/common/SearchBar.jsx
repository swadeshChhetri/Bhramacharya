import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-md bg-white border rounded-xl shadow-sm px-3 py-2">
      {/* Search Icon */}
      <Search className="text-gray-400 w-5 h-5 mr-2" />

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />

      {/* Clear Button */}
      <button className="p-1 rounded-full hover:bg-gray-100">
        <X className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
}
