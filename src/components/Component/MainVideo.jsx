import React from 'react';
import likeIcon from '../../assets/images/Icons/likes.svg';
import viewIcon from '../../assets/images/Icons/views.svg';
import './MainVideo.scss';

function MainVideo({ mainVideo }) { 
  const videoUrl = mainVideo.video;

  return (
    <div className="main">
       <div className="main__video-container">
        <video className="main__video" controls poster={mainVideo.image}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="main__details">
        <h1 className="main__title">{mainVideo.title}</h1>
        <div className="main__flex">
        <div className="main__info">
          <p className="main__channel">By {mainVideo.channel}</p>
          <img src={viewIcon} alt="Views Icon" className="main__views-icon" />
          <p className="main__views">{mainVideo.views}</p>
        </div>
        <div className="main__info1">
          <img src={likeIcon} alt="Likes Icon" className="main__likes-icon" />
          <p className="main__likes">{mainVideo.likes}</p>
          <p className="main__timestamp">{new Date(mainVideo.timestamp).toLocaleDateString()}</p>
        </div>
        </div>
        <p className="main__description">{mainVideo.description}</p>
      </div>
    </div>
  );
}

export default MainVideo;