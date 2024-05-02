import React from 'react';

function VideoPlayer({ video }) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
