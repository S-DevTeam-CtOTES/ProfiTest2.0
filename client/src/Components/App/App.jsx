import './App.css'
import Quizze from '../Quizze/Quizze'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Lending from '../Lending/Lending'
import { useContext, useEffect } from 'react'
import { Context } from '../..'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import Header from '../Lending/Header/Header'
import Main from '../Lending/Main/Main'
import Explore from '../Lending/Explore/Explore'
import Curce from '../Lending/Curce/Curce'
import Reviews from '../Lending/Reviews/Reviews'
import Footer from '../Lending/Footer/Footer'
import { observe } from 'mobx'
import { observer } from 'mobx-react-lite'



const App = ()  => {

  const {store} = useContext(Context)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
        store.checkAuth()
    }
    console.log(store)

}, [])
 
      return (

        <Routes>
          <Route path='/' element={<Lending/>}/>
          {!store.isAuth && <>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/regestration' element={<SignUpForm/>}/>
          </>}
          <Route path='/quizze' element={<Quizze/>}/>
        </Routes>
      )
  
}

export default observer(App);
