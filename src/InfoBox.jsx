import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function InfoBox({ info }) {
    const HOT_URL = "";
    const COLD_URL = "";
    const RAIN_URL = "";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={info.humidity > 80 ? RAIN_URL :  info.temp > 20 ? HOT_URL : COLD_URL }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.City} {info.humidity > 80 ?<CloudySnowingIcon/>  :  info.temp > 20 ? <SunnyIcon/> :<AcUnitIcon/> }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                            <p>Temperature = {info.temp}&deg; C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}</p>
                            <p>Max Temp = {info.tempMax}</p>
                            <p>The weather can be described as <i>{info.weather}</i> and  feels like = {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>

    )
} 