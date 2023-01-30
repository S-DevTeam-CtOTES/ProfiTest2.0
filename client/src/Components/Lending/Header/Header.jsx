import React, { Component, FC, useContext, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Context } from '../../..'
import { FaBars, FaTimes } from "react-icons/fa";
import Store from '../../../store/store'
import SignUpForm from '../../SignUpForm/SignUpForm'
import LoginForm from '../../SignUpForm/SignUpForm'
// import "../../App/App.css";
import './Header.css'

const Header = () =>  {
    const {store} = useContext(Context)
  
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(false)

    const handleBurger = () => {
      setActive(!active)
    }
    
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
              {store.isAuth &&  <div className="nav-drop">
                <button onClick={() => setOpen(!open)} className="nav-drop-name nav-btn-reg nav-btn">{store.user.name}</button>
                {open && <div className="nav-down">
                  <NavLink to="/Room"><div className="nav-down-select">Личный кабинет</div></NavLink>
                  <NavLink to="/"><div className='nav-down-select' onClick={() => store.logout()}>Выйти</div></NavLink>
                </div>}
              </div>
              }
              
              </div>
            </div>
            
            <div onClick={handleBurger} className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>

          <div className={active === true ? 'active-burger-modal burger-modal': 'burger-modal'}>
            <div className="burger-modal-wrapper">
              <div onClick={() => setActive(false)} className="fa-bur"><FaTimes/></div>
              <div className="burger-modal-block">
              <NavLink to='/quizze' className="burger-modal-item">Тестирование</NavLink>
              <NavLink className="burger-modal-item">Курсы</NavLink>
              <NavLink className="burger-modal-item">Исследование</NavLink>
              <NavLink className="burger-modal-item">Контакты</NavLink>
              {/* <NavLink to='/Room' className="burger-modal-item">Личный кабинет</NavLink> */}
              <div className="nav-menu-btn  mobail-center">
              {!store.isAuth && <NavLink to="/login"><button className='nav-btn'>Войти</button></NavLink>}
              {store.isAuth &&  <div className="nav-drop">
                <button onClick={() => setOpen(!open)} className="nav-drop-name nav-btn-reg nav-btn">{store.user.name}</button>
                {open && <div className="nav-down">
                  <NavLink to="/Room"><div className="nav-down-select">Личный кабинет</div></NavLink>
                  <NavLink to="/"><div className='nav-down-select' onClick={() => store.logout()}>Выйти</div></NavLink>
                </div>}
              </div>
              }
              
              </div>
              </div>
            </div>
          </div>
        </header>
        
        
      </div>

    )

}


export default Header;