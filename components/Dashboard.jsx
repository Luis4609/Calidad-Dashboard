import dynamic from "next/dynamic";
import Title from "./Title";
import { Grid } from "@mui/material";

const MyLineChart = dynamic(() => import("./Charts/LineChart"), {
  ssr: false,
});
const MyBarChart = dynamic(() => import("./Charts/BarChart"), {
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Title>Line Chart</Title>
          <MyLineChart></MyLineChart>
        </Grid>
        <Grid item xs={6}>
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
