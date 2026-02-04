import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoCard() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="px-4 mt-6">
      <div className="relative h-64 rounded-2xl overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
        />

        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="bg-white/80 rounded-full p-4">
            {playing ? (
              <Pause size={28} className="text-blue-900" />
            ) : (
              <Play size={28} className="text-blue-900" />
            )}
          </span>
        </button>

        <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
          Jo Brahmacharya ka naash karta hai...
        </p>
      </div>
    </div>
  );
}
