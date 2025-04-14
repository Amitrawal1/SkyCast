
import './InfoBox.css'
export default function InfoBox({info}){
    let img_url = "";
    const dateObj = info.date ? new Date(info.date) : new Date();
    const dateString = dateObj.toLocaleDateString('en-GB'); 
    const dayString = dateObj.toLocaleDateString('en-GB', { weekday: 'long' });
    console.log(info.date);
    return(
        <>
        <div className="box">        
            <div className="data1">
                <h2>MORE DETAILS!</h2>
                <b></b>
                <h3>Wind Speed: <b>{info.windSpeed}</b></h3>
                <h3>Humidity: <b>{info.humidity}</b> </h3>
                <h3>Feels like: <b> {info.feelsLike}</b> </h3>
                <h3>Description: <b>{info.weather}</b></h3>

            </div>
            <div className="data2">
                <h1>{info.city}</h1>
                <h2> {dayString}/{dateString}</h2> 
                <h3>Max <b>{info.temMax}</b></h3>
                <h3>Min <b>{info.temMin}</b></h3>
            </div>
        </div>
        {/* image = {info.humidity>80? RAIN_url : info.temp > 15 ? HOT_url : COLD_url} */}
        
        </>
    )
}
