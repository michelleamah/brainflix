import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Upload.scss';
import thumbnail from '../assets/images/Upload-video-preview.jpg';
import publishicon from '../assets/images/Icons/publish.svg';

function VideoUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); 

  const handlePublish = async () => {
    try {
      const newVideo = {
        title,
        description
      };

      await axios.post('http://localhost:3000/videos', newVideo);

      alert('Video has been successfully published.');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Error publishing video:', error);
      alert('There was an error publishing your video.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <label className="upload__label" htmlFor="video-thumbnail">
        VIDEO THUMBNAIL
      </label>
      <img src={thumbnail} alt="Thumbnail" className="upload__thumbnail" />
      <section className="upload__form">
        <label className="upload__label" htmlFor="video-title">
          TITLE YOUR VIDEO
        </label>
        <input
          className="upload__input"
          id="video-title"
          type="text"
          placeholder="Add a title to your video"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="upload__label" htmlFor="video-description">
          ADD A VIDEO DESCRIPTION
        </label>
        <input
          className="upload__description"
          id="video-description"
          type="text"
          placeholder="Add a description to your video"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="upload__button">
          <button className="upload__publish" type="submit" onClick={handlePublish}>
            <img src={publishicon} alt="Publish" className="upload__icon"/>
            PUBLISH
          </button>
          <button className="upload__cancel" type="button" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;
