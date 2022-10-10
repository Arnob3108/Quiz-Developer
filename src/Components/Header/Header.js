import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
  return (
    <div>
      <div className="navbar text-teal-accent-400 bg-slate-700 shadow-lg shadow-slate-800">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Statistics</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost rounded h-full normal-case text-xl w-1/4"
          >
            <img className="w-full" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/abouts">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-accent text-teal-accent-400">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
