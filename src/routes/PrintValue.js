import React from "react";
import Comment from "./Comment";
import { Link, useHistory } from "react-router-dom";
import { firestore } from "../firebase";

const PrintValue = ({ route, userObj }) => {
  const history = useHistory();
  return (
    <>
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          게시판 📃
        </Link>
      </h1>

      <div className="value">
        <h2 style={{ display: "inline" }}>{route.title}</h2>
        {route.creatorId === userObj.uid && (
          <button
            className="owner"
            onClick={() => {
              const select = window.confirm("게시글을 삭제하시겠습니까?");
              if (select) {
                firestore.collection("document").doc(route.id).delete();
                history.push(`/`);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z" />
                <rect x="9" y="10" width="2" height="8" />
                <rect x="13" y="10" width="2" height="8" />
              </g>
            </svg>
          </button>
        )}
        <p className="add"></p>
        <p className="des">{route.des}</p>
        <Comment id={route.id} userObj={userObj} />
      </div>
    </>
  );
};

export default PrintValue;
