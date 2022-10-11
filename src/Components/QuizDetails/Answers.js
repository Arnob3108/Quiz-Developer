import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Answers = ({ answers, allQuestion }) => {
  const { correctAnswer } = allQuestion;

  const handleAnswer = () => {
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
      <div className="form-control flex-row bg-purple-900 lg:w-3/4 p-3 rounded-2xl mt-5 hover:bg-gradient-to-r from-slate-800 to-gray-800">
        <label onClick={handleAnswer} className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-blue-500"
          />
          <p className="ml-5">{answers}</p>
        </label>
      </div>
    </div>
  );
};

export default Answers;
