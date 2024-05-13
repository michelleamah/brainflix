import React from 'react';
import './upload.scss';
import thumbnail from '../assets/images/Upload-video-preview.jpg';
import publishicon from '../assets/images/Icons/publish.svg';

function VideoUpload() {
  const handlePublish = () => {
    alert('Video has been successfully published.');
    
    setTimeout(() => {
      window.location.href = '/'; 
    });
  };

  const handleCancel = () => {
    window.location.href = '/'; 
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
        <label className="upload__label" htmlFor="video-description">
          {' '}
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
          />
          <label className="upload__label" htmlFor="video-description">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="upload__description"
            id="video-description"
            type="text"
            placeholder="Add a description to your video"
          />
        <div className="upload__button">
          <button className="upload__publish" type="button" onClick={handlePublish}>
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