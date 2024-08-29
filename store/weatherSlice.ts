import { WeatherState } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: WeatherState = {
  temperature: null,
  humidity: null,
  windSpeed: null,
  windDirection: null,
  rainIntensity: null,
  rainAccumulation: null,
  loading: false,
  error: null,
};

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing");
}

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (localityId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
        {
          headers: {
            "X-Zomato-Api-Key": apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      return data.locality_weather_data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.temperature = action.payload.temperature;
          state.humidity = action.payload.humidity;
          state.windSpeed = action.payload.wind_speed;
          state.windDirection = action.payload.wind_direction;
          state.rainIntensity = action.payload.rain_intensity;
          state.rainAccumulation = action.payload.rain_accumulation;
        }
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export default weatherSlice.reducer;
