import React from "react";

const TrainScheduleRoute = ({ trainData }) => {
  const { trainName, trainNumber, trainType, runDays, class: classes, quota, route } = trainData.data;
  console.log(trainData.data);
  const dayLabels = {
    sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat"
  };

  const getStationStatus = (station) => {
    if (!station.stop) return "upcoming";
    return "past";
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10">
      {/* 🚆 Train Info */}
      <div className="bg-white to-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700">{trainName} ({trainNumber})</h2>
        <p className="text-lg text-gray-700 mt-1">{trainType}</p>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          {Object.entries(runDays).map(([day, runs]) => (
            <span key={day} className={`text-sm px-3 py-1 rounded-full font-medium ${
              runs ? "bg-green-600 text-white" : "bg-gray-300 text-gray-500"
            }`}>
              {dayLabels[day]}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {classes.map(cls => (
            <span key={cls.value} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {cls.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {quota.map(q => (
            <span key={q.value} className="text-sm bg-orange-200 text-yellow-800 px-3 py-1 rounded-full">
              {q.name}
            </span>
          ))}
        </div>
      </div>

      {/* 📍 Train Route Timeline */}
       {/* Route Map */}
       <div className="border p-4 rounded-xl shadow-md bg-white max-h-[calc(40vh)] overflow-y-scroll">
        <h3 className="text-xl font-semibold mb-4">Train Route</h3>
        <div className="relative">
          <div className="border-l-2 border-gray-300 ml-5 space-y-6">
            {route.map((station, index) => {
              const isUpcoming = !station.stop;
              const isCurrent = index === 0; // Just for demonstration
              return (
                <div key={station.station_code} className="flex items-start space-x-3">
                  {/* Circle */}
                  <div className="w-4 h-4 rounded-full mt-1"
                    style={{
                      backgroundColor: isCurrent
                        ? "#10B981" // green
                        : isUpcoming
                        ? "#F59E0B" // yellow
                        : "#9CA3AF" // gray
                    }}
                  ></div>

                  <div>
                    <div className="font-semibold">{station.station_name} ({station.station_code})</div>
                    <div className="text-sm text-gray-500">
                      Day {station.day} • Platform {station.platform_number || "N/A"} • State: {station.state_name}
                    </div>
                    <div className="text-sm text-gray-400">
                      Distance from source: {station.distance_from_source} km
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainScheduleRoute;
