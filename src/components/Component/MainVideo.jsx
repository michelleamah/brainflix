import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchVideos, fetchVideoDetails } from '../../brainflix-api.jsx';
import './MainVideo.scss';

function MainVideo() {
  const { id } = useParams();
  const [mainVideo, setMainVideo] = useState(null);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVideos();
        setVideoData(response.data);
        if (id) {
          const detailsResponse = await fetchVideoDetails(id);
          setMainVideo(detailsResponse.data);
        } else {
          const defaultVideoResponse = await fetchVideoDetails(response.data[0].id);
          setMainVideo(defaultVideoResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {mainVideo && ( 
        <div className="main">
          <video className="main__video" controls poster={mainVideo.image}>
            <source src={mainVideo.video} type="video/mp4" />
          </video>
          <h1 className="main__title">{mainVideo.title}</h1>
          <p className="main__channel">{mainVideo.channel}</p>
          <p className="main__description">{mainVideo.description}</p>
          <div className="main__comments">
            <h2>{mainVideo.comments ? mainVideo.comments.length : 0} Comments</h2>
            {mainVideo.comments && mainVideo.comments.map(comment => (
              <div className="main__border" key={comment.id}>
                <p className="main__name">{comment.name}</p>
                <p className="main__comment">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="next">
        {videoData.map(video => {
          if (mainVideo && video.id !== mainVideo.id) { 
            return (
              <Link to={`/videos/${video.id}`} key={video.id}>
                <img className="next__image" src={video.image} alt={video.title} />
                <div className="next__videos">
                  <h3 className="next__title">{video.title}</h3>
                  <p className="next__channel">{video.channel}</p>
                </div>
              </Link>
            );
          }
          return null; 
        })}
      </div>
    </div>
  );
}

export default MainVideo;