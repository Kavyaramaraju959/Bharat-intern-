
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = '6e2b4318ff4b80cfc4a5b8d33a8490c2'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { name, weather, main, wind } = data;
            const description = weather[0].description;
            const temperature = main.temp;
            const windSpeed = wind.speed;

            weatherInfo.innerHTML = `
                <h2>${name}</h2>
                <p>Weather: ${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
}
