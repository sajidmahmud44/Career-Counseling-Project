import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900 text-white">
      <div className="text-center px-6">
        <h1 className="text-9xl font-extrabold text-gray-300 tracking-widest">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-light mt-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-gray-400 mt-2">
          It might have been moved, deleted, or never existed in the first place.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
