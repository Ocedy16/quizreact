import React, { useContext, useState } from 'react';
import {Questions} from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/context';
import '../App.css';

function Quiz() {

  const {score, setScore, setGameState} = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (optionChosen === Questions[currQuestion].answer){
      setScore(score +1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const FinishQuiz = () => {
    if (optionChosen === Questions[currQuestion].answer){
      setScore(score +1);
    }
    setGameState('endScreen');
  }

  return (
    
    <div className='Quiz'>
    <h1 id="questions">{Questions[currQuestion].prompt}</h1>
    <div className='options'>
    <button onClick={()=>setOptionChosen('A')}>{Questions[currQuestion].A}</button>
    <button onClick={()=>setOptionChosen('B')}>{Questions[currQuestion].B}</button>
    <button onClick={()=>setOptionChosen('C')}>{Questions[currQuestion].C}</button>
    <button onClick={()=>setOptionChosen('D')}>{Questions[currQuestion].D}</button>
    </div>
      {currQuestion === Questions.length - 1? 
      <button onClick={FinishQuiz}>Finish Quiz</button>
      :<button onClick={nextQuestion}>Next Question</button>}
    </div>
  

  )
}

export default Quiz;
