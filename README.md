# WeatherPulse 🌦️
Build weather application using Nextjs 14, TailwindCSS, Redux toolkit and API of [Weather Union](https://www.weatherunion.com/dashboard/#tag/locality-based/GET/get_locality_weather_data) By Zomato

## Features
- Search city/area: Search city to get current weather information.
- Quick Links : Provided a city quick links to get weather information faster.
- Weather information : Temperature, Humidity, Rain Accumulation, Rain Intensity, Wind Direction etc.

## How to run the project
 
1. Clone the repository

 ```bash
git clone https://github.com/devdignesh/weather-pulse.git
npm install
```

2. Create the `.env` and update the variables.

```bash
NEXT_PUBLIC_WEATHER_API_KEY=Your_API_Key
```

3. Start the development server

```bash
npm run dev
```
### Get weather data
API would be used to get weather data using locality. You can view the list of city and [locality IDs](https://b.zmtcdn.com/data/file_assets/65fa362da3aa560a92f0b8aeec0dfda31713163042.pdf)