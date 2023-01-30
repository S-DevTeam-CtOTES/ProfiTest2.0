import React from 'react';
import computer from '../../../assets/img/Group 1124.svg'

import './Explore.css'

const Explore = () => {
    return (
        <section className='explore'>
            <div className="container conteiner-blue">
                <div className="explore-flex">
                    <div >
                    <img src={computer} alt="computer" className='explore-img' />
                    </div>
                    <div className="explore-block">
                        <div className="explore-block-title">Исследование</div>
                        <div className="explore-block-text">В современном обществе существует проблема профориентации, команда проекта пытается её решить! Мы подготовили профориентационный тест, который поможет определиться с наиболее подходящей для вас профессией и помочьв её освоении.</div>
                        <button className="explore-block-btn">Изучить</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;
