import React, { useState } from "react";
import { firestore } from "../firebase";
import { useHistory } from "react-router-dom";

function Notice({ userObj }) {
  const history = useHistory();
  const [title, setNotice] = useState("");
  const [des, setDes] = useState("");
  const data = new Date();
  const year = String(data.getFullYear());
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const date = String(data.getDate()).padStart(2, "0");
  const timestamp = new Date().getTime();
  const onChangeT = (event) => setNotice(event.target.value);
  const onChangeD = (event) => setDes(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "" || des === "") {
      return;
    }
    const route = `${title}${timestamp}`;
    firestore.collection("document").add({
      time: `${year}.${month}.${date}`,
      creator: userObj.displayName,
      title: title,
      des: des,
      createdAt: timestamp,
      route: route,
      creatorId: userObj.uid,
      photoUrl: userObj.photoUrl,
    });
    setNotice("");
    setDes("");
    history.push(`/${route}`);
  };

  return (
    <>
      <div className="notice-con">
        <form onSubmit={onSubmit} className="notice">
          <input
            className="notice-title"
            onChange={onChangeT}
            value={title}
            type="text"
            placeholder="제목"
          />

          <textarea
            className="notice-des"
            onChange={onChangeD}
            value={des}
            type="text"
            placeholder="설명"
          />
          <p>
            <button className="upload-button">등록</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default Notice;
