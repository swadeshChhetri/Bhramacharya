import { ImagePlus, Send, X } from "lucide-react";
import { useState } from "react";

export default function CreatePostPage() {
  const [content, setContent] = useState("");

  return (
    <div className="max-w-[430px] mx-auto px-4 pb-24 pt-4 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          Create Post
        </h1>
        <p className="text-sm text-gray-500">
          Share updates, experiences or messages.
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold">
          S
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">
           Ritesh Kumar
          </p>
          <p className="text-xs text-gray-500">
            Posting publicly
          </p>
        </div>
      </div>

      {/* Text Area */}
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          className="w-full h-32 p-4 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none text-sm"
        />
      </div>

      {/* Image Upload */}
      <div className="border border-dashed border-orange-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-orange-50">
        <ImagePlus className="text-orange-500" size={28} />
        <p className="text-sm text-orange-600 mt-2">
          Add Photo (Optional)
        </p>
      </div>

      {/* Category (Optional) */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Category
        </label>
        <select className="w-full mt-1 border border-orange-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300">
          <option>Event Update</option>
          <option>Donation</option>
          <option>Community</option>
          <option>Announcement</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        disabled={!content.trim()}
        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-white transition ${
          content.trim()
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-orange-300 cursor-not-allowed"
        }`}
      >
        <Send size={18} />
        Publish Post
      </button>

    </div>
  );
}
