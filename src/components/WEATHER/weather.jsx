import React, {useState, useEffect} from 'react';
import './weathers.css';
import WeatherCard from './weatherCard';
import ReactAnimatedWeather from 'react-animated-weather';
import {Line} from 'react-chartjs-2';
 
const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 80,
  animate: true
};

const gr ={labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Rainfall', 
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(100,50,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 40, 30, 10, 60, 74, 62, 21]
      } 
    ]
};


function Greeting(props) {
  const t = props.temp;
  var temp="";
  if(t > 24){
    temp = 'CLEAR_DAY'
  }
  else if(t < 24 && t > 15 ){
    temp = 'RAIN'
  }
  else if(t < 15 && t > 10){
    temp = 'ARTLY_CLOUDY_DAY'
  }
  else{
    temp = 'SNOW'
  }

  return (<ReactAnimatedWeather
        icon= {temp}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />);
}


const Weather = (props) => {
    const [state,setState]=useState("india");
    const [apilink, setapilink] = useState("http://api.weatherapi.com/v1/current.json?key=2e8646cfe25549f682a163600211210&q=India&aqi=yes");
    const [time, settime] = useState(0);
    const [temp_MIN, settemp_MIN] = useState(0);
    const [temp_MAX, settemp_MAX] = useState(0);
    const [country, setcountry] = useState(props.place);
    const [wind, setwind] = useState(0);
    const [pressure, setpressure] = useState(0);
    const [humidity, sethumidity] = useState(0);
    console.log(country);
    const handlelink=()=> {
      const str1 = "http://api.weatherapi.com/v1/current.json?key=2e8646cfe25549f682a163600211210&q=India";
      const str2 = "&aqi=yes";
      const res = str1.concat(str2);
      console.log(res);
      return(res);
    }
    
    useEffect(() => {
        const url = {apilink};
        const fetchData = async () => {
          try {
              const url=`http://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=53e5384c150f724c16aea7343276b224`;
              // const url1=`http://api.openweathermap.org/data/2.5/forecast?q=pune&appid=53e5384c150f724c16aea7343276b224`;
              // const response1=await fetch(url1);
              // const data1=await response1.json();
              // console.log(data1);
              const response=await fetch(url);
              const data=await response.json();
              settemp_MIN(data.main.temp_min);
              settemp_MAX(data.main.temp_max);
              setcountry(data.name);
              settime(data.timezone);
              sethumidity(data.main.humidity);
              setwind(data.wind.speed);
              setpressure(data.main.pressure);
          } catch (error) {
              console.log("error", error);
          }
      };
        fetchData();
    }, []);
// https://dataservice.accuweather.com/forecasts/v1/daily/5day/190208?apikey=Q35oUEWikjRCTG8GHm3yfyyrn4kzivrd&details=true&metric=true
    return (
        <div className="weather-container">
        <fetching_data />
        <p className="heading"><Greeting temp={temp_MIN} /><span classname="heading">{temp_MIN}</span><span className="cel"><sup>o<sub>F</sub></sup></span>/{temp_MAX}<span className="cel"><sup>o<sub>F</sub></sup></span><span className="property"><p>  </p>Humidity: {humidity}<br /> Wind: {wind} KMPH<br /> Pressure: {pressure}</span></p>
        <center>
        <div className="graph-container">
        <Line
          data={gr}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:2
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      </center>
        <div className="weather-row">
          <div className="weather-grid">
          <WeatherCard  icon='WIND' temp="30" max="32" min="25" weath="Windy" />
          <WeatherCard  icon='RAIN'  temp="25" max="28" min="22" weath="Rainy" />
          <WeatherCard  icon='PARTLY_CLOUDY_DAY' temp="31" max="33" min="26" weath="Cloudy" />
          <WeatherCard  icon='SLEET'  temp="20" max="26" min="19" weath="Rainy" />
          <WeatherCard  icon='CLEAR_NIGHT' temp="22" max="24" min="20" weath="Clear" />
          <WeatherCard  icon='PARTLY_CLOUDY_NIGHT' temp="20" max="21" min="18" weath="Cloudy" />
          <WeatherCard  icon='RAIN ' tenp="25" max="25" min="23" weath="Rainy" />
        </div>
      </div>
    </div>
  );
}
export default Weather;  
