import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const Statistics = () => {
  const chart = useLoaderData().data;
  console.log(chart);
  const { name, total, logo } = chart;
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold my-10 text-green-200">
          Total Quiz Statistics:
        </h1>
      </div>
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <AreaChart
            data={chart}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
