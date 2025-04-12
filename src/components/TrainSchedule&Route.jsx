import { useState } from "react";
import axios from "axios";
import TrainScheduleRoute from "../ResultsComponents/TrainSchedule&Route";
import Loading from "./Loading";
import ErrorMessage from "./ErrorTemplate";
export default function TrainScheduleAndRoute() {
  const [trainNumber, setTrainNumber] = useState("");
  const[tdata,setTdata]=useState(null)
  const [loading,setLoading]=useState(false)
  const apiKey = import.meta.env.VITE_API_KEY;

  const [invalidIp,setInvalidIp]=useState(false)
  const [isSubmitted,setIsSubmitted]=useState(false)
  const [error,setError]=useState(false)


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching schedule and route for:", trainNumber);
  
const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule',
  params: {trainNo: trainNumber},
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  // console.log(response.data.data.length)
  if( Object.keys(response.data.data).length === 0)
  {
    setInvalidIp(true);
  }
  setTdata(response.data.data)
    return response.data;
} catch (error) {
  setError(true)
	console.error(error);
}
finally{
  setLoading(false);
  setIsSubmitted(true)
}
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
     {!isSubmitted && !tdata &&  <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Train Schedule & Route
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Train Number
          </label>
          <input
            type="text"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            placeholder="e.g. 12951"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Get Schedule & Route
        </button>
      </form>}
      {
        loading && <Loading/>
      }
     {/* {tdata && <TrainScheduleRoute trainData={tdata}/>} */}

      {/* invalid input */}
      {invalidIp ? <ErrorMessage type="invalidInput"/>:
      // rate limit error
      error ? <ErrorMessage type="rateLimit"/> : 
      // some other error
      !error  && !tdata && isSubmitted   ? <ErrorMessage type="default"/> : 
      // successful response
      tdata && <TrainScheduleRoute trainData={tdata}/>}
    </div>
  );
}
