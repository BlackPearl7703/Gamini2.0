import { useState } from "react";

export default function TrainScheduleAndRoute() {
  const [trainNumber, setTrainNumber] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching schedule and route for:", trainNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <form
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
      </form>
    </div>
  );
}
