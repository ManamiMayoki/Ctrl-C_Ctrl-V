const startbtn=document.querySelector(".start");
const search=document.querySelector("#inputfield");
const searchIcon=document.querySelector("#searchIcon");
const desc=document.querySelector("#description");
const temp=document.querySelector("#temp");
const city=document.querySelector("city");
const wind=document.querySelector("#windSpeed");
const humidity=document.querySelector("#humidity");
const goHome=document.querySelector(".homwbtn");
const icon=document.querySelector("#icon");
const mainBox1=document.querySelector(".mainBox1");
const mainBox2=document.querySelector(".mainBox2");
const mainBox3=document.querySelector(".mainBox3");


const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "2384797dde82a98f0c48c207d447b336";

async function getWeatherData(city){
    let finalUrl = `${url}q=${city}&appid=${apiKey}`;
    let response=await fetch(finalUrl);
    let weatherData = await response.json();
    console.log(weatherData);
}