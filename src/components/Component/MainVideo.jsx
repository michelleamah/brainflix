import React from 'react';
import './MainVideo.scss';

function MainVideo({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-video">
      <video controls poster={video.image}>
        <source src={video.video} type="video/mp4" />
      </video>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
}

export default MainVideo;