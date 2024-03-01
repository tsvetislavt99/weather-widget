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
  const [location, setLocation] = useState('Pleven');
  const [weather, setWeather] = useState<TransformedWeatherData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://wttr.in/${location}?format=j1`)
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
  }, [location]);

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
