import React from 'react';
import './DisplayVideo.scss';

function DisplayVideos({ videos, handleVideoClick }) {
  return (
    <div className="video-container">
      <p className="next-videos">NEXT VIDEOS</p>
      {videos.map(video => (
        <div className="video-item" key={video.id} onClick={() => handleVideoClick(video.id)}>
          <img src={video.image} alt={video.title} className="video__thumbnail" />
          <div className="video__info">
          <h2 className="video__title">{video.title}</h2>
          <p className="video__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayVideos;