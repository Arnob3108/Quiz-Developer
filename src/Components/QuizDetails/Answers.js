import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Answers = ({ answers, allQuestion }) => {
  const { correctAnswer } = allQuestion;

  const handleAnswer = (answers) => {
    if (answers === correctAnswer) {
      toast.success("🦄 Wow! Your Answer is Correct", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("🦄 oh no! Your Answer is Wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <label className="label cursor-pointer flex bg-purple-900 lg:w-3/4 w-full p-3 rounded-2xl mt-5 hover:glass">
        <div onClick={() => handleAnswer(answers)} className="flex">
          <input type="radio" name="radio-3" className="radio radio-primary " />
        </div>
        <p className="font-bold text-lg lg:mr-56 ">{answers}</p>
      </label>
      {/* <button
        onClick={handleAnswer}
        className="form-control flex-row bg-purple-900 lg:w-3/4 w-full p-3 rounded-2xl mt-5 hover:glass"
      >
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-blue-500"
          />
        </label>
        <p className="ml-5">{answers}</p>
      </button> */}
    </div>
  );
};

export default Answers;
