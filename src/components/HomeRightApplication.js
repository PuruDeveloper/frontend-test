import React from "react";
import "../styles/components/HomeRightApplication.css";

function HomeRightApplication({ name, applicationType }) {
  return (
    <div className="home__right__application flex space-between">
      <div className="name flex">
        <i class="far fa-user-circle"></i>
        <h3>{name}</h3>
      </div>
      <div className="call space-around">
        <i class="fas fa-envelope"></i>
        <i class="fas fa-phone"></i>
      </div>
    </div>
  );
}

export default HomeRightApplication;
