import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Quizs from "../Quizs/Quizs";
import quiz from "./quiz1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const totalQuiz = useLoaderData().data;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div
          data-aos="fade-left"
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
          <svg
            className="absolute left-0 hidden h-full text-green-200 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            data-aos="fade-left"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={quiz}
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-teal-accent-400 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              The quiz can be described as a type of game where competitors try
              their best to answer the questions in less time. The quiz is not
              about random topics, specific topics. Teachers can organize quiz
              competition to test the knowledge of students apart from studies
              or about any topic of syllabus.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd hero part */}
      <div data-aos="fade-left">
        <div>
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8 lg:ml-60 my-16">
            <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:mb-6 group">
              <span className="inline-block text-white mb-1 sm:mb-4">
                Give a Quick <br className="hidden md:block" />
                Quiz Test, is free.
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>
        </div>
      </div>
      {/* data loaded */}
      <div
        data-aos="zoom-in-up"
        className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:gap-6 sm:grid-cols md:grid-cols-2 mx-5 "
      >
        {totalQuiz.map((quiz) => (
          <Quizs key={quiz.id} quiz={quiz}></Quizs>
        ))}
      </div>
    </div>
  );
};

export default Home;
