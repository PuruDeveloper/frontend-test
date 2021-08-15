import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/components/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h4>Dashboard</h4>
        <p>
          Monday, <strong className="blue">02 July 2020</strong>
        </p>
      </div>
      <div className="header__right">
        <div className="header__right__top">
          <i class="fas fa-bell">
            <span className="blue list-item"></span>
          </i>

          <p className="paragraph">John Bayer</p>
          <Avatar src={`https://avatars.dicebear.com/api/human/123456.svg`} />
          <i class="fas fa-angle-down"></i>
        </div>
        <div className="header__right__bottom">
          <Button>+ Add</Button>
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search Applications here"></input>
        </div>
      </div>
    </div>
  );
}

export default Header;
