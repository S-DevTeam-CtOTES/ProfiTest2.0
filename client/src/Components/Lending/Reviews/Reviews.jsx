import React from 'react';
import ReviewsComponent from './ReviewsComponent/ReviewsComponent';
import './Reviews.css'; 
import p1 from '../../../assets/icons/Ellipse 110.svg'
import p2 from '../../../assets/icons/Ellipse 111.svg'
import p3 from '../../../assets/icons/Ellipse 112.svg'


const Reviews = () => {
    return (
        <section className='reviews'>
            <div className="container">
                <div className="reviews-title">Отзывы</div>
                <div className="reviews-wrapper">
                    
                <ReviewsComponent img={p1} name={'Игорь Дятлов'} text={'Отличный сайт, помогли как следует!Крутые ребята.'}/>
                <ReviewsComponent img={p2} name={'Артём Дятлов'} text={'Отличный сайт, помогли как следует!Крутые ребята.'}/>
                <ReviewsComponent img={p3} name={'Марина Золотова'} text={'Отличный сайт, помогли как следует!Крутые ребята.'}/>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
