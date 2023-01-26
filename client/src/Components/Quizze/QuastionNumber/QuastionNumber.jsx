import React from 'react';
import { QuastionData } from '../../../data'
import './QuastionNumber.css'


const QuastionNumber = ({quastionIndex}) => {

    // console.log(QuastionData)

    return (
        <div className='result'>
            Вопрос {quastionIndex + 1} из {QuastionData.length}    
        </div>
    );
}

export default QuastionNumber;
