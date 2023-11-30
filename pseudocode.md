The Project will be using webpack for bundling the source code.
weatherapi data will be used to show realtime weather.

- The user will input a city name in a input that sends the value to another function when a button is clicked.
- A function that takes the input value as parameter and forms a url along with the security key.
    - after formation of url the a fetch request is sent to the weatherapi which returns the weather data.
    - the function should be asynchronous and returns a object that have the needed data.
- Another function that receives the weather object and create a UI.

The UI should be quite simple for now and the codes written should be reuseable for other API available in weatherapi service.