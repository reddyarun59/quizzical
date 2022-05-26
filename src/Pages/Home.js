import React from 'react'

const Home = (props) => {
   console.log(props)
  return (
    <div className="flex flex-col justify-center h-screen">
        <h1 className="mx-auto font-karla text-3xl">Quizzical</h1>
        <p className="mx-auto font-Inter">Try Your Luck</p>
        <button onClick={props.startQuiz}>Start Quiz</button>
    </div>
  )
}

export default Home