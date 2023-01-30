import errorImage from './er.svg';
import './404.css'
import Header from '../../Components/Lending/Header/Header';

const Err404 = () => {
  return (
    <>
      <Header />
      <div className='background'>
        <img className='image' src={errorImage} alt="" />
      </div>
    </>
  )
}

export default Err404