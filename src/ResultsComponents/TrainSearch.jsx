import React from "react";
import { Link } from "react-router-dom";
const TrainSearchResults = ({ trains }) => {
  if (!trains || trains.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No trains found.</p>;
  }
console.log(trains);
  return (
    <>
   <div className="grid gap-6 mt-6 p-4 w-full max-h-[calc(80vh)]  overflow-y-scroll mb-5">
  {trains.map((train, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-gray-800"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900">{train.train_name}</h2>
        <span className="text-sm text-blue-600 font-medium">#{train.train_number}</span>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <div>
          <p className="font-medium">{train.from_station_name} ({train.from})</p>
          <p className="text-gray-500">Departs: {train.from_std}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Duration</p>
          <p className="font-semibold text-gray-700">{train.duration}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">{train.to_station_name} ({train.to})</p>
          <p className="text-gray-500">Arrives: {train.to_sta}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-xs mb-3">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {train.train_type}
        </span>
        {train.special_train && (
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">
            Special
          </span>
        )}
        {train.has_pantry && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Pantry Available
          </span>
        )}
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
          {train.distance} km
        </span>
        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
          {train.halt_stn} halts
        </span>
      </div>

      <div className="text-sm text-gray-600">
        <p>Classes: {train.class_type.join(", ")}</p>
        <p>Runs on: {train.run_days.join(", ")}</p>
      </div>
    </div>
  ))}
</div>

    <Link
          to="/"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Go Back
        </Link>
    </>
  );
};

export default TrainSearchResults;
