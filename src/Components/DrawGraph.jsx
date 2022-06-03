import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DrawGraph = ({ timeseriesdaily }) => {
  if (timeseriesdaily === undefined) {
    return false
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const label = Object.keys(timeseriesdaily);
  const latest20labels = label.slice(0, 100).reverse();

  const pricedata = [];
  for (let i = 0; i < latest20labels.length; i++) {
    pricedata.push(timeseriesdaily[latest20labels[i]]["4. close"]);
  }

  const data = {
    labels: latest20labels,
    datasets: [
      {
        label: "Daily closing price",
        data: pricedata,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
      <br />
      <br />
    </>
  );
};

export default DrawGraph;
