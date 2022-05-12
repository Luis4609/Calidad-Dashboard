import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardHeader,
} from "@mui/material";

function InfoCard(props) {
  return (
    <Card sx={{ bgcolor: `${props.color}` }} variant="outlined">
      <CardActionArea>
        <CardHeader title={props.title}></CardHeader>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="body2">{props.previous} año anterior</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoCard;
