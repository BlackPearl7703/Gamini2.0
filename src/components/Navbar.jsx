import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons, install via: npm i lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`sidebar top-0 left-0 h-[calc(100vh)] bg-white shadow-md  flex flex-col justify-between transition-all duration-600 z-50 ${
          isOpen ? "w-[calc(20vw)] h-full px-4 py-3 " : "w-0  overflow-hidden "
        }`}
      >
        {/* Top: Logo + Close Button */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="./src/assets/logo.png"
              alt="Logo"
              className="h-8"
            />
            <span className="text-xl font-semibold text-gray-800">Gamini2.0</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="space-y-5">
          <Link to="/search-trains" className="nav-link">Search Trains B/w Stations</Link>
          <Link to="/live-status" className="nav-link">Get Train Live Status</Link>
          <Link to="/schedule-route" className="nav-link">Get Train Schedule & Route</Link>
          <Link to="/pnr-status" className="nav-link">Check PNR Status</Link>
          <Link to="/station-trains" className="nav-link">Get Trains BY Stations</Link>
          <Link to="/fare-check" className="nav-link">Check Fare</Link>
        </div>

        <Link to="/developer">
          <button className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition w-full">
            Developer
          </button>
        </Link>
      </nav>

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-xl shadow hover:bg-green-700"
        >
          <Menu size={22} />
        </button>
      )}
    </>
  );
}
