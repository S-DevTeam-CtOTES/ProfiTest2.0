
import { observer } from 'mobx-react-lite'
import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../..'
import clesed from '../../../src/assets/icons/Cross.svg'
import './SignUpForm.css'
import {TITLE} from "../../varaibles/variables";



const SignUpForm = () => {


  const [active, setActive] = useState(true)
  

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {store} = useContext(Context)

  const navigate = useNavigate();
  
  const loginRedirect = async () => {
    await store.registration(name,surname, email, password)
    navigate('/')
  }

  return (
    <div className={active ? 'modal active__modal' : 'modal'} >
      
      <div className="modal-content-signup toup" onClick={e => e.stopPropagation()}>
      <Link to='/'><div className='clesed' onClick={() => setActive(false)}><img src={clesed} alt="clesed" /></div></Link>
        <div className="modal-title">{TITLE}</div>
        <div className="modal-hintname mt">Имя</div>
        <input 
        className='modal-name'
        onChange={e => setName(e.target.value)}
        value={name}
        type="text" 
        placeholder='Ваше имя' />

        <div className="mt">Фамилия</div>
        <input 
        className='modal-name'
        onChange={e => setSurname(e.target.value)}
        value={surname}
        type="text" 
        placeholder='Ваше имя' />

        <div className="modal-hintemail mt">Email</div>
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
        Нажимая зарегистрироваться, вы подтверждаете, что ознакомились и приняли условия <Link to="/user-agreement">Пользовательского соглашения</Link> и <Link to="/privacy_policy">Уведомление о конфиденциальности пользователя</Link>
        </div>



        <button className='modal-reg' onClick={() => loginRedirect()}>Зарегистрироваться</button>


        <div className="modal-login">
        У вас уже есть аккаунт? <Link to="/Login">Войти</Link>.
        </div>
      </div>
    </div>
  )
}




export default observer(SignUpForm);