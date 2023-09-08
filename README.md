# Weather App

A simple and intuitive weather application built using React. Fetch real-time weather data for any city in the world.

<p align='center'>
<img src="public/weather_app_logo_clear.png" alt="Weather App Screenshot" width="250px" height="250px" style="border-radius: 50%;">
</p>

## Features

- Search weather by city name.
- Display current weather details: temperature, humidity, wind speed, etc.
- 5-day weather forecast.
- Responsive design for desktop and mobile views.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ElDuke717/weather_app/weather-app.git
   ```
2. Navigate into the directory:
   ```bash
   cd weather-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### You will need an API key from [OpenWeatherMap](https://openweathermap.org/api) and geoDB cities database from [RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities) to run this application.

Add a .env file to the root directory of the project and add the following lines to it:

```bash
REACT_APP_OPENWEATHERMAP_API_KEY=<YOUR_API_KEY>
REACT_APP_GEO_API_KEY=<YOUR_API_KEY>
```

I will be updating the app soon to use the google maps api to get the latitude and longitude of the city searched for and then use that to get the weather data from the openweathermap api.

## Usage

1. Visit `http://localhost:3000` on your browser.
2. Enter a city name in the search bar.
3. View the current weather details and forecast.

## Technologies Used

- [React](https://reactjs.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- (Any other libraries or frameworks you might have used, e.g., Redux, Axios)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## License

This project is licensed under the MIT License.

---

```

```
