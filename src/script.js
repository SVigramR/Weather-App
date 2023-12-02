const securityKey = "37431f2d56f34c9eb9c01543232711"

async function getCurrentWeather(json, city) {
    const apiUrl = `https://api.weatherapi.com/v1/${json}.json?key=${securityKey}&q=${city}`
    const fetchCurrent = await fetch(apiUrl)
    const current = await fetchCurrent.json()
    return current
}

async function currentWeather() {
    const current = await getCurrentWeather('current','adsf5666')
    console.log(current)
    if (current.error) console.log(current.error.message);
}

currentWeather()