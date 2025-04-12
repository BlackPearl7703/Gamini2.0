import { use, useState } from "react";
import { data } from "../Data/StationName&Code";
import StationInput from "./StationInput";
import axios from "axios";
import FareComponent from "../ResultsComponents/TrainFare";
import Loading from "./Loading";
import ErrorMessage from "./ErrorTemplate";
export default function CheckFare() {
  const [trainNumber, setTrainNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [tdata, setTdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const [invalidIp,setInvalidIp]=useState(false)
  const [isSubmitted,setIsSubmitted]=useState(false)
  const [error,setError]=useState(false)

  
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
    // console.log('hello world');
    setDestination(station);
    setDestinationSuggestions([]);
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    // 🔧 Replace this with your real API call
    console.log(
      "Check fare for Train:",
      trainNumber,
      "From:",
      source,
      "To:",
      destination
    );
    const train=trainNumber;
    const src=source.split("-")[1]
    const des=destination.split("-")[1]

    const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v2/getFare',
      params: {
        trainNo: train,
        fromStationCode: src,
        toStationCode: des
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      // console.log(response.data.status,response.data.data.general.length,response.data.data.tatkal.length)
      if(response.data.message==="Success" && response.data.data.general.length===0 && response.data.data.tatkal.length===0){
         setInvalidIp(true);
      }
       setTdata(response.data.data);
        return response.data;
    } catch (error) {
      setError(true);
      console.error(error);
    }
    finally{
      setLoading(false);
      setIsSubmitted(true)
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
      { !isSubmitted && !tdata && <form
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
      </form>}

      {loading && <Loading/>}

      {/* { invalidIp  && <ErrorMessage type="invalidInput"/>} */}
      {/* { error  && <ErrorMessage type="rateLimit"/>} */}
      {/* {!error  && !tdata && isSubmitted && <ErrorMessage type="default"/>} */}
      {/* {console.log(invalidIp)} */}

      {/* { !invalidIp&& tdata && <FareComponent data={tdata} />} */}


      {/* invalid input */}
      {invalidIp ? <ErrorMessage type="invalidInput"/>:
      // rate limit error
      error ? <ErrorMessage type="rateLimit"/> : 
      // some other error
      !error  && !tdata && isSubmitted   ? <ErrorMessage type="default"/> : 
      // successful response
      <FareComponent data={tdata} />}
    </div>
  );
}
