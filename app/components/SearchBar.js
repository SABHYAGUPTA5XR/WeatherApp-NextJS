'use client';

export default function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-l-lg p-2"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}
