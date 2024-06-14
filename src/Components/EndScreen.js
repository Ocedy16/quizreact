import { useContext} from "react";
import React from 'react';
import { QuizContext } from "../Helpers/context";
import {Questions} from '../Helpers/QuestionBank';
import "../App.css";

function EndScreen() {

  const {score, setScore, setGameState, name,setName} = useContext(QuizContext);

  const RestartQuiz = () => {
    setScore(0);
    setName("");
    setGameState('menu');
  };

  const SaveScore = () => {
    localStorage.setItem(name, score.toString());
  };

let message;
if (score < 3) {
    message = <p>It was a bit tough, mate. Better luck next time.</p>;
} else if (score > 5){
  message = <p>Wow, you are a true Doctor Who fan!</p>
}
else {
    message = <p>It's a pretty nice score but nothing that would impress the Doctor.</p>;
}


  return (
    <div className="EndScreen">
    {" "}
    <h1>Quiz Finished</h1>
    <h3>{score} / {Questions.length}</h3>
    {message}
    <button onClick={RestartQuiz}>Restart Quiz</button>
    <button onClick={SaveScore}>Save Score</button>

    </div>
  );
}

export default EndScreen