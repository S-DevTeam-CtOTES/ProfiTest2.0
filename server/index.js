require('dotenv').config()
const https = require("https");
const fs = require("fs");
const path = require('path');
const helmet = require("helmet");
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 80;
const app = express()

app.use(express.static('../client/build'));

app.use(helmet());

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (e) {
        console.log(e);
    }

    const sslServer = https.createServer(
        {
            key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem')),
        },
        app
    )

    sslServer.listen(PORT, () => console.log(`Secure server 🚀🔑 on port ${PORT}`))

}
start()
