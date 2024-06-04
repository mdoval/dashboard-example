"use client";

import { BarChart } from "@mui/x-charts/BarChart";

export default function GraficoDeBarras() {
  return (
    <div className="border m-4 shadow-lg flex items-center align-middle">
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
