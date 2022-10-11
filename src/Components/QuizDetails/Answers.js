import React from "react";

const Answers = ({ answers, allQuestion }) => {
  console.log(allQuestion);
  const { correctAnswer } = allQuestion;

  const handleAnswer = () => {
    if (answers === correctAnswer) {
      console.log("correct");
    } else {
      console.log("vul");
    }
  };

  return (
    <div>
      <div className="form-control flex-row bg-purple-900 w-3/4 p-3 rounded-2xl mt-5 hover:bg-gradient-to-r from-slate-800 to-gray-800">
        <label onClick={handleAnswer} className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-blue-500"
            checked
          />
          <p className="ml-5">{answers}</p>
        </label>
      </div>
    </div>
  );
};

export default Answers;
