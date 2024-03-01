import { Weather } from '../../types';
import { findIcon } from '../findIcon';

export const transformData = (weather: Weather) => {
  //location
  const nearestLocation = weather.nearest_area[0];
  const area = nearestLocation.areaName[0].value;
  const region = nearestLocation.region[0].value;
  const country = nearestLocation.country[0].value;

  //data
  const currCondition = weather.current_condition[0];
  const cloudCover = currCondition.cloudcover;
  const windSpeed = currCondition.windspeedKmph;
  const humidity = currCondition.humidity;
  const temp = currCondition.temp_C;
  const feelsLike = currCondition.FeelsLikeC;
  const date = currCondition.localObsDateTime
    .split(' ')[0]
    .split('-')
    .reverse()
    .join('-');
  const weatherCode = currCondition.weatherCode;
  const description = findIcon(weatherCode);
  const icon = description[1];
  const conditionArr = description[0].match(/[A-Z][a-z]+/g);
  const condition = icon + ' ' + conditionArr?.join(' ');

  //today
  const today = weather.weather[0];
  const todayDate = today.date.split('-').reverse().join('-');
  const todayAvgTemp = today.avgtempC;
  const todayMaxTemp = today.maxtempC;
  const todayMinTemp = today.mintempC;
  const todaySunHour = today.sunHour;
  const todayUvIndex = today.uvIndex;
  const todayMoonPhase = today.astronomy[0].moon_phase;

  //tomorrow
  const tomorrow = weather.weather[1];
  const tomorrowDate = tomorrow.date.split('-').reverse().join('-');
  const tomorrowAvgTemp = tomorrow.avgtempC;
  const tomorrowMaxTemp = tomorrow.maxtempC;
  const tomorrowMinTemp = tomorrow.mintempC;
  const tomorrowSunHour = tomorrow.sunHour;
  const tomorrowUvIndex = tomorrow.uvIndex;
  const tomorrowMoonPhase = tomorrow.astronomy[0].moon_phase;

  //after tomorrow
  const afterTomorrow = weather.weather[2];
  const afterTomorrowDate = afterTomorrow.date.split('-').reverse().join('-');
  const afterTomorrowAvgTemp = afterTomorrow.avgtempC;
  const afterTomorrowMaxTemp = afterTomorrow.maxtempC;
  const afterTomorrowMinTemp = afterTomorrow.mintempC;
  const afterTomorrowSunHour = afterTomorrow.sunHour;
  const afterTomorrowUvIndex = afterTomorrow.uvIndex;
  const afterTomorrowMoonPhase = afterTomorrow.astronomy[0].moon_phase;

  return {
    location: {
      area,
      region,
      country,
    },
    data: {
      cloudCover,
      windSpeed,
      humidity,
      temp,
      feelsLike,
      date,
      condition,
    },
    today: {
      date: todayDate,
      avgTemp: todayAvgTemp,
      maxTemp: todayMaxTemp,
      minTemp: todayMinTemp,
      sunHour: todaySunHour,
      uvIndex: todayUvIndex,
      moonPhase: todayMoonPhase,
    },
    tomorrow: {
      date: tomorrowDate,
      avgTemp: tomorrowAvgTemp,
      maxTemp: tomorrowMaxTemp,
      minTemp: tomorrowMinTemp,
      sunHour: tomorrowSunHour,
      uvIndex: tomorrowUvIndex,
      moonPhase: tomorrowMoonPhase,
    },
    afterTomorrow: {
      date: afterTomorrowDate,
      avgTemp: afterTomorrowAvgTemp,
      maxTemp: afterTomorrowMaxTemp,
      minTemp: afterTomorrowMinTemp,
      sunHour: afterTomorrowSunHour,
      uvIndex: afterTomorrowUvIndex,
      moonPhase: afterTomorrowMoonPhase,
    },
  };
};
