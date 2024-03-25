import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { representative } from "../Data";
import "./representative.css";

const Representative = () => {
  return (
    <div className="rep-wrapper">
      <h2>Top Sales Representative</h2>
      <div className="rep-container">
        {representative.map((item, i) => {
          const profit = item.profit.toFixed(2);
          return (
            <div className="rep-cards flexAlignCenter" key={i}>
              <img src={item.Image} alt="rep-avatar" />
              <span> {item.name}</span>
              <span> $ {profit}</span>
              <span> {item.products}</span>
              <span> {item.premiums}</span>
              <span id={item.rank === "Gold" ? "rank" : "silver"}>
                <AddIcon />
                {item.rank}
              </span>
              <MoreVertIcon id="icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Representative;
