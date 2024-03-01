import { transformData } from './transformData';
import { Weather } from '../../types';
import { describe, it, expect } from 'vitest';

describe('transformData', () => {
  it('should return the correct weather description', () => {
    const data: Weather = {
      nearest_area: [
        {
          areaName: [{ value: 'area' }],
          region: [{ value: 'region' }],
          country: [{ value: 'country' }],
        },
      ],
      current_condition: [
        {
          cloudcover: 'cloudcover',
          windspeedKmph: 'windspeedKmph',
          humidity: 'humidity',
          temp_C: 'temp_C',
          FeelsLikeC: 'FeelsLikeC',
          localObsDateTime: 'localObsDateTime',
          weatherCode: '113',
        },
      ],
      weather: [
        {
          date: 'date',
          avgtempC: 'avgtempC',
          maxtempC: 'maxtempC',
          mintempC: 'mintempC',
          sunHour: 'sunHour',
          uvIndex: 'uvIndex',
          astronomy: [{ moon_phase: 'moon_phase' }],
        },
        {
          date: 'date',
          avgtempC: 'avgtempC',
          maxtempC: 'maxtempC',
          mintempC: 'mintempC',
          sunHour: 'sunHour',
          uvIndex: 'uvIndex',
          astronomy: [{ moon_phase: 'moon_phase' }],
        },
        {
          date: 'date',
          avgtempC: 'avgtempC',
          maxtempC: 'maxtempC',
          mintempC: 'mintempC',
          sunHour: 'sunHour',
          uvIndex: 'uvIndex',
          astronomy: [{ moon_phase: 'moon_phase' }],
        },
      ],
    };
    expect(transformData(data)).toStrictEqual({
      location: {
        area: 'area',
        region: 'region',
        country: 'country',
      },
      data: {
        cloudCover: 'cloudcover',
        windSpeed: 'windspeedKmph',
        humidity: 'humidity',
        temp: 'temp_C',
        feelsLike: 'FeelsLikeC',
        date: 'localObsDateTime'.split(' ')[0].split('-').reverse().join('-'),
        condition: '☀️ Sunny',
      },
      today: {
        date: 'date'.split('-').reverse().join('-'),
        avgTemp: 'avgtempC',
        maxTemp: 'maxtempC',
        minTemp: 'mintempC',
        sunHour: 'sunHour',
        uvIndex: 'uvIndex',
        moonPhase: 'moon_phase',
      },
      tomorrow: {
        date: 'date'.split('-').reverse().join('-'),
        avgTemp: 'avgtempC',
        maxTemp: 'maxtempC',
        minTemp: 'mintempC',
        sunHour: 'sunHour',
        uvIndex: 'uvIndex',
        moonPhase: 'moon_phase',
      },
      afterTomorrow: {
        date: 'date'.split('-').reverse().join('-'),
        avgTemp: 'avgtempC',
        maxTemp: 'maxtempC',
        minTemp: 'mintempC',
        sunHour: 'sunHour',
        uvIndex: 'uvIndex',
        moonPhase: 'moon_phase',
      },
    });
  });
});
