import React, { Component, FC, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../SignUpForm/SignUpForm'
// import "../../App/App.css";
import './Header.css'

const Header = () =>  {

  

  

    return (
        <div className="container">
          <header className="header hmobile">
          <nav className="navbar ">
              <a href="/" className="nav-link-logo">
                PROFITEST
              </a>
            <div className="nav-menu">
              <a href="#about" className="nav-link">О нас</a>
              <a href="#about" className="nav-link">Тестирование</a>
              <a href="#explore" className="nav-link">Курсы</a>
              <a href="#contacts" className="nav-link">Исследование</a>
              <a href="#FAQ" className="nav-link">Контакты</a>
              <div className="nav-menu-btn">
              <Link to="/login">
              <button 
              className='nav-btn'
              
              >Войти</button>
              </Link>
              
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