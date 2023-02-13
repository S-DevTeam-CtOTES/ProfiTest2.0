import {React, useState} from 'react';
import QuastionNumber from '../QuastionNumber/QuastionNumber';
// import { QuastionData } from '../../../data'
import './QuastionView.css'
const QuastionView = ({ data,current, changeRadio, quastionIndex, checked, changeCheckbox  }) => {

    function renderAnswers(arr) {    
        const items = arr.map(( item, i ) => {
        let answerNumber = data.value[i];
        const answersText = data.answer[i];
        
            return (
                
                <label 
                className={current === i ? "block__answers-label active-g" : "block__answers-label"  }
                key={item}
                >   
                        <input 
                        id={i}
                        type="radio"
                        onChange={changeRadio }
                        value={answerNumber}
                        // checked={current === i ? true : false}
                        className="answer toup" name="answer" />
                        <span className="block__answer">{answersText}</span>
                </label>
            )
        
        })
        
        return (

            <div className="block__answers">
                {items}
                
            </div>     
            
        )
}

const renderQuastion = () => {
    let quastNumb = data.quastion;
    return (
        <h2 className="block__question">
            {quastNumb}
        </h2>
    )
}

const itemAnswers = renderAnswers(data.answer)
const itemQuastion = renderQuastion(data.quastion)

    return (
        <div>
            <div className="wrapper__quastion">
                {itemQuastion}
            </div>

            {itemAnswers}

            
        </div>
    );
}




export default QuastionView;
