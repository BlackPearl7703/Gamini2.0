import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sidebar bg-transparent shadow-md px-4 py-3 flex flex-col items-center justify-between w-1/5 ">
      {/* Left side: Logo + Site Name */}
      <Link  className="flex items-center space-x-2" to={'/'}>
        <img
          src="./src/assets/logo.png" // Replace with your logo path
          alt="Logo"
          className="h-8 "
        />
        <span className="text-xl font-semibold text-gray-800">Gamini</span>
      </Link>


     
      <div className="space-y-5">
        <Link
          to="/search-trains"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Search Trains B/w Stations
        </Link>

        <Link
          to="/live-status"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Get Train Live Status
        </Link>

        <Link
          to="/schedule-route"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Get Train Schedule & Route
        </Link>

        <Link
          to="/pnr-status"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Check PNR Status
        </Link>

        <Link
          to="/station-trains"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Get Trains By Stations
        </Link>

        <Link
          to="/fare-check"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Check Fare
        </Link>
      </div>
    



      {/* Right side: Links */}
      <Link className="space-x-4" to="/developer">
        <button
          

          className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition"
        >
          Developer
        </button>
      </Link>
    </nav>
  );
}
