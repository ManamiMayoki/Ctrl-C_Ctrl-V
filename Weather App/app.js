const startbtn = document.querySelector(".startbtn");
const search = document.querySelector("#inputField");
const searchIcon = document.querySelector("#searchIcon");
const desc = document.querySelector("#description");
const temp = document.querySelector("#temp");
const cityName = document.querySelector("#city");
const wind = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidity");
const goHome = document.querySelector(".homebtn");
const icon = document.querySelector("#icon");
const mainBox1 = document.querySelector(".mainBox1");
const mainBox2 = document.querySelector(".mainBox2");
const mainBox3 = document.querySelector(".mainBox3");

startbtn.addEventListener("click", () => {
  mainBox1.classList.add("inactive");
  mainBox2.classList.remove("inactive");
});

const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "2384797dde82a98f0c48c207d447b336";

async function getWeatherData(city) {
  let finalUrl = `${url}q=${city}&appid=${apiKey}&units=metric`;
  let response = await fetch(finalUrl);
  let weatherData = await response.json();
  console.log(weatherData);

  if (weatherData.cod == 404) {
    mainBox2.classList.add("inactive");
    mainBox3.classList.remove("inactive");
  }

  desc.innerHTML=weatherData.weather[0].description;
  temp.innerHTML=Map.round(weatherData.main.temp-273.15)+"°C";
  cityName.innerHTML=weatherData.name;
  wind.innerHTML=weatherData.wind.speed+"km/h";
  humidity.innerHTML=weatherData.main.humidity+"%";
}

searchIcon.addEventListener("click",()=>{
    getWeatherData(search.value);
})

search.addEventListener("keypress",(e)=>{
    if(e.key==Enter){
        getWeatherData(search.value);
    }
})

goHome.addEventListener("click",()=>{
    mainBox3.classList.add("inactive");
    mainBox1.classList.remove("inactive");
})
