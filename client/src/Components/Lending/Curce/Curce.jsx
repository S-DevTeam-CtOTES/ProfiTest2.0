import React from 'react';
import CurceComponent from './CurceComponent/CurceComponent';
import './Curce.css'
import bluLuch from '../../../assets/img/Group 1125.svg'
import eclipse from '../../../assets/icons/Ellipse 6 (1).svg'

const Curce = () => {

    return (
        <section className='curce'>
            <div className="container padding">
                <h2 className="curce-title">Курсы</h2>
                <div className="curce-block">
                <CurceComponent/>
                <CurceComponent/>
                <CurceComponent/>
                <CurceComponent/>
                </div>
            <button className='curce-btn'>Больше курсов</button>
            </div>
            <img className='curce-img-1' src={bluLuch} alt="sideEffect"/>
            <img className='curce-img-2' src={eclipse} alt="sideEffect"/>
        </section>
    );
}

export default Curce;
