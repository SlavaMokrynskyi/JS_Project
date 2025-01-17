let isCityFind = true;
let city = "Rivne";
let weather = "";
let weather_icon = 0;
let tempreture = 0.0;
let real_feel = 0.0;
let sunset = 0;
let sunrise = 0;
let duration = 0.0;
let lat = 0;
let lon = 0;
let hourly_weather = {
    weather_9 : { weather : "",
        weather_icon : "",
        tempreture : 0.0,
        real_feel : 0.0,
        wind : 0.0
    },
    weather_12 : { weather : "",
        weather_icon : "",
        tempreture : 0.0,
        real_feel : 0.0,
        wind : 0.0
    },
    weather_15 : { weather : "",
        weather_icon : "",
        tempreture : 0.0,
        real_feel : 0.0,
        wind : 0.0
    },
    weather_18 : { weather : "",
        weather_icon : "",
        tempreture : 0.0,
        real_feel : 0.0,
        wind : 0.0
    },
    weather_21 : { weather : "",
        weather_icon : "",
        tempreture : 0.0,
        real_feel : 0.0,
        wind : 0.0
    }
}
const daily_weather = {
    weather_1 : {
        weekday : "",
        date : "",
        weather_icon : "",
        weather : "",
        tempreture : 0.0
    },
    weather_2 : {
        weekday : "",
        date : "",
        weather_icon : "",
        weather : "",
        tempreture : 0.0
    },
    weather_3 : {
        weekday : "",
        date : "",
        weather_icon : "",
        weather : "",
        tempreture : 0.0
    },
    weather_4 : {
        weekday : "",
        date : "",
        weather_icon : "",
        weather : "",
        tempreture : 0.0
    },
}

const images = {
    "01d": "image/clear_day.png",
    "01n": "image/clear_night.png",
    "02d": "image/cloudy_day.png",
    "02n": "image/cloudy_night.png",
    "03d": "image/clouds.png",
    "03n": "image/clouds.png",
    "04d": "image/broken_clouds.png",
    "04n": "image/broken_clouds.png",
    "09d": "image/shower_rain.png",
    "09n": "image/shower_rain.png",
    "10d": "image/rain_day.png",
    "10n": "image/rain_night.png",
    "11d": "image/thunderstorm.png",
    "11n": "image/thunderstorm.png",
    "13d": "image/snow.png",
    "13n": "image/snow.png",
    "50d": "image/mist.png",
    "50n": "image/mist.png",
}

const apiKey = '1f3190f0afdf67f2128446a32682f208';
const form = document.getElementById('form')
const button_today = document.getElementById('today');
const button_forecast = document.getElementById('forecast');
const button_get_started = document.getElementById('get_started'); 
const input = document.getElementById('input');
const page = document.getElementById('page');

