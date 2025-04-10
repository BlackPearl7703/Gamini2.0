import { use, useState } from "react";
import { data } from "../Data/StationName&Code";
import StationInput from "./StationInput";
import FareComponent from "../ResultsComponents/TrainFare";
import axios from "axios";
export default function CheckFare() {
  const [trainNumber, setTrainNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [fdata,setFData]=useState(null);
   
//   const fdata={
//     "general": [
//         {
//             "classType": "1A",
//             "fare": 1175,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 1059
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 60
//                 },
//                 {
//                     "title": "GST",
//                     "key": "serviceTax",
//                     "cost": 56
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 1175
//                 }
//             ]
//         },
//         {
//             "classType": "2A",
//             "fare": 710,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 626
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 50
//                 },
//                 {
//                     "title": "GST",
//                     "key": "serviceTax",
//                     "cost": 34
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 710
//                 }
//             ]
//         },
//         {
//             "classType": "SL",
//             "fare": 175,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 155
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 20
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 175
//                 }
//             ]
//         },
//         {
//             "classType": "GN",
//             "fare": 90,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 90
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 90
//                 }
//             ]
//         },
//         {
//             "classType": "3A",
//             "fare": 505,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 441
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 40
//                 },
//                 {
//                     "title": "GST",
//                     "key": "serviceTax",
//                     "cost": 24
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 505
//                 }
//             ]
//         },
//         {
//             "classType": "3E",
//             "fare": "",
//             "breakup": []
//         }
//     ],
//     "tatkal": [
//         {
//             "classType": "1A",
//             "fare": "",
//             "breakup": []
//         },
//         {
//             "classType": "2A",
//             "fare": 1540,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 1016
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 50
//                 },
//                 {
//                     "title": "GST",
//                     "key": "serviceTax",
//                     "cost": 74
//                 },
//                 {
//                     "title": "Tatkal Charges",
//                     "key": "tatkalCharges",
//                     "cost": 400
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 1540
//                 }
//             ]
//         },
//         {
//             "classType": "SL",
//             "fare": 395,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 275
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 20
//                 },
//                 {
//                     "title": "Tatkal Charges",
//                     "key": "tatkalCharges",
//                     "cost": 100
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 395
//                 }
//             ]
//         },
//         {
//             "classType": "GN",
//             "fare": "",
//             "breakup": []
//         },
//         {
//             "classType": "3A",
//             "fare": 1105,
//             "breakup": [
//                 {
//                     "title": "Base Charges",
//                     "key": "baseFare",
//                     "cost": 712
//                 },
//                 {
//                     "title": "Reservation Charges",
//                     "key": "reservationCharges",
//                     "cost": 40
//                 },
//                 {
//                     "title": "GST",
//                     "key": "serviceTax",
//                     "cost": 53
//                 },
//                 {
//                     "title": "Tatkal Charges",
//                     "key": "tatkalCharges",
//                     "cost": 300
//                 },
//                 {
//                     "title": "Total Amount",
//                     "key": "total",
//                     "cost": 1105
//                 }
//             ]
//         },
//         {
//             "classType": "3E",
//             "fare": "",
//             "breakup": []
//         }
//     ]
// }
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



  const handleSubmit = async(e) => {
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
    const train = trainNumber;
    const src = source.split("-")[1];
    const des = destination.split("-")[1];

    const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v2/getFare',
      params: {
        trainNo: train,
        fromStationCode: src,
        toStationCode: des
      },
      headers: {
        'X-RapidAPI-Key': 'e1aa14092bmsh46a7b7297d0ff9fp1a1491jsn9956860de603',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setFData(response.data.data);
        return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
    {!fdata &&   <form
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

      {fdata && <FareComponent data={fdata}/>}
    </div>
  );
}
