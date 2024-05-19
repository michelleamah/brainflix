import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './MainVideo.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg'; 
import submitComment from '../../assets/images/Icons/add_comment.svg';
import likeicon from '../../assets/images/Icons/likes.svg';
import viewicon from '../../assets/images/Icons/views.svg';

function MainVideo() {
  const { id } = useParams();
  const [mainVideo, setMainVideo] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get('http://localhost:3000/videos');
        setVideoData(videosResponse.data);

        const videoId = id || videosResponse.data[0].id;
        const mainVideoResponse = await axios.get(`http://localhost:3000/videos/${videoId}`);
        setMainVideo(mainVideoResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const comment = {
        name: "User", // Placeholder name
        comment: newComment,
        timestamp: Date.now()
      };

      await axios.post(`http://localhost:3000/videos/${mainVideo.id}/comments`, comment);
      const mainVideoResponse = await axios.get(`http://localhost:3000/videos/${mainVideo.id}`);
      setMainVideo(mainVideoResponse.data);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      {mainVideo && (
        <div className="main">
          <video className="main__video" controls poster={mainVideo.image}>
            <source src={mainVideo.video} type="video/mp4" />
          </video>
          <section className="main__desktop">
            <h1 className="main__title">{mainVideo.title}</h1>
            <div className="main__stats">
              <p className="main__channel">By {mainVideo.channel}</p>
              <div className="main__details">
                <img className="main__icon" src={likeicon} alt="likes" />
                <p className="main__likes">{mainVideo.likes}</p>
              </div>
              <div className="main__details">
                <img className="main__icon" src={viewicon} alt="views" />
                <p className="main__views">{mainVideo.views}</p>
              </div>
              <p className="main__date">{new Date(mainVideo.timestamp).toLocaleDateString()}</p>
            </div>
            <p className="main__description">{mainVideo.description}</p>
            <div className="main__comments">
              <h2 className="main__subtitle">{mainVideo.comments ? mainVideo.comments.length : 0} Comments</h2>
              <section className="comments">
                <div className="comments__format">
                  <img className="comments__avatar" src={avatar} alt="avatar" />
                  <div className="comments__flex">
                    <label className="comments__label" htmlFor="commentText">JOIN THE CONVERSATION</label>
                    <form className="comments__form" onSubmit={handleCommentSubmit}>
                      <textarea
                        id="commentText"
                        name="commentText"
                        className="comments__text"
                        placeholder="Add a new comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      ></textarea>
                      <div className="button">
                        <img
                          src={submitComment}
                          alt="Submit Comment"
                          className="button__icon"
                        />
                        <button className="button__text" type="submit">COMMENT</button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
              {mainVideo.comments && mainVideo.comments.map(comment => (
                <div className="main__border" key={comment.id}>
                  <div className="main__avatar"></div>
                  <div className="main__box">
                    <p className="main__commentdate">{new Date(comment.timestamp).toLocaleDateString()}</p>
                    <p className="main__name">{comment.name}</p>
                    <p className="main__comment">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <div className="next">
        <p className="next__text">NEXT VIDEOS</p>
        {videoData.map(video => (
          mainVideo && video.id !== mainVideo.id && (
            <Link to={`/videos/${video.id}`} key={video.id}>
              <img className="next__image" src={video.image} alt={video.title} />
              <div className="next__videos">
                <h3 className="next__title">{video.title}</h3>
                <p className="next__channel">{video.channel}</p>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

export default MainVideo;


