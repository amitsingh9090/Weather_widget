// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';
// import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

// export default function InfoBox({ info }) {
//     const HOT_URL = "";
//     const COLD_URL = "";
//     const RAIN_URL = "";

//     return (
//         <div className="InfoBox">
//             <div className='cardContainer'>

//                 <Card sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         component="img"
//                         alt="green iguana"
//                         height="140"
//                         image={info.humidity > 80 ? RAIN_URL :  info.temp > 20 ? HOT_URL : COLD_URL }
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {info.City} {info.humidity > 80 ?<CloudySnowingIcon/>  :  info.temp > 20 ? <SunnyIcon/> :<AcUnitIcon/> }
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
//                             <p>Temperature = {info.temp}&deg; C</p>
//                             <p>Humidity = {info.humidity}</p>
//                             <p>Min Temp = {info.tempMin}</p>
//                             <p>Max Temp = {info.tempMax}</p>
//                             <p>The weather can be described as <i>{info.weather}</i> and  feels like = {info.feelslike}&deg;C</p>
//                         </Typography>
//                     </CardContent>

//                 </Card>
//             </div>
//         </div>

//     )
// } 
//==================================
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function InfoBox({ info }) {
    const HOT_URL = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"; // placeholder
    const COLD_URL = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"; // placeholder
    const RAIN_URL = "https://cdn.pixabay.com/photo/2016/11/29/04/17/rain-1869722_960_720.jpg"; // placeholder

    const imageUrl = info.humidity > 80 
        ? RAIN_URL 
        : info.temp > 20 
            ? HOT_URL 
            : COLD_URL;

    const weatherIcon = info.humidity > 80 
        ? <CloudySnowingIcon /> 
        : info.temp > 20 
            ? <WbSunnyIcon /> 
            : <AcUnitIcon />;

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="weather image"
                        height="140"
                        image={imageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.City} {weatherIcon}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature: {info.temp}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temp: {info.tempMin}°C</p>
                            <p>Max Temp: {info.tempMax}°C</p>
                            <p>Weather: <i>{info.weather}</i></p>
                            <p>Feels Like: {info.feelslike}°C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