async function getWeather(lat, lon) {
    const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=en`;
    const response = await fetch(apiUrlWeather);
    const data = await response.json();
    console.log(data)
    weather = data.weather[0].main;
    weather_icon = data.weather[0].icon;
    tempreture = data.main.temp - 273.15;
    real_feel = data.main.feels_like - 273.15;
    sunrise = data.sys.sunrise;
    sunset = data.sys.sunset;
    
}

async function getWeatherHourly(lat, lon)
{
    const apiUrlGeo = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(apiUrlGeo);
    const data = await response.json();
    hourly_weather.weather_9.weather = data.list[5].weather[0].main;
    hourly_weather.weather_9.weather_icon = data.list[5].weather[0].icon;
    hourly_weather.weather_9.tempreture = data.list[5].main.temp - 273.15;
    hourly_weather.weather_9.real_feel = data.list[5].main.feels_like - 273.15;
    hourly_weather.weather_9.wind = data.list[5].wind.speed;

    hourly_weather.weather_12.weather = data.list[6].weather[0].main;
    hourly_weather.weather_12.weather_icon = data.list[6].weather[0].icon;
    hourly_weather.weather_12.tempreture = data.list[6].main.temp - 273.15;
    hourly_weather.weather_12.real_feel = data.list[6].main.feels_like - 273.15;
    hourly_weather.weather_12.wind = data.list[6].wind.speed;

    hourly_weather.weather_15.weather = data.list[7].weather[0].main;
    hourly_weather.weather_15.weather_icon = data.list[7].weather[0].icon;
    hourly_weather.weather_15.tempreture = data.list[7].main.temp - 273.15;
    hourly_weather.weather_15.real_feel = data.list[7].main.feels_like - 273.15;
    hourly_weather.weather_15.wind = data.list[7].wind.speed;

    hourly_weather.weather_18.weather = data.list[8].weather[0].main;
    hourly_weather.weather_18.weather_icon = data.list[8].weather[0].icon;
    hourly_weather.weather_18.tempreture = data.list[8].main.temp - 273.15;
    hourly_weather.weather_18.real_feel = data.list[8].main.feels_like - 273.15;
    hourly_weather.weather_18.wind = data.list[8].wind.speed;

    hourly_weather.weather_21.weather = data.list[9].weather[0].main;
    hourly_weather.weather_21.weather_icon = data.list[9].weather[0].icon;
    hourly_weather.weather_21.tempreture = data.list[9].main.temp - 273.15;
    hourly_weather.weather_21.real_feel = data.list[9].main.feels_like - 273.15;
    hourly_weather.weather_21.wind = data.list[9].wind.speed;
    console.log(data)
    
}

async function getWeatherDaily(lat,lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    daily_weather.weather_1.date = data.list[3].dt;
    daily_weather.weather_1.weekday = data.list[3].dt;
    daily_weather.weather_1.weather = data.list[3].weather[0].main;
    daily_weather.weather_1.weather_icon = data.list[3].weather[0].icon;
    daily_weather.weather_1.tempreture = data.list[3].main.temp - 273.15;

    daily_weather.weather_2.date = data.list[15].dt;
    daily_weather.weather_2.weekday = data.list[15].dt;
    daily_weather.weather_2.weather = data.list[15].weather[0].main;
    daily_weather.weather_2.weather_icon = data.list[15].weather[0].icon;
    daily_weather.weather_2.tempreture = data.list[15].main.temp - 273.15;

    daily_weather.weather_3.date = data.list[27].dt;
    daily_weather.weather_3.weekday = data.list[27].dt;
    daily_weather.weather_3.weather = data.list[27].weather[0].main;
    daily_weather.weather_3.weather_icon = data.list[27].weather[0].icon;
    daily_weather.weather_3.tempreture = data.list[27].main.temp - 273.15;

    daily_weather.weather_4.date = data.list[39].dt;
    daily_weather.weather_4.weekday = data.list[39].dt;
    daily_weather.weather_4.weather = data.list[39].weather[0].main;
    daily_weather.weather_4.weather_icon = data.list[39].weather[0].icon;
    daily_weather.weather_4.tempreture = data.list[39].main.temp - 273.15;

    console.log()
    console.log()
    console.log()
    console.log()
}

async function getCity(city) {
    const apiUrlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${5}&appid=${apiKey}`;
    const response = await fetch(apiUrlGeo);
    const data = await response.json();
    console.log(data)
    if(!isFind(response) || data.length === 0)
    {
        isCityFind = false;
    }
    else
    {
        isCityFind = true;
        lat = data[0].lat;
        lon = data[0].lon;
    }  
}

form.addEventListener('submit', async function(event){
    event.preventDefault();
    await getCity(city);
    await getWeather(lat,lon);
    await getWeatherHourly(lat,lon);
    await getWeatherDaily(lat,lon);
    if(isCityFind == true)
    {
        city = input.value;
        input.placeholder = city;
        input.value = '';
        page.innerHTML = `
        <div class="h"><h2>Current Weather</h2>
        <h2>17.01.2025</h2></div>
        <div class="current_weather">
            <div class = "tempreture current_weather_div">
                <p><span id="tempreture">${Math.round(tempreture)}°C</span></p>
                <p><span class = "text_gray">Real Feel:<br>${Math.round(real_feel)}°C</span></p>
            </div>
                <div class="weather_image current_weather_div">
                <img id="current_weather_image" src="${images[weather_icon]}" alt="">
                <p id="text"><span class="text_gray">${weather}</span></p>
            </div>
            <div class="current_weather_div">
                <p class="text_gray">Sunrise: ${convertTime(sunrise)}</p>
                <p class="text_gray">Sunset: ${convertTime(sunset)}</p>
                <p class="text_gray">Duration: ${calculateDayLength(sunrise,sunset)}hr</p>
            </div>
        </div>
        <div class="h"><h2>Tommorow will be:</h2></div>
        <div class = "hourly_forecast">
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">09:00</p>
                <img src="${images[hourly_weather.weather_9.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_9.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_9.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_9.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">12:00</p>
                <img src="${images[hourly_weather.weather_12.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_12.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_12.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_12.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">15:00</p>
                <img src="${images[hourly_weather.weather_15.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_15.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_15.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_15.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div" >
                <p style = "font-size: 30px">18:00</p>
                <img src="${images[hourly_weather.weather_18.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_18.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_18.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_18.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">21:00</p>
                <img src="${images[hourly_weather.weather_21.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_21.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_21.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_21.wind} km/h</p>
            </div>
        </div>
        `
    }
    else if(input.value == '')
    {
        page.innerHTML = 
        ` 
        <div class="not_found_page">
            <img src="image/404-error.png" alt="">
            <h3>Oops, you wrote nothing</h3>
            <h3>Please enter location or press on "My weather"</h3>
            </div>
        </div>
        `
        input.value = '';
    }
    else
    {
        page.innerHTML = 
        ` 
        <div class="not_found_page">
            <img src="image/404-error.png" alt="">
            <h3>Oops, ${city} was not found</h3>
            <h3>Please enter another location or press on "My weather"</h3>
            </div>
        </div>
        `
        input.value = '';
    }
})

