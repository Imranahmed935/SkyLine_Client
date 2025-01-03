import React from "react";
import img1 from '../../assets/images/buisness.jpg'

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="w-full flex gap-4">
        <div className="w-1/2">
          <img
            src={img1}
            alt="Person"
            className="w-full"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-blue-600 font-semibold uppercase text-sm">
            About Us
          </h3>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Your Trusted Journey Partners
          </h2>
          <p className="text-gray-600 mb-6">
            At Skyline Services, we are dedicated to offering unparalleled
            helicopter experiences. Whether it's for business, pleasure, or
            emergencies, we deliver seamless and luxurious travel solutions.
          </p>
          <div className="flex items-center mb-6">
            <div className="text-4xl font-extrabold text-gray-800">
              10+
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-600">Years of</p>
              <p className="font-medium text-gray-600">Experience</p>
            </div>
          </div>
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
