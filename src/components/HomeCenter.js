import React from "react";
import "../styles/components/HomeCenter.css";

function HomeCenter() {
  return (
    <div className="home-center">
      <div className="home__center__left">
        <div className=" font-14 left__top flex space-between">
          <h5>Applications Recieved</h5>
          <div className="font-12 center__top__text space-evenly">
            <p>This year</p>
            <p>This week</p>
            <p>Today</p>
            <p className="flex-0 font-12">
              <i class="fas fa-folder"></i>
              <p className="font-12">Download Report</p>
            </p>
            <i class="flex-0 fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="left__bottom">
          <li>
            <p className="y-axis">100</p>
            <p className="line__light"></p>
          </li>
          <li>
            <p className="y-axis">80</p>
            <p className="line__light"></p>
          </li>
          <li>
            <p className="y-axis">60</p>
            <p className="line__light"></p>
          </li>
          <li>
            <p className="y-axis">40</p>
            <p className="line__light"></p>
          </li>
          <li>
            <p className="y-axis">20</p>
            <p className="line__light"></p>
          </li>
          <li className="flex">
            <p className="y-axis">0</p>
            <p>Jan</p>
            <p>Feb</p>
            <p>March</p>
          </li>
        </div>
      </div>
      <div className="home__center__right">
        <p>Total Applications</p>
        <li>
          <p className="applications__text">Applications</p>
          <p className="line__bold">
            <p className="line__bold__50 applications"></p>
          </p>
        </li>
        <li>
          <p className="short-listed__text">Short Listed</p>
          <p className="line__bold">
            <p className="line__bold__50 short-listed"></p>
          </p>
        </li>
        <li>
          <p className="rejected__text">Rejected</p>
          <p className="line__bold">
            <p className="line__bold__50 rejected"></p>
          </p>
        </li>
        <li>
          <p className="on-hold__text">On Hold</p>
          <p className="line__bold">
            <p className="line__bold__50 on-hold"></p>
          </p>
        </li>
        <li>
          <p className="preset__text">preset</p>
          <p className="line__bold">
            <p className="line__bold__50 last preset"></p>
          </p>
        </li>
      </div>
    </div>
  );
}

export default HomeCenter;
