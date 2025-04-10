import React from "react";

export default function LiveStatus({ trainData }) {
  const data = trainData
  const previousStations = data?.previous_stations || [];
  const upcomingStations = data?.upcoming_stations || [];
  const currentStationCode = data?.current_station_code;
  const currentStationName = data?.current_station_name;
  const currentUpdates = data?.current_location_info || [];

  const currentStatus = currentUpdates?.[0]?.readable_message || "No status available";
  const secondaryStatus = currentUpdates?.[1]?.readable_message || "";

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-5xl mx-auto mt-8 max-h-[calc(80vh)] overflow-y-scroll">
      {/* Top Section: Current Status */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {data.train_name} ({data.train_number})
        </h2>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Status:</strong> {currentStatus}
        </p>
        {secondaryStatus && (
          <p className="text-sm text-gray-600">
            <strong>Info:</strong> {secondaryStatus}
          </p>
        )}
        <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-4">
          <p>📍 <strong>Current Station:</strong> {currentStationName} ({currentStationCode})</p>
          <p>⏰ <strong>Delay:</strong> {data.delay} mins</p>
          <p>🧭 <strong>Status As Of:</strong> {data.status_as_of}</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-4 border-gray-300 pl-6">
        {[...previousStations, ...upcomingStations].map((station, idx) => {
          const isUpcoming = upcomingStations.some(s => s.station_code === station.station_code);
          const isCurrent = station.station_code === currentStationCode;

          return (
            <div key={idx} className="relative mb-6">
              <div
                className={`absolute left-[-28px] top-1 w-5 h-5 rounded-full ${
                  isCurrent
                    ? "bg-blue-500 border-2 border-white shadow-lg"
                    : isUpcoming
                    ? "bg-yellow-400"
                    : "bg-green-500"
                }`}
              ></div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className={`font-semibold ${isCurrent ? "text-blue-600" : "text-gray-800"}`}>
                    {station.station_name} ({station.station_code})
                  </p>
                  <p className="text-sm text-gray-600">
                    {isUpcoming ? `ETA: ${station.eta}` : `Departed: ${station.etd}`}
                  </p>
                  <p className="text-xs text-gray-500">
                    Distance: {station.distance_from_source} km
                  </p>
                </div>
                <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                  <p>Platform: {station.platform_number || "-"}</p>
                  <p>Halt: {station.halt || 0} min</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


