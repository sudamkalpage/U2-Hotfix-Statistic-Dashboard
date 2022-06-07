import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
// import myData from '../data/mock-data.json';
import { useGraphDataStore } from "../../store/GraphDataStore";

interface ChartProps {
  month: number;
  year: number;
}

export default function App(Props: ChartProps) {
  const myData = useGraphDataStore((state) => state.graphData);

  useEffect(() => {
    console.log("myData", myData);
    console.log(Props.month);
    console.log(Props.year);
  }, []);

  return (
    <React.Fragment>
      <AreaChart
        width={450}
        height={280}
        data={myData[Props.year][Props.month]}
        // data={myData[3][Props.month]}
        margin={{ top: 40, right: 50, left: 20, bottom: 50 }}
      >
        <defs>
          <linearGradient id="colorPathces" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          label={{
            value: "Day",
            position: "right",
            dy: 0,
            dx: 8,
          }}
        />
        <YAxis
          label={{
            value: "Patches",
            position: "top",
            dy: -12,
            dx: 0,
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="patches"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPathces)"
        />
      </AreaChart>
    </React.Fragment>
  );
}
