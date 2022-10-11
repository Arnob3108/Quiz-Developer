import React from "react";
import Swal from "sweetalert2";

const SingleQuiz = ({ allQuestion }) => {
  console.log(allQuestion);
  const { question, options, correctAnswer } = allQuestion;
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
    <div className="lg:w-3/4 w-80 mx-auto border-2 lg:p-10 p-5 rounded-2xl my-5 lg:m-10 bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:shadow-xl hover:shadow-purple-400/70">
      <div className="flex items-center justify-around text-white">
        <h1 className="lg:text-3xl text-xl">{question}</h1>
        <button onClick={handleAlart} className="btn">
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
        <div className="form-control flex-row bg-purple-900 w-3/4 p-3 rounded-2xl mt-5 hover:bg-gradient-to-r from-slate-800 to-gray-800">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              checked
            />
            <p className="ml-5">{options[0]}</p>
          </label>
        </div>
        <div className="form-control flex-row bg-purple-900 w-3/4 p-3 rounded-2xl mt-5 hover:bg-gradient-to-r from-slate-800 to-gray-800">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              checked
            />
            <p className="ml-5">{options[1]}</p>
          </label>
        </div>
        <div className="form-control flex-row bg-purple-900 w-3/4 p-3 rounded-2xl mt-5 hover:bg-gradient-to-r from-slate-800 to-gray-800">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              checked
            />
            <p className="ml-5">{options[2]}</p>
          </label>
        </div>
        <div className="form-control flex-row bg-purple-900 w-3/4 p-3 rounded-2xl mt-5 hover:bg-gradient-to-r from-slate-800 to-gray-800">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              checked
            />
            <p className="ml-5">{options[3]}</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
