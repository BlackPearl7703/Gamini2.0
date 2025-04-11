import React, { useState } from "react";
import { Link } from "react-router-dom";
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const RunDaysDisplay = ({ runDays }) => (
//   <div className="flex justify-center gap-1 text-xs mt-1">
//     {dayNames.map((day, idx) => {
//       const key = day.toLowerCase();
//       const active = runDays[key];
//       return (
//         <span
//           key={idx}
//           className={`px-2 py-0.5 rounded-md border ${
//             active
//               ? "bg-green-100 text-green-800 border-green-300"
//               : "bg-gray-100 text-gray-400 border-gray-200"
//           }`}
//         >
//           {day}
//         </span>
//       );
//     })}
//   </div>
// );

const TrainCard = ({ train }) => (
  <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white max-w-[calc(80vw)]">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-lg text-indigo-700">{train.trainName}</h2>
        <p className="text-sm text-gray-600">Train No: {train.trainNo}</p>
      </div>
      <div className="text-right text-sm">
        <p>
          <strong>Arrival:</strong> {train.arrivalTime}
        </p>
        <p>
          <strong>Departure:</strong> {train.departureTime}
        </p>
      </div>
    </div>
    {/* <RunDaysDisplay runDays={train.runDays} /> */}
    {train.classes.length > 0 && (
      <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-2">
        {train.classes.map((cls, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {cls}
          </span>
        ))}
      </div>
    )}
  </div>
);

const TrainSection = ({ title, trains }) => (
  <div className="m-4  p-1 shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-1">{title}</h3>
    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 max-h-[calc(70vh)] overflow-y-scroll">
      {trains.map((train, idx) => (
        <TrainCard key={idx} train={train} />
      ))}
    </div>
  </div>
);

const TrainsFromStation = ({ data }) => {
  console.log("Data in TrainsFromStation:", data);
  const { originating, passing, destination } = data || {};
  const [activeTab, setActiveTab] = useState("originating");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "originating":
        return <TrainSection title="Originating Trains" trains={originating} />;
      case "passing":
        return <TrainSection title="Passing Trains" trains={passing} />;
      case "destination":
        return <TrainSection title="Terminating Trains" trains={destination} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">🚉 Trains From this Station</h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {["originating", "passing", "destination"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeTab === tab
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Active Section */}
      {renderActiveSection()}
      <Link
          to="/"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Go Back
        </Link>
    </div>
  );
};

export default TrainsFromStation;
