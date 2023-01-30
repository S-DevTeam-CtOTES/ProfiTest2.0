import React, {useContext} from 'react';
import { Context } from '../..';
import Header from '../Lending/Header/Header';
import './PersonRoom.css'

const PersonRoom = () => {

    const {store} = useContext(Context)

    return (
        <>
        <Header/>
        <section className='Private'>
            <div className="private-wrapper">
                <div className="private-title">Личный кабинет</div>
                <div className="private-title2">Общая информация</div>
                {/* <div className="private-title3">Ваши персональные данные</div> */}
                <table>
                <tr>
                    <td>Имя</td>
                    <td>{store.user.name}</td>
                </tr>
                <tr>
                    <td>Фамилия</td>
                    <td>{store.user.surname}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{store.user.email}</td>
                </tr>
                </table>
            </div>
        </section>
        </>
    );
}

export default PersonRoom;
