import React, { useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Answers from "./Answers";

const SingleQuiz = ({ allQuestion }) => {
  const { question, options, correctAnswer, id } = allQuestion;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleAlart = () => {
    Swal.fire({
      title: `Your Correct Answer is ${correctAnswer}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <div
      data-aos="zoom-in-up"
      className=" w-11/12 lg:mx-auto mx-auto border-2 lg:p-10 p-5 rounded-2xl my-5 lg:m-10 bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:shadow-xl hover:shadow-purple-400/70"
    >
      <div className="flex items-center justify-around text-white">
        <h1 className="lg:text-3xl text-xl">{question}</h1>
        <button onClick={handleAlart} className="btn glass">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-6 w-16 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid text-xl font-semibold justify-center items-center grid-cols-1 lg:grid-cols-2 text-green-200">
        {options.map((answers) => (
          <Answers answers={answers} allQuestion={allQuestion}></Answers>
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
