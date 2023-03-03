import React from 'react';
import './Footer.css'

// Social media icons
import telegram from './socialMedia/tg1.png'
import vk from './socialMedia/vk1.png'
import youtube from './socialMedia/yt.png'
import { TITLE, SNIPPET } from '../../../varaibles/variables';

const Footer = () => {
    const tgLink = 'https://t.me/platformaexe',
        vklink = 'https://vk.com/platformaexe',
        ytLink = 'https://www.youtube.com/@profitest.education'
    return (
        <div className='footer'>
            <div className="footer__container " id='contacts'>
                <div className="footer__logo">
                    <a href="/">{TITLE}<span className="snippet">{SNIPPET}</span></a>
                    <hr />
                    <p className='powered'>Powered by <a className='powered' href="https://tehnosoft.site" target="_blank">ITC Tehnosoft</a></p>
                </div>
                <div className="footer__socials">
                    <h1>Контакты</h1>
                    <div className="footer__links">
                        <a href={tgLink} className="footer__links-item" target="_blank">
                            <img className='social-icon' src={telegram} alt="Telegram" />
                            &nbsp; Telegram</a>
                        <a href={vklink} className="footer__links-item" target="_blank">
                        <img className='social-icon' src={vk} alt="VKontakte" />
                            &nbsp; VK</a>
                        <a href={ytLink} className="footer__links-item" target="_blank">
                        <img className='social-icon' src={youtube} alt="Youtube" />
                            &nbsp; Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
