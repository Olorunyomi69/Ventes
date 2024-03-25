import React from "react";
import { Outlet } from "react-router-dom"; //had to remeove routing because of unspecified design for other pages
import { Data } from "../Data";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-wrapper flexCol">
      <div className="logo-container">
        <div className="yellow-circle">
          <div className="orange-circle flexAlignCenter">
            <h1>Ventes</h1>
          </div>
        </div>
      </div>

      <hr />

      <ul className="navlist">
        {Data.map((val, key) => {
          return (
            <li
              className="navrow flexAlignCenter"
              id={window.location.pathname === val.Link ? "active" : ""}
              key={key}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="card flexCol">
        <img src="./cardImage.png" alt="plane-animation" />
        <p>Want to upgrade</p>
        <button className="upgrade-btn">Upgrade now</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
