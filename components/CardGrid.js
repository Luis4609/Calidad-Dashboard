import InfoCard from "../components/Card";
import { Grid } from "@mui/material";

function CardGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <InfoCard
          title={32}
          description={"LLamadas recibidas"}
          previous={2}
          color={"success.main"}
        ></InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard
          title={32}
          description={"LLamadas recibidas"}
          previous={2}
          color={"info.main"}
        ></InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard
          title={32}
          description={"LLamadas recibidas"}
          previous={2}
          color={"error.main"}
        ></InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard
          title={32}
          description={"LLamadas recibidas"}
          previous={2}
          color={"success.main"}
        ></InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard
          title={32}
          description={"LLamadas recibidas"}
          previous={2}
          color={"info.main"}
        ></InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard
          title={32}
          description={"LLamadas recibidas"}
          previous={2}
          color={"error.main"}
        ></InfoCard>
      </Grid>
    </Grid>
  );
}

export default CardGrid;
