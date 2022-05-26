import React from "react";
import {decode} from "html-entities";


export default function Question(props) {

    const allAnswers = props.question.allAnswers.map(item => {

        const styles = {
            backgroundColor: item.isHeld ? '#D6DBF5': (item.correct ? '#94D7A2': (item.wrong ? '#F8BCBC': 'white'))
        }

        return (
            <div className="mr-4 border-2 border-zinc-200 cursor-pointer" key={item.id} onClick={(e) => { props.holdAnswer(item.id, e.target)}} style={styles}>
                {decode(item.answer)}
            </div>
        )
    })
    
    return(

        <section className="bg-rose-500">
            <div className="">
                <h3 className="text-xl bg-indigo-400">{decode(props.question.ask)}</h3>
                <div className="flex text-lg px-2">
                    {allAnswers}
                </div>
                <hr className="w-2/4"></hr>
            </div>
        </section>

    )
}
