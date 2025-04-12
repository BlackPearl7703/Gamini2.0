import React from "react";
import { AlertTriangle, Ban } from "lucide-react";
import { Link } from "react-router-dom";
const errorIcons = {
  rateLimit: <AlertTriangle className="text-yellow-500 w-6 h-6" />,
  invalidInput: <Ban className="text-red-500 w-6 h-6" />,
  default: <AlertTriangle className="text-gray-500 w-6 h-6" />,
};

const errorMessages = {
  rateLimit: "You've hit the rate limit. Please wait and try again later.",
  invalidInput: "The data you entered seems invalid. Please check and try again.",
  default: "Something went wrong. Please try again.",
};

const ErrorMessage = ({ type = "default" }) => {
  return (
    <div className="bg-red-50 border space-y-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex flex-col items-center justify-center gap-3 max-w-lg mx-auto shadow-sm">
        <h3 className="text-[calc(1.5rem)]">ERROR</h3>
    <div className="flex items-center space-x-1">

      {errorIcons[type]}
      <p className="text-sm font-medium">{errorMessages[type]}</p>
    </div>

    <Link
          to="/"
          className="block text-white bg-green-600 hover:bg-green-700 font-semibold py-3 px-4 rounded-xl shadow-md text-center transition"
        >
          Go Back
        </Link>
    </div>
  );
};

export default ErrorMessage;
