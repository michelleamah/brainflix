import React, { useState, useEffect } from 'react';
import DisplayVideos from './components/Component/DisplayVideo.jsx';
import MainVideo from './components/Component/MainVideo.jsx';
import Header from './components/Component/Header.jsx';
import Comments from './components/Component/Comments.jsx';
import './App.scss';
import { fetchVideos, fetchVideoData } from './brainflix-api.jsx';

function App() {
  const [videos, setVideos] = useState([]);
  const [mainVideoId, setMainVideoId] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      const videoList = await fetchVideos();
      setVideos(videoList);
      if (videoList.length > 0) {
        setMainVideoId(videoList[0].id); 
      }
    };
    
    getVideos();
  }, []);

  useEffect(() => {
    const getMainVideo = async () => {
      if (mainVideoId) {
        const videoData = await fetchVideoData(mainVideoId);
        setMainVideo(videoData);
      }
    };
    
    getMainVideo();
  }, [mainVideoId]);

  const handleVideoClick = (videoId) => {
    setMainVideoId(videoId);
  };

  return (
    <div className="app">
      <Header />
      <MainVideo video={mainVideo} />
      <Comments comments={mainVideo.comments}/>
      <DisplayVideos videos={videos} handleVideoClick={handleVideoClick} />
    </div>
  );
}

export default App;