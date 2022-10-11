import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const QuizDetails = () => {
  const quiz = useLoaderData().data;
  const { name, logo, total, questions } = quiz;

  return (
    <div>
      <div className="lg:w-9/12 w-full flex items-center justify-around text-green-200">
        <img className="w-20" src={logo} alt="" />
        <h1 className="lg:text-4xl text-2xl font-bold">Category: {name}</h1>
        <p className="text-2xl font-semibold">Total Quiz: {total}</p>
      </div>
      <div>
        {questions.map((allQuestion) => (
          <SingleQuiz
            key={allQuestion.id}
            allQuestion={allQuestion}
          ></SingleQuiz>
        ))}
      </div>
      <div>
        <h1>marks</h1>
      </div>
    </div>
  );
};

export default QuizDetails;
