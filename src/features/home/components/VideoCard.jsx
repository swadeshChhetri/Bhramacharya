import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const YOUTUBE_URL = "https://youtu.be/iGMIQ8zinw0";
// https://youtu.be/hEndpo9ZOm0?si=s7E3tY-Trykbtp9g

const videos = [

  {
    id: 1,
    url: "https://youtu.be/iGMIQ8zinw0",
    title: "Jo Brahmacharya ka naash karta hai...",
  },
  {
    id: 2,
    url: "https://youtu.be/hEndpo9ZOm0?si=s7E3tY-Trykbtp9g",
    title: "Man ko kaise niyantrit karein",
  },
  {
    id: 3,
    url: "https://youtu.be/XXpqvGqgti4?si=lnjILHVBT20Zzk8l",
    title: "Indriyon par vijay ka marg",
  },
  {
    id: 4,
    url: "https://youtu.be/ixkWOvhkxWg?si=2VKdn6oxgBeE35yg",
    title: "Brahmacharya ka rahasya",
  },
];

function getYouTubeId(url) {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }

    // youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

export default function VideoCard() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const openVideo = () => {
    window.open(YOUTUBE_URL, "_blank");
  };

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
    <div className="px-4 mt-6 space-y-6">
      {videos.map((video) => {
        const youtubeId = getYouTubeId(video.url);

        return (
          <div
            key={video.id}
            className="relative h-64 rounded-2xl overflow-hidden bg-black"
          >
            {youtubeId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white">
                Video not supported
              </div>
            )}

            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium pointer-events-none">
              {video.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
