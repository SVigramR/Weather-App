The Project will be using webpack for bundling the source code.
weatherapi data will be used to show realtime weather.

- The user will input a city name in a input that sends the value to another function when a button is clicked.
- A function that takes the input value as parameter and forms a url along with the security key.
    - after formation of url the a fetch request is sent to the weatherapi which returns the weather data.
    - the function should be asynchronous and returns a object that have the needed data.
- Another function that receives the weather object and create a UI.

The UI should be quite simple for now and the codes written should be reuseable for other API available in weatherapi service.

Color Palette:
161A30
31304D
B6BBC4
F0ECE5

The weather UI card(divided into three parts):
- Name of the city with country, lat and lon, localtime
- the card must have the temperature in celsius with condition icon and text.
- humidity, cloudiness, percipitation, wind speed, UV index, visibility




{
    "location": {
        "name": "Chennai",
        "region": "Tamil Nadu",
        "country": "India",
        "lat": 13.08,
        "lon": 80.28,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1701609359,
        "localtime": "2023-12-03 18:45"
    },
    "current": {
        "last_updated_epoch": 1701608400,
        "last_updated": "2023-12-03 18:30",
        "temp_c": 25,
        "temp_f": 77,
        "is_day": 0,
        "condition": {
            "text": "Moderate rain",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/302.png",
            "code": 1189
        },
        "wind_mph": 6.9,
        "wind_kph": 11.2,
        "wind_degree": 330,
        "wind_dir": "NNW",
        "pressure_mb": 1005,
        "pressure_in": 29.68,
        "precip_mm": 12.26,
        "precip_in": 0.48,
        "humidity": 94,
        "cloud": 100,
        "feelslike_c": 28.1,
        "feelslike_f": 82.6,
        "vis_km": 1,
        "vis_miles": 0,
        "uv": 1,
        "gust_mph": 44,
        "gust_kph": 70.8
    }
}