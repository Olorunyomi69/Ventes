import React from "react";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";
import CallReceivedOutlinedIcon from "@mui/icons-material/CallReceivedOutlined";
import "./metrics.css";

const metrics = ({ title, number, icon, percentage, hyperlink }) => {
  return (
    <div className="metrics-wrapper flexCol">
      <div className="metrics-title flexAlignCenter">
        <p>{title}</p>
        <span>{icon}</span>
      </div>
      <div className="metric-stats">
        <h1>{number}</h1>
        <div className="subscript flexAlignCenter">
          <p id={percentage === "-3.5%" ? "red" : ""}>
            {percentage === "-3.5%" ? (
              <CallReceivedOutlinedIcon />
            ) : (
              <OutboundRoundedIcon />
            )}
            {percentage}
          </p>
          <a href="google.com">{hyperlink}</a>
        </div>
      </div>
    </div>
  );
};

export default metrics;
