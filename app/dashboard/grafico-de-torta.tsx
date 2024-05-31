"use client";

import { PieChart } from "@mui/x-charts";

export default function GraficoDeTorta({ datos }: { datos: any }) {
  return (
    <PieChart
      series={[
        {
          data: datos,
        },
      ]}
      width={400}
      height={200}
    />
  );
}
