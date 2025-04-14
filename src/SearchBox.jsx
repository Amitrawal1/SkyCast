import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Description } from '@mui/icons-material';
import "./SearchBox.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Temp from './Temp';

const cityList = [
  "Delhi", "Mumbai", "Chennai", "Kolkata", "Bengaluru", "Hyderabad",
  "Jaipur", "Lucknow", "Pune", "Ahmedabad", "Chandigarh", "Bhopal"
];



export default function SearchBox({updateInfo, info}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let wheatherInfo= async ()=>{
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            temMax: jsonResponse.main.temp_max,
            temMin: jsonResponse.main.temp_min,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
            windSpeed: jsonResponse.wind.speed,
            date: (jsonResponse.timezone + jsonResponse.dt)*1000
        };
        console.log(result);
        
        return(result);
      }catch(err){
        throw err;
      }
    }

    
  let handleChange = (evt)=>{
    setCity(evt.target.value);
  }

  let handleSubmit = async (evt) =>{
    try{
      evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await wheatherInfo();
    updateInfo(newInfo);
    }
    catch(err){
      setError(true);
    }
    
  }
  let handleSearchClick = async () => {
    try {
      if (city.trim() === "") return;
      let newInfo = await wheatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  }
  return(
    <>
    {/* <div className="searchBox">
      <div className="city">
        <h4>Delhi</h4>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="" id="city" value={city} onChange={handleChange} label="City Name"   required />
          <Button variant="outlined" size="medium" type="submit">Search</Button>
        </form>
      </div>
    </div> */}



    <div className="searchBoxs">
      <div className="city">
        <TextField id="city" label="City Name" variant="standard" value={city} onChange={handleChange} onKeyDown={(e) => {
      if (e.key === 'Enter') {handleSearchClick()}}}   /> 
      </div>
      <Temp info={info}/>
      <div className="btn" >
        <ArrowForwardIcon fontSize="90px" className='arw' size="medium" onClick={handleSearchClick}/>
      </div>
      
    </div>
    </>
  )
}