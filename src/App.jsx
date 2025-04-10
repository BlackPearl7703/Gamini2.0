import "./App.css";
import {  Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SearchTrains from "./components/SearchTrainsBetStations";
import TrainLiveStatus from "./components/TrainLiveStatus";
import TrainScheduleAndRoute from "./components/TrainSchedule&Route";
import PnrStatus from "./components/PnrStatus";
import TrainFromStations from "./components/TrainsFromStations";
import CheckFare from "./components/Fare";
import DeveloperSection from "./components/Developer";
function App() {
  return (
    <>
    <div className="min-h-screen  home relative">

      <div className="flex flex-row">


      <Navbar />

      <div className="w-screen relative">
        <main className="">
         
            <Routes>
              {/* your routes here */}
              {/* home route */}
              <Route path="/" element={<Home/>}/>
              <Route path="/search-trains" element={<SearchTrains/>}/>
              <Route path="/live-status" element={<TrainLiveStatus/>}/>
              <Route path="/schedule-route" element={<TrainScheduleAndRoute/>}/>
              <Route path="/pnr-status" element={<PnrStatus/>}/>
              <Route path="/station-trains" element={<TrainFromStations/>}/>
              <Route path="/fare-check" element={<CheckFare/>}/>
              <Route path="/developer" element={<DeveloperSection/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        </main>
        </div>

     

    </div>
        <Footer />
      </div>
     </>
  );
}
export default App;
