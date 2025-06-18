import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo,setwetherInfo]=useState({
        City: "Delhi",
        feelslike: 24.25,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 40.05,
        humidity: 47,
        weather: "haze"
    })

    let updateinfo=(newinfo)=>{
        setwetherInfo(newinfo);

    }

    return (
        <div>
            <h2>Weather App by Delta</h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}