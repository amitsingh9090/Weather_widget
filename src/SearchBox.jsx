// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// export default function SearchBox({ updateinfo }) {
//     let [City, setCity] = useState("");
//     let [error, seterror] = useState(false);
//     const styles = { margin: 25 };
//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "6193a4f6756cff16d6224c9f9499c315";

//     let getWeatherInfo = async () => {
//         try {
//             let response = await fetch('${API_URL}?q=${City}&appid=${API_KEY}&units=metric');
//             let jsonResponse = await response.json();
//             // console.log(jsonResponse);
//             let result = {
//                 city: city,
//                 temp: jsonResponse.main.temp,
//                 tempMin: jsonResponse.main.temp_min,
//                 tempMax: jsonResponse.main.temp_max,
//                 humidity: jsonResponse.main.humidity,
//                 feelsLike: json.main.feels_like,
//                 weather: jsonResponse.weather[0].description
//             };
//             console.log(result);
//             return result;
//         }
//         catch (err) {
//             throw err;
//         }
//     }

//     let handleChange = (event) => {
//         setCity(event.target.value);
//     };

//     let handleSubmit = async (event) => {
//         try {
//             event.preventDefault();
//             console.log(City);
//             setCity("");
//             let newinfo = await getWeatherInfo();
//             updateinfo(newinfo)
//         }
//         catch (err) {
//             seterror(true);
//         }
//     }

//     return (
//         <div className="searchbox" style={styles}>
//             <form onSubmit={handleSubmit}>
//                 <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required />
//                 <br></br><br></br>
//                 <Button variant="contained" type="submit" >Search</Button>
//                 {error && <p style={{ color: "red" }}>No such place exists! </p>}
//             </form>
//         </div>
//     )
// }

//=============================

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateinfo }) {
    let [City, setCity] = useState("");
    let [error, seterror] = useState(false);
    const styles = { margin: 25 };
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6193a4f6756cff16d6224c9f9499c315";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            let result = {
                City: City,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let newinfo = await getWeatherInfo();
            updateinfo(newinfo);
            seterror(false);
            setCity("");
        } catch (err) {
            seterror(true);
        }
    };

    return (
        <div className="searchbox" style={styles}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={City}
                    onChange={handleChange} 
                    required 
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
