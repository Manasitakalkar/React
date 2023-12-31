import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function InfoBox({ info }) {
  const init_url =
    "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const cold =
    "https://images.unsplash.com/photo-1520889905494-a9ba556b0cf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const hot =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2F0aGVyfGVufDB8fDB8fHww";

  const rainy =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? rainy : info.temp > 15 ? hot : cold}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>
                <p>Temperature: {info.temp}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>Min temp: {info.tempMin}&deg;C</p>
                <p>Max temp: {info.tempMax}&deg;C</p>
                <p>
                  The weather can be described as {info.weather} and feels like:{" "}
                  {info.feelsLike}&deg;C
                </p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
