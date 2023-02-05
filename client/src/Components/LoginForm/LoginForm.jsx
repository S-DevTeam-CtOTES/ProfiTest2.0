import { observer } from 'mobx-react-lite'
import React, {FC, useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../..'
import clesed from '../../../src/assets/icons/Cross.svg'
import Store from '../../store/store'
import './LoginForm.css'



const LoginForm = () => {

const [active, setActive] = useState(true)

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {store} = useContext(Context)


const navigate = useNavigate();


  const loginRedirect = async () => {
    await store.login(email, password)
    navigate('/')
  }

  return (
    <div className={active ? 'modal active__modal' : 'modal'} >
      
      <div className="modal-content-login" onClick={e => e.stopPropagation()}>
        <Link to='/'><div className='clesed' onClick={() => setActive(false)}><img src={clesed} alt="clesed" /></div></Link>

        <div className="modal-title">PROFITEST</div>

        <div className="modal-hintemail-sign  mt">Email</div>
        <input 
        className='modal-email'
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="text" 
        placeholder='Email' />

        <div className="modal-hintpassword mt">Пароль</div>
        <input 
        className='modal-password'
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder='Пароль' />
        <div className="modal-secure">
        Нажимая зарегистрироваться, вы подтверждаете, что ознакомились и приняли условия <Link to="/user-agreement" target="_blank">Пользовательского соглашения</Link> и <Link to="/privacy_policy">Уведомление о конфиденциальности пользователя</Link>
        </div>


        {/* <button onClick={() => store.login(email, password)}>Логин</button> */}
        <button className='modal-reg' onClick={() => loginRedirect()}>Войти</button>
      

        <div className="modal-login">
        У вас нет аккаунта? <Link to="/regestration">Зарегистрироваться</Link>.
        </div>
      </div>
    </div>
  )
  
}




export default observer(LoginForm);