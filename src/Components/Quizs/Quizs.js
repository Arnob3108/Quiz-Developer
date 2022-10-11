import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Quizs = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div data-aos="flip-up">
        <Link to={`/quiz/${id}`} aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={logo}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-5xl font-bold text-gray-100">{name}</p>
              <p className="text-2xl lg:mt-48 tracking-wide text-gray-300">
                Total Quiz: {total}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Quizs;
