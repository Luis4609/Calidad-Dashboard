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
} from "chart.js";
import { Line } from "react-chartjs-2";

//Register
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LineChart() {
  const data = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    datasets: [
      {
        data: [0.1, 0.4, 0.2, 0.6, 0.3, 0.5, 0.1, 0.9],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68, 1)",
        fill: "start",
        backgroundColor: "rgba(47,97,68, 0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
  return <Line data={data} width={90} height={20} options={options}></Line>;
}

export default LineChart;
