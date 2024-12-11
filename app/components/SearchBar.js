// 'use client';

// export default function SearchBar({ city, setCity, fetchWeather }) {
//   return (
//     <div className="flex mb-4">
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         className="border rounded-l-lg p-2"
//       />
//       <button
//         onClick={fetchWeather}
//         className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
//       >
//         Search
//       </button>
//     </div>
//   );
// }
'use client';

export default function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="flex mb-6 w-96">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition-all duration-200"
      >
        Search
      </button>
    </div>
  );
}
