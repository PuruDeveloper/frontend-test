import React from "react";
import "../styles/components/HomeTop.css";

function HomeTop() {
  return (
    <div className="home-top">
      <div className="center__top">
        <div className="center__top__left">
          <div className="flex">
            <p>Total Application</p>
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <div className="flex">
            <div>
              <h3>7956</h3>
              <div className="flex purple">
                <i class="fas fa-external-link-square-alt"></i>
                <p>-3.59%</p>
              </div>
            </div>
            <div className="percent__purple">
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className="number">
                <p>
                  <span>+</span>70<span>%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="center__top__center">
          <div className="center__top__center__cover">
            <div className="flex">
              <p>Shortlisted Candidates</p>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <div className="flex">
              <div>
                <h3>4658</h3>
                <div className="flex white">
                  <i class="fas fa-external-link-square-alt"></i>
                  <p>+06%</p>
                </div>
              </div>
              <div className="percent__white">
                <svg>
                  <circle cx="40" cy="40" r="40"></circle>
                  <circle cx="40" cy="40" r="40"></circle>
                </svg>
                <div className="number">
                  <p>
                    <span>+</span>60<span>%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center__top__right">
          <div className="flex">
            <p>Total Application</p>
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <div className="flex">
            <div>
              <h3>1501</h3>
              <div className="flex red">
                <i class="fas fa-external-link-square-alt"></i>
                <p>-04%</p>
              </div>
            </div>
            <div className="percent__red">
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className="number">
                <p>
                  <span>+</span>40<span>%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
