import React, { Component } from 'react';
import axios from "axios";

import './Form.css'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            name: '',
            email: '',
            message: ''
        };
        // Биндим функции, чтобы видеть изменения в input полях
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    // Submit button    
      handleSubmit(event) {
        event.preventDefault();
        if (this.state.email || this.state.login || this.state.message === '') {
            console.log('Nothing typed to form')
            window.location.reload(false);
        } else {
          window.location.reload(false);
        // console.log(
        // 'Login:', this.state.login,
        // '\nEmail:', this.state.email,
        // '\nPassword:', this.state.password
        // );
        }
      }
    // Login input
      handleLoginChange(event) {
        console.log('handleLoginChange', this);
        this.setState({
            login: event.target.value,
        });
      }
    // name input
      handleNameChange(event) {
        console.log('handleNameChange', this);
        this.setState({
            name: event.target.value,
        });
      }
    // Email input
      handleEmailChange(event) {
        console.log('handleEmailChange', this);
        this.setState({
            email: event.target.value,
        });
      }
    // message input
      handleMessageChange(event) {
        console.log('handleMessageChange', this);
        this.setState({
            message: event.target.value,
        });
      }

    // Form render
  render() {
      const token = '5607325391:AAE6B_L-2Ck0NMKeyitP2dN3r9vGPQZEdrs',
      chat_id = '-1001830774215',
      login = this.state.login,
      name = this.state.name,
      email = this.state.email,
      // password = this.state.password,
      message = this.state.message

    // const output = 'Имя:\n\n' + '<br />' + '\n' + this.state.name + "\n" + 'Email: \n' + this.state.email + '\n' + 'Сообщение: ' + this.state.message;

    const output = `Имя: ${this.state.name}
    E-mail: ${this.state.email}
    Сообщение: ${this.state.message}`

    return (
        <div className='log-form'>
            <form 
              onSubmit={this.handleSubmit}
              className='telegram-form' 
              onClick={async () => {
                try {
                  if(this.state.email || this.state.name || this.state.message === '') {
                    console.log('gg')
                  } else {
                    await axios({
                      url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${login}Имя: ${name}                                                                                                                                                                                  
                      Email: ${email}                                                                                                                             
                      Сообщение: ${message}`,
                      headers: {
                        "Content-type": "application/json"
                      },
                      params: {
                        field: output
                      },
                      method: "GET",
                      data: null
                    }).then(({ data }) => {
                      return data;
                    });
                  }
                } catch (e) {
                  console.log("Sending error", e);
                }
              }}
            >
                <input
                    type="text"
                    placeholder="Ваше имя"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    placeholder="E-Mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />

                <textarea
                  name="message"
                  placeholder="Введите сообщение..."
                  value={this.state.message}
                  onChange={this.handleMessageChange} />
                <div className="lf-btn">
                  <button className='btn'>Отправить</button>
                </div>
            </form>
        </div>
    );
  }
}

export default Form;