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

function changeIcon(weatherMain){
    let icons={
        Clouds: "Images/clouds.png",
        Rain: "Images/rain.png",
        Mist: "Images/mist.png",
        Haze: "Images/haze.png",
        Snow: "Images/snow.png",
        Clear: "Images/clear.png"
    };
    icon.src=icons[weatherMain] || "/Images/clear.png";
}

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

    desc.innerHTML="description";
    temp.innerHTML="0°C";
    cityName.innerHTML="New York";
    wind.innerHTML="0km/h";
    humidity.innerHTML="0%";
    search.value="";
    icon.src="/Images/clear.png";

    return;
  }

  desc.innerHTML=weatherData.weather[0].description;
  temp.innerHTML=Math.round(weatherData.main.temp-273.15)+"°C";
  cityName.innerHTML=weatherData.name;
  wind.innerHTML=weatherData.wind.speed+"km/h";
  humidity.innerHTML=weatherData.main.humidity+"%";

  changeIcon(weatherData.weather[0].main);
}

searchIcon.addEventListener("click",()=>{
    getWeatherData(search.value);
})

search.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        getWeatherData(search.value);
    }
})

goHome.addEventListener("click",()=>{
    mainBox3.classList.add("inactive");
    mainBox1.classList.remove("inactive");
})
