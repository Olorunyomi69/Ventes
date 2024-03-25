import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
export const Data = [
  {
    title: "Dashboard",
    icon: <GridViewRoundedIcon />,
    Link: "/",
  },

  {
    title: "Claims",
    icon: <TextSnippetIcon />,
    Link: "/claims",
  },

  {
    title: "Biller Queue",
    icon: <TurnedInNotRoundedIcon />,
    Link: "/biller",
  },

  {
    title: "Subscription",
    icon: <StarRoundedIcon />,
    Link: "/subscription",
  },

  {
    title: "Health",
    icon: <MonitorHeartIcon />,
    Link: "/health",
  },
];

export const representative = [
  {
    Image: "./profile2.png",
    name: "Nicholas Patrick",
    profit: 2540.58,
    products: "150 Products",
    premiums: "105 Premiums",
    rank: "Gold",
  },

  {
    Image: "./profile3.png",
    name: "Cordell Edwards",
    profit: 1567.8,
    products: "95 Products",
    premiums: "60 Premiums",
    rank: "Silver",
  },
  {
    Image: "./profile4.png",
    name: "Derrick Spencer",
    profit: 1640.26,
    products: "120 Products",
    premiums: "75 Premiums",
    rank: "Silver",
  },

  {
    Image: "./profile5.png",
    name: "Larissa Burton",
    profit: 2340.58,
    products: "120 Products",
    premiums: "99 Premiums",
    rank: "Gold",
  },
];
