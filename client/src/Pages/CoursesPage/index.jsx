import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { coursesData } from './coursesData';
import './CoursesPage.css'
import Header from './../../Components/Lending/Header/Header';
import python from '../../assets/icons/Python.svg'

const CoursesPage = () => {
  return (
    <>
    <Header />
      <div className="courses__wrapper">
        <div className="courses__container container flex">
        {coursesData.map((item, i) => {
                            return(
                                <>
                                <div className='CurceComponent-wrapper'>
                                    <div className='CurceComponent'  key={item.id}>
                                        <div className="CurceComponent-image">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="CurceComponent-title">{item.name}</div>
                                        <div className="CurceComponent-text">{item.description}</div>
                                        <div className="more-button">
                                          <Link to={item.url}>
                                            <button
                                            className="CurceComponent-btn">Подробнее</button>
                                          </Link>
                                        </div>
                                    </div>
                                    <div className="back"></div>
                                  </div> 
                                </>
                            )
        })}
        </div>
      </div>
    </>
  )
}

export default CoursesPage