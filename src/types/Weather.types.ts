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

export interface TransformedWeatherData {
  location: {
    area: string;
    region: string;
    country: string;
  };
  data: {
    cloudCover: string;
    windSpeed: string;
    humidity: string;
    temp: string;
    feelsLike: string;
    date: string;
    condition: string;
  };
  today: {
    date: string;
    avgTemp: string;
    maxTemp: string;
    minTemp: string;
    sunHour: string;
    uvIndex: string;
    moonPhase: string;
  };
  tomorrow: {
    date: string;
    avgTemp: string;
    maxTemp: string;
    minTemp: string;
    sunHour: string;
    uvIndex: string;
    moonPhase: string;
  };
  afterTomorrow: {
    date: string;
    avgTemp: string;
    maxTemp: string;
    minTemp: string;
    sunHour: string;
    uvIndex: string;
    moonPhase: string;
  };
}
