import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { MdOutlinePhoneInTalk, MdOutlineWatchLater } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
       <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
       <NavLink to={'/login'}>login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       <div className="flex items-center">
        <img className="w-24 h-24 rounded-full" src={logo} alt="" />
       <Link to={'/'} className="text-2xl font-bold">SkyLine</Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
            <div className="text-2xl"><MdOutlineWatchLater/></div>
            <div>
                <h1 className="text-xl">Working hour</h1>
                <p className="text-gray-500">Mon-Sun : 9am-10pm</p>
            </div>
        </div>
        <div className="flex gap-2">
        <div className="text-2xl"><MdOutlinePhoneInTalk /></div>
            <div>
             <h1 className="text-xl">Call Center</h1>
                <p className="text-gray-500">123-456-7890</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
