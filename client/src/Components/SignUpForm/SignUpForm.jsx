
import { observer } from 'mobx-react-lite'
import React, {FC, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import clesed from '../../../src/assets/icons/Cross.svg'
import Store from '../../store/store'
import './SignUpForm.css'



const SignUpForm = () => {


  const [active, setActive] = useState(true)
  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {store} = useContext(Context)

  return (
    <div className={active ? 'modal active__modal' : 'modal'} >
      
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <Link to='/'><div className='clesed' onClick={() => setActive(false)}><img src={clesed} alt="clesed" /></div></Link>
        <div className="modal-title">PROFITEST</div>
        <div className="modal-hintname mt">ФИО</div>
        <input 
        className='modal-name'
        onChange={e => setName(e.target.value)}
        value={name}
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
        Нажимая зарегистрироваться, вы подтверждаете, что ознакомились и приняли условия <a href="#">Пользовательского соглашения</a> и <a href="#">Уведомление о конфиденциальности пользователя</a>
        </div>


        <button onClick={() => store.login(email, password)}>Логин</button>
        <button className='modal-reg' onClick={() => store.registration(email, password)}>Зарегистрироваться</button>


        <div className="modal-login">
        У вас уже есть аккаунт? <Link to="/Login">Войти</Link>.
        </div>
      </div>
    </div>
  )
}




export default observer(SignUpForm);