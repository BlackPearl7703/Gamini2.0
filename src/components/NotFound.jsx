import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl mt-4 text-gray-600">Page not found</p>
      <p className="text-gray-500 mt-2">Sorry, we couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-xl shadow hover:bg-green-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
