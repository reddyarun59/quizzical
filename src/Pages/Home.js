import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const history = useNavigate();
  history("/quiz")
  return (
    <div className="flex flex-col justify-center h-screen">
        <h1 className="mx-auto font-karla text-3xl">Quizzical</h1>
        <p className="mx-auto font-Inter">Try Your Luck</p>
        <button onClick={props.startQuiz}>Start Quiz</button>
    </div>
  )
}

export default Home