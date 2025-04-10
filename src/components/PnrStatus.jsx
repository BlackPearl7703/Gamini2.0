import { useState } from "react";

export default function PnrStatus() {
  const [PnrNumber, SetPnrNumber] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching live status for train:", trainNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <form
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
    </div>
  );
}
