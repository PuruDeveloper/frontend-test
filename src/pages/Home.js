import React from "react";
import Header from "../components/Header";
import HomeTop from "../components/HomeTop";
import HomeCenter from "../components/HomeCenter";
import "../styles/pages/Home.css";
import HomeBottom from "../components/HomeBottom";
import HomeRight from "../components/HomeRight";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <div className="home__body__center">
          <HomeTop />
          <HomeCenter />
          <HomeBottom />
        </div>
        <div className="home__body__right">
          <HomeRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
