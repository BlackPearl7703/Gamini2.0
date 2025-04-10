import React from "react";

export default function StationInput ({
  label = "Station Code",
  stationCode,
  handleInputChange,
  handleSuggestionClick,
  suggestions,
  placeholder = "e.g. Jabalpur-JBP"
}){
  return (
    <div className="w-full relative">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type="text"
        value={stationCode}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white/10 backdrop-blur-md border border-gray-200 mt-1 w-full rounded-xl shadow-md">
          {suggestions.map((station, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(station)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {station}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


