import React from 'react';
import './Footer.css'

// Social media icons
import telegram from './socialMedia/tg1.png'
import vk from './socialMedia/vk1.png'
import youtube from './socialMedia/yt.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__container " id='contacts'>
                <div className="footer__logo">
                    <a href="/">PROFITEST</a>
                    <hr />
                    <p className='powered'>Powered by <a className='powered' href="https://tehnosoft.site" target="_blank">ITC Tehnosoft</a></p>
                </div>
                <div className="footer__socials">
                    <h1>Контакты</h1>
                    <div className="footer__links">
                        <a href="https://t.me/profitestnews" className="footer__links-item" target="_blank">
                            <img className='social-icon' src={telegram} alt="Telegram" />
                            &nbsp; Telegram</a>
                        <a href="https://vk.com/profitestnews" className="footer__links-item" target="_blank">
                        <img className='social-icon' src={vk} alt="VKontakte" />
                            &nbsp; VK</a>
                        <a href="https://www.youtube.com/@profitest.education" className="footer__links-item" target="_blank">
                        <img className='social-icon' src={youtube} alt="Youtube" />
                            &nbsp; Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
