import { FileText, Image, Video } from "lucide-react";
import { useState } from "react";

export default function CreatePostSheet({ open, onClose }) {
  const [type, setType] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* SHEET */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4">
        {!type && (
          <>
            <h2 className="text-lg font-semibold mb-4">Create Post</h2>

            <div className="space-y-3">
              <button
                onClick={() => setType("text")}
                className="w-full flex items-center gap-3 p-3 border rounded-lg"
              >
                <FileText size={20} />
                Text Post
              </button>

              <button
                onClick={() => setType("image")}
                className="w-full flex items-center gap-3 p-3 border rounded-lg"
              >
                <Image size={20} />
                Image Post
              </button>

              <button
                onClick={() => setType("video")}
                className="w-full flex items-center gap-3 p-3 border rounded-lg"
              >
                <Video size={20} />
                Video Link
              </button>
            </div>
          </>
        )}

        {type === "text" && <TextPost onClose={onClose} />}
        {type === "image" && <ImagePost onClose={onClose} />}
        {type === "video" && <VideoPost onClose={onClose} />}
      </div>
    </div>
  );
}
