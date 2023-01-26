import './App.css'
import Quizze from '../Quizze/Quizze'
import { Routes, Route } from 'react-router-dom'
import Lending from '../Lending/Lending'
import { useContext, useEffect } from 'react'
import { Context } from '../..'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'



const App = ()  => {

  const {store} = useContext(Context)
    
  useEffect(() => {
    if (localStorage.getItem('token')) {
        store.checkAuth()
    }
}, [])


  return (
    <div className="wrapper">
        <Routes>
          <Route path='/' element={<Lending />}/>
          <Route path='/quizze' element={<Quizze/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/SignUp' element={<SignUpForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
