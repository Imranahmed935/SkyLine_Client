import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="bg-[#0076fd] p-2 rounded relative -top-16 shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-white mb-4">
            Login
          </h2>
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-110 transform transition-all duration-200"
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-110 transform transition-all duration-200"
            >
              <FaTwitter />
            </button>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-110 transform transition-all duration-200"
            >
              <FaFacebook />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
              <FaUser />
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Sign Up
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          New to here | 
          <Link to="/signup" className="text-blue-600">
           SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
