import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
//Register
ChartJs.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Correcta", "Incompleta", "No solucionada"],
  datasets: [
    {
      label: "Eventos",
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(32,244,155,0.2)",
        "rgba(32,34,155,0.2)",
        "rgba(32,214,32,0.2)",
      ],
      borderColor: [
        "rgba(32,244,155, 1)",
        "rgba(32,34,155, 1)",
        "rgba(32,214,32, 1)",
      ],
      hoverOffset: 10,
      borderWidth: 2,
    },
  ],
};
export const options = {
  elements: {
    arc: {
      weight: 2,
      borderWidth: 100,
    },
  },
  cutout: 100,
};

function DoughnutExample() {
  return <Doughnut data={data} options={options}></Doughnut>;
}

export default DoughnutExample;
