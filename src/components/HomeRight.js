import React from "react";
import "../styles/components/HomeRight.css";
import HomeRightApplication from "./HomeRightApplication";

function HomeRight() {
  return (
    <div className="home__right ">
      <p className="font-14">Hello John Bayer</p>
      <p className="font-14">You have 8 new application today</p>
      <div className="background__black">
        <div className="flex space-between">
          <h5>New Applicants</h5>
          <i class="fas fa-angle-right"></i>
        </div>
        <HomeRightApplication
          name="Rosie Metts"
          applicationType="IOS Developer"
        />
        <HomeRightApplication
          name="Rosie Metts"
          applicationType="IOS Developer"
        />
        <HomeRightApplication
          name="Rosie Metts"
          applicationType="IOS Developer"
        />

        <HomeRightApplication
          name="Rosie Metts"
          applicationType="IOS Developer"
        />
        <HomeRightApplication
          name="Rosie Metts"
          applicationType="IOS Developer"
        />
        <HomeRightApplication
          name="Rosie Metts"
          applicationType="IOS Developer"
        />
      </div>
    </div>
  );
}

export default HomeRight;
