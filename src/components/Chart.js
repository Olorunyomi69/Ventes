import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const Chart = () => {
  const data = [
    { name: "", approved: 20, submitted: 30 },
    { name: "2015", approved: 28, submitted: 38 },
    { name: "2016", approved: 16, submitted: 16 },
    { name: "2017", approved: 15, submitted: 8 },
    { name: "2018", approved: 35, submitted: 35 },
    { name: "2019", approved: 15, submitted: 10 },
    { name: "2020", approved: 35, submitted: 47 },
    { name: "2021", approved: 25, submitted: 25 },
  ];

  return (
    <div>
      <div className="chart-details">
        <h2>Claims Over the Years</h2>
        <span className="span-wrapper">
          <span id="approved">
            {" "}
            <FiberManualRecordOutlinedIcon /> <p>Approved</p>
          </span>
          <span id="submitted">
            {" "}
            <CircleRoundedIcon /> <p>Submitted</p>
          </span>
        </span>
      </div>
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" tickLine={false} />
        <YAxis tickLine={false} />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="submitted"
          stroke="#E26169"
          strokeWidth={4}
          dot={false}
          activeDot={false}
        />
        <Line
          type="monotone"
          dataKey="approved"
          stroke="#5041BC"
          strokeWidth={4}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
