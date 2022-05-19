import React from "react";
import Questions from "./Questions"
import {nanoid} from "nanoid";


export default function Action(props) {

    const allQuestions = props.questions.map(item => {
        return <Questions
            key={nanoid()}
            question={item}
            holdAnswer={props.holdAnswer}
        />
    })

    return(

        <div className="Action">

            {allQuestions}

            <div className="btn-container">

                {props.checked
                    && <span className="result-msg">
                    {`You scored ${props.result}/5 correct answers`}
                </span>}

                {
                    props.checked

                    ? <button className="Action__btn"
                              onClick={props.playAgain}
                        >
                            Play again
                    </button>

                    : <button className="Action__btn"
                              onClick={props.checkAnswers}
                        >
                            Check answers
                    </button>
                }
            </div>
            </div>)}