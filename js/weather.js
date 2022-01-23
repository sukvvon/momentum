const API_KEY = "f456b5bbd59aa4d45eaeee9771b8bb07";

const onGekOK = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} ℃ / ${data.weather[0].main}`;
    });
};
const onGekError = () => {
  alert("I can not find your location");
};

navigator.geolocation.getCurrentPosition(onGekOK, onGekError);
