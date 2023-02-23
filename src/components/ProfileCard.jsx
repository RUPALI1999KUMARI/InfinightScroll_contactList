import React from "react";
import "./ProfileCard.css";

const MovieCard = ({ myData }) => {
  const { title, body, id } = myData;
  return (
    <>
      <div className="card">
        <div className="img">
          <img src="https://randomuser.me/api/portraits/men/37.jpg" />
        </div>
          <div className="name">
            <h2>{title.substr(0, 15)}</h2>
            <h4>{title.substr(0, 15)}</h4>
          </div>
          <p className="text">{body.substr(0, 150)}</p>
      </div>
    </>
  );
};

export default MovieCard;
