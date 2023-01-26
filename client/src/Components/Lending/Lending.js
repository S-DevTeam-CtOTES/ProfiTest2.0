import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Curce from './Curce/Curce';
import Explore from './Explore/Explore';
import Footer from './Footer/Footer';
// import About from './About/About';
// import ContactForm from './ContactForm/ContactForm';
// import Explore from './Explore/Explore';
// import FAQ from './FAQ/FAQ';
// import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Reviews from './Reviews/Reviews';

const Lending = () => {

    

    return (
        <div>
            <Header/>   
            <Main />
            <Explore/>
            <Curce/>
            <Reviews/>
            <Footer/>
            
        </div>
    );
}

export default Lending;
