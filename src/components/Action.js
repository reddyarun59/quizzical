import React from "react";
import Questions from "./Questions"
import {nanoid} from "nanoid";


export default function Action(props) {
console.log(props)
    const allQuestions = props.questions.map(item => {
        return <Questions
            key={nanoid()}
            question={item}
            holdAnswer={props.holdAnswer}
        />
    })

    return(

        <div className="flex flex-col mx-auto bg-slate-200 max-w-screen-xl">
            <h1 className="flex justify-center pt-4 text-2xl font-bold">Quizzical</h1>
            <div className="mx-auto">
                {allQuestions}
            </div>
            <div className="mx-auto py-16">
                {props.checked && <span className="px-4">{`You scored ${props.result}/5 correct answers`}</span>}

                {props.checked ? 
                    <button className="" onClick={props.playAgain} >
                        Play again
                    </button>
                    : <button className="" onClick={props.checkAnswers}>
                        Check answers
                    </button>
                }
            </div>
        </div>)}