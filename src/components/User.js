import React from "react";

const User = ({name}) => {
  return (
    <div className="user-card">
      <div className="user-avatar">{name?.[0]}</div>

      <div className="user-info">
        <h2>{name}</h2>
        <p className="user-role">Frontend Developer</p>

        <div className="user-details">
          <p>📍 Tamil Nadu</p>
          <p>✉️ bhuvancs2205@gmail.com</p>
        </div>
      </div>

      <button className="user-button">View Profile</button>
    </div>
  );
};

export default User;