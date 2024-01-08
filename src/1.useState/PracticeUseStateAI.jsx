import { useState } from "react";

const data = [
  { id: 1, question: "What is your name?" },
  { id: 2, question: "How old are you?" },
  { id: 3, question: "Where are you from?" },
  { id: 4, question: "What is your job?" },
  { id: 5, question: "What is your phone number?" },
];

export default function PracticeUseState() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextClick = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <p>
        {data[currentQuestionIndex].id}.{data[currentQuestionIndex].question}
      </p>
      <button onClick={handlePrevClick} disabled={currentQuestionIndex === 0}>
        Prev question
      </button>
      <button
        onClick={handleNextClick}
        disabled={currentQuestionIndex === data.length - 1}
      >
        Next question
      </button>
    </div>
  );
}
