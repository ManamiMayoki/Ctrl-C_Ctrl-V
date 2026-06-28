const url="https://api.openweathermap.org/data/2.5/weather?";
const apiKey="2384797dde82a98f0c48c207d447b336";

async function getWeatherData(city){
    let finalUrl='${url}q=${city}&appid=${apiKey}';
    let weatherData=await fetch(finalUrl);
}