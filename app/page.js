'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

export default function Page() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  
  const fetchWeather = async () => {
    setError('');
    setWeather(null);
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      if (!response.ok) throw new Error('City not found.');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-beige-400 via-beige-200 to-white-500">
  <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
    What's The Weather!
  </h1>
  <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
  <WeatherDisplay weather={weather} error={error} />
</main>


);
}

// 'use client';

// import { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import WeatherDisplay from './components/WeatherDisplay';

// export default function Page() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     setError(''); // Reset error
//     setWeather(null); // Clear previous results
//     if (!city) {
//       setError('Please enter a city name.');
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
//       );
//       if (!response.ok) throw new Error('City not found.');
//       const data = await response.json();
//       setWeather(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Weather App</h1>
//       <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
//       <WeatherDisplay weather={weather} error={error} />
//     </main>
//   );
// }