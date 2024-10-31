'use client'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "@/components/charts/Piechart";

Chart.register(CategoryScale);

export default function page() {
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Orange', 'Blue'],
    datasets: [
      {
        label: "Users Gained ",
        data: [55, 23, 96],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })
  return (
    <div>
      <PieChart chartData={chartData}/>
    </div>
  )
}
