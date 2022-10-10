import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "./error.png";

const ErrorPage = () => {
  return (
    <div className=" text-center bg-gradient-to-r from-slate-800 to-gray-800 min-h-screen">
      <img className="mx-auto pt-52" src={ErrorImg} alt="" />
      <Link to="/">
        <button className="btn btn-outline btn-error mb-14">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