button_today.addEventListener('click', async function(){
    page.innerHTML = `
        <div class="h"><h2>Current Weather</h2>
        <h2>17.01.2025</h2></div>
        <div class="current_weather">
            <div class = "tempreture current_weather_div">
                <p><span id="tempreture">${Math.round(tempreture)}°C</span></p>
                <p><span class = "text_gray">Real Feel:<br>${Math.round(real_feel)}°C</span></p>
            </div>
                <div class="weather_image current_weather_div">
                <img id="current_weather_image" src="${images[weather_icon]}" alt="">
                <p id="text"><span class="text_gray">${weather}</span></p>
            </div>
            <div class="current_weather_div">
                <p class="text_gray">Sunrise: ${convertTime(sunrise)}</p>
                <p class="text_gray">Sunset: ${convertTime(sunset)}</p>
                <p class="text_gray">Duration: ${calculateDayLength(sunrise,sunset)}hr</p>
            </div>
        </div>
        <div class="h"><h2>Tommorow will be:</h2></div>
        <div class = "hourly_forecast">
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">09:00</p>
                <img src="${images[hourly_weather.weather_9.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_9.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_9.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_9.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">12:00</p>
                <img src="${images[hourly_weather.weather_12.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_12.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_12.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_12.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">15:00</p>
                <img src="${images[hourly_weather.weather_15.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_15.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_15.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_15.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div" >
                <p style = "font-size: 30px">18:00</p>
                <img src="${images[hourly_weather.weather_18.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_18.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_18.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_18.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">21:00</p>
                <img src="${images[hourly_weather.weather_21.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_21.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_21.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_21.wind} km/h</p>
            </div>
        </div>
        `
})

button_forecast.addEventListener('click',async function(){
    page.innerHTML = `
    <div class="h"><h2>Forecast</h2>
    <h2>17.01.2025</h2></div>
    <div class = "hourly_forecast">
    <div class="hourly_forecast_div">
      <p>${getDayOfWeek(daily_weather.weather_1.weekday)}</p>
      <p class="text_gray_hourly">${getCurrentDate(daily_weather.weather_1.date)}</p>
      <img src="${images[daily_weather.weather_1.weather_icon]}" alt="">
      <p class="text_gray_hourly">${daily_weather.weather_1.weather}</p>
      <p class="text_gray_hourly">${Math.round(daily_weather.weather_1.tempreture)}°C</p>
    </div>
    <div class="hourly_forecast_div">
      <p>${getDayOfWeek(daily_weather.weather_2.weekday)}</p>
      <p class="text_gray_hourly">${getCurrentDate(daily_weather.weather_2.date)}</p>
      <img src="${images[daily_weather.weather_2.weather_icon]}" alt="">
      <p class="text_gray_hourly">${daily_weather.weather_2.weather}</p>
      <p class="text_gray_hourly">${Math.round(daily_weather.weather_2.tempreture)}°C</p>
    </div>
    <div class="hourly_forecast_div">
      <p >${getDayOfWeek(daily_weather.weather_3.weekday)}</p>
      <p class="text_gray_hourly">${getCurrentDate(daily_weather.weather_3.date)}</p>
      <img src="${images[daily_weather.weather_3.weather_icon]}" alt="">
      <p class="text_gray_hourly">${daily_weather.weather_3.weather}</p>
      <p class="text_gray_hourly">${Math.round(daily_weather.weather_3.tempreture)}°C</p>
    </div>
    <div class="hourly_forecast_div" >
      <p>${getDayOfWeek(daily_weather.weather_4.weekday)}</p>
      <p class="text_gray_hourly">${getCurrentDate(daily_weather.weather_4.date)}</p>
      <img src="${images[daily_weather.weather_4.weather_icon]}" alt="">
      <p class="text_gray_hourly">${daily_weather.weather_4.weather}</p>
      <p class="text_gray_hourly">${Math.round(daily_weather.weather_4.tempreture)}°C</p>
    </div>
  </div>
    <div class="h"><h2>Tommorow will be:</h2></div>
    <div class = "hourly_forecast">
        <div class="hourly_forecast_div">
            <p style = "font-size: 30px">09:00</p>
            <img src="${images[hourly_weather.weather_9.weather_icon]}" alt="">
            <p class="text_gray_hourly">${hourly_weather.weather_9.weather}</p>
            <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_9.tempreture)}°C</p>
            <p class="text_gray_hourly">Wind:${hourly_weather.weather_9.wind} km/h</p>
        </div>
        <div class="hourly_forecast_div">
            <p style = "font-size: 30px">12:00</p>
            <img src="${images[hourly_weather.weather_12.weather_icon]}" alt="">
            <p class="text_gray_hourly">${hourly_weather.weather_12.weather}</p>
            <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_12.tempreture)}°C</p>
            <p class="text_gray_hourly">Wind:${hourly_weather.weather_12.wind} km/h</p>
        </div>
        <div class="hourly_forecast_div">
            <p style = "font-size: 30px">15:00</p>
            <img src="${images[hourly_weather.weather_15.weather_icon]}" alt="">
            <p class="text_gray_hourly">${hourly_weather.weather_15.weather}</p>
            <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_15.tempreture)}°C</p>
            <p class="text_gray_hourly">Wind:${hourly_weather.weather_15.wind} km/h</p>
        </div>
        <div class="hourly_forecast_div" >
            <p style = "font-size: 30px">18:00</p>
            <img src="${images[hourly_weather.weather_18.weather_icon]}" alt="">
            <p class="text_gray_hourly">${hourly_weather.weather_18.weather}</p>
            <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_18.tempreture)}°C</p>
            <p class="text_gray_hourly">Wind:${hourly_weather.weather_18.wind} km/h</p>
        </div>
        <div class="hourly_forecast_div">
            <p style = "font-size: 30px">21:00</p>
            <img src="${images[hourly_weather.weather_21.weather_icon]}" alt="">
            <p class="text_gray_hourly">${hourly_weather.weather_21.weather}</p>
            <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_21.tempreture)}°C</p>
            <p class="text_gray_hourly">Wind:${hourly_weather.weather_21.wind} km/h</p>
        </div>
    </div>
    `
})

