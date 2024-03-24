import { useEffect, useState } from 'react';
import { Card } from '../src/components/Card';
import { LoadingCard } from '../src/components/Card/LoadingCard';
import Input from '../src/components/Input/Input';
import RegionTitle from '../src/components/RegionTitle/RegionTitle';
import { transformData } from '../src/utils/transormData';

import { TransformedWeatherData } from '../src/types';

import './App.css';
import '../src/index.css';

export default function App() {
  const [location, setLocation] = useState('Moscow');
  const [currLocation, setCurrLocation] = useState<any>();
  const [weather, setWeather] = useState<TransformedWeatherData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!currLocation && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
    console.log(currLocation, `${currLocation?.lat},${currLocation?.long}`);
    fetch(
      `https://wttr.in/${
        currLocation ? `${currLocation.lat},${currLocation.long}` : location
      }?format=j1`,
    )
      .then((res) => res.json())
      .then((result) => {
        const transformedData = transformData(result);
        document.title = transformedData.data.condition;
        setWeather(transformedData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [location, currLocation]);

  return (
    <>
      <div className="container">
        <Input setLocation={setLocation} />
        {error && (
          <p className="error">Internal error. Please try again later.</p>
        )}
        {weather && (
          <RegionTitle location={weather.location} loading={loading} />
        )}
        {loading && <LoadingCard />}
        {!loading && weather && (
          <Card
            weather={weather.data}
            today={weather.today}
            tomorrow={weather.tomorrow}
            afterTomorrow={weather.afterTomorrow}
          />
        )}
      </div>
    </>
  );
}
