import React from "react";
import {decode} from "html-entities";


export default function Question(props) {

    const allAnswers = props.question.allAnswers.map(item => {

        const styles = {
            backgroundColor: item.isHeld ? '#D6DBF5': (item.correct ? '#94D7A2': (item.wrong ? '#F8BCBC': 'white'))
        }

        return (
            <div className="mx-2 border-1 px-2 py-1 rounded-lg border-zinc-200 cursor-pointer" key={item.id} onClick={(e) => { props.holdAnswer(item.id, e.target)}} style={styles}>
                {decode(item.answer)}
            </div>
        )
    })
    
    return(

        
            <div className="py-4">
                <h3 className="text-xl">{decode(props.question.ask)}</h3>
                <div className="flex text-lg px-2 pt-2 justify-around ">
                    {allAnswers}
                </div>
                <hr className="w-2/4"></hr>
            </div>
        
    )
}
