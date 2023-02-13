import React, {Component} from 'react'
import './Main.css'
import phone from '../../../assets/img/Рука.png'
import circleArrows from '../../../assets/img/circle-arrows.png'
import ellipse from '../../../assets/img/Ellipse 4.png'
import {Link} from 'react-router-dom'

const Main = () => {

    return (

        <section className="main">
            <div className="container">
                <div className="main-wrapchik">
                    <div className="main-title">
                        ПРОФОРИЕНТАЦИОННОЕ ТЕСТИРОВАНИЕ И ОБРАЗОВАТЕЛЬНЫЕ КУРСЫ ПОД РУКОЙ
                    </div>
                </div>
                <div className="main-flex">
                    <div className="main-flex-content">
                        <div className="main-flex-content-title">
                            БОЛЬШЕ <br></br> ЧЕМ <br></br> ПЛАТФОРМА
                        </div>
                        <div className="main-flex-content-text">
                            Образовательная онлайн-платформа,с тестированием на профориентацию.Мы поможем определиться с
                            профессией, которая подходит именно вам.
                        </div>
                        <Link to="/quizze">
                            <button className="main-flex-content-btn">Пройти тест</button>
                        </Link>
                    </div>

                        <div className="main-hend">
                             <Link to="/quizze" className="toup"><img className="main-text-image__phone" src={phone} alt="phone"/></Link>
                            <img className="main-text-image__circle-arrows" src={circleArrows} alt="circle-arrows"/>
                            <img className="main-text-image__ellipse" src={ellipse} alt="ellipse-light"/>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Main;