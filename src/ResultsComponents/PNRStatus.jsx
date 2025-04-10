import React from "react";

const PNRStatus = ({ data }) => {
  const {
    Pnr,
    TrainNo,
    TrainName,
    Doj,
    From,
    To,
    Class,
    ChartPrepared,
    BoardingStationName,
    ReservationUptoName,
    PassengerStatus,
    DepartureTime,
    ArrivalTime,
    Duration,
    BookingFare,
    Rating,
    FoodRating,
    PunctualityRating,
    CleanlinessRating,
    CoachPosition,
    ExpectedPlatformNo,
    BookingDate,
  } = data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      {/* 🛤️ Header */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-700">PNR Status: {Pnr}</h2>
        <p className="text-lg text-gray-700 mt-1">{TrainName} ({TrainNo})</p>
        <p className="text-sm text-gray-500">Boarding: {BoardingStationName} → Reservation Upto: {ReservationUptoName}</p>
      </div>

      {/* 🧳 Journey Info */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
        <div><strong>Class:</strong> {Class}</div>
        <div><strong>Journey Date:</strong> {Doj}</div>
        <div><strong>Booking Date:</strong> {BookingDate}</div>
        <div><strong>From:</strong> {From}</div>
        <div><strong>To:</strong> {To}</div>
        <div><strong>Duration:</strong> {Duration}</div>
        <div><strong>Departure:</strong> {DepartureTime}</div>
        <div><strong>Arrival:</strong> {ArrivalTime}</div>
        <div><strong>Platform:</strong> {ExpectedPlatformNo || "N/A"}</div>
        <div><strong>Fare:</strong> ₹{BookingFare}</div>
        <div><strong>Chart Prepared:</strong> {ChartPrepared ? "Yes" : "No"}</div>
      </div>

      {/* 👤 Passenger Info */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Passenger Status</h3>
        {PassengerStatus.map((passenger, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg bg-gray-50 mb-2">
            <p><strong>Passenger #{passenger.Number}</strong></p>
            <p><strong>Booking Status:</strong> {passenger.BookingStatus}</p>
            <p><strong>Current Status:</strong> {passenger.CurrentStatus}</p>
            <p><strong>Coach:</strong> {passenger.Coach || passenger.BookingCoachId}</p>
            <p><strong>Berth:</strong> {passenger.Berth || passenger.BookingBerthNo}</p>
          </div>
        ))}
      </div>

      {/* ⭐ Ratings */}
      <div className="bg-indigo-50 p-4 rounded-lg space-y-1 text-sm">
        <p><strong>Overall Rating:</strong> {Rating}/5 ({data.RatingCount} reviews)</p>
        <p><strong>Cleanliness:</strong> {CleanlinessRating}/5</p>
        <p><strong>Punctuality:</strong> {PunctualityRating}/5</p>
        <p><strong>Food:</strong> {FoodRating}/5</p>
        <p><strong>Pantry Available:</strong> {data.HasPantry ? "Yes" : "No"}</p>
      </div>

      {/* 🚃 Coach Position */}
      {CoachPosition && (
  <div className="mt-6 w-full">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">🚆 Coach Position (Front to Back)</h3>
    <div className="">
      <div className="flex items-center gap-2 px-2 py-4 bg-gray-400 overflow-x-scroll rounded-lg shadow-inner min-w-full">
        {CoachPosition.split(" ").map((coach, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm min-w-[60px] hover:bg-indigo-50 transition-all"
          >
            <div className="text-sm font-bold text-indigo-700">{coach}</div>
            <div className="text-[10px] text-gray-500">#{idx + 1}</div>
          </div>
        ))}
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-2 text-center">Train Direction ➡️</p>
  </div>
)}

    </div>
  );
};

export default PNRStatus;
