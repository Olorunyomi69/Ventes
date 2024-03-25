import React from "react";
import Chart from "../Chart";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";
import "./statCard.css";

const StatCard = () => {
  return (
    <div className="stat-section">
      <div className="chart-box">
        <Chart />
      </div>

      <div className="statcard-wrapper flexAlign">
        <div className=" statcard-left flexCol">
          <div className="top">
            <p>Sales team target</p>
            <h1>82%</h1>
            <p>Achieved</p>
          </div>

          <div className="bottom">
            <p>Cleared Qeue</p>
            <h1>1.4K</h1>
            <span>
              <p>No of Bills</p>
              <OutboundRoundedIcon />
              +15%
            </span>
          </div>
        </div>
        <div className="statcard-right flexCol">
          <div className="top-right">
            <img src="./statprofile.png" alt="avatar" />
            <img src="./progess.png" alt="avatar" />
          </div>
          <div className="spiral">
            <img src="./spiral.png" alt="avatar" style={{ width: "180px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
