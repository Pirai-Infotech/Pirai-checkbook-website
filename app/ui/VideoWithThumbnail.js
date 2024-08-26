import { useState } from "react";

const VideoWithThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {!isPlaying ? (
        <img
          src="/Videothumbnail.svg"
          alt="Video Thumbnail"
          onClick={() => setIsPlaying(true)}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <video
          width="600"
          controls
          autoPlay
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
