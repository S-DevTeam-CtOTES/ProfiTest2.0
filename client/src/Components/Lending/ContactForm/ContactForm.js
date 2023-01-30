import React, { Component } from 'react'
import Form from './Form.jsx'

const ContactForm = () => {
  return (
    <div className="contacts conteiner-white wow animate__animated animate__backInRight" id="contacts">
        <h2 className="form__title">Связаться с нами</h2>
            <div className="log-form">
                <Form/>
            </div>
      </div>
  )
}

export default ContactForm

// export default class ContactForm extends Component {
//   render() {
//     return (
       
//     )
//   }
// }
