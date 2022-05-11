import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Palette,
} from "@mui/material";

function InfoCard(props) {
  return (
    <Card sx={{ bgcolor: `${props.color}` }} variant="outlined">
      <CardActionArea>
        <Typography variant="h4" gutterBottom component="div">
          {props.title}
        </Typography>
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
