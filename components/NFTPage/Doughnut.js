import React from "react";
import { Doughnut } from "react-chartjs-2";
// import {Doughnut, ArcElement} from 'chart.js'
import "chart.js/auto";
export default function Doughnut1({ label }) {
  const data = {
    labels: label?.map((x) => x.label),
    datasets: [
      {
        label: "# of Votes",
        data: label?.map((x) => x.percentage),
        backgroundColor: ["#BF449C", "#54B5BB", "#FFA06A"],
        borderColor: ["#BF449C", "#54B5BB", "#FFA06A"],
        borderWidth: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
        title: () => null,
      },
    },
  };
  return <Doughnut options={options} data={data} />;
}
