import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
//Register
ChartJs.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Event1", "Event2", "Event3", "Event4"],
  datasets: [
    {
      label: "Eventos",
      data: [300, 50, 100, 250],
      backgroundColor: [
        "rgba(32,244,155,0.2)",
        "rgba(32,34,155,0.2)",
        "rgba(32,214,32,0.2)",
        "rgba(32,214,76,0.2)",
      ],
      borderColor: [
        "rgba(32,244,155, 1)",
        "rgba(32,34,155, 1)",
        "rgba(32,214,32, 1)",
        "rgba(32,214,76, 1)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
};
export const options = {
  elements: {
    arc: {
      weight: 0.5,
      borderWidth: 3,
    },
  },
  cutout: 750,
};

function DoughnutExample() {
  return <Doughnut data={data} options={options} width={50} height={50}></Doughnut>;
}

export default DoughnutExample;
