import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/components/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  let [barName, setBarName] = useState("home");

  const home = (e) => {
    e.preventDefault();
    setBarName("home");
  };
  const chartBar = (e) => {
    e.preventDefault();
    setBarName("chartBar");
  };
  const siteMap = (e) => {
    e.preventDefault();
    setBarName("siteMap");
  };
  const folder = (e) => {
    e.preventDefault();
    setBarName("folder");
  };
  const calendar = (e) => {
    e.preventDefault();
    setBarName("calendar");
  };
  const userFriends = (e) => {
    e.preventDefault();
    setBarName("userFriends");
  };
  const folderOpen = (e) => {
    e.preventDefault();
    setBarName("folderOpen");
  };
  const signOut = (e) => {
    e.preventDefault();
    setBarName("signOut");
  };

  return (
    <div className="sidebar">
      <h3>
        <i class="fas fa-random"></i>
      </h3>
      <div className="icons">
        <Link to="/" alt="">
          <Button onClick={(e) => home(e)}>
            <i
              class={
                barName === "home" ? "fas fa-home blue__bar" : "fas fa-home"
              }
            ></i>
          </Button>
        </Link>
        <Link to="/chart-bar" alt="">
          <Button onClick={(e) => chartBar(e)}>
            <i
              className={
                barName === "chartBar"
                  ? "fas fa-chart-bar blue__bar"
                  : "fas fa-chart-bar"
              }
            ></i>
          </Button>
        </Link>
        <Link>
          <Button onClick={(e) => siteMap(e)}>
            <i
              class={
                barName === "siteMap"
                  ? "fas fa-sitemap blue__bar"
                  : "fas fa-sitemap"
              }
            ></i>
          </Button>
        </Link>
        <Link>
          <Button onClick={(e) => folder(e)}>
            <i
              class={
                barName === "folder"
                  ? "fas fa-folder blue__bar"
                  : "fas fa-folder"
              }
            ></i>
          </Button>
        </Link>
        <Link>
          <Button onClick={(e) => calendar(e)}>
            <i
              class={
                barName === "calendar"
                  ? "fas fa-calendar-week blue__bar"
                  : "fas fa-calendar-week"
              }
            ></i>
          </Button>
        </Link>
        <Link>
          <Button onClick={(e) => userFriends(e)}>
            <i
              class={
                barName === "userFriends"
                  ? "fas fa-user-friends blue__bar"
                  : "fas fa-user-friends"
              }
            ></i>
          </Button>
        </Link>
        <Link>
          <Button onClick={(e) => folderOpen(e)}>
            <i
              class={
                barName === "folderOpen"
                  ? "fas fa-folder-open blue__bar"
                  : "fas fa-folder-open"
              }
            ></i>
          </Button>
        </Link>
        <Link>
          <Button onClick={(e) => signOut(e)}>
            <i
              class={
                barName === "signOut"
                  ? "fas fa-sign-out-alt blue__bar"
                  : "fas fa-sign-out-alt"
              }
            ></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
