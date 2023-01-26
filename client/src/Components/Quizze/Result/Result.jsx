import React from 'react';
import {map} from '../EmptyArray'
import './Result.css'



const Result = ({data}) => {


      return (
        <div className='result'>
            <div className="result__title">Ваши результаты</div>
            <div className="result__block">

            {data.map((item, i) => {
                
                let resultName = item.name,
                    resultScore = item.score

                let totaliti = Math.floor(100 * resultScore / map[i + 1] )

                return (
                    
                        <>
                        <a href='#' className='result__answer'>{resultName}</a>
                        <span className='result__score'>{totaliti}%</span>
                        </>
                    
                );
            })}
            </div>
        </div>
      )  
}

export default Result;
