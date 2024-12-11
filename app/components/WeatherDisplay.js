// 'use client';

// export default function WeatherDisplay({ weather, error }) {
//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (weather) {
//     return (
//       <div className="text-center bg-white p-4 rounded shadow-md">
//         <h2 className="text-2xl font-bold">{weather.name}</h2>
//         <p>{weather.weather[0].description}</p>
//         <p className="text-lg">🌡 {weather.main.temp}°C</p>
//         <p>💨 {weather.wind.speed} m/s</p>
//       </div>
//     );
//   }

//   return null; // Return nothing if there's no weather or error
// }
'use client';

export default function WeatherDisplay({ weather, error }) {
  if (error) {
    return <p className="text-red-500 font-semibold">{error}</p>;
  }

  if (weather) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h2 className="text-2xl font-bold text-blue-600">{weather.name}</h2>
        <p className="capitalize text-gray-600 mt-2">{weather.weather[0].description}</p>
        <p className="text-3xl font-semibold mt-4">🌡 {weather.main.temp}°C</p>
        <p className="text-gray-500 mt-2">💨 {weather.wind.speed} m/s</p>
      </div>
    );
  }

  return null; // Return nothing if there's no weather or error
}
