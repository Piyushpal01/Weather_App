const apiKey = "bb42b9a4ae527bce8ea20f759e71cda8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('#searchBox');
const searchBtn = document.querySelector('#search-btn');
const weatherIcon = document.querySelector('#weather-icon');

async function currentWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('#weather').style.display = "none";
    } 
    else {
        const data = await response.json()
        console.log(data);
        document.querySelector('#weather-name').innerHTML = data.weather[0].main // data -> weather at 0th index pick main
        document.querySelector('#temp').innerHTML = Math.floor(data.main.temp) + "°C" 
        document.querySelector('#city').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr"
        
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "Images/clouds.png"
        }
        if(data.weather[0].main === "Clear"){
            weatherIcon.src = "Images/clear.png"
        }
        if(data.weather[0].main === "Rain"){
            weatherIcon.src = "Images/rain.png"
        }
        if(data.weather[0].main === "Mist"){
            weatherIcon.src = "Images/mist.png"
        }
        if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "Images/drizzle.png"
        }
        if(data.weather[0].main === "Snow"){
            weatherIcon.src = "Images/snow.png"
        }
        if(data.weather[0].main === "Haze"){
            weatherIcon.src = "Images/haze.png"
        }
        
        document.querySelector('.error').style.display = "none";
        document.querySelector('#weather').style.display = "block"; 
    }
}
searchBtn.addEventListener("click", () => {
    currentWeather(searchBox.value);
})
window.addEventListener("keydown", (e) => {  // connecting search btn and enter key
    if(e.keyCode === 13){
        currentWeather(searchBox.value)
    }
})
