import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 bg-transparent min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Gamini</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Plan your journey, check live schedules, and  check ticket status—all in one place.
      </p>
     
    </div>
  );
}
