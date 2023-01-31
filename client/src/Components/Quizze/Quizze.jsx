import { useEffect } from 'react';
import { React, useState } from 'react';
import {Helmet} from 'react-helmet';
import { QuastionData, Proffesion  } from '../../data';
import Button from '../../UI/Button';
import Header from '../Lending/Header/Header';
import { map } from './EmptyArray';
import QuastionNumber from './QuastionNumber/QuastionNumber';
import QuastionView from './QuastionView/QuastionView';

import './Quizze.css';
// import './Responsive.css';
import Result from './Result/Result';



let quastionIndex = 0;

const Quizze = () => {
  

  useEffect(() => {
    researchData()
  }, []);

  const [value, setValue] = useState([])
  const [result, setResult] = useState(true)
  const [resultButton, setResultButton] = useState(false)
  const [current, setCurrent] = useState(null)
  const [checked, setChecked] = useState(false)
  const [quastion, setQuastion] = useState({
      quastion: '',
      answer: [],
      value: [],
      type: '',
    });

    const researchData = () => {
      setQuastion({
        quastion: QuastionData[quastionIndex]['quastion'],
        answer: QuastionData[quastionIndex]['answer'],
        value: QuastionData[quastionIndex]['total'],
        type: QuastionData[quastionIndex]['type']
      })
    } 

  const handelNext = () => {
    if (quastionIndex !== QuastionData.length - 1) {
      quastionIndex++;
      researchData()
      setCurrent(null)
      checkAnswer(Proffesion)
      console.log(Proffesion)
    } else {
      setResult(false)
      setResultButton(true)
    }
  }


  const changeCheckbox = (e) => {
    console.log(e.target.checked)
    
    setCurrent(Number(e.target.id))
    console.log(current)
    
  }

  let sss = []
  const changeRadio = (e) => {
    setCurrent(Number(e.target.id))
    const sss3 = e.target.value
    sss.push(sss3)
    // const sss2 = sss.replace(/[\s.,%]/g, '')
    setValue((e.target.value))
    console.log(sss)
  };



  const refreshWindow = (e) => {
    window.location.reload()
  }


  const checkAnswer = (data) => {
    if (value) {
        data.forEach(item => {
            if (value.indexOf(item.value) >= 0) {
                item.score++  
                console.log(data)
            }
        });

    }

}

  
  return (
    <>
    <Header />
      <div className="quizzmain">

  <Helmet>
      <style>{'body { background-color: #CCDDEE; }'}</style>
  </Helmet>

  <div className="quizzmain__container">
    <div className="block__wrapper">
        <div className="block">


        {result ? <>
          <QuastionView  
        changeCheckbox={changeCheckbox}
        quastionIndex={quastionIndex } 
        current={current} 
        changeRadio={changeRadio} 
        checked={checked}
        data={quastion}/>
        <QuastionNumber quastionIndex={quastionIndex}/>
        </>
        : <Result data={Proffesion}/> }

        <div className="btns">
        
          { resultButton ? <Button
            onClick={refreshWindow}
          >
            Заново
          </Button> : <Button
          onClick={handelNext} 
          disabled={current === null ? true : false}
          >
          Ответить
          </Button>}
          
        </div>
      </div>
    </div>
  </div>
  </div>
    </>
  );
  }


export default Quizze;

