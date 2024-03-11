function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "t919a78cf1d84obb72b8a3dcb00e6c94";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handleSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);

searchCity("Paris");
