let SectionInfo = document.querySelector(".weather_info");
let weatherData = document.querySelector(".weather-data");
let weatherForecast = document.querySelector(".weather_forecast");
let weatherTem = document.querySelector(".weather_temperature");
let weatherFeel = document.querySelector(".weather_feelsLike");
let weatherHum = document.querySelector(".weather_humidity");
let weatherWind = document.querySelector(".weather_wind");
let weatherPre = document.querySelector(".weather_pressure");
let weatherIcon = document.querySelector(".weather_icon");
let cityName = document.querySelector(".weather_city");
let weatherSearch = document.querySelector(".weather_search");   


window.addEventListener("load", () =>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
  }
  else{
    alert("Geolocation not supported by this browser");
  }
});
function success(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  getWeatherByCoords(lat, lon);
}

function error(err){
  console.log(err);
  
  alert("Location access denied. PLease Search manually")
}

const getWeatherByCoords = async( lat, lon) =>{
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4166eb6722ef351747126531cf37702`; 

  try{
    const res = await fetch(weatherUrl);
    const data = await res.json();
    getWeatherData(data);
  }catch(error){
    alert("Location weather not found!!")
    console.log(error);
    
  }
}

let city = "skardu";

 weatherSearch.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = document.querySelector(".city_name");
  console.log(cityName.value);
  city = cityName.value;

  getWeatherData();

  cityName.value = "";
});

const getWeatherData = async() =>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4166eb6722ef351747126531cf37702`; 
    try{
        const res = await fetch(weatherUrl);
        const data = await res.json();
        console.log(data);

        const { main,name, weather, wind} = data;
        const weatherMain = weather[0].main;

        cityName.innerHTML = `${name}`;

        weatherForecast.innerHTML = weatherMain;

         if (weatherMain === "Clear"){
          document.body.style.background = " Linear-gradient(to bottom, #87CEEB, #FFD700)";
         }  
         else if(weatherMain === "Clouds"){
          document.body.style.background = " Linear-gradient(to bottom, #b0c4de, #778899)"; 
         }
         else if(weatherMain === "Rain"){
          document.body.style.background = " Linear-gradient(to bottom, #4b6cb7, #182848)"; 
         }
         else{
          document.body.style.background = " Linear-gradient(to bottom, #2c3e50, #3498db)";
          console.log("error", weatherMain);
           
         }
         

    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

    weatherTem.innerHTML = `${main.temp}&#176`;
        
    weatherFeel.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
    weatherHum.innerHTML = `${main.humidity}%`;
    weatherWind.innerHTML = `${wind.speed} m/s`;
    weatherPre.innerHTML = `${main.pressure} hPa`;
  } catch (error) {
    alert(" City Not  Found!!");
    console.log(error);
  }
};

document.body.addEventListener("load", getWeatherData());
    