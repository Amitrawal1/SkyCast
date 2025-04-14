import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import cloudy from "./assets/Weather/cloudy.jpg";
import rainy from "./assets/Weather/rainy.jpg";
import sunny from "./assets/Weather/sunny.jpg";
import hot from "./assets/Weather/hot.jpg";
import veryhot from "./assets/Weather/veryHot.jpg";
import cold from "./assets/Weather/cold.jpg";
import snow from "./assets/Weather/snow.jpg";
import storm from "./assets/Weather/storm.jpg";
import wind from "./assets/Weather/wind.jpg";

import { useState } from 'react';
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import Temp from './Temp';
import "./WeatherApp.css";
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Aligarh",
        feelsLike: 24.84,
        temp: 25.05,
        temMax: 26.06,
        temMin: 22.99,
        humidity: 45,
        weather: "haze",
        windSpeed: 3,
        date: 1744583508000,
        day: 'Monday'
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    let getBackgroundImage = () => {
        if (weatherInfo.weather.includes("storm")) {
          return `url(${storm})`;
        } else if (weatherInfo.windSpeed > 25) {
          return `url(${wind})`;
        } else if (weatherInfo.humidity > 80) {
          return `url(${rainy})`;
        } else if (weatherInfo.temp >= 40) {
          return `url(${veryhot})`;
        } else if (weatherInfo.temp >= 30 && weatherInfo.temp < 40) {
          return `url(${hot})`;
        } else if (weatherInfo.temp >= 20 && weatherInfo.temp < 30) {
          return `url(${sunny})`;
        } else if (weatherInfo.temp >= 10 && weatherInfo.temp < 20) {
          return `url(${cloudy})`;
        } else if (weatherInfo.temp >= 0 && weatherInfo.temp < 10) {
          return `url(${cold})`;
        } else if (weatherInfo.temp < 0) {
          return `url(${snow})`;
        } else {
          return `url(${sunny})`; // default
        }
      };

    return(
        <>
            <div className="all" >
            <header className="header">
                <h2>SkyCast</h2>
            </header>
            <div className="searchBox">
                    <SearchBox updateInfo={updateInfo} info={weatherInfo} /> 
                </div>
            <main style={{
                backgroundImage: getBackgroundImage()}}>
                <div className="headings">
                    <div className="heading">
                        <h1>Find accurate weather forecasts with</h1>
                        <h2>Discover Precise weather data at your fingertips!</h2>
                    </div>
                </div>
                <div className="data">
                    <InfoBox info={weatherInfo} />
                </div> 
                <footer>
                 <p>&copy;  SkyCast. All rights reserved.</p>
                  <h4>Terms of Use | Privacy Policy | Cookie Policy</h4>
            </footer>     
            </main>
            
        </div>
        </>  
    )}   
