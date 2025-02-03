/* eslint-disable no-unused-vars */
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", income: 70 },
  { name: "Tue", income: 30 },
  { name: "Wed", income: 100 },
  { name: "Thu", income: 50 },
  { name: "Fri", income: 80 },
  { name: "Sat", income: 130 },
  { name: "Sun", income: 50 },
];

const Area_Chart = () => {
  // Formatter function to add 'K' suffix to Y-axis values
  const yAxisTickFormatter = (value) => `${value}`;

  // Custom tick style
  const tickStyle = { fill: "#222222" };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" tick={{ ...tickStyle }} tickMargin={6} />
          <YAxis
            tickFormatter={yAxisTickFormatter}
            tick={{ ...tickStyle }}
            tickMargin={16}
            axisLine={{
              stroke: "#E5E5E500", // Y-axis line color
              strokeWidth: 2,
              strokeDasharray: "7 7",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="25.38%" stopColor="#FE5C8E" stopOpacity={1} />
              <stop offset="100%" stopColor="#FE5C8E00" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Tooltip
            formatter={(value, name, props) => [`${value}K`, "Income"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#FE5C8E"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Area_Chart;
