
const addInput = document.getElementById('add');
const cityInput = document.getElementById('cityInput');
const cityEl = document.getElementById('cityoutput');
const descriptionEl = document.getElementById('description');
const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const apiKey = '9644ae3696c7a6c01cef357a684cf9a2';

addInput.addEventListener('click', GetWeatherInformation);

function ToConvertCel(value) {
  return (value-273).toFixed(2);
}

function GetWeatherInformation() {
  let cityType = cityInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityType}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => setInfo(data))
    .catch((error) => console.error('Error fetching data:', error));
}

function setInfo(data) {
  let cityName = data["name"];
  let description = data["weather"][0]["description"];
  let temp = data["main"]["temp"];
  let wind = data["wind"]["speed"];

  cityEl.innerHTML = `City : ${cityName}`;
  descriptionEl.innerHTML = `Description : ${description}`;
  tempEl.innerHTML = `Temperature : ${ToConvertCel(temp)}`;
  windEl.innerHTML = `Wind Speed : ${wind} km/h`;
}
