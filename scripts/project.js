// API KEY
const apiKey = 'b972ab33e7e440efa30215736232210';

document.querySelector('#fetchWeather').addEventListener('click', () => {
    const location = document.querySelector('#locationInput').value;
    getWeatherData(location);
});

function getWeatherData(location) {
    // Construct the WeatherAPI API URL
                    // http://api.weatherapi.com/v1/forecast.json?key=%20b972ab33e7e440efa30215736232210&q=83440      &days=1&aqi=no&alerts=no
    const apiUrlC = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=no&alerts=no`;

    fetch(apiUrl)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`Failed to fetch data. Response status: ${response.status}`);
            }
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            showError(error.message);
        });
    fetch(apiUrlC)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(`Failed to fetch data. Response status: ${response.status}`);
            }
        })
        .then(data => {
            displayCurrentData(data);
        })
        .catch(error => {
            showError(error.message);
        });
}

function displayCurrentData(data){
    document.querySelector('#errorC').textContent = '';
    document.querySelector('#temperatureC').textContent = `Temperature: ${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    document.querySelector('#descriptionC').textContent = `Conditions: ${data.current.condition.text}`;
    document.querySelector('#weatherIconC').src = data.current.condition.icon; 
}


function displayWeatherData(data) {
    document.querySelector('#location').textContent = `Location: ${data.location.name}, ${data.location.country}`;
    document.querySelector('#error').textContent = '';
    document.querySelector('#temperature').textContent = `Temperature: ${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    document.querySelector('#description').textContent = `Conditions: ${data.current.condition.text}`;
    document.querySelector('#weatherIcon').src = data.current.condition.icon;
}

function showError(message) {
    document.querySelector('#error').textContent = message;
    document.querySelector('#temperature').textContent = '';
    document.querySelector('#description').textContent = '';
    document.querySelector('#weatherIcon').src = '';
}
function showErrorC(message) {
    document.querySelector('#errorC').textContent = message;
    document.querySelector('#temperatureC').textContent = '';
    document.querySelector('#descriptionC').textContent = '';
    document.querySelector('#weatherIconC').src = '';
}
