import "./Temp.css"
import cloudy from "./assets/cloudy.png";
import rainy from "./assets/rainy.png";
import sunny from "./assets/sunny.png";
import hot from "./assets/hot.png";
import veryhot from "./assets/veryhot.png";
import cold from "./assets/cold.png";
import snow from "./assets/snow.png";
import storm from "./assets/storm.png";
import wind from "./assets/wind.png";
import SearchBox from "./SearchBox"

export default function Temp({info}){
    let imageUrl = sunny;

  if (info.weather.includes("storm")) {
    imageUrl = storm;
  } else if (info.windSpeed > 25) {
    imageUrl = wind;
  } else if (info.humidity > 80) {
    imageUrl = rainy;
  } else if (info.temp >= 40) {
    imageUrl = veryhot;
  } else if (info.temp >= 30 && info.temp < 40) {
    imageUrl = hot;
  } else if (info.temp >= 20 && info.temp < 30) {
    imageUrl = sunny;
  } else if (info.temp >= 10 && info.temp < 20) {
    imageUrl = cloudy;
  } else if (info.temp >= 0 && info.temp < 10) {
    imageUrl = cold;
  } else if (info.temp < 0) {
    imageUrl = snow;
  }

    return(
        <div className="temp">
            <div className="tempShow">
                <h1>{Math.round(info.temp)} &deg;C </h1>
            </div>
            
            <div className="images">
            <img src={imageUrl} alt="Weather Icon" className="weather-img" />
            </div>    
        </div>
    )
}