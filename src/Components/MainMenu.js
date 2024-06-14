import { useContext, useState} from "react";
import React from 'react';
import { QuizContext } from "../Helpers/context";
import "../App.css"

export default function MainMenu() {
    const {setGameState,name,setName} = useContext(QuizContext);
    const [welcomeBack,setWelcomeBack] = useState("");
    const [alreadyPlayed, setAlreadyPlayed] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      const newName = e.target.elements.namebox.value;
      setName(newName);
      e.target.elements.namebox.value = "";
      if (localStorage.getItem(name)!==null){
        setWelcomeBack(Number(localStorage.getItem(name)));
        setAlreadyPlayed (true);
      }
      else {setAlreadyPlayed(false);
        setWelcomeBack("");
      }
    }

  return (
    <div className='Menu'>
    <div>
        <h1>Hello {name} !</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <input id="namebox" type="text" name="text" placeholder="Name"/>
        <input type="submit" value="Accept"/>
      </div>
    </form>
        {alreadyPlayed && <p>Welcome back, last time you had a score of {welcomeBack}. Can you do better ? </p>}
        <button onClick={()=>{setGameState('quiz')}}>Start Quiz</button>
    </div>
  );
}

