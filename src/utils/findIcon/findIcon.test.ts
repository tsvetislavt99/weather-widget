import { describe, it, expect } from 'vitest';
import { findIcon } from '.';

describe('findIcon', () => {
  it('should return the correct icon', () => {
    expect(findIcon('113')).toStrictEqual(['Sunny', '☀️']);
    expect(findIcon('116')).toStrictEqual(['PartlyCloudy', '⛅️']);
    expect(findIcon('119')).toStrictEqual(['Cloudy', '☁️']);
    expect(findIcon('122')).toStrictEqual(['VeryCloudy', '☁️']);
    expect(findIcon('143')).toStrictEqual(['Fog', '🌫']);
    expect(findIcon('176')).toStrictEqual(['LightShowers', '🌦']);
    expect(findIcon('179')).toStrictEqual(['LightSleetShowers', '🌧']);
    expect(findIcon('182')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('185')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('200')).toStrictEqual(['ThunderyShowers', '⛈']);
    expect(findIcon('227')).toStrictEqual(['LightSnow', '🌨']);
    expect(findIcon('230')).toStrictEqual(['HeavySnow', '❄️']);
    expect(findIcon('248')).toStrictEqual(['Fog', '🌫']);
    expect(findIcon('260')).toStrictEqual(['Fog', '🌫']);
    expect(findIcon('263')).toStrictEqual(['LightShowers', '🌦']);
    expect(findIcon('266')).toStrictEqual(['LightRain', '🌦']);
    expect(findIcon('281')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('284')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('293')).toStrictEqual(['LightRain', '🌦']);
    expect(findIcon('296')).toStrictEqual(['LightRain', '🌦']);
    expect(findIcon('299')).toStrictEqual(['HeavyShowers', '🌧']);
    expect(findIcon('302')).toStrictEqual(['HeavyRain', '🌧']);
    expect(findIcon('305')).toStrictEqual(['HeavyShowers', '🌧']);
    expect(findIcon('308')).toStrictEqual(['HeavyRain', '🌧']);
    expect(findIcon('311')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('314')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('317')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('320')).toStrictEqual(['LightSnow', '🌨']);
    expect(findIcon('323')).toStrictEqual(['LightSnowShowers', '🌨']);
    expect(findIcon('326')).toStrictEqual(['LightSnowShowers', '🌨']);
    expect(findIcon('329')).toStrictEqual(['HeavySnow', '❄️']);
    expect(findIcon('332')).toStrictEqual(['HeavySnow', '❄️']);
    expect(findIcon('335')).toStrictEqual(['HeavySnowShowers', '❄️']);
    expect(findIcon('338')).toStrictEqual(['HeavySnow', '❄️']);
    expect(findIcon('350')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('353')).toStrictEqual(['LightShowers', '🌦']);
    expect(findIcon('356')).toStrictEqual(['HeavyShowers', '🌧']);
    expect(findIcon('359')).toStrictEqual(['HeavyRain', '🌧']);
    expect(findIcon('362')).toStrictEqual(['LightSleetShowers', '🌧']);
    expect(findIcon('365')).toStrictEqual(['LightSleetShowers', '🌧']);
    expect(findIcon('368')).toStrictEqual(['LightSnowShowers', '🌨']);
    expect(findIcon('371')).toStrictEqual(['HeavySnowShowers', '❄️']);
    expect(findIcon('374')).toStrictEqual(['LightSleetShowers', '🌧']);
    expect(findIcon('377')).toStrictEqual(['LightSleet', '🌧']);
    expect(findIcon('386')).toStrictEqual(['ThunderyShowers', '⛈']);
    expect(findIcon('389')).toStrictEqual(['ThunderyHeavyRain', '🌩']);
    expect(findIcon('392')).toStrictEqual(['ThunderySnowShowers', '⛈']);
    expect(findIcon('395')).toStrictEqual(['HeavySnowShowers', '❄️']);
  });

  it('should return the correct icon for unknown weather', () => {
    expect(findIcon('999')).toStrictEqual(['Unknown', '✨']);
  });
});
