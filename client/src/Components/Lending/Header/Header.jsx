import React, { Component, FC, useContext, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Context } from '../../..'
import Store from '../../../store/store'
import SignUpForm from '../../SignUpForm/SignUpForm'
import LoginForm from '../../SignUpForm/SignUpForm'
// import "../../App/App.css";
import './Header.css'

const Header = () =>  {
    const {store} = useContext(Context)
    
    return (
        <div className="container">
          <header className="header hmobile">
          <nav className="navbar ">
              <a href="/" className="nav-link-logo">
                PROFITEST
                {/* <span className='color'>PROFI</span>TEST */}
                {/* PROFI<span className='color'>TEST</span> */}
              </a>
            <div className="nav-menu">
              {/* <a href="#about" className="nav-link">О нас</a> */}
              <Link to="/quizze" className="nav-link">Тестирование</Link>
              {/* <a href="#about" className="nav-link">Тестирование</a> */}
              <a href="#courses" className="nav-link">Курсы</a>
              <a href="#explore" className="nav-link">Исследование</a>
              <a href="#contacts" className="nav-link">Контакты</a>
              <div className="nav-menu-btn">
              {!store.isAuth && <NavLink to="/login"><button className='nav-btn'>Войти</button></NavLink>}
              {/* {!store.isAuth && <NavLink to="/regestration"><button className='nav-btn-reg nav-btn'>Зарегистрироваться</button></NavLink>} */}
              {store.isAuth && <NavLink to="/"><button className='nav-btn-reg nav-btn' onClick={() => store.logout()}>Выйти</button></NavLink>}
              </div>
            </div>
            
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
        
        
      </div>

    )

}


export default Header;