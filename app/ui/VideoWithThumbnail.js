import { useState } from "react";

const VideoWithThumbnail = ({ videoUrl, videothumbnail, alt }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoUrl) {
    return <p>No video available</p>;
  }

  return (
    <div>
      {!isPlaying ? (
        <img
          src={videothumbnail}
          alt={alt}
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
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
