const API_KEY = '36744aad0e06aed2f64cf1e5d38d70bb';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = weathers.querySelector("#weathers span:first-child");
        const city = weathers.querySelector("#weathers span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

const loc = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
