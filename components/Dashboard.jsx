import dynamic from "next/dynamic";
import { Grid } from "@mui/material";
import Title from "./Title";

const MyLineChart = dynamic(() => import("./Charts/ChartExample"), {
  ssr: false,
});
const MyBarChart = dynamic(() => import("./Charts/BarExample"), {
  ssr: false,
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
    <>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Title>Line Chart</Title>
          <MyLineChart></MyLineChart>
        </Grid>
        <Grid item xs={4}>
          <Title>Bar Chart</Title>
          <MyBarChart></MyBarChart>
        </Grid>
        <Grid item xs={4}>
          <Title>Donut Chart</Title>
          <MyDoughtnutChart></MyDoughtnutChart>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
