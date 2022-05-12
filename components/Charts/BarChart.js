import { border, borderRadius } from "@mui/system";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { data } from "./Doughnut";

//Register
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function BarChart(props, { dataset }) {
  const labels = props.labels.map((label) => label);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Número de agentes",
        borderRadius: 40,
        data: [0, 2, 13, 10, 1],
        backgroundColor: "rgba(32,214,155, 1)",
        barThickness: 10,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: `${props.title}`,
          display: true,
          color: "#000",
          font: {
            size: 19,
          },
        },
      },
    },
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        max: 15,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
  };
  return <Bar data={data} height={100} options={options}></Bar>;
}

BarChart.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/dataCharts");
  const json = await res.json();
  return { dataset: json };
};

export default BarChart;
