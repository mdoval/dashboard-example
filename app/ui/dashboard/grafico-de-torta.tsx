"use client";

import { PieChart } from "@mui/x-charts/PieChart";

export default function GraficoDeTorta({ data }: { data: any }) {
  console.log(data)
  return (
    <div className="border m-4 shadow-lg">
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={400}
        width={600}
      />
    </div>
  );
}