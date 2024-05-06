import React from 'react';
import avatar from '../../assets/images/Mohan-muruge.jpg'; 
import submitComment from '../../assets/images/Icons/add_comment.svg';
import './Comments.scss';

function Comments({ comments }) {
  return (
    <div className="video-comments">
      {comments.length} Comments
      <section className="comments">
        <div className="comments__form">
        <div className="comments__format">
          <img className="comments__form--avatar" src={avatar} alt="avatar" />
        <div className="comments__form--flex">
            <label htmlFor="commentText">JOIN THE CONVERSATION</label>
            <form className="commentForm">
              <textarea id="commentText" name="commentText" rows="5" placeholder="Add a new comment"></textarea>
              <div className="commentButton">
              <img src={submitComment} alt="Submit Comment" className="commentButton__icon" />
              COMMENT
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>
      <section className="comments">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-format">
              <div className="comment-avatar"></div>
              <div className="comment-flexbox">
                <div className="comment-namedate">
                  <p className="comment-name">{comment.name}</p>
                  <p className="comment-date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                </div>
                <p className="comment-text">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Comments;