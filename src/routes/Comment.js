import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

function Comment({ id, userObj }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    firestore
      .collection(`/document/${id}/comment`)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const commentArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentArray);
      });
  }, []);

  const [comment, setComment] = useState("");
  const timestamp = new Date().getTime();
  const onChange = (event) => setComment(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      return;
    }
    firestore.collection("document").doc(id).collection("comment").add({
      cm: comment,
      author: userObj.displayName,
      createdAt: timestamp,
      photoUrl: userObj.photoUrl,
    });
    setComment("");
  };

  return (
    <>
      <div className="comment-con">
        <form onSubmit={onSubmit} className="comment">
          <input
            className="comment-input"
            onChange={onChange}
            value={comment}
            type="text"
            placeholder="댓글 입력"
          />
          <button className="comment-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M1.444,6.669a2,2,0,0,0-.865,3.337l3.412,3.408V20h6.593l3.435,3.43a1.987,1.987,0,0,0,1.408.588,2.034,2.034,0,0,0,.51-.066,1.978,1.978,0,0,0,1.42-1.379L23.991.021ZM2,8.592l17.028-5.02L5.993,16.586v-4Zm13.44,13.424L11.413,18h-4L20.446,4.978Z" />
              </g>
            </svg>
          </button>
        </form>
        {comments.map((comment) => (
          <div className="commentDiv">
            <div className="commentCon">
              <div className="photoDiv">
                <img className="commentPhoto" src={comment.photoUrl}></img>
              </div>
              <p className="commentAuthor">{comment.author}</p>
              <p className="commentText" key={comment.id}>
                {comment.cm}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Comment;
