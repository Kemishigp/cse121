// API KEY
const apiKey = 'b972ab33e7e440efa30215736232210';

document.querySelector('#fetchWeather').addEventListener('click', () => {
    const location = document.querySelector('#locationInput').value;
    getWeatherData(location);
});

function getWeatherData(location) {
    // Construct the WeatherAPI API URL
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=no&alerts=no`;

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
}

function displayWeatherData(data) {
    document.querySelector('#error').textContent = '';
    document.querySelector('#temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
    document.querySelector('#description').textContent = `Conditions: ${data.current.condition.text}`;
    document.querySelector('#weatherIcon').src = data.current.condition.icon;
}

function showError(message) {
    document.querySelector('#error').textContent = message;
    document.querySelector('#temperature').textContent = '';
    document.querySelector('#description').textContent = '';
    document.querySelector('#weatherIcon').src = '';
}
