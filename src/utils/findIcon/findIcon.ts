import { findWeatherDescriptionByCode } from '../findWeatherDescriptionByCode';

export const findIcon = (code: string) => {
  const weatherDescription = findWeatherDescriptionByCode(code);
  const WEATHER_SYMBOL = {
    Unknown: '✨',
    Cloudy: '☁️',
    Fog: '🌫',
    HeavyRain: '🌧',
    HeavyShowers: '🌧',
    HeavySnow: '❄️',
    HeavySnowShowers: '❄️',
    LightRain: '🌦',
    LightShowers: '🌦',
    LightSleet: '🌧',
    LightSleetShowers: '🌧',
    LightSnow: '🌨',
    LightSnowShowers: '🌨',
    PartlyCloudy: '⛅️',
    Sunny: '☀️',
    ThunderyHeavyRain: '🌩',
    ThunderyShowers: '⛈',
    ThunderySnowShowers: '⛈',
    VeryCloudy: '☁️',
  };

  if (!weatherDescription) {
    return ['Unknown', '✨'];
  }

  return Object.entries(WEATHER_SYMBOL).find(
    (el) => el[0] === weatherDescription[1],
  );
};
