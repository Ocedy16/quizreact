import './App.css';
import React, {useState} from 'react';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/context';

function App() {
  const [gameState,setGameState] = useState("menu");
  const [score,setScore] = useState(0);
  const[name,setName] = useState('') ;

  return (
    <div className="App">
    <h1>Doctor Who Quiz</h1>
    <QuizContext.Provider value={{gameState,setGameState, score, setScore, name,setName}}>
    {gameState==='menu' && <MainMenu />}
    {gameState==='endScreen' && <EndScreen />}
    {gameState==='quiz' && <Quiz />}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
