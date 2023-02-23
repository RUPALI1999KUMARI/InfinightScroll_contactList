import React from "react";
import ProfileCard from "./ProfileCard";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div >
      <div >
        <h1>List of Contacts</h1>
        <div className="profile-card-renderer" >
          {movieInfo.map((curVal, id) => {
            return <ProfileCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
