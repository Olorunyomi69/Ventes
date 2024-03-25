import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

import "./dashboard.css";
import { StatCard, Representatives, Metrics } from "../../components/";

const Dashboard = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const dropdownContent = (
    <div className="dropdown-content">
      <div>
        <h4>Hi Danielle Campbell</h4>
      </div>
      <div className="flexCol dropdown-links">
        <a href="/dashboard">Edit your profile</a>
        <a href="/dashboard">Sign Out</a>
      </div>
    </div>
  );

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container flexCol">
        <div className="header flexAlignCenter">
          <h1>Overview</h1>
          <div className="profile flexAlignCenter">
            <div className="search flexAlignCenter">
              <input
                type="text"
                className="search__input"
                placeholder="Search"
              />
              <SearchIcon id="icon" />
            </div>
            <NotificationsActiveRoundedIcon id="icon" />
            <div
              className="profile-dropdown flexAlignCenter"
              onClick={toggleMenu}
            >
              <img src="./ProfileIcon1.png" alt="profile" />
              <p>Danielle Campbell</p>
              <ArrowDropDownRoundedIcon />
              {menuOpened && dropdownContent}
            </div>
          </div>
        </div>

        <Representatives />
        <div className="cards">
          <Metrics
            title="Products sold"
            number="25.1K"
            percentage="+15%"
            icon={<ShoppingCartCheckoutIcon />}
            hyperlink="View Reports"
          />
          <Metrics
            title="Total Profit"
            number="$2,435K"
            percentage="-3.5%"
            icon={<TrendingUpRoundedIcon />}
            hyperlink="View Reports"
          />
          <Metrics
            title="Total Number of Claim"
            number="3.5M"
            percentage="+15%"
            icon={<AssignmentOutlinedIcon />}
            hyperlink="View More"
          />
          <Metrics
            title="New Customer"
            number="43.5K"
            percentage="+10%"
            icon={<PeopleAltOutlinedIcon />}
            hyperlink="View More"
          />
        </div>
        <StatCard />
      </div>
    </div>
  );
};

export default Dashboard;
