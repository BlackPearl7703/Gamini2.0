import { useState } from "react";
import axios from "axios";
import PNRStatus from "../ResultsComponents/PNRStatus";
import Loading from "./Loading";
export default function PnrStatus() {
  const [PnrNumber, SetPnrNumber] = useState("");
  const [pdata,setPdata]=useState(null)
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching pnr status for train:", PnrNumber);
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus",
      params: {
        pnrNumber: PnrNumber,
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };
  
    try {
      const response = await axios.request(options);
      setPdata(response.data.data)
      return response;
    } catch (error) {
      console.error(error);
      alert("Error fetching PNR data. Please try again.");
      return null; // Return null on error
    }
    finally {
      setLoading(false);
    }
  }
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
      {!pdata && <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          PNR Status
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            PNR Number
          </label>
          <input
            type="text"
            value={PnrNumber}
            onChange={(e) => SetPnrNumber(e.target.value)}
            placeholder="e.g. 1234567890"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Get PNR Status
        </button>
      </form>

}

      {loading && <Loading/>}
      {pdata && <PNRStatus data={pdata}/>}
    </div>
  );
}
