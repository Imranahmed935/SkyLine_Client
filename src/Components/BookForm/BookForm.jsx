import React from "react";

const BookForm = () => {
  return (
    <div className="relative -mt-32 z-50 mb-10 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-7xl">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              <span>From</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700">
              <span>To</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700">
              <span>Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              <span>Time</span>
            </label>
            <input
              type="time"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              <span>Number</span>
            </label>
            <input
              type="number"
              placeholder="Number"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
              required
            />
          </div>
          <div className="form-control md:col-span-3 flex justify-center">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto px-6 py-3 rounded-md text-lg font-medium">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
