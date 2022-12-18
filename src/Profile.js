import React, { useContext } from "react";
import UserContext from "./auth/UserContext";
import "./profile.css";

function Profile() {

  const { currentUser } = useContext(UserContext);

  return (

    <div className="container">
      <div className="info-container">
        <img src={currentUser.img}></img>
        <div className="info">
          <br></br>
          <b>First Name:</b> {currentUser.firstName}
          <br></br>
          <b>Last Name:</b> {currentUser.lastName}
          <br></br>
          <b>Bio:</b> {currentUser.bio}
        </div>
      </div>
    </div>
  );
}

export default Profile;