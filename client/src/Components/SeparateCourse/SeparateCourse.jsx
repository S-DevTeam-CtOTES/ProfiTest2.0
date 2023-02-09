import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';
import Header from '../Lending/Header/Header';
import './SeparateCourse.css'

const SeparateCourse = () => {

    const { id } = useParams()

    const src = 'https://www.youtube.com/watch?v=5MO8d4oQNlA'

    return(
        <>
            <Header/>
            {coursesData.map((item, i) => {
                if (item.url === id) {
                    return (
                        <div className='SeparateCourse'>
                            <div className="SeparateCourse-wrapper ">
                                <div className="SeparateCourse-info">
                                    <div className="SeparateCourse-image">
                                        <img src={item.img} className="SeparateCourse-img" alt='img'></img>
                                    </div>
                                    <div className="SeparateCourse-name">{item.name}</div>
                                    <div className="SeparateCourse-description">{item.description}</div>
                                    <div className="SeparateCourse-price">{item.price}</div>
                                </div>
                                <div className="SeparateCourse-video">
                                   
                                    {/* <video width="100%" height="400" controls >
                                        <source src={src} type="video/mp4"/>
                                    </video> */}

                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/C5q0ULg0nmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                                </div>
                            </div>
                        </div>
                    );
                }
                }
            )}
        </>
    )
    


}

export default SeparateCourse;
