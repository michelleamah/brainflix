import React from 'react';
import './upload.scss'; 
import thumbnail from '../assets/images/Upload-video-preview.jpg'; 

function VideoUpload() {
  return (
    <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <label className="upload__label" htmlFor="video-description"> VIDEO THUMBNAIL</label>
        <img src={thumbnail} alt="Thumbnail" className="upload__thumbnail" />
      <form className="upload__form">
        <label className="upload__label" htmlFor="video-title">TITLE YOUR VIDEO</label>
        <input className="upload__input" id="video-title" type="text" placeholder="Add a title to your video" />

        <label className="upload__label" htmlFor="video-description">ADD A VIDEO DESCRIPTION</label>
        <input className="upload__input" id="video-description" type="text" placeholder="Add a description to your video" />

        <div className="upload__button">
          <button className="upload__publish" type="submit">PUBLISH</button>
          <button className="upload__cancel" type="button">CANCEL</button>
        </div>
      </form>
    </div>
  );
}

export default VideoUpload;