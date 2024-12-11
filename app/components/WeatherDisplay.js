'use client';

export default function WeatherDisplay({ weather, error }) {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (weather) {
    return (
      <div className="text-center bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <p className="text-lg">🌡 {weather.main.temp}°C</p>
        <p>💨 {weather.wind.speed} m/s</p>
      </div>
    );
  }

  return null; // Return nothing if there's no weather or error
}
