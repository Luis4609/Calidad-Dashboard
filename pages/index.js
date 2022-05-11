import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import CardGrid from "../components/CardGrid";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Layout>
        <Typography variant="h2">Dashboard</Typography>
        <Dashboard></Dashboard>
        <CardGrid></CardGrid>
      </Layout>
    </>
  );
}
