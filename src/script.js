import './style.css';

const securityKey = "37431f2d56f34c9eb9c01543232711"

async function getWeather(json, city) {
    const apiUrl = `https://api.weatherapi.com/v1/${json}.json?key=${securityKey}&q=${city}`
    const fetchCurrent = await fetch(apiUrl)
    const current = await fetchCurrent.json()
    return current
}

async function modifyWeather() {
    const content = document.getElementById('content')
    const cityName = document.getElementById('searchInput').value
    const current = await getWeather('current', cityName)
    console.log(current)
    const weatherCard = document.getElementById('weatherCard')
    const errorCard = document.getElementById('errorCard')
    if (weatherCard) {
        content.removeChild(weatherCard)
    } else if (errorCard) {
        content.removeChild(errorCard)
    }
    if (!current.error) {
        createWeatherModal(current.location.name, current.location.country, current.location.lat, current.location.lon, current.location.localtime, current.current.condition.icon, current.current.temp_c, current.current.condition.text, current.current.humidity, current.current.cloud, current.current.precip_in, current.current.wind_kph, current.current.uv, current.current.vis_km)
    } else {
        errorModal(current.error.code, current.error.message)
    }
}

async function createWeatherModal(cityName, countryName, latitude, longitude, dateTime, conditionIcon, temperature, condition, humidity, cloud, precepi, wind, uvIndex, visibility) {
    const icon = document.createElement('img')
    icon.src = await conditionIcon

    const content = document.getElementById('content')
    const card = document.createElement('div')
    card.classList.add('weather-card')
    card.setAttribute('id', 'weatherCard')

    const upperCard = document.createElement('div')
    upperCard.classList.add('upper-card')
    upperCard.setAttribute('id', 'upperCard')
    const middleCard = document.createElement('div')
    middleCard.classList.add('middle-card')
    middleCard.setAttribute('id', 'middleCard')
    const lowerCard = document.createElement('div')
    lowerCard.classList.add('lower-card')
    lowerCard.setAttribute('id', 'lowerCard')

    const city = document.createElement('h1')
    city.textContent = `${cityName}, ${countryName}`
    const latAndLong = document.createElement('p')
    latAndLong.textContent = `lat: ${latitude}\xB0  lon: ${longitude}\xB0`
    const localTime = document.createElement('p')
    localTime.textContent = `${dateTime}`
    upperCard.append(city, latAndLong, localTime)

    const iconAndTempDiv = document.createElement('div')
    iconAndTempDiv.classList.add('icon-temp-holder')
    const celsius = document.createElement('p')
    celsius.textContent = `${temperature}\xB0C`
    iconAndTempDiv.append(icon, celsius)
    const conditionText = document.createElement('p')
    conditionText.textContent = condition
    middleCard.append(iconAndTempDiv, conditionText)

    const lowerHTML = `<div class="lower-box">
                            <h5>Humidity:</h5>
                            <p>${humidity}%</p>
                        </div>
                        <div class="lower-box">
                            <h5>Cloudiness:</h5>
                            <p>${cloud}%</p>
                        </div>
                        <div class="lower-box">
                            <h5>Precipitation:</h5>
                            <p>${precepi}"</p>
                        </div>
                        <div class="lower-box">
                            <h5>Wind Speed:</h5>
                            <p>${wind} km/h</p>
                        </div>
                        <div class="lower-box">
                            <h5>UV Index:</h5>
                            <p>${uvIndex}</p>
                        </div>
                        <div class="lower-box">
                            <h5>Visibility:</h5>
                            <p>${visibility} km/h</p>
                        </div>`
    lowerCard.innerHTML += lowerHTML
    
    card.append(upperCard, middleCard, lowerCard)
    content.append(card)
}

async function errorModal(code, message) {
    const content = document.getElementById('content')
    const errorDiv = document.createElement('p')
    errorDiv.classList.add('error-card')
    errorDiv.setAttribute('id', 'errorCard')
    switch (code) {
        case 1003:
            errorDiv.textContent = "No city name was entered"
            break;
        case 1006:
            errorDiv.textContent = "City name not found"
            break;
        default:
            errorDiv.textContent = message
            break;
    }
    content.append(errorDiv)
}

const buttonSearch = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
buttonSearch.addEventListener('click', modifyWeather)
searchInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonSearch.click()
    }
})