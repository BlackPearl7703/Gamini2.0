import { useState } from "react";
import { data } from "../Data/StationName&Code";
import StationInput from "./StationInput";
import TrainsFromStation from "../ResultsComponents/TrainsFromStation";
import axios from "axios";
import Loading from "./Loading";
export default function TrainFromStations() {
  const [stationCode, setStationCode] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tdata,setTdata]=useState(null)
  const [loading,setLoading]=useState(false)
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching live status for station:", stationCode);
     const stcode=stationCode.split("-")[1]
   
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation",
      params: {
        stationCode: stcode,
      },
      headers: {
        // "X-RapidAPI-Key": "07cd06475bmshe4b7c90f93c9c80p1cda5fjsna3b003ac7d95",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTdata(response.data.data)
        return response.data;
    } catch (error) {
      console.error(error);
    }  
    finally{
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    setStationCode(e.target.value);
    const value = e.target.value;
    setStationCode(value);

    if (value.length === 0) {
      setSuggestions([]);
      return;
    }

    // getting the suggestions
    const matches = data
      .filter((station) =>
        station.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5); 

    
    setSuggestions(matches.map((station) => `${station.name}-${station.code}`));
  };

  const handleSuggestionClick = (station) => {
    setStationCode(station);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
     {!tdata && <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Trains From a Station
        </h2>

        {/* <div className="w-full relative">
          <label className="block text-gray-700 font-medium mb-1">
            Station Code
          </label>
          <input
            type="text"
            value={stationCode}
            // onChange={(e) => setStationCode(e.target.value)}
            onChange={handleInputChange}
            placeholder="e.g. Jabalpur-JBP"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
         
          <div>

         
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white/10 backdrop-blur-md  border border-gray-200 mt-1 w-full rounded-xl shadow-md ">
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
        </div> */}

        <StationInput 
          stationCode={stationCode}
          handleInputChange={handleInputChange}
          handleSuggestionClick={handleSuggestionClick}
          suggestions={suggestions}
          placeholder={"e.g. Jabalpur-JBP"}
          label={"Station Name"}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Get Trains
        </button>
      </form>}
     {loading && <Loading/>}
     {tdata &&  <TrainsFromStation data={tdata}/>}
    </div>
  );
}
