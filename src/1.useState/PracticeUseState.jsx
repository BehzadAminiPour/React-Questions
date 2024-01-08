import { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const data = [
  { id: 1, question: "What is your name?" },
  { id: 2, question: "How old are you?" },
  { id: 3, question: "Where are you from?" },
  { id: 4, question: "What is your job?" },
  { id: 5, question: "What is your phone number?" },
];

export default function PracticeUseState() {
  //   const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);
  const handleNextClick = () => {
    setNum((prevNum) => {
      if (num <= data.length - 1) {
        return prevNum + 1;
      }
    });
  };
  const handlePrevClick = () => {
    setNum((prevNum) => {
      return prevNum - 1;
    });
  };
  return (
    <div>
      <p>
        {data[num].id}.{data[num].question}
      </p>
      {/* {questions.map((item) => (
        <SingleQuestion
          key={item.id}
          number={item.id}
          content={item.question}
        />
      ))} */}
      {num > 0 ? (
        <button onClick={handlePrevClick}>Prev question</button>
      ) : (
        <button onClick={handlePrevClick} disabled>
          Prev question
        </button>
      )}
      {num < data.length - 1 ? (
        <button onClick={handleNextClick}>Next question</button>
      ) : (
        <button onClick={handleNextClick} disabled>
          Next question
        </button>
      )}
    </div>
  );
}
