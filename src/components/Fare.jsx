import { useState } from "react";
import { data } from "../Data/StationName&Code";
import StationInput from "./StationInput";
export default function CheckFare() {
  const [trainNumber, setTrainNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
   
  
    const handleSourceSuggestionClick = (station) => {
      setSource(station);
      setSourceSuggestions([]);
    };
    
    const handleSourceInputChange = (e) => {
      setSource(e.target.value);
      const value = e.target.value;
      setSource(value);
  
      if (value.length === 0) {
        setSourceSuggestions([]);
        return;
      }
  

      const matches = data
        .filter((station) =>
          station.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 6); 
  
      setSourceSuggestions(matches.map((station) => `${station.name}-${station.code}`));
    };


    const handleDestinationInputChange = (e) => {   
      setDestination(e.target.value);
      const value = e.target.value;
      setDestination(value);
      if (value.length === 0) {
        setDestinationSuggestions([]);
        return;
      }
      const matches = data
        .filter((station) =>
          station.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 5);
      setDestinationSuggestions(matches.map((station) => `${station.name}-${station.code}`));
    };
   
  const handleDestinationSuggestionClick = (station) => {
    console.log('hello world');
    setDestination(station);
    setDestinationSuggestions([]);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔧 Replace this with your real API call
    console.log(
      "Check fare for Train:",
      trainNumber,
      "From:",
      source,
      "To:",
      destination
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Check Fare
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Train Number
          </label>
          <input
            type="text"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            placeholder="e.g. 12345"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">
            Source Station Code
          </label>
          <input
            type="text"
            value={source}
            // onChange={(e) => setSource(e.target.value.toUpperCase())}
            onChange={handleSourceInputChange}
            placeholder="e.g. NDLS"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
      
          <div>
            {sourceSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white/10 backdrop-blur-md  border border-gray-200 mt-1 w-full rounded-xl shadow-md ">
                {sourceSuggestions.map((station, index) => (
                  <li
                    key={index}
                    onClick={() => handleSourceSuggestionClick(station)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div> */}

        <StationInput 
          stationCode={source}
          handleInputChange={handleSourceInputChange}
          handleSuggestionClick={handleSourceSuggestionClick}
          suggestions={sourceSuggestions}
          placeholder={"e.g. Jabalpur-JBP"}
          label={"Source Station Name"}
        />

        {/* <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">
            Destination Station Code
          </label>
          <input
            type="text"
            value={destination}
            // onChange={(e) => setDestination(e.target.value.toUpperCase())}
            onChange={handleDestinationInputChange}
            placeholder="e.g. BCT"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        
          <div>
            {destinationSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white/10 backdrop-blur-md  border border-gray-200 mt-1 w-full rounded-xl shadow-md ">
                {destinationSuggestions.map((station, index) => (
                  <li
                    key={index}
                    onClick={() => handleDestinationSuggestionClick(station)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div> */}

        <StationInput
          stationCode={destination}
          handleInputChange={handleDestinationInputChange}
          handleSuggestionClick={handleDestinationSuggestionClick}
          suggestions={destinationSuggestions}
          placeholder={"e.g. Damoh-DMO"}
          label={"Destination Station Name"}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Check Fare
        </button>
      </form>
    </div>
  );
}
