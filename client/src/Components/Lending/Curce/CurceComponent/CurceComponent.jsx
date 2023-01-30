import React from 'react';
// import python from '../../../../assets/icons/Python.svg'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './CurceComponent.css'
import { FavoriteCoursesData } from './FavoriteCoursesData';

const CurceComponent = () => {
    return(
        <>
        {FavoriteCoursesData.map((item, i) => {
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
        </>
    )
}

export default CurceComponent;
