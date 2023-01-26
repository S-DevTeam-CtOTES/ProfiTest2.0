import React from 'react';
import './ReviewsComponent.css'


const ReviewsComponent = ({img, name, text}) => {
    return (
        <div className="ReviewsComponent-wrapper">

            <div className='ReviewsComponent'>
                <div className="ReviewsComponent-image">
                    <img src={img} alt="avatar"/>
                </div>
                <div className="ReviewsComponent-name">{name}</div>
                <div className="ReviewsComponent-text">{text}</div>
            </div>
            <div className="ReviewsComponent-back"></div>    

        </div>
    );
}

export default ReviewsComponent;
