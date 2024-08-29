export interface WeatherState {
    temperature: number | null;
    humidity: number | null;
    windSpeed: number | null;
    windDirection: number | null;
    rainIntensity: number | null;
    rainAccumulation: number | null;
    loading: boolean;
    error: string | null;
  }
  