import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let[weatherInfo, setWeatherInfo] = useState({
        city:"pune",
        feelsLike: 22.45,
        temp: 25,
        tempMax: 25,
        tempMin: 24,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather Application</h3>
            <SearchBox  updateInfo={updateInfo}/>
            <br/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}