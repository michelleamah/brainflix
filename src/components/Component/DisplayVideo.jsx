import React from 'react';
import './DisplayVideo.scss';

function DisplayVideo({ videoData, mainVideo, onVideoClick }) {
  const handleClick = (video) => {
    onVideoClick(video);
  };

  const filteredVideoData = videoData.filter(video => video.id !== mainVideo.id);

  return (
    <div className="video-container">
      <p className="next-videos">NEXT VIDEOS</p>
      {filteredVideoData.map(video => (
        <div key={video.id} className="video" onClick={() => handleClick(video)}>
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

export default DisplayVideo;
