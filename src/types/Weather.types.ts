export type WeatherData = {
  nearest_area: Array<{
    areaName: Array<{ value: string }>;
    region: Array<{ value: string }>;
    country: Array<{ value: string }>;
  }>;
  current_condition: Array<{
    cloudcover: string;
    windspeedKmph: string;
    humidity: string;
    temp_C: string;
    FeelsLikeC: string;
    localObsDateTime: string;
    weatherCode: string;
  }>;
  weather: Array<{
    date: string;
    avgtempC: string;
    maxtempC: string;
    mintempC: string;
    sunHour: string;
    uvIndex: string;
    astronomy: Array<{
      moon_phase: string;
    }>;
  }>;
};

export type Weather = {
  cloudCover: string;
  windSpeed: string;
  humidity: string;
  temp: string;
  feelsLike: string;
  date: string;
  condition: string;
};
