import dynamic from "next/dynamic";
import Title from "./Title";
import { Grid } from "@mui/material";

const MyLineChart = dynamic(() => import("./Charts/LineChart"), {
  ssr: false,
});
const MyBarChart = dynamic(() => import("./Charts/BarChart"), {
  ssr: true,
});
const MyDoughtnutChart = dynamic(() => import("./Charts/Doughnut"), {
  ssr: false,
});

function Dashboard() {
  //Get data from API
  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/getData")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Title>Line Chart</Title>
        <MyLineChart></MyLineChart>
      </Grid>
      <Grid item xs={6}>
        <Title>Auditorías - Evaluaciones por Agente ( Abril 2022)</Title>
        <MyBarChart
          title=""
          labels={["0 - 3.5", "3.5 - 4", "4 - 4.5", "4.5 - 5", "5"]}
          dataset={[
            {
              label: "Número de agentes",
              borderRadius: 40,
              data: [0, 2, 13, 10, 1],
              backgroundColor: "rgba(32,214,155, 1)",
              barThickness: 10,
            },
          ]}
        ></MyBarChart>
      </Grid>
      <Grid item xs={6}>
        <Title>Auditorías - Valores medios ( Abril 2022)</Title>
        <MyBarChart
          title=""
          labels={["0 - 3.5", "3.5 - 4", "4 - 4.5", "4.5 - 5", "5"]}
        ></MyBarChart>
      </Grid>
      <Grid item xs={4}>
        <Title>Donut Chart</Title>
        <MyDoughtnutChart></MyDoughtnutChart>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
