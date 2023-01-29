const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {

        // process.env.API_URL

        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на PROFITEST', 
            text: '',
            html: 
                `
                    <div>
                        <h1>Вас приветствует команда PROFITEST</h1>
                        <p>Вы зарегистрировались на платформе PROFITEST, нажмите на кнопку для активации аккаунта</p>
                        <a href="${link}">
                            <button style="margin-top: 50px;margin-bottom: 90px;width: 250px;height: 60px;background: #FF226D;box-shadow: 0px 1.92598px 1.92598px rgba(0, 0, 0, 0.25); border-radius: 7.70392px;font-weight: 300; font-size: 20;line-height: 110%;letter-spacing: 0.035em;color: #FFFFFF;cursor: pointer;">Активировать аккаунт</button>
                        </a>

                        <p>С уважением, команда PROFITEST</p>
                    </div>
                `
        })

    }
}

module.exports = new MailService()