import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../..';
import Store from '../../store/store';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
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
import Team from './Team';


const Lending = () => {

        const {store} = useContext(Context)

        return (
            <div>
                
                <Header/>   
                <Routes>
                    
                
                </Routes>
                <Main />
                <Explore/>
                <Curce/>
                <Reviews/>
                {/* <Team /> */}
                <Footer/>
            
            </div>
        );
}

export default Lending;
