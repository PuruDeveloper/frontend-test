import { Button } from "@material-ui/core";
import React from "react";
import "../styles/components/HomeBottom.css";

function HomeBottom() {
  return (
    <div className="home-bottom">
      <div className="home__bottom__left">
        <div className="bottom__left__top  space-between">
          <h5>Referals and Campaign Stats</h5>
          <div className="flex">
            <i class="far fa-paper-plane red"></i>
            <div>
              <p className="red">40 Campaigns sent in total</p>
              <p>4 Campaigns sent in last month</p>
            </div>
          </div>
        </div>
        <div className="bottom__left__center ">
          <div className="align-center border-right">
            <p className="font-12">Users Reached</p>
            <div className="flex">
              <i class="fas fa-external-link-square-alt blue"></i>
              <p className="blue">+3.59%</p>
            </div>
            <h4>7956</h4>
          </div>
          <div className="align-center border-right">
            <p className="font-12">Referals</p>
            <div className="flex">
              <i class="fas fa-external-link-square-alt blue"></i>
              <p className="blue">+9.01%</p>
            </div>
            <h4>0662</h4>
          </div>
          <div className="align-center border-right">
            <p className="font-12">Shares</p>
            <div className="flex">
              <i class="fas fa-external-link-square-alt blue"></i>
              <p className="blue">+39.18%</p>
            </div>
            <h4>1478</h4>
          </div>
          <div className="align-center ">
            <p className="font-12">Applications</p>
            <div className="flex">
              <i class="fas fa-external-link-square-alt blue"></i>
              <p className="blue">+12.0%</p>
            </div>
            <h4>0564</h4>
          </div>
        </div>
        <div className="bottom__left__buttons">
          <Button className="background__blue">Start a new campaign now</Button>
          <Button className="background__red">
            Pause all running campaign now
          </Button>
        </div>
      </div>
      <div className="home__bottom__right">
        <div className="flex space-between">
          <h5>Open positions by department</h5>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <div className="percent">
          <svg>
            <circle cx="60" cy="60" r="60"></circle>
            <circle cx="60" cy="60" r="60"></circle>
            <circle cx="60" cy="60" r="60"></circle>
            <circle cx="60" cy="60" r="60"></circle>
            <circle cx="60" cy="60" r="60"></circle>
          </svg>
          <div className="number__text">
            <p>open positions</p>
          </div>
          <div className="number__45">
            <p>45%</p>
          </div>
          <div className="number__30">
            <p>30%</p>
          </div>
          <div className="number__25">
            <p>25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBottom;
