import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INI_URL = () =>{
        const hotImg =  "https://images.unsplash.com/photo-1687095951902-31ec078b1a68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
        const coldImg = "https://images.unsplash.com/photo-1641848945178-7f225d15d393?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
        const rainyImg = "https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";
        const defaultImg = "https://images.unsplash.com/photo-1678909542690-a2a567550dac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxlYXNhbnQlMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";

        if(info.humidity > 80) return rainyImg;
        else if(info.temp >= 30) return hotImg;
        else if(info.temp <= 15) return coldImg;
        else return defaultImg;
    }
    return (
        <div className="InfoBox">
            <div className="CardBox">
            <Card 
  sx={{ 
    width: 400,    
    height: 520,   
    margin: "auto", 
    boxShadow: 5     
  }}
>

      <CardActionArea>
        <CardMedia
          component="img"
          height="266" 
          image = {INI_URL()}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city.toUpperCase()+" "}
           {
             info.humidity > 80
             ? <ThunderstormIcon/>
             : info.temp >=30
             ? <SunnyIcon/>
             : <AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature = {info.temp}&deg;C
                        </Typography>
                        <br></br>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Humidity = {info.humidity}
                        </Typography>
                        <br></br>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Min Temp = {info.tempMin}&deg;C
                        </Typography>
                        <br></br>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Max Temp = {info.tempMax}&deg;C
                        </Typography>
                        <br></br>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    );
}