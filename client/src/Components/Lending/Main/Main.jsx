import React, { Component } from 'react'
import './Main.css'
import phone from '../../../assets/img/Group 1121.png'
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
              </div>
          </div>
              <Link to="/quizze">
                <img className="main-text-image" src={phone} alt="asfds" />
              </Link>  
        </section>
      
    )
  
}

export default Main;