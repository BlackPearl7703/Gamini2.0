import { useState } from "react";
import PNRStatus from "../ResultsComponents/PNRStatus";
import axios from "axios";
export default function PnrStatus() {
  const [PnrNumber, SetPnrNumber] = useState("");
  const [pdata, setPdata] = useState(null);

  // const pdata={
  //   "status": true,
  //   "message": "Success",
  //   "timestamp": 1662104408060,
  //   "data": {
  //     "Pnr": "4335734389",
  //     "TrainNo": "17221",
  //     "TrainName": "COA LTT EXPRESS",
  //     "Doj": "03-09-2022",
  //     "BookingDate": "27-08-2022",
  //     "Quota": "GN",
  //     "DestinationDoj": "03-09-2022",
  //     "SourceDoj": "03-09-2022",
  //     "From": "CCT",
  //     "To": "SC",
  //     "ReservationUpto": "SC",
  //     "BoardingPoint": "CCT",
  //     "Class": "3A",
  //     "ChartPrepared": false,
  //     "BoardingStationName": "Kakinada Town",
  //     "TrainStatus": "",
  //     "TrainCancelledFlag": false,
  //     "ReservationUptoName": "Secunderabad Junction",
  //     "PassengerCount": 1,
  //     "PassengerStatus": [
  //       {
  //         "Pnr": null,
  //         "Number": 1,
  //         "Prediction": null,
  //         "PredictionPercentage": "100",
  //         "ConfirmTktStatus": "Confirm",
  //         "Coach": "B5",
  //         "Berth": 55,
  //         "BookingStatus": "CNF B5 55",
  //         "CurrentStatus": "CNF",
  //         "CoachPosition": null,
  //         "BookingBerthNo": "55",
  //         "BookingCoachId": "B5",
  //         "BookingStatusNew": "CNF",
  //         "BookingStatusIndex": "0",
  //         "CurrentBerthNo": "",
  //         "CurrentCoachId": "",
  //         "BookingBerthCode": "SL",
  //         "CurrentBerthCode": null,
  //         "CurrentStatusNew": "CNF",
  //         "CurrentStatusIndex": "0"
  //       }
  //     ],
  //     "DepartureTime": "09:08",
  //     "ArrivalTime": "20:20",
  //     "ExpectedPlatformNo": "1",
  //     "BookingFare": "855",
  //     "TicketFare": "855",
  //     "CoachPosition": "L SLR D1 D2 D3 S1 S2 S3 S4 S5 S6 S7 B1 B2 B3 B4 B5 A1 A2 H1 SLR",
  //     "Rating": 3.9,
  //     "FoodRating": 3.4,
  //     "PunctualityRating": 4.1,
  //     "CleanlinessRating": 4.2,
  //     "SourceName": "Kakinada",
  //     "DestinationName": null,
  //     "Duration": "11:12",
  //     "RatingCount": 445,
  //     "HasPantry": false
  //   }
  // }
  const handleSubmit = async(e) => {
    e.preventDefault();

    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching live status for train:", trainNumber);
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus",
      params: {
        pnrNumber: pnrNumber,
      },
      headers: {
        "X-RapidAPI-Key": "e1aa14092bmsh46a7b7297d0ff9fp1a1491jsn9956860de603",
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };
  
    try {
      const response = await axios.request(options);
      setPdata(response.data);
      return response;
    } catch (error) {
      console.error(error);
      alert("Error fetching PNR data. Please try again.");
      return null; // Return null on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
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
      </form>}

      {pdata && <PNRStatus data={pdata.data}/>}
    </div>
  );
}
