import React, { Component } from 'react'
import './Main.css'
import phone from '../../../assets/img/Рука.png'
import circleArrows from '../../../assets/img/circle-arrows.png'
import ellipse from '../../../assets/img/Ellipse 4.png'
// import phone from '../../../assets/img/new_hend.png'
// import phone from '../../../assets/img/Group 1121.png'
// import phone from '../../../assets/img/Group 1122.png'
// import phone from '../../../assets/img/Group 1122.png'
import { Link } from 'react-router-dom'
  

const Main = () =>  {

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
                  Образовательная онлайн-платформа,с тестированием на профориентацию.Мы поможем определиться с профессией, которая подходит именно вам.
                  </div>
                  <Link to="/quizze"><button className="main-flex-content-btn">Пройти тест</button></Link>
                </div>
                <Link to="/quizze">
                <div className="main-hend">
                  <img className="main-text-image__phone" src={phone} alt="phone" />
                  <img className="main-text-image__circle-arrows" src={circleArrows} alt="circle-arrows" />
                  <img className="main-text-image__ellipse" src={ellipse} alt="ellipse-light" />
                </div>
              </Link>  
              </div>
          </div>
              
        </section>
      
    )
  
}

export default Main;