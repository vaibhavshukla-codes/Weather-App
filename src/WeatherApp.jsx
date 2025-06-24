import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";
export default function WeatherApp(){
    const [weather, setWeather] = useState({
        city: "Lucknow",
        feelsLike: 37.95,
        humidity: 57,
        temp: 32.78,
        tempMax: 32.78,
        tempMin:32.78,
        weather: "few clouds"
    });

   let getWeather = (weather) =>{
      setWeather(weather);
   }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox getWeather={getWeather}/>
            <InfoBox info={weather}/>
        </div>
    );
}