import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import { Container, Grid, Item } from "@mui/material";

const MyLineChart = dynamic(() => import("../components/ChartExample"), {
  ssr: false,
});
const MyBarChart = dynamic(() => import("../components/BarExample"), {
  ssr: false,
});
const MyDoughtnutChart = dynamic(() => import("../components/Doughnut"), {
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
      <NavBar></NavBar>
      <Grid container spacing={3} >
        <Grid item xs={8}>
          <h1>Line Chart</h1>
          <MyLineChart></MyLineChart>
        </Grid>
        <Grid item xs={4}>
          <h1>Bar Chart</h1>
          <MyBarChart></MyBarChart>
        </Grid>
        <Grid item xs={4}>
          <h1>Donut Chart</h1>
          <MyDoughtnutChart></MyDoughtnutChart>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
