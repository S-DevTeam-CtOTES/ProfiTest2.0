import React from 'react';
import python from '../../../../assets/icons/Python.svg'
import './CurceComponent.css'

const CurceComponent = () => {
    return (
        <div className='CurceComponent-wrapper'>
        
            <div className='CurceComponent'>
                <div className="CurceComponent-image">
                    <img src={python} alt="python" />
                </div>
                <div className="CurceComponent-title">Python разработчик</div>
                <div className="CurceComponent-text">В современном обществе существует проблема профориентации, команда проекта пытается её решить! Мы подготовили профориентационный тест, который поможет определиться с наиболее подходящей для вас профессией и помочьв её освоении.</div>
                <button
                className="CurceComponent-btn">Больше курсов</button>
            </div>
                <div className="back"></div>    
        </div>
    );
}

export default CurceComponent;