button_get_started.addEventListener('click',async function(){
    await getCity(city)
    await getWeather(lat,lon);
    await getWeatherDaily(lat,lon);
    await getWeatherHourly(lat,lon);
    page.innerHTML = `
        <div class="h"><h2>Current Weather</h2>
        <h2>17.01.2025</h2></div>
        <div class="current_weather">
            <div class = "tempreture current_weather_div">
                <p><span id="tempreture">${Math.round(tempreture)}°C</span></p>
                <p><span class = "text_gray">Real Feel:<br>${Math.round(real_feel)}°C</span></p>
            </div>
                <div class="weather_image current_weather_div">
                <img id="current_weather_image" src="${images[weather_icon]}" alt="">
                <p id="text"><span class="text_gray">${weather}</span></p>
            </div>
            <div class="current_weather_div">
                <p class="text_gray">Sunrise: ${convertTime(sunrise)}</p>
                <p class="text_gray">Sunset: ${convertTime(sunset)}</p>
                <p class="text_gray">Duration: ${calculateDayLength(sunrise,sunset)}hr</p>
            </div>
        </div>
        <div class="h"><h2>Tommorow will be:</h2></div>
        <div class = "hourly_forecast">
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">09:00</p>
                <img src="${images[hourly_weather.weather_9.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_9.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_9.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_9.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">12:00</p>
                <img src="${images[hourly_weather.weather_12.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_12.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_12.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_12.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">15:00</p>
                <img src="${images[hourly_weather.weather_15.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_15.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_15.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_15.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div" >
                <p style = "font-size: 30px">18:00</p>
                <img src="${images[hourly_weather.weather_18.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_18.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_18.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_18.wind} km/h</p>
            </div>
            <div class="hourly_forecast_div">
                <p style = "font-size: 30px">21:00</p>
                <img src="${images[hourly_weather.weather_21.weather_icon]}" alt="">
                <p class="text_gray_hourly">${hourly_weather.weather_21.weather}</p>
                <p class="text_gray_hourly">Temp: ${Math.round(hourly_weather.weather_21.tempreture)}°C</p>
                <p class="text_gray_hourly">Wind:${hourly_weather.weather_21.wind} km/h</p>
            </div>
        </div>
        `
})

function convertTime(unix)
{
    const date = new Date(unix * 1000);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0'); 
    return `${hours}:${minutes}`;
}

function calculateDayLength(sunriseTime, sunsetTime) {
    const differenceInSeconds = sunsetTime - sunriseTime; 
    const hours = Math.floor(differenceInSeconds / 3600); 
    const minutes = Math.floor((differenceInSeconds % 3600) / 60); 
    return `${hours}:${minutes}`; 
}

function isFind(response)
{
    if(response.ok)
    {
        return true;
    }
    else{
        return false;
    }
}

function getCurrentDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); 
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()]; 
    const day = date.getDate().toString().padStart(2, '0'); 
    return `${month} ${day}`
}

function getDayOfWeek(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); 
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    return daysOfWeek[date.getDay()];
    
}

