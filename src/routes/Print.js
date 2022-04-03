import React from "react";
import { Link } from "react-router-dom";

const Print = ({ notice, count }) => {
  var saveTitle = notice.title;
  if (notice.title.length > 15) {
    saveTitle = `${notice.title.slice(0, 20)}...`;
  }
  return (
    <tr key={notice.id}>
      <td>{count + 1}</td>
      <td>
        <Link to={`${notice.route}`} style={{ textDecoration: "none" }}>
          {saveTitle}
        </Link>
      </td>
      <td>{notice.creator}</td>
      <td>{notice.time}</td>
    </tr>
  );
};

export default Print;
