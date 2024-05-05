import React from 'react';
import videoData from '../../Data/videos.json';
import './DisplayVideo.scss'; 

function DisplayVideos() {
  const otherVideos = videoData.slice(1);

  return (
    <div className="video-container">
    <p className="next-videos">NEXT VIDEOS</p>
      {otherVideos.map(video => (
        <div key={video.id} className="video">
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
