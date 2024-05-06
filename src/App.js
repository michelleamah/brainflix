import React, { useState } from 'react';
import './App.scss';
import Header from './components/Component/Header';
import DisplayVideo from './components/Component/DisplayVideo';
import MainVideo from './components/Component/MainVideo';
import Comments from './components/Component/Comments';
import videoDetails from './Data/video-details.json';

function App() {
  const [mainVideo, setMainVideo] = useState(videoDetails[0]);

  const handleVideoClick = (video) => {
    setMainVideo(video);
  };

  return (
    <div className="App">
      <Header />
      <MainVideo mainVideo={mainVideo} />
      <Comments comments={mainVideo.comments} />
      <DisplayVideo videoData={videoDetails} mainVideo={mainVideo} onVideoClick={handleVideoClick} />
    </div>
  );
}

export default App;