import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import Quizze from '../Quizze/Quizze'
import Lending from '../Lending/Lending'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import PrivacyPolicy from '../Lending/PrivacyPolicy'
import PersonRoom from '../PersonRoom/PersonRoom'
import CoursesPage from '../../Pages/CoursesPage'
import UserAgreement from '../Lending/UserAgreement'
import Err404 from '../../Pages/404/Err404'
import './App.css'
import ExplorePage from "../../Pages/ExplorePage/ExplorePage";
import CoursesComponent from '../SeparateCourse/SeparateCourse'

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
            
            <Route path='/Room' element={<PersonRoom/>}/>
            <Route path='/courses' element={<CoursesPage />}/>
              <Route path='/courses/:id' element={<CoursesComponent />}/>

            <Route path='/explore' element={<ExplorePage />}/>
            <Route path='/quizze' element={<Quizze/>}/>
            <Route path='/user-agreement' element={<UserAgreement />}/>
            <Route path='/privacy_policy' element={<PrivacyPolicy />}/>
            <Route path='/*' element={<Err404 />}/>
        </Routes>
      )
  
}

export default observer(App);
