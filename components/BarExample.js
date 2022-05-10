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

function BarChart() {
  const data = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Brutto",
        borderRadius: 30,
        data: [0.1, 0.4, 0.2, 0.6, 0.3, 0.5, 0.1, 0.9],
        backgroundColor: "rgba(32,214,155, 1)",
        barThickness: 10,
      },
      {
        label: "Netto",
        borderRadius: 20,
        data: [0.07, 0.3, 0.4, 0.15, 0.2, 0.4, 0.8, 0.9],
        backgroundColor: "rgba(1,98,255, 1)",
        barThickness: 10,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Sales Report",
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
        display: false,
      },
      yAxis: {
        max: 1,
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

export default BarChart;
