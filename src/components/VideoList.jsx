import React from 'react';
import styles from './VideoList.module.scss'

function VideoList({ videos, onSelectVideo }) {
  return (
    <div className={`${styles['video-list-wrapper']}`}>
      {videos.map((video) => (
        <div 
          key={video.id.videoId} 
          onClick={() => onSelectVideo(video)}
          className={`${styles['video-list']}`}
        >
          <img 
            src={video.snippet.thumbnails.default.url} 
            alt={video.snippet.title} 
            className={`${styles['thumbnail']}`}  
          />
          <div>
            <h3 className={`${styles['title']}`}>{video.snippet.title}</h3>
            <p className={`${styles['description']}`}>{video.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
